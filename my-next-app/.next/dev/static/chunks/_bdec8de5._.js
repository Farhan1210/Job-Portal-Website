(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/app/(home)/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FormContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/FormContext.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const Form = ()=>{
    _s();
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(185);
    if ($[0] !== "aa2bdc2433029187b2fc340e37e8b1d2d0294e9012f6aa3a900eb4f85c047e2c") {
        for(let $i = 0; $i < 185; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "aa2bdc2433029187b2fc340e37e8b1d2d0294e9012f6aa3a900eb4f85c047e2c";
    }
    const { form, changeHandler } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$FormContext$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FormDataContext"]);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    let t0;
    let t1;
    let t10;
    let t11;
    let t12;
    let t13;
    let t14;
    let t2;
    let t3;
    let t4;
    let t5;
    let t6;
    let t7;
    let t8;
    let t9;
    if ($[1] !== changeHandler || $[2] !== form.address || $[3] !== form.apply || $[4] !== form.degree || $[5] !== form.email || $[6] !== form.employTime || $[7] !== form.endYear || $[8] !== form.name || $[9] !== form.phone || $[10] !== form.salary || $[11] !== form.skills || $[12] !== form.startYear || $[13] !== form.studyField || $[14] !== router) {
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
        let t15;
        if ($[30] !== router) {
            t15 = function(e) {
                e.preventDefault();
                router.push("/submit");
            };
            $[30] = router;
            $[31] = t15;
        } else {
            t15 = $[31];
        }
        const submitHandler = t15;
        t13 = "p-7 text-gray-800";
        if ($[32] === Symbol.for("react.memo_cache_sentinel")) {
            t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-6 justify-center items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl font-bold text-indigo-500",
                        children: "Application Form"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 67,
                        columnNumber: 78
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl font-normal text-gray-400",
                        children: "Please complete all sections of this detailed application."
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 67,
                        columnNumber: 150
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 67,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[32] = t14;
        } else {
            t14 = $[32];
        }
        t12 = "flex justify-start items-center mt-14 w-full gap-8  lg:w-[50%] mx-auto p-10 rounded-lg shadow shadow-gray-300";
        t7 = "w-full";
        t8 = submitHandler;
        let t16;
        if ($[33] === Symbol.for("react.memo_cache_sentinel")) {
            t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "font-medium text-xl mb-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-contacts-line mr-3 text-indigo-500"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 77,
                        columnNumber: 54
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Contact Information"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 77,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[33] = t16;
        } else {
            t16 = $[33];
        }
        let t17;
        if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
            t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "name-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Full Name:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 84,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[34] = t17;
        } else {
            t17 = $[34];
        }
        let t18;
        if ($[35] !== changeHandler || $[36] !== form.name) {
            t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t17,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "name",
                        id: "name-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2 ",
                        placeholder: "Your Name",
                        value: form.name,
                        onChange: changeHandler
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 91,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 91,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[35] = changeHandler;
            $[36] = form.name;
            $[37] = t18;
        } else {
            t18 = $[37];
        }
        let t19;
        if ($[38] === Symbol.for("react.memo_cache_sentinel")) {
            t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "email-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Email:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 100,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[38] = t19;
        } else {
            t19 = $[38];
        }
        let t20;
        if ($[39] !== changeHandler || $[40] !== form.email) {
            t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t19,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "email",
                        name: "email",
                        id: "email-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2",
                        placeholder: "Email",
                        value: form.email,
                        onChange: changeHandler
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 107,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 107,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[39] = changeHandler;
            $[40] = form.email;
            $[41] = t20;
        } else {
            t20 = $[41];
        }
        let t21;
        if ($[42] === Symbol.for("react.memo_cache_sentinel")) {
            t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "phone-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Phone No."
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 116,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[42] = t21;
        } else {
            t21 = $[42];
        }
        let t22;
        if ($[43] !== changeHandler || $[44] !== form.phone) {
            t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t21,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        name: "phone",
                        id: "phone-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2 ",
                        placeholder: "0333 1112222",
                        value: form.phone,
                        onChange: changeHandler
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 123,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 123,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[43] = changeHandler;
            $[44] = form.phone;
            $[45] = t22;
        } else {
            t22 = $[45];
        }
        let t23;
        if ($[46] === Symbol.for("react.memo_cache_sentinel")) {
            t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "current-address-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Current Address:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 132,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[46] = t23;
        } else {
            t23 = $[46];
        }
        let t24;
        if ($[47] !== changeHandler || $[48] !== form.address) {
            t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t23,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "address",
                        id: "current-address-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2 ",
                        placeholder: "House No. Block Area City",
                        value: form.address,
                        onChange: changeHandler
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 139,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 139,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[47] = changeHandler;
            $[48] = form.address;
            $[49] = t24;
        } else {
            t24 = $[49];
        }
        if ($[50] !== t18 || $[51] !== t20 || $[52] !== t22 || $[53] !== t24) {
            t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t16,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 pb-9 mb-8 border-b border-gray-300",
                        children: [
                            t18,
                            t20,
                            t22,
                            t24
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 147,
                        columnNumber: 22
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 147,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[50] = t18;
            $[51] = t20;
            $[52] = t22;
            $[53] = t24;
            $[54] = t9;
        } else {
            t9 = $[54];
        }
        let t25;
        if ($[55] === Symbol.for("react.memo_cache_sentinel")) {
            t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4 text-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-suitcase-line text-indigo-500 mr-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 158,
                        columnNumber: 70
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Position & Availability"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 158,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[55] = t25;
        } else {
            t25 = $[55];
        }
        let t26;
        if ($[56] === Symbol.for("react.memo_cache_sentinel")) {
            t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "apply-for-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Applying For:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 165,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[56] = t26;
        } else {
            t26 = $[56];
        }
        let t27;
        if ($[57] !== changeHandler || $[58] !== form.apply) {
            t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t26,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "apply",
                        id: "apply-for-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2 ",
                        placeholder: "Front-end Developer",
                        value: form.apply,
                        onChange: changeHandler
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 172,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 172,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[57] = changeHandler;
            $[58] = form.apply;
            $[59] = t27;
        } else {
            t27 = $[59];
        }
        let t28;
        if ($[60] === Symbol.for("react.memo_cache_sentinel")) {
            t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "salary-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Salary:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 181,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[60] = t28;
        } else {
            t28 = $[60];
        }
        let t29;
        if ($[61] !== changeHandler || $[62] !== form.salary) {
            t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t28,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "number",
                        name: "salary",
                        id: "salary-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2",
                        value: form.salary,
                        onChange: changeHandler
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 188,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 188,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[61] = changeHandler;
            $[62] = form.salary;
            $[63] = t29;
        } else {
            t29 = $[63];
        }
        let t30;
        if ($[64] !== t27 || $[65] !== t29) {
            t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 ",
                children: [
                    t27,
                    t29
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 197,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[64] = t27;
            $[65] = t29;
            $[66] = t30;
        } else {
            t30 = $[66];
        }
        let t31;
        if ($[67] === Symbol.for("react.memo_cache_sentinel")) {
            t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                className: "px-3 font-medium text-sm mb-2",
                children: "Employment time:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 206,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[67] = t31;
        } else {
            t31 = $[67];
        }
        const t32 = form.employTime === "fullTime";
        let t33;
        if ($[68] !== changeHandler || $[69] !== t32) {
            t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "radio",
                name: "employTime",
                id: "radio1-field",
                className: "border-gray-200 text-indigo-500",
                value: "fullTime",
                checked: t32,
                onChange: changeHandler
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 214,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[68] = changeHandler;
            $[69] = t32;
            $[70] = t33;
        } else {
            t33 = $[70];
        }
        let t34;
        if ($[71] === Symbol.for("react.memo_cache_sentinel")) {
            t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "radio1-field",
                children: "Full time"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 223,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[71] = t34;
        } else {
            t34 = $[71];
        }
        let t35;
        if ($[72] !== t33) {
            t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t33,
                    t34
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 230,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[72] = t33;
            $[73] = t35;
        } else {
            t35 = $[73];
        }
        const t36 = form.employTime === "partTime";
        let t37;
        if ($[74] !== changeHandler || $[75] !== t36) {
            t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "radio",
                id: "radio2-field",
                name: "employTime",
                className: "border-gray-200 text-indigo-500",
                value: "partTime",
                checked: t36,
                onChange: changeHandler
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 239,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[74] = changeHandler;
            $[75] = t36;
            $[76] = t37;
        } else {
            t37 = $[76];
        }
        let t38;
        if ($[77] === Symbol.for("react.memo_cache_sentinel")) {
            t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "radio2-field",
                children: "Part time"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 248,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[77] = t38;
        } else {
            t38 = $[77];
        }
        let t39;
        if ($[78] !== t37) {
            t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t37,
                    t38
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 255,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[78] = t37;
            $[79] = t39;
        } else {
            t39 = $[79];
        }
        const t40 = form.employTime === "freelance";
        let t41;
        if ($[80] !== changeHandler || $[81] !== t40) {
            t41 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "radio",
                name: "employTime",
                id: "radio3-field",
                className: "border-gray-200 text-indigo-500",
                value: "freelance",
                checked: t40,
                onChange: changeHandler
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 264,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[80] = changeHandler;
            $[81] = t40;
            $[82] = t41;
        } else {
            t41 = $[82];
        }
        let t42;
        if ($[83] === Symbol.for("react.memo_cache_sentinel")) {
            t42 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "radio3-field",
                children: "Freelance"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 273,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[83] = t42;
        } else {
            t42 = $[83];
        }
        let t43;
        if ($[84] !== t41) {
            t43 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    t41,
                    t42
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 280,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[84] = t41;
            $[85] = t43;
        } else {
            t43 = $[85];
        }
        let t44;
        if ($[86] !== t35 || $[87] !== t39 || $[88] !== t43) {
            t44 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4",
                children: [
                    t31,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex gap-4 flex-col md:flex-row",
                        children: [
                            t35,
                            t39,
                            t43
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 288,
                        columnNumber: 40
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 288,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[86] = t35;
            $[87] = t39;
            $[88] = t43;
            $[89] = t44;
        } else {
            t44 = $[89];
        }
        if ($[90] !== t30 || $[91] !== t44) {
            t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-9 border-b border-gray-300 mb-8",
                children: [
                    t25,
                    t30,
                    t44
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 297,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[90] = t30;
            $[91] = t44;
            $[92] = t10;
        } else {
            t10 = $[92];
        }
        let t45;
        if ($[93] === Symbol.for("react.memo_cache_sentinel")) {
            t45 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4 text-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-graduation-cap-line text-indigo-500 mr-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 306,
                        columnNumber: 70
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Education"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 306,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[93] = t45;
        } else {
            t45 = $[93];
        }
        let t46;
        if ($[94] === Symbol.for("react.memo_cache_sentinel")) {
            t46 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "degree-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Degree:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 313,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[94] = t46;
        } else {
            t46 = $[94];
        }
        let t47;
        let t48;
        let t49;
        let t50;
        let t51;
        let t52;
        let t53;
        let t54;
        if ($[95] === Symbol.for("react.memo_cache_sentinel")) {
            t47 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "",
                children: "Select Degree..."
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 327,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t48 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "BA",
                children: "Bachelor of Arts (BA)"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 328,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t49 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "BS",
                children: "Bachelor of Science (BS)"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 329,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t50 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "BBA",
                children: "Bachelor of Business Administration (BBA)"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 330,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t51 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "MA",
                children: "Master of Arts (MA)"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 331,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t52 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "MS",
                children: "Master of Science (MS)"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 332,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t53 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "MBA",
                children: "Master of Business Administration (MBA)"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 333,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t54 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "PhD",
                children: "Doctor of Philosophy (Ph.D.)"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 334,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[95] = t47;
            $[96] = t48;
            $[97] = t49;
            $[98] = t50;
            $[99] = t51;
            $[100] = t52;
            $[101] = t53;
            $[102] = t54;
        } else {
            t47 = $[95];
            t48 = $[96];
            t49 = $[97];
            t50 = $[98];
            t51 = $[99];
            t52 = $[100];
            t53 = $[101];
            t54 = $[102];
        }
        let t55;
        if ($[103] !== changeHandler || $[104] !== form.degree) {
            t55 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t46,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "degree",
                        id: "degree-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2",
                        value: form.degree,
                        onChange: changeHandler,
                        children: [
                            t47,
                            t48,
                            t49,
                            t50,
                            t51,
                            t52,
                            t53,
                            t54
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 355,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 355,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[103] = changeHandler;
            $[104] = form.degree;
            $[105] = t55;
        } else {
            t55 = $[105];
        }
        let t56;
        if ($[106] === Symbol.for("react.memo_cache_sentinel")) {
            t56 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "study-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Field of Study:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 364,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[106] = t56;
        } else {
            t56 = $[106];
        }
        let t57;
        if ($[107] !== changeHandler || $[108] !== form.studyField) {
            t57 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t56,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "text",
                        name: "studyField",
                        id: "study-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2 ",
                        placeholder: "e.g. Computer Science",
                        value: form.studyField,
                        onChange: changeHandler
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 371,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 371,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[107] = changeHandler;
            $[108] = form.studyField;
            $[109] = t57;
        } else {
            t57 = $[109];
        }
        let t58;
        if ($[110] === Symbol.for("react.memo_cache_sentinel")) {
            t58 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "start-year-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Start Year:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 380,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[110] = t58;
        } else {
            t58 = $[110];
        }
        const t59 = form.startYear;
        let t60;
        let t61;
        if ($[111] === Symbol.for("react.memo_cache_sentinel")) {
            t60 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "",
                children: "Start Year"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 389,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t61 = Array.from({
                length: new Date().getFullYear() - 4 - 1960 + 1
            }, _temp);
            $[111] = t60;
            $[112] = t61;
        } else {
            t60 = $[111];
            t61 = $[112];
        }
        let t62;
        if ($[113] !== changeHandler || $[114] !== form.startYear) {
            t62 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t58,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "startYear",
                        id: "start-year-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2",
                        value: t59,
                        onChange: changeHandler,
                        children: [
                            t60,
                            t61
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 401,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 401,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[113] = changeHandler;
            $[114] = form.startYear;
            $[115] = t62;
        } else {
            t62 = $[115];
        }
        let t63;
        if ($[116] === Symbol.for("react.memo_cache_sentinel")) {
            t63 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                htmlFor: "end-year-field",
                className: "px-6 font-medium text-sm mb-2 block",
                children: "Start Year:"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 410,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[116] = t63;
        } else {
            t63 = $[116];
        }
        const t64 = form.endYear;
        let t65;
        let t66;
        if ($[117] === Symbol.for("react.memo_cache_sentinel")) {
            t65 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                value: "",
                children: "End Year"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 419,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            t66 = Array.from({
                length: new Date().getFullYear() - 1960 + 1
            }, _temp2);
            $[117] = t65;
            $[118] = t66;
        } else {
            t65 = $[117];
            t66 = $[118];
        }
        let t67;
        if ($[119] !== changeHandler || $[120] !== form.endYear) {
            t67 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    t63,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                        name: "endYear",
                        id: "end-year-field",
                        className: "w-full border-gray-200 border rounded-2xl px-5 py-2",
                        value: t64,
                        onChange: changeHandler,
                        children: [
                            t65,
                            t66
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 431,
                        columnNumber: 23
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 431,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[119] = changeHandler;
            $[120] = form.endYear;
            $[121] = t67;
        } else {
            t67 = $[121];
        }
        if ($[122] !== t55 || $[123] !== t57 || $[124] !== t62 || $[125] !== t67) {
            t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "pb-9 border-b border-gray-300 mb-8",
                children: [
                    t45,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 ",
                        children: [
                            t55,
                            t57,
                            t62,
                            t67
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 439,
                        columnNumber: 70
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 439,
                columnNumber: 13
            }, ("TURBOPACK compile-time value", void 0));
            $[122] = t55;
            $[123] = t57;
            $[124] = t62;
            $[125] = t67;
            $[126] = t11;
        } else {
            t11 = $[126];
        }
        t5 = "pb-9 border-b border-gray-300 mb-8";
        if ($[127] === Symbol.for("react.memo_cache_sentinel")) {
            t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-xl font-semibold mb-4 text-gray-800",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                        className: "ri-file-text-line text-indigo-500 mr-3"
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 450,
                        columnNumber: 69
                    }, ("TURBOPACK compile-time value", void 0)),
                    "Documents & Skills"
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 450,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[127] = t6;
        } else {
            t6 = $[127];
        }
        t4 = "mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 ";
        t2 = "md:col-span-2 p-6";
        if ($[128] === Symbol.for("react.memo_cache_sentinel")) {
            t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "px-3 font-medium text-sm mb-2",
                children: "Skills"
            }, void 0, false, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 458,
                columnNumber: 12
            }, ("TURBOPACK compile-time value", void 0));
            $[128] = t3;
        } else {
            t3 = $[128];
        }
        t0 = "flex flex-wrap gap-6 flex-col md:flex-row";
        t1 = skillOptions.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "checkbox",
                        name: "skills",
                        id: `skill-${skill.id}`,
                        className: "border-gray-200 text-indigo-500",
                        value: skill.id,
                        checked: form.skills.includes(skill.id),
                        onChange: changeHandler
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 464,
                        columnNumber: 92
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: `skill-${skill.id}`,
                        children: skill.label
                    }, void 0, false, {
                        fileName: "[project]/src/app/(home)/page.jsx",
                        lineNumber: 464,
                        columnNumber: 283
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, skill.id, true, {
                fileName: "[project]/src/app/(home)/page.jsx",
                lineNumber: 464,
                columnNumber: 36
            }, ("TURBOPACK compile-time value", void 0)));
        $[1] = changeHandler;
        $[2] = form.address;
        $[3] = form.apply;
        $[4] = form.degree;
        $[5] = form.email;
        $[6] = form.employTime;
        $[7] = form.endYear;
        $[8] = form.name;
        $[9] = form.phone;
        $[10] = form.salary;
        $[11] = form.skills;
        $[12] = form.startYear;
        $[13] = form.studyField;
        $[14] = router;
        $[15] = t0;
        $[16] = t1;
        $[17] = t10;
        $[18] = t11;
        $[19] = t12;
        $[20] = t13;
        $[21] = t14;
        $[22] = t2;
        $[23] = t3;
        $[24] = t4;
        $[25] = t5;
        $[26] = t6;
        $[27] = t7;
        $[28] = t8;
        $[29] = t9;
    } else {
        t0 = $[15];
        t1 = $[16];
        t10 = $[17];
        t11 = $[18];
        t12 = $[19];
        t13 = $[20];
        t14 = $[21];
        t2 = $[22];
        t3 = $[23];
        t4 = $[24];
        t5 = $[25];
        t6 = $[26];
        t7 = $[27];
        t8 = $[28];
        t9 = $[29];
    }
    let t15;
    if ($[129] !== t0 || $[130] !== t1) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t0,
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 513,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[129] = t0;
        $[130] = t1;
        $[131] = t15;
    } else {
        t15 = $[131];
    }
    let t16;
    if ($[132] !== t15 || $[133] !== t2 || $[134] !== t3) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t2,
            children: [
                t3,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 522,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[132] = t15;
        $[133] = t2;
        $[134] = t3;
        $[135] = t16;
    } else {
        t16 = $[135];
    }
    let t17;
    if ($[136] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "file-field",
            className: "px-6 font-medium text-sm mb-2 block",
            children: "Upload your Resume:"
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 532,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[136] = t17;
    } else {
        t17 = $[136];
    }
    let t18;
    if ($[137] !== changeHandler) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "file",
            name: "file",
            id: "file-field",
            accept: ".pdf,.doc,.docx",
            className: "w-full border-gray-200 px-5 py-2 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:bg-indigo-500 file:text-white file:cursor-pointer hover:file:bg-indigo-600",
            onChange: changeHandler
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 539,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[137] = changeHandler;
        $[138] = t18;
    } else {
        t18 = $[138];
    }
    let t19;
    if ($[139] !== form.resume) {
        t19 = form.resume ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-sm text-gray-500 mt-1",
            children: [
                "Selected file: ",
                form.resume.name
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 547,
            columnNumber: 25
        }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "px-6 text-xs text-gray-500 mt-1",
            children: "Accepted formats: PDF, DOC, DOCX (Max 5MB)"
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 547,
            columnNumber: 107
        }, ("TURBOPACK compile-time value", void 0));
        $[139] = form.resume;
        $[140] = t19;
    } else {
        t19 = $[140];
    }
    let t20;
    if ($[141] !== t18 || $[142] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t17,
                t18,
                t19
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 555,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[141] = t18;
        $[142] = t19;
        $[143] = t20;
    } else {
        t20 = $[143];
    }
    let t21;
    if ($[144] === Symbol.for("react.memo_cache_sentinel")) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "url-field",
            className: "px-6 font-medium text-sm mb-2 block",
            children: "LinkedIn profile:"
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 564,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[144] = t21;
    } else {
        t21 = $[144];
    }
    let t22;
    if ($[145] !== changeHandler || $[146] !== form.url) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t21,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    type: "text",
                    name: "url",
                    id: "url-field",
                    className: "w-full border-gray-200 border rounded-2xl px-5 py-2 ",
                    placeholder: "https://linkedin.com/in/...",
                    value: form.url,
                    onChange: changeHandler
                }, void 0, false, {
                    fileName: "[project]/src/app/(home)/page.jsx",
                    lineNumber: 571,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 571,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[145] = changeHandler;
        $[146] = form.url;
        $[147] = t22;
    } else {
        t22 = $[147];
    }
    let t23;
    if ($[148] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "px-6 font-medium text-sm mb-2 block",
            children: "Cover Letter:"
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 580,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[148] = t23;
    } else {
        t23 = $[148];
    }
    let t24;
    if ($[149] !== changeHandler || $[150] !== form.url) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "md:col-span-2",
            children: [
                t23,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                    type: "text",
                    name: "url",
                    id: "url-field",
                    rows: "10",
                    className: "w-full border-gray-200 border rounded py-2 px-4 resize-none",
                    placeholder: "Explain your interest in this role and company...",
                    value: form.url,
                    onChange: changeHandler
                }, void 0, false, {
                    fileName: "[project]/src/app/(home)/page.jsx",
                    lineNumber: 587,
                    columnNumber: 47
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 587,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[149] = changeHandler;
        $[150] = form.url;
        $[151] = t24;
    } else {
        t24 = $[151];
    }
    let t25;
    if ($[152] !== t16 || $[153] !== t20 || $[154] !== t22 || $[155] !== t24 || $[156] !== t4) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t4,
            children: [
                t16,
                t20,
                t22,
                t24
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 596,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[152] = t16;
        $[153] = t20;
        $[154] = t22;
        $[155] = t24;
        $[156] = t4;
        $[157] = t25;
    } else {
        t25 = $[157];
    }
    let t26;
    if ($[158] !== t25 || $[159] !== t5 || $[160] !== t6) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t5,
            children: [
                t6,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 608,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[158] = t25;
        $[159] = t5;
        $[160] = t6;
        $[161] = t26;
    } else {
        t26 = $[161];
    }
    let t27;
    if ($[162] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            className: "text-xl font-semibold mb-4 text-gray-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-checkbox-line text-indigo-500 mr-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/(home)/page.jsx",
                    lineNumber: 618,
                    columnNumber: 68
                }, ("TURBOPACK compile-time value", void 0)),
                "Declaration"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 618,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[162] = t27;
    } else {
        t27 = $[162];
    }
    const t28 = !!form.declaration;
    let t29;
    if ($[163] !== changeHandler || $[164] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            type: "checkbox",
            name: "declaration",
            id: "declaration-field",
            checked: t28,
            onChange: changeHandler,
            required: true,
            className: "mt-1"
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 626,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[163] = changeHandler;
        $[164] = t28;
        $[165] = t29;
    } else {
        t29 = $[165];
    }
    let t30;
    if ($[166] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            htmlFor: "declaration-field",
            className: "text-sm leading-snug",
            children: "I hereby certify that the information provided in this application is true and complete to the best of my knowledge. (Required Checkbox)"
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 635,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[166] = t30;
    } else {
        t30 = $[166];
    }
    let t31;
    if ($[167] !== t29) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "pb-12 border-b border-gray-300 mb-8",
            children: [
                t27,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex gap-3 items-start",
                    children: [
                        t29,
                        t30
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/(home)/page.jsx",
                    lineNumber: 642,
                    columnNumber: 69
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 642,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[167] = t29;
        $[168] = t31;
    } else {
        t31 = $[168];
    }
    let t32;
    if ($[169] === Symbol.for("react.memo_cache_sentinel")) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "submit",
            className: "w-full py-3 px-4 border border-transparent rounded-lg shadow-md text-lg font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-150 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("i", {
                    className: "ri-send-plane-fill text-white mr-3"
                }, void 0, false, {
                    fileName: "[project]/src/app/(home)/page.jsx",
                    lineNumber: 650,
                    columnNumber: 334
                }, ("TURBOPACK compile-time value", void 0)),
                "Submit Application"
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 650,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[169] = t32;
    } else {
        t32 = $[169];
    }
    let t33;
    if ($[170] !== t10 || $[171] !== t11 || $[172] !== t26 || $[173] !== t31 || $[174] !== t7 || $[175] !== t8 || $[176] !== t9) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: t7,
            onSubmit: t8,
            children: [
                t9,
                t10,
                t11,
                t26,
                t31,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 657,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[170] = t10;
        $[171] = t11;
        $[172] = t26;
        $[173] = t31;
        $[174] = t7;
        $[175] = t8;
        $[176] = t9;
        $[177] = t33;
    } else {
        t33 = $[177];
    }
    let t34;
    if ($[178] !== t12 || $[179] !== t33) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t12,
            children: t33
        }, void 0, false, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 671,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[178] = t12;
        $[179] = t33;
        $[180] = t34;
    } else {
        t34 = $[180];
    }
    let t35;
    if ($[181] !== t13 || $[182] !== t14 || $[183] !== t34) {
        t35 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: t13,
            children: [
                t14,
                t34
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/(home)/page.jsx",
            lineNumber: 680,
            columnNumber: 11
        }, ("TURBOPACK compile-time value", void 0));
        $[181] = t13;
        $[182] = t14;
        $[183] = t34;
        $[184] = t35;
    } else {
        t35 = $[184];
    }
    return t35;
};
_s(Form, "zrRE5kS8CwLpoVT8bT3l3oA+3Kw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Form;
const __TURBOPACK__default__export__ = Form;
function _temp(_, i) {
    const year = new Date().getFullYear() - 4 - i;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: year,
        children: year
    }, year, false, {
        fileName: "[project]/src/app/(home)/page.jsx",
        lineNumber: 693,
        columnNumber: 10
    }, this);
}
function _temp2(__0, i_0) {
    const year_0 = new Date().getFullYear() - i_0;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        value: year_0,
        children: year_0
    }, year_0, false, {
        fileName: "[project]/src/app/(home)/page.jsx",
        lineNumber: 697,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "Form");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_bdec8de5._.js.map