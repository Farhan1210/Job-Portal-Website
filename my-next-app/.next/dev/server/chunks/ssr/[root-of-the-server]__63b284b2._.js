module.exports = [
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/src/app/list/page.jsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUser$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-user.js [app-rsc] (ecmascript) <export default as FileUser>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash.js [app-rsc] (ecmascript) <export default as Trash>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
;
;
const list = ()=>{
    const [pdfClose, setPdfClose] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(true);
    const applicants = [
        {
            id: 1,
            name: "Ali Khan",
            email: "ali.khan@example.com",
            phone: "+92 300 1234567",
            applyingFor: "Frontend Developer",
            degree: "BS Computer Science",
            resume: "https://example.com/resumes/ali-khan.pdf"
        },
        {
            id: 2,
            name: "Sara Ahmed",
            email: "sara.ahmed@example.com",
            phone: "+92 322 9876543",
            applyingFor: "UI/UX Designer",
            degree: "BFA Graphic Design",
            resume: "https://example.com/resumes/sara-ahmed.pdf"
        },
        {
            id: 3,
            name: "Hamza Tariq",
            email: "hamza.tariq@example.com",
            phone: "+92 301 8882221",
            applyingFor: "Backend Developer",
            degree: "BS Software Engineering",
            resume: "https://example.com/resumes/hamza-tariq.pdf"
        },
        {
            id: 4,
            name: "Ayesha Malik",
            email: "ayesha.malik@example.com",
            phone: "+92 341 6549871",
            applyingFor: "Data Analyst",
            degree: "BS Data Science",
            resume: "https://example.com/resumes/ayesha-malik.pdf"
        },
        {
            id: 5,
            name: "Usman Rafiq",
            email: "usman.rafiq@example.com",
            phone: "+92 333 4441122",
            applyingFor: "Full Stack Developer",
            degree: "BS Computer Science",
            resume: "https://example.com/resumes/usman-rafiq.pdf"
        },
        {
            id: 6,
            name: "Fatima Noor",
            email: "fatima.noor@example.com",
            phone: "+92 320 7776633",
            applyingFor: "Project Manager",
            degree: "MBA Project Management",
            resume: "https://example.com/resumes/fatima-noor.pdf"
        },
        {
            id: 7,
            name: "Bilal Haider",
            email: "bilal.haider@example.com",
            phone: "+92 334 5557788",
            applyingFor: "QA Engineer",
            degree: "BS Software Quality Assurance",
            resume: "https://example.com/resumes/bilal-haider.pdf"
        },
        {
            id: 8,
            name: "Mehwish Javed",
            email: "mehwish.javed@example.com",
            phone: "+92 342 1112223",
            applyingFor: "Mobile Developer",
            degree: "BS Information Technology",
            resume: "https://example.com/resumes/mehwish-javed.pdf"
        },
        {
            id: 9,
            name: "Zain Ul Abideen",
            email: "zain.abideen@example.com",
            phone: "+92 306 3344556",
            applyingFor: "DevOps Engineer",
            degree: "BS Computer Systems Engineering",
            resume: "https://example.com/resumes/zain-abideen.pdf"
        },
        {
            id: 10,
            name: "Hira Qureshi",
            email: "hira.qureshi@example.com",
            phone: "+92 323 1119087",
            applyingFor: "Content Writer",
            degree: "MA English Literature",
            resume: "https://example.com/resumes/hira-qureshi.pdf"
        },
        {
            id: 11,
            name: "Ahmad Raza",
            email: "ahmad.raza@example.com",
            phone: "+92 307 1234411",
            applyingFor: "System Administrator",
            degree: "BS Information Technology",
            resume: "https://example.com/resumes/ahmad-raza.pdf"
        },
        {
            id: 12,
            name: "Maryam Zafar",
            email: "maryam.zafar@example.com",
            phone: "+92 313 4567890",
            applyingFor: "Product Designer",
            degree: "BFA Visual Communication",
            resume: "https://example.com/resumes/maryam-zafar.pdf"
        },
        {
            id: 13,
            name: "Imran Qasim",
            email: "imran.qasim@example.com",
            phone: "+92 300 9090999",
            applyingFor: "Software Engineer",
            degree: "BS Computer Science",
            resume: "https://example.com/resumes/imran-qasim.pdf"
        },
        {
            id: 14,
            name: "Noor Fatima",
            email: "noor.fatima@example.com",
            phone: "+92 321 2209988",
            applyingFor: "Marketing Associate",
            degree: "BBA Marketing",
            resume: "https://example.com/resumes/noor-fatima.pdf"
        },
        {
            id: 15,
            name: "Umar Saeed",
            email: "umar.saeed@example.com",
            phone: "+92 345 6677889",
            applyingFor: "Cybersecurity Analyst",
            degree: "BS Cybersecurity",
            resume: "https://example.com/resumes/umar-saeed.pdf"
        },
        {
            id: 16,
            name: "Laiba Hassan",
            email: "laiba.hassan@example.com",
            phone: "+92 311 5544332",
            applyingFor: "HR Coordinator",
            degree: "BBA Human Resources",
            resume: "https://example.com/resumes/laiba-hassan.pdf"
        },
        {
            id: 17,
            name: "Muneeb Akhtar",
            email: "muneeb.akhtar@example.com",
            phone: "+92 321 8881122",
            applyingFor: "AI Engineer",
            degree: "MS Artificial Intelligence",
            resume: "https://example.com/resumes/muneeb-akhtar.pdf"
        },
        {
            id: 18,
            name: "Sana Jamil",
            email: "sana.jamil@example.com",
            phone: "+92 332 7712345",
            applyingFor: "Frontend Developer",
            degree: "BS Software Engineering",
            resume: "https://example.com/resumes/sana-jamil.pdf"
        },
        {
            id: 19,
            name: "Arsalan Butt",
            email: "arsalan.butt@example.com",
            phone: "+92 309 3322110",
            applyingFor: "Cloud Architect",
            degree: "MS Cloud Computing",
            resume: "https://example.com/resumes/arsalan-butt.pdf"
        },
        {
            id: 20,
            name: "Eman Riaz",
            email: "eman.riaz@example.com",
            phone: "+92 333 4445566",
            applyingFor: "Data Engineer",
            degree: "BS Data Science",
            resume: "https://example.com/resumes/eman-riaz.pdf"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-20 mx-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-2xl font-semibold text-gray-800 mb-6",
                        children: "All Applicants"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 196,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                        className: "table-auto border-collapse border border-gray-400 w-full",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300",
                                            children: "Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 200,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300",
                                            children: "Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 201,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300",
                                            children: "Phone"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300",
                                            children: "Applying For"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 203,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300",
                                            children: "Degree"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 204,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300",
                                            children: "Resume"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 205,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                            className: "border border-gray-300",
                                            children: "Action"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 206,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/list/page.jsx",
                                    lineNumber: 199,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/list/page.jsx",
                                lineNumber: 198,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "p-2 border border-gray-300",
                                            children: "Farhan"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border border-gray-300",
                                            children: "k@gmail.com"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 213,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border border-gray-300",
                                            children: "0 300 8757564"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 214,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border border-gray-300",
                                            children: "Front-end"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 215,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border border-gray-300",
                                            children: "BS"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 216,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border border-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                src: "/pdf-svgrepo-com.svg",
                                                alt: "pdf icon",
                                                width: 18,
                                                height: 18,
                                                className: "mx-auto cursor-pointer hover:saturate-10"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/list/page.jsx",
                                                lineNumber: 217,
                                                columnNumber: 56
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "border border-gray-300",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex gap-2 justify-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$user$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__FileUser$3e$__["FileUser"], {
                                                        className: "w-5 text-blue-500 hover:text-blue-700 cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/list/page.jsx",
                                                        lineNumber: 222,
                                                        columnNumber: 100
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash$3e$__["Trash"], {
                                                        className: "w-5 text-red-500 hover:text-red-700 cursor-pointer"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/list/page.jsx",
                                                        lineNumber: 222,
                                                        columnNumber: 177
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/list/page.jsx",
                                                lineNumber: 222,
                                                columnNumber: 56
                                            }, ("TURBOPACK compile-time value", void 0))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/list/page.jsx",
                                            lineNumber: 222,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/list/page.jsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/app/list/page.jsx",
                                lineNumber: 209,
                                columnNumber: 9
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 197,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/list/page.jsx",
                lineNumber: 195,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed w-screen h-screen left-0 top-0  bg-amber-400 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-0 right-4 text-4xl text-gray-600",
                        onClick: ()=>{},
                        children: "×"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 232,
                        columnNumber: 5
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("iframe", {
                        src: "/file-sample_150kB.pdf",
                        width: "90%",
                        title: "Resume Preview",
                        className: "border border-gray-300 rounded h-full mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/src/app/list/page.jsx",
                        lineNumber: 239,
                        columnNumber: 8
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/list/page.jsx",
                lineNumber: 230,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
const __TURBOPACK__default__export__ = list;
}),
"[project]/src/app/list/page.jsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/list/page.jsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__63b284b2._.js.map