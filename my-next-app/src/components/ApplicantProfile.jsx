"use client";

import React from "react";
import {
  Mail,
  Phone,
  MapPin,
  Link,
  Briefcase,
  GraduationCap,
  User,
} from "lucide-react";

// --- MOCK DATA STRUCTURE (This would typically be passed via props or fetched) ---
const applicantData = {
  id: "A001",
  name: "Alex Johnson",
  jobTitle: "Senior Full Stack Developer",
  status: "Reviewing",
  profileImage: "https://placehold.co/100x100/1050a4/ffffff?text=AJ",
  summary:
    "Highly motivated and results-driven full stack developer with 8+ years of experience building and deploying scalable web applications. Expertise in React, Node.js, and cloud services (AWS). Seeking a challenging role to leverage technical skills in a fast-paced environment.",
  email: "alex.johnson@example.com",
  phone: "(555) 123-4567",
  location: "San Francisco, CA",
  linkedin: "linkedin.com/in/alexjohnsondev",
  skills: [
    "React",
    "Node.js",
    "TypeScript",
    "AWS",
    "PostgreSQL",
    "Docker",
    "Tailwind CSS",
    "Redux",
    "Jest",
    "Agile/Scrum",
  ],
  experience: [
    {
      title: "Lead Software Engineer",
      company: "Innovatech Solutions",
      years: "2020 - Present",
      description:
        "Led a team of 5 developers in redesigning the core product platform, resulting in a 30% improvement in load time. Implemented continuous integration and deployment pipelines.",
    },
    {
      title: "Full Stack Developer",
      company: "TechCorp Inc.",
      years: "2017 - 2020",
      description:
        "Developed and maintained high-traffic e-commerce microservices using Python and Django. Contributed to migrating monolithic architecture to serverless functions.",
    },
  ],
  education: [
    {
      degree: "M.S. in Computer Science",
      institution: "Stanford University",
      years: "2015 - 2017",
    },
    {
      degree: "B.S. in Software Engineering",
      institution: "University of California, Berkeley",
      years: "2011 - 2015",
    },
  ],
};

// --- HELPER COMPONENTS ---

/**
 * Renders a single contact detail row with an icon.
 */
const ContactDetailRow = ({ Icon, label, value, link }) => (
  <div className="flex items-start space-x-3">
    <Icon className="mt-1 h-5 w-5 shrink-0 text-lg text-[#1050a4]" />
    <div>
      <p className="text-sm font-medium text-gray-500">{label}</p>
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-base break-all text-gray-800 transition hover:text-[#1050a4]"
        >
          {value}
        </a>
      ) : (
        <p className="text-base break-all text-gray-800">{value}</p>
      )}
    </div>
  </div>
);

/**
 * Renders a single entry for Experience or Education.
 */
const ListEntry = ({ item }) => {
  const primaryText = item.apply_for;
  const secondaryText = item.salary;

  return (
    <div className="mb-6 rounded-lg border border-gray-100 bg-white p-4 transition duration-300 hover:shadow-lg">
      <div className="mb-5 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <h3 className="text-lg font-semibold text-gray-900">{primaryText}</h3>
        <span className="mt-1 shrink-0 rounded-full bg-[#1050a4]/10 px-3 py-1 text-sm font-medium text-[#1050a4] sm:mt-0">
          {item.employ_time}
        </span>
      </div>
      {item.salary !== "" && (
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <p className="text-md mb-2 font-medium text-gray-600">
            Expected Salary
            <span className="ms-1 text-xs font-medium text-gray-500">
              (optional)
            </span>
          </p>
          <span className="mt-1 shrink-0 rounded-full bg-[#1050a4]/10 px-3 py-1 text-sm font-medium text-[#1050a4] sm:mt-0">
            {secondaryText}
          </span>
        </div>
      )}
    </div>
  );
};

