(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/resources/Resource.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fieldsOfStudy",
    ()=>fieldsOfStudy
]);
const fieldsOfStudy = [
    "Accounting",
    "Advertising",
    "Aerospace Engineering",
    "Agriculture",
    "Algorithm Design and Analysis",
    "Anthropology",
    "Animation",
    "Architecture",
    "Art and Design",
    "Artificial Intelligence",
    "Astronomy",
    "Augmented Reality (AR)",
    "Automotive Engineering",
    "Big Data Engineering",
    "Bioinformatics",
    "Biochemistry",
    "Biology",
    "Biomedical Engineering",
    "Blockchain Technology",
    "Botany",
    "Broadcasting",
    "Business Administration",
    "Chemical Engineering",
    "Chemistry",
    "Civil Engineering",
    "Cloud Architecture",
    "Cloud Computing",
    "Commerce",
    "Communication Studies",
    "Comparative Religion",
    "Computational Biology",
    "Computational Linguistics",
    "Computer Architecture",
    "Computer Engineering",
    "Computer Graphics",
    "Computer Networks",
    "Computer Science",
    "Computer Vision",
    "Criminology",
    "Cultural Studies",
    "Cybersecurity",
    "Data Analytics",
    "Data Science",
    "Database Administration",
    "Database Systems",
    "Dentistry",
    "Design",
    "DevOps",
    "Digital Forensics",
    "Digital Media Design",
    "E-Business",
    "E-Commerce Technology",
    "Economics",
    "Education",
    "Electrical Engineering",
    "Electronics Engineering",
    "Embedded Systems",
    "Energy Engineering",
    "Entrepreneurship",
    "Environmental Engineering",
    "Environmental Science",
    "Event Management",
    "Fashion Design",
    "Film and Media Studies",
    "Finance",
    "Fine Arts",
    "Food Science",
    "Game Development",
    "Genetics",
    "Geographic Information Systems (GIS)",
    "Geography",
    "Geology",
    "Graphic Design",
    "Health Sciences",
    "History",
    "Hospitality Management",
    "Human-Computer Interaction (HCI)",
    "Human Resource Management",
    "Industrial Design",
    "Industrial Engineering",
    "Information Security",
    "Information Systems",
    "Information Technology",
    "Interior Design",
    "International Business",
    "International Relations",
    "Internet of Things (IoT)",
    "IT Project Management",
    "Journalism",
    "Law",
    "Library and Information Science",
    "Linguistics",
    "Literature",
    "Logistics and Transportation",
    "Machine Learning",
    "Management",
    "Marine Biology",
    "Marketing",
    "Mass Communication",
    "Materials Engineering",
    "Mathematics",
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Media Studies",
    "Medical Laboratory Science",
    "Medicine",
    "Microbiology",
    "Mobile App Development",
    "Molecular Biology",
    "Music",
    "Nanotechnology",
    "Network Security",
    "Nursing",
    "Nutrition",
    "Operations Management",
    "Operating Systems",
    "Parallel and Distributed Computing",
    "Performing Arts",
    "Pharmacy",
    "Philosophy",
    "Photography",
    "Physics",
    "Physiotherapy",
    "Political Science",
    "Project Management",
    "Programming Languages",
    "Psychology",
    "Public Administration",
    "Public Health",
    "Public Relations",
    "Quantum Computing",
    "Radiology",
    "Religious Studies",
    "Robotics",
    "Social Work",
    "Sociology",
    "Software Engineering",
    "Software Testing and Quality Assurance",
    "Sports Science",
    "Statistics",
    "Structural Engineering",
    "Supply Chain Management",
    "Systems Analysis",
    "Telecommunication Engineering",
    "Theology",
    "Tourism and Hospitality Management",
    "Urban Planning",
    "UI/UX Design",
    "Virtual Reality (VR)",
    "Visual Communication",
    "Veterinary Medicine",
    "Web Development",
    "Zoology"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/form/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FormContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/FormContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/yup/index.esm.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/resources/Resource.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const textLimit = 500;
const Form = ()=>{
    _s();
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/form/page.jsx",
        lineNumber: 13,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
    const { form, changeHandler } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FormContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormDataContext"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    // inside Form component, after const [errors, setErrors] = useState({})
    const handleChange = (e)=>{
        // forward the event to your context handler (keeps your existing logic)
        changeHandler(e);
        // try to determine field name
        const name = e?.target?.name;
        if (!name) return;
        setErrors((prev)=>{
            if (!prev || Object.keys(prev).length === 0) return prev;
            // clone and remove the specific field error (and clear generic _form)
            const next = {
                ...prev
            };
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
        {
            id: "front-end",
            label: "Front-end"
        },
        {
            id: "back-end",
            label: "Back-end"
        },
        {
            id: "database",
            label: "Database"
        },
        {
            id: "graphic-designing",
            label: "Graphic Designing"
        },
        {
            id: "seo",
            label: "SEO"
        }
    ];
    // Yup Schema
    const schema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["object"]().shape({
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().trim().required("Full name is required").min(2, "Name is too short"),
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().trim().email("Invalid email address").required("Email is required"),
        phone: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().trim().required("Phone is required").matches(/^[0-9+\-\s()]{6,15}$/, "Invalid phone number"),
        address: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().trim().required("Address is required").matches(/^(?=.{6,250}$)(?!^(.)(\1){5,}$)\s*(?=.*[A-Za-z\u0600-\u06FF])(?:\b(?:House|Plot|Flat|H(?:ouse)?|Shop|Office|Apt|Apartment|Bungalow|Suite|Unit|Ghar|گھر|پلاٹ|فلیٹ|دفتر|دکان)\b)?\s*(?:No\.?|N\.?|n\.?|nr|nº|نمبر)?\s*#?\s*\d+[A-Za-z0-9\/-]*[ ,A-Za-z0-9\u0600-\u06FF#\/\.,\-\(\)&\s]*?(?:,\s*\d{5})?\s*$/iu, "Invalid Address"),
        apply: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().trim().required("Position applied for is required").matches(/^[a-zA-Z][a-zA-Z\s-]*[a-zA-Z]{2,50}$/, "Invalid apply field"),
        salary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"]().transform((value, originalValue)=>{
            // convert empty string to undefined so Yup treats it as "not provided"
            return originalValue === "" ? undefined : value;
        }).nullable().notRequired().typeError("Salary must be a number").test("min-if-present", "Salary must be greater than 100", (value_0)=>value_0 === undefined || value_0 === null || value_0 >= 100),
        employTime: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().oneOf([
            "fullTime",
            "partTime",
            "freelance"
        ], "Select employment time").required("Employment time is required"),
        degree: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Degree is required"),
        studyField: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().required("Field of Study is required").matches(/^[a-zA-Z][a-zA-Z\s-]*[a-zA-Z]{2,25}$/, "Invalid study field"),
        startYear: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"]().required("Enter the year you started").transform((v)=>isNaN(v) ? undefined : v),
        endYear: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["number"]().required("Enter the year you started").transform((v_0)=>isNaN(v_0) ? undefined : v_0).test("end-after-start", "End year must be equal or after start year", function(endYear) {
            const { startYear } = this.parent;
            if (!endYear || !startYear) return true;
            return endYear >= startYear;
        }).test("within-25-years", "The difference between start and end year cannot exceed 25 years", function(endYear_0) {
            const { startYear: startYear_0 } = this.parent;
            if (!endYear_0 || !startYear_0) return true; // skip check if missing
            return endYear_0 - startYear_0 <= 25;
        }),
        url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().trim().transform((value_1)=>{
            if (!value_1) return value_1;
            const v_1 = value_1.trim();
            // if missing protocol, automatically add https://
            if (!/^https?:\/\//i.test(v_1)) {
                return "https://" + v_1;
            }
            return v_1;
        }).required("LinkedIn profile is required").test("valid-linkedin", "Enter a valid LinkedIn URL", function(value_2) {
            if (!value_2) return true; // allow empty (nullable)
            const pattern = /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9-_]+\/?$/i;
            return pattern.test(value_2);
        }),
        longText: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]().trim().required("Cover Letter Required").test("min-if-present", "Cover letter too short", (value_3)=>!value_3 || value_3.length >= 10).max(textLimit, "Cover letter too long"),
        skills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["array"]().of(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["string"]()).min(1, "Select at least one skill"),
        file: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mixed"]().test("fileSize", "File must be less than 5MB", (value_4)=>{
            if (!value_4) return true; // file optional
            return value_4.size <= 5 * 1024 * 1024;
        }).test("fileType", "Unsupported file format", (value_5)=>{
            if (!value_5) return true;
            const allowed = [
                "application/pdf",
                "application/msword",
                "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
            ];
            return allowed.includes(value_5.type);
        }),
        declaration: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$yup$2f$index$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["boolean"]().oneOf([
            true
        ], "You must accept the declaration")
    });
    const submitHandler = async function(e_0) {
        e_0.preventDefault();
        setLoading(true);
        setErrors({});
        try {
            // validate form data using schema
            await schema.validate(form, {
                abortEarly: false
            });
        } catch (validationError) {
            // map yup errors into field -> message
            const errObj = {};
            if (validationError.inner && validationError.inner.length) {
                validationError.inner.forEach((err)=>{
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
            const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].post("http://localhost:4000/api/user", fd);
            if (res.status === 201 && res.data.ok) {
                // success: navigate to thank-you page
                router.push("/submit");
            } else {
                console.error("Server responded:", res.data);
                alert("Submission failed. See console for details.");
            }
        } catch (err_0) {
            console.error("Submission error:", err_0);
            alert("Network or server error. Check console.");
        } finally{
            setLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-7 text-gray-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center gap-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-indigo-500",
                        children: "Application Form"
                    }, void 0, false, {
                        fileName: "[project]/src/app/form/page.jsx",
                        lineNumber: 190,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-normal text-gray-400",
                        children: "Please complete all sections of this detailed application."
                    }, void 0, false, {
                        fileName: "[project]/src/app/form/page.jsx",
                        lineNumber: 191,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/form/page.jsx",
                lineNumber: 189,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mx-auto mt-14 flex w-full items-center justify-start gap-8 rounded-lg p-10 shadow shadow-gray-300 lg:w-[50%]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "w-full",
                    onSubmit: submitHandler,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mb-3 text-xl font-medium",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ri-contacts-line mr-3 text-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 200,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Contact Information"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 mb-8 grid grid-cols-1 gap-4 border-b border-gray-300 pb-9 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "name-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Full Name: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 206,
                                                            columnNumber: 30
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 205,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "name",
                                                    id: "name-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    placeholder: "Your Name",
                                                    value: form.name,
                                                    onChange: handleChange,
                                                    maxLength: 50
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 208,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.name
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 209,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 204,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "email-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Email: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 216,
                                                            columnNumber: 26
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 215,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    name: "email",
                                                    id: "email-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    placeholder: "Email",
                                                    value: form.email,
                                                    onChange: handleChange,
                                                    maxLength: 100
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 218,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.email
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 219,
                                                    columnNumber: 34
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 214,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "phone-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Phone No. ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 226,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 225,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "tel",
                                                    name: "phone",
                                                    id: "phone-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    placeholder: "0333 1112222",
                                                    value: form.phone,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 228,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.phone && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.phone
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 229,
                                                    columnNumber: 34
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 224,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "current-address-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Current Address:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 237,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 235,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "address",
                                                    id: "current-address-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    placeholder: "House No. Block Area City",
                                                    value: form.address,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 239,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.address && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.address
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 240,
                                                    columnNumber: 36
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 234,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 203,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/form/page.jsx",
                            lineNumber: 198,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 border-b border-gray-300 pb-9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-4 text-xl font-semibold text-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ri-suitcase-line mr-3 text-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 250,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Position & Availability"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 249,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid grid-cols-1 gap-4 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "apply-for-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Applying For: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 256,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 255,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "apply",
                                                    id: "apply-for-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    placeholder: "Front-end Developer",
                                                    value: form.apply,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 258,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.apply && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.apply
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 259,
                                                    columnNumber: 34
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 254,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "salary-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Salary:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm text-gray-400",
                                                            children: "(optional)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 267,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 265,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    name: "salary",
                                                    id: "salary-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    value: form.salary,
                                                    onChange: (e_1)=>{
                                                        const val = e_1.target.value;
                                                        if (val.length <= 20) handleChange(e_1);
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 269,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.salary && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.salary
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 273,
                                                    columnNumber: 35
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 264,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 253,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                                            className: "mb-2 px-3 text-sm font-medium",
                                            children: [
                                                "Employment time: ",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-lg text-red-500",
                                                    children: "*"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 34
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 280,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex flex-col gap-4 md:flex-row",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "employTime",
                                                            id: "radio1-field",
                                                            className: "border-gray-200 text-indigo-500",
                                                            value: "fullTime",
                                                            checked: form.employTime === "fullTime",
                                                            onChange: handleChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 285,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "radio1-field",
                                                            children: "Full time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 286,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            id: "radio2-field",
                                                            name: "employTime",
                                                            className: "border-gray-200 text-indigo-500",
                                                            value: "partTime",
                                                            checked: form.employTime === "partTime",
                                                            onChange: handleChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 290,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "radio2-field",
                                                            children: "Part time"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 291,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 289,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                            type: "radio",
                                                            name: "employTime",
                                                            id: "radio3-field",
                                                            className: "border-gray-200 text-indigo-500",
                                                            value: "freelance",
                                                            checked: form.employTime === "freelance",
                                                            onChange: handleChange
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 295,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                            htmlFor: "radio3-field",
                                                            children: "Freelance"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 296,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 294,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 283,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        errors.employTime && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-1 px-6 text-sm text-red-500",
                                            children: errors.employTime
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 299,
                                            columnNumber: 37
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 279,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/form/page.jsx",
                            lineNumber: 248,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 border-b border-gray-300 pb-9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-4 text-xl font-semibold text-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ri-graduation-cap-line mr-3 text-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 308,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Education"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 307,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid grid-cols-1 gap-4 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "degree-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Degree: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 314,
                                                            columnNumber: 27
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 313,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "degree",
                                                    id: "degree-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    value: form.degree,
                                                    onChange: handleChange,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select Degree..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 317,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "BA",
                                                            children: "Bachelor of Arts (BA)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 318,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "BS",
                                                            children: "Bachelor of Science (BS)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 319,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "BBA",
                                                            children: "Bachelor of Business Administration (BBA)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 320,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "MA",
                                                            children: "Master of Arts (MA)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 323,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "MS",
                                                            children: "Master of Science (MS)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 324,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "MBA",
                                                            children: "Master of Business Administration (MBA)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 325,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "PhD",
                                                            children: "Doctor of Philosophy (Ph.D.)"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 328,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 316,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.degree && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.degree
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 330,
                                                    columnNumber: 35
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 312,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "study-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Field of Study:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 338,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 336,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "studyField",
                                                    id: "study-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    value: form.studyField,
                                                    onChange: handleChange,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Choose the study field..."
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 350,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$resources$2f$Resource$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fieldsOfStudy"].map((el, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                                children: el
                                                            }, i, false, {
                                                                fileName: "[project]/src/app/form/page.jsx",
                                                                lineNumber: 351,
                                                                columnNumber: 49
                                                            }, ("TURBOPACK compile-time value", void 0)))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 349,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.studyField && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.studyField
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 355,
                                                    columnNumber: 39
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 335,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "start-year-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Start Year: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 362,
                                                            columnNumber: 31
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 361,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "startYear",
                                                    id: "start-year-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    value: form.startYear,
                                                    onChange: handleChange,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Start Year"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 365,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        Array.from({
                                                            length: new Date().getFullYear() - 4 - 1960 + 1
                                                        }, (_, i_0)=>{
                                                            const year = new Date().getFullYear() - 4 - i_0;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: year,
                                                                children: year
                                                            }, year, false, {
                                                                fileName: "[project]/src/app/form/page.jsx",
                                                                lineNumber: 370,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 364,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.startYear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.startYear
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 375,
                                                    columnNumber: 38
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 360,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "end-year-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "End Year: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 382,
                                                            columnNumber: 29
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 381,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    name: "endYear",
                                                    id: "end-year-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    value: form.endYear,
                                                    onChange: handleChange,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "End Year"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 385,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        Array.from({
                                                            length: new Date().getFullYear() - 1960 + 1
                                                        }, (__0, i_1)=>{
                                                            const year_0 = new Date().getFullYear() - i_1;
                                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: year_0,
                                                                children: year_0
                                                            }, year_0, false, {
                                                                fileName: "[project]/src/app/form/page.jsx",
                                                                lineNumber: 390,
                                                                columnNumber: 26
                                                            }, ("TURBOPACK compile-time value", void 0));
                                                        })
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 384,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.endYear && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.endYear
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 395,
                                                    columnNumber: 36
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 380,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 311,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/form/page.jsx",
                            lineNumber: 306,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 border-b border-gray-300 pb-9",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-4 text-xl font-semibold text-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ri-file-text-line mr-3 text-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 405,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Documents & Skills"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 404,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-8 grid grid-cols-1 gap-4 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "p-6 md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                    className: "mb-2 px-3 text-sm font-medium",
                                                    children: "Skills"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 410,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex flex-col flex-wrap gap-6 md:flex-row",
                                                    children: skillOptions.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    name: "skills",
                                                                    id: `skill-${skill.id}`,
                                                                    className: "border-gray-200 text-indigo-500",
                                                                    value: skill.id,
                                                                    checked: form.skills.includes(skill.id),
                                                                    onChange: handleChange
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/form/page.jsx",
                                                                    lineNumber: 413,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0)),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                                    htmlFor: `skill-${skill.id}`,
                                                                    children: skill.label
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/form/page.jsx",
                                                                    lineNumber: 414,
                                                                    columnNumber: 23
                                                                }, ("TURBOPACK compile-time value", void 0))
                                                            ]
                                                        }, skill.id, true, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 412,
                                                            columnNumber: 46
                                                        }, ("TURBOPACK compile-time value", void 0)))
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 411,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.skills && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.skills
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 417,
                                                    columnNumber: 35
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 409,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "file-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Upload your Resume:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 425,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 423,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    name: "file",
                                                    id: "file-field",
                                                    accept: ".pdf,.doc,.docx",
                                                    className: "w-full border-gray-200 px-5 py-2 file:mr-3 file:cursor-pointer file:rounded-xl file:border-0 file:bg-indigo-500 file:px-4 file:py-2 file:text-white hover:file:bg-indigo-600",
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 427,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                form.resume && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-xs text-gray-500",
                                                    children: "Accepted formats: PDF, DOC, DOCX (Max 5MB)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 428,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.file && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.file
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 431,
                                                    columnNumber: 33
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 422,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    htmlFor: "url-field",
                                                    className: "mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "LinkedIn profile:",
                                                        " ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 439,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 437,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    name: "url",
                                                    id: "url-field",
                                                    className: "w-full rounded-2xl border border-gray-200 px-5 py-2",
                                                    placeholder: "https://linkedin.com/in/...",
                                                    value: form.url,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 441,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                errors.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "mt-1 px-6 text-sm text-red-500",
                                                    children: errors.url
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 442,
                                                    columnNumber: 32
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 436,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "md:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "mt-3 mb-2 block px-6 text-sm font-medium",
                                                    children: [
                                                        "Cover Letter: ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-lg text-red-500",
                                                            children: "*"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 447,
                                                            columnNumber: 33
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 446,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                                    type: "text",
                                                    name: "longText",
                                                    rows: "8",
                                                    className: "w-full resize-none rounded border border-gray-200 px-4 py-2 font-serif text-[18px] text-gray-600",
                                                    placeholder: "Explain your interest in this role and company...",
                                                    value: form.longText,
                                                    maxLength: textLimit,
                                                    onChange: handleChange
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 449,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `flex ${errors.longText ? "justify-between" : "justify-end"}`,
                                                    children: [
                                                        errors.longText && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 px-6 text-sm text-red-500",
                                                            children: errors.longText
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 451,
                                                            columnNumber: 39
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-xs text-gray-500",
                                                            children: `${form.longText.length} / ${textLimit}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/form/page.jsx",
                                                            lineNumber: 454,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/form/page.jsx",
                                                    lineNumber: 450,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 445,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 408,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/form/page.jsx",
                            lineNumber: 403,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8 border-b border-gray-300 pb-12",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "mb-4 text-xl font-semibold text-gray-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                            className: "ri-checkbox-line mr-3 text-indigo-500"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 463,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        "Declaration"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 462,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-start gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            name: "declaration",
                                            id: "declaration-field",
                                            checked: !!form.declaration,
                                            onChange: handleChange,
                                            // required
                                            className: "mt-1"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 468,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            htmlFor: "declaration-field",
                                            className: "text-sm leading-snug",
                                            children: "I hereby certify that the information provided in this application is true and complete to the best of my knowledge. (Required Checkbox)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 471,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 467,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                errors.declaration && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-1 px-6 text-sm text-red-500",
                                    children: errors.declaration
                                }, void 0, false, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 477,
                                    columnNumber: 36
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-6 text-sm text-gray-500 italic",
                                    children: [
                                        "Fields marked with ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/form/page.jsx",
                                            lineNumber: 482,
                                            columnNumber: 34
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        " ",
                                        "are mandatory"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 481,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                errors._form && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 px-6 text-sm text-red-500",
                                    children: errors._form
                                }, void 0, false, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 485,
                                    columnNumber: 30
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/form/page.jsx",
                            lineNumber: 461,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "submit",
                            disabled: loading,
                            className: "focus:ring-opacity-50 w-full rounded-lg border border-transparent bg-indigo-600 px-4 py-3 text-lg font-medium text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                                    className: "ri-send-plane-fill mr-3 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/form/page.jsx",
                                    lineNumber: 489,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                loading ? "Submitting..." : "Submit Application"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/form/page.jsx",
                            lineNumber: 488,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/form/page.jsx",
                    lineNumber: 196,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/app/form/page.jsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/form/page.jsx",
        lineNumber: 188,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_s(Form, "zsZFhba6eJcMWwPhk68s53504LQ=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Form;
const __TURBOPACK__default__export__ = Form;
var _c;
__turbopack_context__.k.register(_c, "Form");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_b3f95023._.js.map