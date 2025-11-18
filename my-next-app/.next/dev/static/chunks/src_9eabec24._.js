(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/ApplicantProfile.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-client] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/link.js [app-client] (ecmascript) <export default as Link>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/briefcase.js [app-client] (ecmascript) <export default as Briefcase>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
"use client";
;
;
;
;
// --- MOCK DATA STRUCTURE (This would typically be passed via props or fetched) ---
const applicantData = {
    id: "A001",
    name: "Alex Johnson",
    jobTitle: "Senior Full Stack Developer",
    status: "Reviewing",
    profileImage: "https://placehold.co/100x100/1050a4/ffffff?text=AJ",
    summary: "Highly motivated and results-driven full stack developer with 8+ years of experience building and deploying scalable web applications. Expertise in React, Node.js, and cloud services (AWS). Seeking a challenging role to leverage technical skills in a fast-paced environment.",
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
        "Agile/Scrum"
    ],
    experience: [
        {
            title: "Lead Software Engineer",
            company: "Innovatech Solutions",
            years: "2020 - Present",
            description: "Led a team of 5 developers in redesigning the core product platform, resulting in a 30% improvement in load time. Implemented continuous integration and deployment pipelines."
        },
        {
            title: "Full Stack Developer",
            company: "TechCorp Inc.",
            years: "2017 - 2020",
            description: "Developed and maintained high-traffic e-commerce microservices using Python and Django. Contributed to migrating monolithic architecture to serverless functions."
        }
    ],
    education: [
        {
            degree: "M.S. in Computer Science",
            institution: "Stanford University",
            years: "2015 - 2017"
        },
        {
            degree: "B.S. in Software Engineering",
            institution: "University of California, Berkeley",
            years: "2011 - 2015"
        }
    ]
};
// --- HELPER COMPONENTS ---
/**
 * Renders a single contact detail row with an icon.
 */ const ContactDetailRow = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "15ef7afaa260c4c9b0b4478aa5cfb9991216c9557bc9fc2233a6b7e15afe5cc7") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15ef7afaa260c4c9b0b4478aa5cfb9991216c9557bc9fc2233a6b7e15afe5cc7";
    }
    const { Icon, label, value, link } = t0;
    let t1;
    if ($[1] !== Icon) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
            className: "mt-1 h-5 w-5 shrink-0 text-lg text-[#1050a4]"
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = Icon;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== label) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm font-medium text-gray-500",
            children: label
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 71,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = label;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== link || $[6] !== value) {
        t3 = link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
            href: link,
            target: "_blank",
            rel: "noopener noreferrer",
            className: "text-base break-all text-gray-800 transition hover:text-[#1050a4]",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 79,
            columnNumber: 17
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-base break-all text-gray-800",
            children: value
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 79,
            columnNumber: 166
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = link;
        $[6] = value;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== t2 || $[9] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                t3
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 88,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = t2;
        $[9] = t3;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t1 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-start space-x-3",
            children: [
                t1,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 97,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t1;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
};
_c = ContactDetailRow;
/**
 * Renders a single entry for Experience or Education.
 */ const ListEntry = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(14);
    if ($[0] !== "15ef7afaa260c4c9b0b4478aa5cfb9991216c9557bc9fc2233a6b7e15afe5cc7") {
        for(let $i = 0; $i < 14; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15ef7afaa260c4c9b0b4478aa5cfb9991216c9557bc9fc2233a6b7e15afe5cc7";
    }
    const { item } = t0;
    const primaryText = item.apply_for;
    const secondaryText = item.salary;
    let t1;
    if ($[1] !== primaryText) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "text-lg font-semibold text-gray-900",
            children: primaryText
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 125,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = primaryText;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== item.employ_time) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mt-1 shrink-0 rounded-full bg-[#1050a4]/10 px-3 py-1 text-sm font-medium text-[#1050a4] sm:mt-0",
            children: item.employ_time
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 133,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = item.employ_time;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] !== t1 || $[6] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-5 flex flex-col items-start justify-between sm:flex-row sm:items-center",
            children: [
                t1,
                t2
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 141,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = t1;
        $[6] = t2;
        $[7] = t3;
    } else {
        t3 = $[7];
    }
    let t4;
    if ($[8] !== item.salary || $[9] !== secondaryText) {
        t4 = item.salary !== "" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-start justify-between sm:flex-row sm:items-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-md mb-2 font-medium text-gray-600",
                    children: [
                        "Expected Salary",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ms-1 text-xs font-medium text-gray-500",
                            children: "(optional)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/ApplicantProfile.jsx",
                            lineNumber: 150,
                            columnNumber: 188
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 150,
                    columnNumber: 119
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "mt-1 shrink-0 rounded-full bg-[#1050a4]/10 px-3 py-1 text-sm font-medium text-[#1050a4] sm:mt-0",
                    children: secondaryText
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 150,
                    columnNumber: 266
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 150,
            columnNumber: 32
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = item.salary;
        $[9] = secondaryText;
        $[10] = t4;
    } else {
        t4 = $[10];
    }
    let t5;
    if ($[11] !== t3 || $[12] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 rounded-lg border border-gray-100 bg-white p-4 transition duration-300 hover:shadow-lg",
            children: [
                t3,
                t4
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 159,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t3;
        $[12] = t4;
        $[13] = t5;
    } else {
        t5 = $[13];
    }
    return t5;
};
_c1 = ListEntry;
const ListEntry2 = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(10);
    if ($[0] !== "15ef7afaa260c4c9b0b4478aa5cfb9991216c9557bc9fc2233a6b7e15afe5cc7") {
        for(let $i = 0; $i < 10; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15ef7afaa260c4c9b0b4478aa5cfb9991216c9557bc9fc2233a6b7e15afe5cc7";
    }
    const { item } = t0;
    const { degree } = item;
    const { study_field } = item;
    let t1;
    if ($[1] !== degree || $[2] !== study_field) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            className: "w-full text-lg font-semibold wrap-break-word text-gray-900",
            children: [
                degree,
                " in ",
                study_field
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 187,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = degree;
        $[2] = study_field;
        $[3] = t1;
    } else {
        t1 = $[3];
    }
    let t2;
    if ($[4] !== item.end_year || $[5] !== item.start_year) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "mt-1 shrink-0 rounded-full bg-[#1050a4]/10 px-3 py-1 text-sm font-medium text-[#1050a4] sm:mt-0",
            children: [
                item.start_year,
                " - ",
                item.end_year
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 196,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[4] = item.end_year;
        $[5] = item.start_year;
        $[6] = t2;
    } else {
        t2 = $[6];
    }
    let t3;
    if ($[7] !== t1 || $[8] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mb-6 rounded-lg border border-gray-100 bg-white p-4 transition duration-300 hover:shadow-lg",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-1 flex flex-col items-start justify-between sm:flex-row sm:items-center",
                children: [
                    t1,
                    t2
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ApplicantProfile.jsx",
                lineNumber: 205,
                columnNumber: 119
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 205,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[7] = t1;
        $[8] = t2;
        $[9] = t3;
    } else {
        t3 = $[9];
    }
    return t3;
};
_c2 = ListEntry2;
// --- MAIN COMPONENT ---
const ApplicantProfile = (t0)=>{
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(62);
    if ($[0] !== "15ef7afaa260c4c9b0b4478aa5cfb9991216c9557bc9fc2233a6b7e15afe5cc7") {
        for(let $i = 0; $i < 62; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "15ef7afaa260c4c9b0b4478aa5cfb9991216c9557bc9fc2233a6b7e15afe5cc7";
    }
    const { data: t1 } = t0;
    const data = t1 === undefined ? applicantData : t1;
    console.log(data);
    let statusColor = "bg-gray-400";
    if (data.status === "pending") {
        statusColor = "bg-yellow-500";
    } else {
        if (data.status === "approved") {
            statusColor = "bg-green-500";
        } else {
            if (data.status === "rejected") {
                statusColor = "bg-red-500";
            }
        }
    }
    data.name.split(" ").map(_temp).join("");
    let t2;
    if ($[1] !== data.name) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "mb-1 text-3xl font-extrabold text-gray-900 sm:text-4xl",
            children: data.name
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 245,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[1] = data.name;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== data.apply_for) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "mb-3 text-xl font-semibold text-[#1050a4]",
            children: data.apply_for
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 253,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[3] = data.apply_for;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = `rounded-full px-3 py-1 text-sm font-medium text-white ${statusColor}`;
    let t5;
    if ($[5] !== data.status || $[6] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t4,
            children: data.status
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 262,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[5] = data.status;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== data.id) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "text-sm text-gray-500",
            children: [
                "Applicant ID: ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "font-mono",
                    children: data.id
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 271,
                    columnNumber: 64
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 271,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[8] = data.id;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    let t7;
    if ($[10] !== t5 || $[11] !== t6) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "inline-flex items-center space-x-2",
            children: [
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 279,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[10] = t5;
        $[11] = t6;
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    let t8;
    if ($[13] !== t2 || $[14] !== t3 || $[15] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "mb-8 border-b pb-6",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center space-y-4 sm:flex-row sm:items-start sm:space-y-0 sm:space-x-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center sm:text-left",
                    children: [
                        t2,
                        t3,
                        t7
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 288,
                    columnNumber: 156
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ApplicantProfile.jsx",
                lineNumber: 288,
                columnNumber: 49
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 288,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[13] = t2;
        $[14] = t3;
        $[15] = t7;
        $[16] = t8;
    } else {
        t8 = $[16];
    }
    let t9;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-4 border-b pb-3 text-xl font-bold text-gray-900",
            children: "Contact Information"
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 298,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[17] = t9;
    } else {
        t9 = $[17];
    }
    const t10 = `mailto:${data.email}`;
    let t11;
    if ($[18] !== data.email || $[19] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactDetailRow, {
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"],
            label: "Email",
            value: data.email,
            link: t10
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 306,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = data.email;
        $[19] = t10;
        $[20] = t11;
    } else {
        t11 = $[20];
    }
    const t12 = data.phone;
    let t13;
    if ($[21] !== data.phone) {
        let t14;
        if ($[23] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /[^0-9]/g;
            $[23] = t14;
        } else {
            t14 = $[23];
        }
        t13 = data.phone.replace(t14, "");
        $[21] = data.phone;
        $[22] = t13;
    } else {
        t13 = $[22];
    }
    const t14 = `tel:${t13}`;
    let t15;
    if ($[24] !== data.phone || $[25] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactDetailRow, {
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"],
            label: "Phone",
            value: t12,
            link: t14
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 332,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = data.phone;
        $[25] = t14;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] !== data.address) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactDetailRow, {
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"],
            label: "Location",
            value: data.address
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 341,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = data.address;
        $[28] = t16;
    } else {
        t16 = $[28];
    }
    let t17;
    if ($[29] !== data.url) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContactDetailRow, {
            Icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Link$3e$__["Link"],
            label: "LinkedIn",
            value: data.url,
            link: data.url
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 349,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[29] = data.url;
        $[30] = t17;
    } else {
        t17 = $[30];
    }
    let t18;
    if ($[31] !== t11 || $[32] !== t15 || $[33] !== t16 || $[34] !== t17) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-100 bg-white p-6 shadow-lg",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-4",
                    children: [
                        t11,
                        t15,
                        t16,
                        t17
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 357,
                    columnNumber: 89
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 357,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[31] = t11;
        $[32] = t15;
        $[33] = t16;
        $[34] = t17;
        $[35] = t18;
    } else {
        t18 = $[35];
    }
    let t19;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-4 border-b pb-3 text-xl font-bold text-gray-900",
            children: "Skills & Technologies"
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 368,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== data.skills) {
        t20 = data.skills.map(_temp2);
        $[37] = data.skills;
        $[38] = t20;
    } else {
        t20 = $[38];
    }
    let t21;
    if ($[39] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "rounded-xl border border-gray-100 bg-white p-6 shadow-lg",
            children: [
                t19,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap gap-2",
                    children: t20
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 383,
                    columnNumber: 90
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 383,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[39] = t20;
        $[40] = t21;
    } else {
        t21 = $[40];
    }
    let t22;
    if ($[41] !== t18 || $[42] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: "space-y-8 lg:col-span-1",
            children: [
                t18,
                t21
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 391,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[41] = t18;
        $[42] = t21;
        $[43] = t22;
    } else {
        t22 = $[43];
    }
    let t23;
    if ($[44] !== data.long_text) {
        t23 = data.long_text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-xl border border-gray-100 bg-white p-6 shadow-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "mb-4 text-2xl font-bold text-gray-900",
                    children: "Professional Summary"
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 400,
                    columnNumber: 107
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "leading-relaxed wrap-break-word text-gray-700",
                    children: data.long_text.slice(0, 199)
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 400,
                    columnNumber: 186
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 400,
            columnNumber: 29
        }, ("TURBOPACK compile-time value", void 0));
        $[44] = data.long_text;
        $[45] = t23;
    } else {
        t23 = $[45];
    }
    let t24;
    if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-6 flex items-center gap-2 border-b pb-3 text-2xl font-bold text-gray-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$briefcase$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Briefcase$3e$__["Briefcase"], {
                    className: "h-6 w-6 text-gray-700"
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 408,
                    columnNumber: 103
                }, ("TURBOPACK compile-time value", void 0)),
                " Position"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 408,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[46] = t24;
    } else {
        t24 = $[46];
    }
    let t25;
    if ($[47] !== data) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-xl border border-gray-100 bg-white p-6 shadow-lg",
            children: [
                t24,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListEntry, {
                    item: data
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 415,
                    columnNumber: 94
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 415,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[47] = data;
        $[48] = t25;
    } else {
        t25 = $[48];
    }
    let t26;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "mb-6 flex items-center gap-2 border-b pb-3 text-2xl font-bold text-gray-900",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                    className: "h-6 w-6 text-gray-700"
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 423,
                    columnNumber: 103
                }, ("TURBOPACK compile-time value", void 0)),
                " Education"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 423,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[49] = t26;
    } else {
        t26 = $[49];
    }
    let t27;
    if ($[50] !== data) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "rounded-xl border border-gray-100 bg-white p-6 shadow-lg",
            children: [
                t26,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ListEntry2, {
                    item: data
                }, void 0, false, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 430,
                    columnNumber: 94
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 430,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[50] = data;
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    if ($[52] !== t23 || $[53] !== t25 || $[54] !== t27) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-10 lg:col-span-2",
            children: [
                t23,
                t25,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 438,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[52] = t23;
        $[53] = t25;
        $[54] = t27;
        $[55] = t28;
    } else {
        t28 = $[55];
    }
    let t29;
    if ($[56] !== t22 || $[57] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-1 gap-8 lg:grid-cols-3",
            children: [
                t22,
                t28
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 448,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[56] = t22;
        $[57] = t28;
        $[58] = t29;
    } else {
        t29 = $[58];
    }
    let t30;
    if ($[59] !== t29 || $[60] !== t8) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: "app-container",
                className: "mx-auto max-w-6xl",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "rounded-xl bg-white p-6 shadow-2xl lg:p-10",
                    children: [
                        t8,
                        t29
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/ApplicantProfile.jsx",
                    lineNumber: 457,
                    columnNumber: 95
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/src/components/ApplicantProfile.jsx",
                lineNumber: 457,
                columnNumber: 41
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/ApplicantProfile.jsx",
            lineNumber: 457,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[59] = t29;
        $[60] = t8;
        $[61] = t30;
    } else {
        t30 = $[61];
    }
    return t30;
};
_c3 = ApplicantProfile;
const __TURBOPACK__default__export__ = ApplicantProfile;
function _temp(n) {
    return n[0];
}
function _temp2(skill, index) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        className: "rounded-full bg-[#1050a4] px-3 py-1 text-sm font-medium text-white shadow-md transition duration-200 hover:bg-[#1050a4]/90",
        children: skill
    }, index, false, {
        fileName: "[project]/src/components/ApplicantProfile.jsx",
        lineNumber: 471,
        columnNumber: 10
    }, this);
}
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "ContactDetailRow");
__turbopack_context__.k.register(_c1, "ListEntry");
__turbopack_context__.k.register(_c2, "ListEntry2");
__turbopack_context__.k.register(_c3, "ApplicantProfile");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/list/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplicantProfile$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ApplicantProfile.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUser$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-user.js [app-client] (ecmascript) <export default as FileUser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-client] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-toastify/dist/index.mjs [app-client] (ecmascript)");
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
const Page = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(33);
    if ($[0] !== "a73aeb81b2a03a4d25d9e92199aaec6059f83ccb2dd7d0398149d7b142a538b0") {
        for(let $i = 0; $i < 33; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "a73aeb81b2a03a4d25d9e92199aaec6059f83ccb2dd7d0398149d7b142a538b0";
    }
    const [pdfOpen, setPdfOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [pdfUrl, setPdfUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    let t0;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t0 = [];
        $[1] = t0;
    } else {
        t0 = $[1];
    }
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t0);
    const [profileOpen, setProfileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    let t1;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = {};
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const [profileData, setProfileData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(t1);
    const [showConfirmModal, setShowConfirmModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [deleteId, setDeleteId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = (url)=>{
            setPdfUrl(`http://localhost:4000${url}`);
            setPdfOpen(true);
        };
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    const handlePdfOpen = t2;
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = async function dataFetching() {
            ;
            try {
                const res = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].get("http://localhost:4000/api/user");
                setData(res.data.data);
                console.log(res.data.data);
            } catch (t4) {
                const error = t4;
                console.error(error);
            }
        };
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const dataFetching = t3;
    let t4;
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = ()=>{
            dataFetching();
        };
        t5 = [];
        $[5] = t4;
        $[6] = t5;
    } else {
        t4 = $[5];
        t5 = $[6];
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(t4, t5);
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = (item)=>{
            setProfileData(item);
        };
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    const handleProfileData = t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = (id)=>{
            setDeleteId(id);
            setShowConfirmModal(true);
        };
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    const confirmDelete = t7;
    let t8;
    if ($[9] !== deleteId) {
        t8 = async ()=>{
            ;
            try {
                const res_0 = await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].delete(`http://localhost:4000/api/user/${deleteId}`);
                if (res_0.data.ok) {
                    setData((prev)=>prev.filter((item_0)=>item_0.id !== deleteId));
                    setShowConfirmModal(false);
                    setDeleteId(null);
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success("Applicant rejected successfully!", {
                        position: "top-center",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: false,
                        draggable: false,
                        progress: undefined,
                        theme: "light",
                        transition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bounce"]
                    });
                } else {
                    alert("Failed to delete applicant.");
                }
            } catch (t9) {
                const error_0 = t9;
                console.error("Delete error:", error_0);
                alert("Error deleting applicant.");
            }
        };
        $[9] = deleteId;
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const handleDelete = t8;
    let t9;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            className: "mb-6 text-2xl font-semibold text-gray-800",
            children: "All Applicants"
        }, void 0, false, {
            fileName: "[project]/src/app/list/page.jsx",
            lineNumber: 141,
            columnNumber: 10
        }, ("TURBOPACK compile-time value", void 0));
        $[11] = t9;
    } else {
        t9 = $[11];
    }
    let t10;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "border border-gray-300 p-2",
                        children: "No."
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 148,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "border border-gray-300 p-2",
                        children: "Name"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 148,
                        columnNumber: 73
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "border border-gray-300 p-2",
                        children: "Email"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 148,
                        columnNumber: 125
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "border border-gray-300 p-2",
                        children: "Phone"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 148,
                        columnNumber: 178
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "border border-gray-300 p-2",
                        children: "Applying For"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 148,
                        columnNumber: 231
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "border border-gray-300 p-2",
                        children: "Degree"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 148,
                        columnNumber: 291
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "border border-gray-300 p-2",
                        children: "Resume"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 148,
                        columnNumber: 345
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                        className: "border border-gray-300 p-2",
                        children: "Action"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 148,
                        columnNumber: 399
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/list/page.jsx",
                lineNumber: 148,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/list/page.jsx",
            lineNumber: 148,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== data) {
        let t12;
        if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
            t12 = (item_1, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "border border-gray-300 p-2",
                            children: index + 1
                        }, void 0, false, {
                            fileName: "[project]/src/app/list/page.jsx",
                            lineNumber: 157,
                            columnNumber: 72
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "border border-gray-300 p-2",
                            children: item_1.name
                        }, void 0, false, {
                            fileName: "[project]/src/app/list/page.jsx",
                            lineNumber: 157,
                            columnNumber: 131
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "border border-gray-300 p-2",
                            children: item_1.email
                        }, void 0, false, {
                            fileName: "[project]/src/app/list/page.jsx",
                            lineNumber: 157,
                            columnNumber: 192
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "border border-gray-300 p-2",
                            children: item_1.phone
                        }, void 0, false, {
                            fileName: "[project]/src/app/list/page.jsx",
                            lineNumber: 157,
                            columnNumber: 254
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "border border-gray-300 p-2",
                            children: item_1.apply_for.slice(0, 10)
                        }, void 0, false, {
                            fileName: "[project]/src/app/list/page.jsx",
                            lineNumber: 157,
                            columnNumber: 316
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "border border-gray-300 p-2",
                            children: item_1.degree
                        }, void 0, false, {
                            fileName: "[project]/src/app/list/page.jsx",
                            lineNumber: 157,
                            columnNumber: 395
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "border border-gray-300 p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onClick: ()=>handlePdfOpen(item_1.file_path),
                                src: "/pdf-svgrepo-com.svg",
                                alt: "pdf icon",
                                width: 18,
                                height: 18,
                                className: "mx-auto cursor-pointer hover:saturate-10"
                            }, void 0, false, {
                                fileName: "[project]/src/app/list/page.jsx",
                                lineNumber: 157,
                                columnNumber: 501
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/list/page.jsx",
                            lineNumber: 157,
                            columnNumber: 458
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                            className: "border border-gray-300 p-1",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "flex justify-center gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUser$3e$__["FileUser"], {
                                        onClick: ()=>{
                                            setProfileOpen(true);
                                            handleProfileData(item_1);
                                        },
                                        className: "w-5 cursor-pointer text-blue-500 hover:text-blue-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/list/page.jsx",
                                        lineNumber: 157,
                                        columnNumber: 768
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                        onClick: ()=>confirmDelete(item_1.id),
                                        className: "w-5 cursor-pointer text-red-500 hover:text-red-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/list/page.jsx",
                                        lineNumber: 160,
                                        columnNumber: 83
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/list/page.jsx",
                                lineNumber: 157,
                                columnNumber: 724
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/app/list/page.jsx",
                            lineNumber: 157,
                            columnNumber: 681
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, index, true, {
                    fileName: "[project]/src/app/list/page.jsx",
                    lineNumber: 157,
                    columnNumber: 32
                }, ("TURBOPACK compile-time value", void 0));
            $[15] = t12;
        } else {
            t12 = $[15];
        }
        t11 = data.map(t12);
        $[13] = data;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-8 mt-20",
            children: [
                t9,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-h-[65vh] w-full overflow-auto rounded border border-gray-300 p-12",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "scrollbar-default w-full table-auto border-collapse border border-gray-400",
                        children: [
                            t10,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: t11
                            }, void 0, false, {
                                fileName: "[project]/src/app/list/page.jsx",
                                lineNumber: 173,
                                columnNumber: 229
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 173,
                        columnNumber: 130
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/app/list/page.jsx",
                    lineNumber: 173,
                    columnNumber: 43
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/list/page.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== pdfOpen || $[19] !== pdfUrl) {
        t13 = pdfOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed top-0 left-0 h-screen w-screen bg-black/50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute top-0 right-4 cursor-pointer text-4xl text-white",
                    onClick: ()=>setPdfOpen(false),
                    children: "×"
                }, void 0, false, {
                    fileName: "[project]/src/app/list/page.jsx",
                    lineNumber: 181,
                    columnNumber: 88
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                    src: pdfUrl,
                    width: "90%",
                    title: "Resume Preview",
                    className: "mx-auto h-full rounded border border-gray-300"
                }, void 0, false, {
                    fileName: "[project]/src/app/list/page.jsx",
                    lineNumber: 181,
                    columnNumber: 206
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/list/page.jsx",
            lineNumber: 181,
            columnNumber: 22
        }, ("TURBOPACK compile-time value", void 0));
        $[18] = pdfOpen;
        $[19] = pdfUrl;
        $[20] = t13;
    } else {
        t13 = $[20];
    }
    let t14;
    if ($[21] !== profileData || $[22] !== profileOpen) {
        t14 = profileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 flex items-center justify-center bg-gray-500/90",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "scrollbar-hide md:scrollbar-default h-[90vh] w-[90%] overflow-y-auto rounded bg-white shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-0 right-2 cursor-pointer text-6xl text-white",
                        onClick: ()=>setProfileOpen(false),
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 190,
                        columnNumber: 218
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ApplicantProfile$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        data: profileData
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 190,
                        columnNumber: 340
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/list/page.jsx",
                lineNumber: 190,
                columnNumber: 105
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/list/page.jsx",
            lineNumber: 190,
            columnNumber: 26
        }, ("TURBOPACK compile-time value", void 0));
        $[21] = profileData;
        $[22] = profileOpen;
        $[23] = t14;
    } else {
        t14 = $[23];
    }
    let t15;
    if ($[24] !== handleDelete || $[25] !== showConfirmModal) {
        t15 = showConfirmModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 flex items-center justify-center bg-black/50 transition-opacity duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-[90%] max-w-sm rounded-lg bg-white p-6 text-center shadow-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "mb-3 text-lg font-semibold text-gray-800",
                        children: "Confirm Deletion"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 199,
                        columnNumber: 219
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mb-6 text-sm text-gray-600",
                        children: "Are you sure you want to delete this applicant? This action cannot be undone."
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 199,
                        columnNumber: 297
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex justify-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setShowConfirmModal(false),
                                className: "cursor-pointer rounded-lg bg-gray-200 px-4 py-2 text-gray-800 hover:bg-gray-300 active:scale-95",
                                children: "Cancel"
                            }, void 0, false, {
                                fileName: "[project]/src/app/list/page.jsx",
                                lineNumber: 199,
                                columnNumber: 463
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleDelete,
                                className: "cursor-pointer rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600 active:scale-95",
                                children: "Delete"
                            }, void 0, false, {
                                fileName: "[project]/src/app/list/page.jsx",
                                lineNumber: 199,
                                columnNumber: 637
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 199,
                        columnNumber: 420
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/list/page.jsx",
                lineNumber: 199,
                columnNumber: 139
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/app/list/page.jsx",
            lineNumber: 199,
            columnNumber: 31
        }, ("TURBOPACK compile-time value", void 0));
        $[24] = handleDelete;
        $[25] = showConfirmModal;
        $[26] = t15;
    } else {
        t15 = $[26];
    }
    let t16;
    if ($[27] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ToastContainer"], {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            newestOnTop: false,
            closeOnClick: false,
            rtl: false,
            pauseOnFocusLoss: true,
            draggable: false,
            pauseOnHover: false,
            theme: "light",
            transition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$toastify$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bounce"]
        }, void 0, false, {
            fileName: "[project]/src/app/list/page.jsx",
            lineNumber: 208,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    let t17;
    if ($[28] !== t12 || $[29] !== t13 || $[30] !== t14 || $[31] !== t15) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                t12,
                t13,
                t14,
                t15,
                t16
            ]
        }, void 0, true);
        $[28] = t12;
        $[29] = t13;
        $[30] = t14;
        $[31] = t15;
        $[32] = t17;
    } else {
        t17 = $[32];
    }
    return t17;
};
_s(Page, "8P+Y1vlgcWlFLg6W+j+rQqRdSWE=");
_c = Page;
const __TURBOPACK__default__export__ = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_9eabec24._.js.map