const ListEntry2 = ({ item }) => {
  const { degree } = item;
  const { study_field } = item;

  return (
    <div className="mb-6 rounded-lg border border-gray-100 bg-white p-4 transition duration-300 hover:shadow-lg">
      <div className="mb-1 flex flex-col items-start justify-between sm:flex-row sm:items-center">
        <h3 className="w-full text-lg font-semibold wrap-break-word text-gray-900">
          {degree} in {study_field}
        </h3>
        <span className="mt-1 shrink-0 rounded-full bg-[#1050a4]/10 px-3 py-1 text-sm font-medium text-[#1050a4] sm:mt-0">
          {item.start_year} - {item.end_year}
        </span>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---

const ApplicantProfile = ({ data = applicantData }) => {
  console.log(data);

  // Determine status color based on logic from the HTML file
  let statusColor = "bg-gray-400";
  if (data.status === "pending") {
    statusColor = "bg-yellow-500";
  } else if (data.status === "approved") {
    statusColor = "bg-green-500";
  } else if (data.status === "rejected") {
    statusColor = "bg-red-500";
  }

  const initials = data.name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <div className="min-h-screen">
      <div id="app-container" className="mx-auto max-w-6xl">
        <div className="rounded-xl bg-white p-6 shadow-2xl lg:p-10">
          {/* HEADER SECTION: Name, Title, and Status */}
          <header className="mb-8 border-b pb-6">
            <div className="flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6">
              <div className="text-center sm:text-left">
                <h1 className="mb-1 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  {data.name}
                </h1>
                <p className="mb-3 text-xl font-semibold text-[#1050a4]">
                  {data.apply_for}
                </p>
                <div className="inline-flex items-center space-x-2">
                  <span
                    className={`rounded-full px-3 py-1 text-sm font-medium text-white ${statusColor}`}
                  >
                    {data.status}
                  </span>
                  <span className="text-sm text-gray-500">
                    Applicant ID: <span className="font-mono">{data.id}</span>
                  </span>
                </div>
              </div>
            </div>
          </header>

          {/* MAIN CONTENT GRID */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {/* SIDEBAR: Contact and Skills */}
            <aside className="space-y-8 lg:col-span-1">
              {/* CONTACT INFORMATION CARD */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
                <h2 className="mb-4 border-b pb-3 text-xl font-bold text-gray-900">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <ContactDetailRow
                    Icon={Mail}
                    label="Email"
                    value={data.email}
                    link={`mailto:${data.email}`}
                  />
                  <ContactDetailRow
                    Icon={Phone}
                    label="Phone"
                    value={data.phone}
                    link={`tel:${data.phone.replace(/[^0-9]/g, "")}`}
                  />
                  <ContactDetailRow
                    Icon={MapPin}
                    label="Location"
                    value={data.address}
                  />
                  <ContactDetailRow
                    Icon={Link}
                    label="LinkedIn"
                    value={data.url}
                    link={data.url}
                  />
                </div>
              </div>

              {/* SKILLS CARD */}
              <div className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
                <h2 className="mb-4 border-b pb-3 text-xl font-bold text-gray-900">
                  Skills & Technologies
                </h2>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-[#1050a4] px-3 py-1 text-sm font-medium text-white shadow-md transition duration-200 hover:bg-[#1050a4]/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </aside>

            {/* MAIN PROFILE DETAILS */}
            <div className="space-y-10 lg:col-span-2">
              {/* SUMMARY CARD */}
              {data.long_text && (
                <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">
                    Professional Summary
                  </h2>
                  <p className="leading-relaxed wrap-break-word text-gray-700">
                    {data.long_text.slice(0, 199)}
                  </p>
                </section>
              )}

              {/* Position CARD */}
              <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
                <h2 className="mb-6 flex items-center gap-2 border-b pb-3 text-2xl font-bold text-gray-900">
                  <Briefcase className="h-6 w-6 text-gray-700" /> Position
                </h2>
                <ListEntry item={data} />
              </section>

              {/* EDUCATION CARD */}
              <section className="rounded-xl border border-gray-100 bg-white p-6 shadow-lg">
                <h2 className="mb-6 flex items-center gap-2 border-b pb-3 text-2xl font-bold text-gray-900">
                  <GraduationCap className="h-6 w-6 text-gray-700" /> Education
                </h2>
                <ListEntry2 item={data} />
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicantProfile;
