"use client";

import { FormDataContext } from "@/context/FormContext";
import { useContext, useState } from "react";
import "remixicon/fonts/remixicon.css";

import { useRouter } from "next/navigation";
import axios from "axios";
import * as yup from "yup";
import Navbar from "@/components/Navbar";
import { fieldsOfStudy } from "@/resources/Resource";

const textLimit = 500;

const Form = () => {
  <Navbar />;
  const { form, changeHandler } = useContext(FormDataContext);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  // inside Form component, after const [errors, setErrors] = useState({})
  const handleChange = (e) => {
    // forward the event to your context handler (keeps your existing logic)
    changeHandler(e);

    // try to determine field name
    const name = e?.target?.name;
    if (!name) return;

    setErrors((prev) => {
      if (!prev || Object.keys(prev).length === 0) return prev;

      // clone and remove the specific field error (and clear generic _form)
      const next = { ...prev };
      delete next[name];
      delete next._form;

      // special-case: if startYear or endYear changes, remove the related cross-field error too
      if (name === "startYear") delete next.endYear;
      if (name === "endYear") delete next.startYear;

      // file input: UI shows 'resume' but validation key is 'file' — remove both just in case
      if (name === "file") delete next.resume;
      if (name === "resume") delete next.file;

      return next;
    });
  };

  const skillOptions = [
    { id: "front-end", label: "Front-end" },
    { id: "back-end", label: "Back-end" },
    { id: "database", label: "Database" },
    { id: "graphic-designing", label: "Graphic Designing" },
    { id: "seo", label: "SEO" },
  ];

  // Yup Schema
  const schema = yup.object().shape({
    name: yup
      .string()
      .trim()
      .required("Full name is required")
      .min(2, "Name is too short"),
    email: yup
      .string()
      .trim()
      .email("Invalid email address")
      .required("Email is required"),
    phone: yup
      .string()
      .trim()
      .required("Phone is required")
      .matches(/^[0-9+\-\s()]{6,15}$/, "Invalid phone number"),
    address: yup
      .string()
      .trim()
      .required("Address is required")
      .matches(
        /^(?=.{6,250}$)(?!^(.)(\1){5,}$)\s*(?=.*[A-Za-z\u0600-\u06FF])(?:\b(?:House|Plot|Flat|H(?:ouse)?|Shop|Office|Apt|Apartment|Bungalow|Suite|Unit|Ghar|گھر|پلاٹ|فلیٹ|دفتر|دکان)\b)?\s*(?:No\.?|N\.?|n\.?|nr|nº|نمبر)?\s*#?\s*\d+[A-Za-z0-9\/-]*[ ,A-Za-z0-9\u0600-\u06FF#\/\.,\-\(\)&\s]*?(?:,\s*\d{5})?\s*$/iu,
        "Invalid Address",
      ),
    apply: yup
      .string()
      .trim()
      .required("Position applied for is required")
      .matches(/^[a-zA-Z][a-zA-Z\s-]*[a-zA-Z]{2,50}$/, "Invalid apply field"),
    salary: yup
      .number()
      .transform((value, originalValue) => {
        // convert empty string to undefined so Yup treats it as "not provided"
        return originalValue === "" ? undefined : value;
      })
      .nullable()
      .notRequired()
      .typeError("Salary must be a number")
      .test(
        "min-if-present",
        "Salary must be greater than 100",
        (value) => value === undefined || value === null || value >= 100,
      ),
    employTime: yup
      .string()
      .oneOf(["fullTime", "partTime", "freelance"], "Select employment time")
      .required("Employment time is required"),
    degree: yup.string().required("Degree is required"),
    studyField: yup
      .string()
      .required("Field of Study is required")
      .matches(/^[a-zA-Z][a-zA-Z\s-]*[a-zA-Z]{2,25}$/, "Invalid study field"),
    startYear: yup
      .number()
      .required("Enter the year you started")
      .transform((v) => (isNaN(v) ? undefined : v)),
    endYear: yup
      .number()
      .required("Enter the year you started")
      .transform((v) => (isNaN(v) ? undefined : v))
      .test(
        "end-after-start",
        "End year must be equal or after start year",
        function (endYear) {
          const { startYear } = this.parent;
          if (!endYear || !startYear) return true;
          return endYear >= startYear;
        },
      )
      .test(
        "within-25-years",
        "The difference between start and end year cannot exceed 25 years",
        function (endYear) {
          const { startYear } = this.parent;
          if (!endYear || !startYear) return true; // skip check if missing
          return endYear - startYear <= 25;
        },
      ),
    url: yup
      .string()
      .trim()
      .transform((value) => {
        if (!value) return value;
        const v = value.trim();
        // if missing protocol, automatically add https://
        if (!/^https?:\/\//i.test(v)) {
          return "https://" + v;
        }
        return v;
      })
      .required("LinkedIn profile is required")
      .test("valid-linkedin", "Enter a valid LinkedIn URL", function (value) {
        if (!value) return true; // allow empty (nullable)
        const pattern =
          /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9-_]+\/?$/i;
        return pattern.test(value);
      }),
    longText: yup
      .string()
      .trim()
      .required("Cover Letter Required")
      .test(
        "min-if-present",
        "Cover letter too short",
        (value) => !value || value.length >= 10,
      )
      .max(textLimit, "Cover letter too long"),
    skills: yup.array().of(yup.string()).min(1, "Select at least one skill"),
    file: yup
      .mixed()
      .test("fileSize", "File must be less than 5MB", (value) => {
        if (!value) return true; // file optional
        return value.size <= 5 * 1024 * 1024;
      })
      .test("fileType", "Unsupported file format", (value) => {
        if (!value) return true;
        const allowed = [
          "application/pdf",
          "application/msword",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ];
        return allowed.includes(value.type);
      }),
    declaration: yup.boolean().oneOf([true], "You must accept the declaration"),
  });

  const submitHandler = async function (e) {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    try {
      // validate form data using schema
      await schema.validate(form, { abortEarly: false });
    } catch (validationError) {
      // map yup errors into field -> message
      const errObj = {};
      if (validationError.inner && validationError.inner.length) {
        validationError.inner.forEach((err) => {
          // only set first error per field
          if (!errObj[err.path]) errObj[err.path] = err.message;
        });
      } else if (validationError.path) {
        errObj[validationError.path] = validationError.message;
      } else {
        errObj._form = validationError.message || "Validation failed";
      }
      setErrors(errObj);
      setLoading(false);
      // stop submission
      return;
    }

    try {
      const fd = new FormData();

      // append text fields
      fd.append("name", form.name ?? "");
      fd.append("email", form.email ?? "");
      fd.append("phone", form.phone ?? "");
      fd.append("address", form.address ?? "");
      fd.append("apply", form.apply ?? "");
      fd.append("salary", form.salary ?? "");
      fd.append("employTime", form.employTime ?? "");
      fd.append("degree", form.degree ?? "");
      fd.append("studyField", form.studyField ?? "");
      fd.append("startYear", form.startYear ?? "");
      fd.append("endYear", form.endYear ?? "");
      fd.append("url", form.url ?? "");
      fd.append("longText", form.longText ?? "");
      fd.append("declaration", form.declaration ? "true" : "false");

      // append skills as JSON string
      fd.append("skills", JSON.stringify(form.skills || []));

      // append file (must be File object)
      if (form.file) fd.append("file", form.file);

      // send to your backend route
      const res = await axios.post("http://localhost:4000/api/user", fd);

      if (res.status === 201 && res.data.ok) {
        // success: navigate to thank-you page
        router.push("/submit");
      } else {
        console.error("Server responded:", res.data);
        alert("Submission failed. See console for details.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      alert("Network or server error. Check console.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-7 text-gray-800">
      <div className="flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold text-indigo-500">Application Form</h1>
        <p className="text-xl font-normal text-gray-400">
          Please complete all sections of this detailed application.
        </p>
      </div>
      <div className="mx-auto mt-14 flex w-full items-center justify-start gap-8 rounded-lg p-10 shadow shadow-gray-300 lg:w-[50%]">
        <form className="w-full" onSubmit={submitHandler}>
          {/* First section */}
          <div>
            <h1 className="mb-3 text-xl font-medium">
              <i className="ri-contacts-line mr-3 text-indigo-500"></i>Contact
              Information
            </h1>
            <div className="mt-8 mb-8 grid grid-cols-1 gap-4 border-b border-gray-300 pb-9 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Full Name: <span className="text-lg text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  placeholder="Your Name"
                  value={form.name}
                  onChange={handleChange}
                  maxLength={50}
                />
                {errors.name && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Email: <span className="text-lg text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  placeholder="Email"
                  value={form.email}
                  onChange={handleChange}
                  maxLength={100}
                />
                {errors.email && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Phone No. <span className="text-lg text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  placeholder="0333 1112222"
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.phone}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="current-address-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Current Address:{" "}
                  <span className="text-lg text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="address"
                  id="current-address-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  placeholder="House No. Block Area City"
                  value={form.address}
                  onChange={handleChange}
                />
                {errors.address && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.address}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="mb-8 border-b border-gray-300 pb-9">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              <i className="ri-suitcase-line mr-3 text-indigo-500"></i>Position
              & Availability
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="apply-for-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Applying For: <span className="text-lg text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="apply"
                  id="apply-for-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  placeholder="Front-end Developer"
                  value={form.apply}
                  onChange={handleChange}
                />
                {errors.apply && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.apply}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="salary-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Salary:{" "}
                  <span className="text-sm text-gray-400">(optional)</span>
                </label>
                <input
                  type="number"
                  name="salary"
                  id="salary-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  value={form.salary}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (val.length <= 20) handleChange(e);
                  }}
                />
                {errors.salary && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.salary}
                  </p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <h5 className="mb-2 px-3 text-sm font-medium">
                Employment time: <span className="text-lg text-red-500">*</span>
              </h5>
              <div className="flex flex-col gap-4 md:flex-row">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employTime"
                    id="radio1-field"
                    className="border-gray-200 text-indigo-500"
                    value="fullTime"
                    checked={form.employTime === "fullTime"}
                    onChange={handleChange}
                  />
                  <label htmlFor="radio1-field">Full time</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    id="radio2-field"
                    name="employTime"
                    className="border-gray-200 text-indigo-500"
                    value="partTime"
                    checked={form.employTime === "partTime"}
                    onChange={handleChange}
                  />
                  <label htmlFor="radio2-field">Part time</label>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="employTime"
                    id="radio3-field"
                    className="border-gray-200 text-indigo-500"
                    value="freelance"
                    checked={form.employTime === "freelance"}
                    onChange={handleChange}
                  />
                  <label htmlFor="radio3-field">Freelance</label>
                </div>
              </div>
              {errors.employTime && (
                <p className="mt-1 px-6 text-sm text-red-500">
                  {errors.employTime}
                </p>
              )}
            </div>
          </div>

          {/* Third Section */}
          <div className="mb-8 border-b border-gray-300 pb-9">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              <i className="ri-graduation-cap-line mr-3 text-indigo-500"></i>
              Education
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <label
                  htmlFor="degree-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Degree: <span className="text-lg text-red-500">*</span>
                </label>
                <select
                  name="degree"
                  id="degree-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  value={form.degree}
                  onChange={handleChange}
                >
                  <option value="">Select Degree...</option>
                  <option value="BA">Bachelor of Arts (BA)</option>
                  <option value="BS">Bachelor of Science (BS)</option>
                  <option value="BBA">
                    Bachelor of Business Administration (BBA)
                  </option>
                  <option value="MA">Master of Arts (MA)</option>
                  <option value="MS">Master of Science (MS)</option>
                  <option value="MBA">
                    Master of Business Administration (MBA)
                  </option>
                  <option value="PhD">Doctor of Philosophy (Ph.D.)</option>
                </select>
                {errors.degree && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.degree}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="study-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Field of Study:{" "}
                  <span className="text-lg text-red-500">*</span>
                </label>
                {/* <input
                  type="text"
                  name="studyField"
                  id="study-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  placeholder="e.g. Computer Science"
                  value={form.studyField}
                  onChange={handleChange}
                /> */}
                <select
                  name="studyField"
                  id="study-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  value={form.studyField}
                  onChange={handleChange}
                >
                  <option value="">Choose the study field...</option>
                  {fieldsOfStudy.map((el, i) => (
                    <option
                      key={i}
                      className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                    >
                      {el}
                    </option>
                  ))}
                </select>
                {errors.studyField && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.studyField}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="start-year-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Start Year: <span className="text-lg text-red-500">*</span>
                </label>
                <select
                  name="startYear"
                  id="start-year-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  value={form.startYear}
                  onChange={handleChange}
                >
                  <option value="">Start Year</option>
                  {Array.from(
                    { length: new Date().getFullYear() - 4 - 1960 + 1 },
                    (_, i) => {
                      const year = new Date().getFullYear() - 4 - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    },
                  )}
                </select>
                {errors.startYear && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.startYear}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="end-year-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  End Year: <span className="text-lg text-red-500">*</span>
                </label>
                <select
                  name="endYear"
                  id="end-year-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  value={form.endYear}
                  onChange={handleChange}
                >
                  <option value="">End Year</option>
                  {Array.from(
                    { length: new Date().getFullYear() - 1960 + 1 },
                    (_, i) => {
                      const year = new Date().getFullYear() - i;
                      return (
                        <option key={year} value={year}>
                          {year}
                        </option>
                      );
                    },
                  )}
                </select>
                {errors.endYear && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.endYear}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Fourth Section */}
          <div className="mb-8 border-b border-gray-300 pb-9">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              <i className="ri-file-text-line mr-3 text-indigo-500"></i>
              Documents & Skills
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="p-6 md:col-span-2">
                <h3 className="mb-2 px-3 text-sm font-medium">Skills</h3>
                <div className="flex flex-col flex-wrap gap-6 md:flex-row">
                  {skillOptions.map((skill) => (
                    <div key={skill.id} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="skills"
                        id={`skill-${skill.id}`}
                        className="border-gray-200 text-indigo-500"
                        value={skill.id}
                        checked={form.skills.includes(skill.id)}
                        onChange={handleChange}
                      />
                      <label htmlFor={`skill-${skill.id}`}>{skill.label}</label>
                    </div>
                  ))}
                </div>
                {errors.skills && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.skills}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="file-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  Upload your Resume:{" "}
                  <span className="text-lg text-red-500">*</span>
                </label>
                <input
                  type="file"
                  name="file"
                  id="file-field"
                  accept=".pdf,.doc,.docx"
                  className="w-full border-gray-200 px-5 py-2 file:mr-3 file:cursor-pointer file:rounded-xl file:border-0 file:bg-indigo-500 file:px-4 file:py-2 file:text-white hover:file:bg-indigo-600"
                  onChange={handleChange}
                />
                {form.resume && (
                  <p className="mt-1 px-6 text-xs text-gray-500">
                    Accepted formats: PDF, DOC, DOCX (Max 5MB)
                  </p>
                )}
                {errors.file && (
                  <p className="mt-1 px-6 text-sm text-red-500">
                    {errors.file}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="url-field"
                  className="mb-2 block px-6 text-sm font-medium"
                >
                  LinkedIn profile:{" "}
                  <span className="text-lg text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="url"
                  id="url-field"
                  className="w-full rounded-2xl border border-gray-200 px-5 py-2"
                  placeholder="https://linkedin.com/in/..."
                  value={form.url}
                  onChange={handleChange}
                />
                {errors.url && (
                  <p className="mt-1 px-6 text-sm text-red-500">{errors.url}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="mt-3 mb-2 block px-6 text-sm font-medium">
                  Cover Letter: <span className="text-lg text-red-500">*</span>
                </label>
                <textarea
                  type="text"
                  name="longText"
                  rows="8"
                  className="w-full resize-none rounded border border-gray-200 px-4 py-2 font-serif text-[18px] text-gray-600"
                  placeholder="Explain your interest in this role and company..."
                  value={form.longText}
                  maxLength={textLimit}
                  onChange={handleChange}
                ></textarea>
                <div
                  className={`flex ${
                    errors.longText ? "justify-between" : "justify-end"
                  }`}
                >
                  {errors.longText && (
                    <p className="mt-1 px-6 text-sm text-red-500">
                      {errors.longText}
                    </p>
                  )}
                  <span className="text-xs text-gray-500">{`${form.longText.length} / ${textLimit}`}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Fifth Section */}
          <div className="mb-8 border-b border-gray-300 pb-12">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              <i className="ri-checkbox-line mr-3 text-indigo-500"></i>
              Declaration
            </h2>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="declaration"
                id="declaration-field"
                checked={!!form.declaration}
                onChange={handleChange}
                // required
                className="mt-1"
              />
              <label
                htmlFor="declaration-field"
                className="text-sm leading-snug"
              >
                I hereby certify that the information provided in this
                application is true and complete to the best of my knowledge.
                (Required Checkbox)
              </label>
            </div>
            {errors.declaration && (
              <p className="mt-1 px-6 text-sm text-red-500">
                {errors.declaration}
              </p>
            )}

            <p className="mt-6 text-sm text-gray-500 italic">
              Fields marked with <span className="text-lg text-red-500">*</span>{" "}
              are mandatory
            </p>
            {errors._form && (
              <p className="mt-2 px-6 text-sm text-red-500">{errors._form}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="focus:ring-opacity-50 w-full rounded-lg border border-transparent bg-indigo-600 px-4 py-3 text-lg font-medium text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          >
            <i className="ri-send-plane-fill mr-3 text-white"></i>
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
