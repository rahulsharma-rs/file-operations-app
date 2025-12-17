module.exports = [
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/components/ui/button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button,
    "buttonVariants",
    ()=>buttonVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const buttonVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive", {
    variants: {
        variant: {
            default: 'bg-primary text-primary-foreground hover:bg-primary/90',
            destructive: 'bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
            secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
            ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
            link: 'text-primary underline-offset-4 hover:underline'
        },
        size: {
            default: 'h-9 px-4 py-2 has-[>svg]:px-3',
            sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
            lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
            icon: 'size-9',
            'icon-sm': 'size-8',
            'icon-lg': 'size-10'
        }
    },
    defaultVariants: {
        variant: 'default',
        size: 'default'
    }
});
function Button({ className, variant, size, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'button';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/button.tsx",
        lineNumber: 52,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DropdownMenu",
    ()=>DropdownMenu,
    "DropdownMenuCheckboxItem",
    ()=>DropdownMenuCheckboxItem,
    "DropdownMenuContent",
    ()=>DropdownMenuContent,
    "DropdownMenuGroup",
    ()=>DropdownMenuGroup,
    "DropdownMenuItem",
    ()=>DropdownMenuItem,
    "DropdownMenuLabel",
    ()=>DropdownMenuLabel,
    "DropdownMenuPortal",
    ()=>DropdownMenuPortal,
    "DropdownMenuRadioGroup",
    ()=>DropdownMenuRadioGroup,
    "DropdownMenuRadioItem",
    ()=>DropdownMenuRadioItem,
    "DropdownMenuSeparator",
    ()=>DropdownMenuSeparator,
    "DropdownMenuShortcut",
    ()=>DropdownMenuShortcut,
    "DropdownMenuSub",
    ()=>DropdownMenuSub,
    "DropdownMenuSubContent",
    ()=>DropdownMenuSubContent,
    "DropdownMenuSubTrigger",
    ()=>DropdownMenuSubTrigger,
    "DropdownMenuTrigger",
    ()=>DropdownMenuTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dropdown-menu/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRightIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle.js [app-ssr] (ecmascript) <export default as CircleIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dropdown-menu",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dropdown-menu-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 19,
        columnNumber: 5
    }, this);
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dropdown-menu-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
function DropdownMenuContent({ className, sideOffset = 4, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "dropdown-menu-content",
            sideOffset: sideOffset,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/dropdown-menu.tsx",
            lineNumber: 41,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "dropdown-menu-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DropdownMenuItem({ className, inset, variant = 'default', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 72,
        columnNumber: 5
    }, this);
}
function DropdownMenuCheckboxItem({ className, children, checked, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CheckboxItem"], {
        "data-slot": "dropdown-menu-checkbox-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 103,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 102,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 101,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 92,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioGroup"], {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 115,
        columnNumber: 5
    }, this);
}
function DropdownMenuRadioItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RadioItem"], {
        "data-slot": "dropdown-menu-radio-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CircleIcon$3e$__["CircleIcon"], {
                        className: "size-2 fill-current"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/dropdown-menu.tsx",
                        lineNumber: 138,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/dropdown-menu.tsx",
                    lineNumber: 137,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 136,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('px-2 py-1.5 text-sm font-medium data-[inset]:pl-8', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 154,
        columnNumber: 5
    }, this);
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground ml-auto text-xs tracking-widest', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 184,
        columnNumber: 5
    }, this);
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sub"], {
        "data-slot": "dropdown-menu-sub",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 198,
        columnNumber: 10
    }, this);
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubTrigger"], {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRightIcon$3e$__["ChevronRightIcon"], {
                className: "ml-auto size-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/dropdown-menu.tsx",
                lineNumber: 220,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 210,
        columnNumber: 5
    }, this);
}
function DropdownMenuSubContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dropdown$2d$menu$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SubContent"], {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-hidden rounded-md border p-1 shadow-lg', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dropdown-menu.tsx",
        lineNumber: 230,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sidebar",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/house.js [app-ssr] (ecmascript) <export default as Home>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder-plus.js [app-ssr] (ecmascript) <export default as FolderPlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-plus.js [app-ssr] (ecmascript) <export default as FilePlus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/upload.js [app-ssr] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
function Sidebar({ className, currentCategory, onCategoryChange, onNewItem }) {
    const navItems = [
        {
            name: "Home",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$house$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Home$3e$__["Home"],
            id: "home"
        },
        {
            name: "Shared Projects",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            id: "shared"
        },
        {
            name: "Recent Files",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            id: "recent"
        },
        {
            name: "Favorites",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"],
            id: "favorites"
        },
        {
            name: "Trash / Archive",
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"],
            id: "trash"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("pb-12 w-64 border-r min-h-screen bg-card", className),
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "space-y-4 py-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "px-3 py-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mb-6 px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold tracking-tight mb-4",
                                children: "HPC Explorer"
                            }, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 45,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            className: "w-full justify-start gap-2 shadow-md",
                                            size: "lg",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.tsx",
                                                    lineNumber: 49,
                                                    columnNumber: 37
                                                }, this),
                                                "New"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Sidebar.tsx",
                                            lineNumber: 48,
                                            columnNumber: 33
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 47,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        className: "w-56",
                                        align: "start",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onNewItem('folder'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderPlus$3e$__["FolderPlus"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 55,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "New Folder"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 56,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 58,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onNewItem('upload'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 60,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "File Upload"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 59,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onNewItem('upload'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "Folder Upload"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 65,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 63,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 67,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onNewItem('script'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus$3e$__["FilePlus"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 69,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "New Script (.sh)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 70,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 68,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onNewItem('script'),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FilePlus$3e$__["FilePlus"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 73,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        children: "New Script (.py)"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Sidebar.tsx",
                                                        lineNumber: 74,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 72,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 53,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 44,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-1",
                        children: navItems.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: currentCategory === item.id ? "secondary" : "ghost",
                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-full justify-start", currentCategory === item.id && "font-semibold"),
                                onClick: ()=>onCategoryChange(item.id),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                        className: "mr-2 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 91,
                                        columnNumber: 33
                                    }, this),
                                    item.name
                                ]
                            }, item.id, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 82,
                                columnNumber: 29
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/Sidebar.tsx",
                        lineNumber: 80,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 43,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/Sidebar.tsx",
            lineNumber: 42,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/Sidebar.tsx",
        lineNumber: 41,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/ui/table.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Table",
    ()=>Table,
    "TableBody",
    ()=>TableBody,
    "TableCaption",
    ()=>TableCaption,
    "TableCell",
    ()=>TableCell,
    "TableFooter",
    ()=>TableFooter,
    "TableHead",
    ()=>TableHead,
    "TableHeader",
    ()=>TableHeader,
    "TableRow",
    ()=>TableRow
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
function Table({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "table-container",
        className: "relative w-full overflow-x-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
            "data-slot": "table",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('w-full caption-bottom text-sm', className),
            ...props
        }, void 0, false, {
            fileName: "[project]/components/ui/table.tsx",
            lineNumber: 13,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 9,
        columnNumber: 5
    }, this);
}
function TableHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
        "data-slot": "table-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('[&_tr]:border-b', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
function TableBody({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
        "data-slot": "table-body",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('[&_tr:last-child]:border-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, this);
}
function TableFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tfoot", {
        "data-slot": "table-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted/50 border-t font-medium [&>tr]:last:border-b-0', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function TableRow({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
        "data-slot": "table-row",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
function TableHead({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
        "data-slot": "table-head",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
function TableCell({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
        "data-slot": "table-cell",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-2 align-middle whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 83,
        columnNumber: 5
    }, this);
}
function TableCaption({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("caption", {
        "data-slot": "table-caption",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground mt-4 text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/table.tsx",
        lineNumber: 99,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/FileList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileList",
    ()=>FileList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/table.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dropdown-menu.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis-vertical.js [app-ssr] (ecmascript) <export default as MoreVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-ssr] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-ssr] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-ssr] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/move.js [app-ssr] (ecmascript) <export default as Move>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function FileList({ files, onFileSelect, onFolderNavigate, onSort, sortConfig, viewMode, onRename, onDelete, onCopyPath, onDownload, onShare }) {
    const getIcon = (type)=>{
        switch(type){
            case 'folder':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                    className: "h-6 w-6 text-blue-500 fill-blue-500/20"
                }, void 0, false, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 70,
                    columnNumber: 35
                }, this);
            case 'script':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                    className: "h-6 w-6 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 71,
                    columnNumber: 35
                }, this);
            case 'data':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                    className: "h-6 w-6 text-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 72,
                    columnNumber: 33
                }, this);
            case 'archive':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                    className: "h-6 w-6 text-orange-500"
                }, void 0, false, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 73,
                    columnNumber: 36
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "h-6 w-6 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 74,
                    columnNumber: 29
                }, this);
        }
    };
    const formatSize = (bytes)=>{
        if (bytes === 0) return "-";
        const k = 1024;
        const sizes = [
            'B',
            'KB',
            'MB',
            'GB',
            'TB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
    };
    // Double click logic wrapper to prevent single click firing on double click if needed,
    // but for now simple separation is fine. List vs Grid handled below.
    if (viewMode === 'grid') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4",
            children: files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "group relative flex flex-col items-center p-4 border rounded-xl hover:bg-muted/50 cursor-pointer transition-colors",
                    onClick: ()=>onFileSelect(file),
                    onDoubleClick: (e)=>{
                        e.stopPropagation();
                        if (file.type === 'folder') onFolderNavigate(file.id);
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-3 p-3 bg-muted/30 rounded-full group-hover:bg-background transition-colors",
                            onClick: (e)=>{
                                if (file.type === 'folder') {
                                    e.stopPropagation();
                                    onFolderNavigate(file.id);
                                }
                            },
                            children: getIcon(file.type)
                        }, void 0, false, {
                            fileName: "[project]/components/FileList.tsx",
                            lineNumber: 102,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-sm font-medium text-center truncate w-full px-2",
                            title: file.name,
                            children: file.name
                        }, void 0, false, {
                            fileName: "[project]/components/FileList.tsx",
                            lineNumber: 113,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "text-xs text-muted-foreground mt-1",
                            children: formatSize(file.sizeBytes)
                        }, void 0, false, {
                            fileName: "[project]/components/FileList.tsx",
                            lineNumber: 116,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                        asChild: true,
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                            variant: "ghost",
                                            className: "h-6 w-6 p-0",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                className: "h-3 w-3"
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 124,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/FileList.tsx",
                                            lineNumber: 123,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/FileList.tsx",
                                        lineNumber: 122,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                        align: "end",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onShare(file),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 129,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Share"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 128,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onDownload(file),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Download"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 131,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onRename(file.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 135,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Rename"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 134,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__["Move"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Move"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 137,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>onCopyPath(file),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Copy Path"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 140,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 143,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])("Permissions", {
                                                        description: file.permissions
                                                    }),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Permissions"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 144,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 147,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                className: "text-red-600",
                                                onClick: ()=>onDelete(file.id),
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                        className: "mr-2 h-4 w-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 149,
                                                        columnNumber: 41
                                                    }, this),
                                                    " Delete"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 148,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FileList.tsx",
                                        lineNumber: 127,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FileList.tsx",
                                lineNumber: 121,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/FileList.tsx",
                            lineNumber: 120,
                            columnNumber: 25
                        }, this)
                    ]
                }, file.id, true, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 93,
                    columnNumber: 21
                }, this))
        }, void 0, false, {
            fileName: "[project]/components/FileList.tsx",
            lineNumber: 91,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "rounded-md border",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Table"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHeader"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "w-[40%] cursor-pointer hover:bg-muted/50",
                                onClick: ()=>onSort('name'),
                                children: [
                                    "Name ",
                                    sortConfig.column === 'name' && (sortConfig.direction === 'asc' ? '↑' : '↓')
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FileList.tsx",
                                lineNumber: 165,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "cursor-pointer hover:bg-muted/50",
                                onClick: ()=>onSort('owner'),
                                children: "Owner"
                            }, void 0, false, {
                                fileName: "[project]/components/FileList.tsx",
                                lineNumber: 168,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "cursor-pointer hover:bg-muted/50",
                                onClick: ()=>onSort('modifiedAt'),
                                children: "Last Modified"
                            }, void 0, false, {
                                fileName: "[project]/components/FileList.tsx",
                                lineNumber: 171,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "cursor-pointer hover:bg-muted/50",
                                onClick: ()=>onSort('sizeBytes'),
                                children: "Size"
                            }, void 0, false, {
                                fileName: "[project]/components/FileList.tsx",
                                lineNumber: 174,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableHead"], {
                                className: "w-[50px]"
                            }, void 0, false, {
                                fileName: "[project]/components/FileList.tsx",
                                lineNumber: 177,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FileList.tsx",
                        lineNumber: 164,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 163,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableBody"], {
                    children: files.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableRow"], {
                            className: "cursor-pointer",
                            onClick: ()=>onFileSelect(file),
                            onDoubleClick: (e)=>{
                                e.stopPropagation();
                                if (file.type === 'folder') onFolderNavigate(file.id);
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                    className: "font-medium",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "cursor-pointer",
                                                onClick: (e)=>{
                                                    if (file.type === 'folder') {
                                                        e.stopPropagation();
                                                        onFolderNavigate(file.id);
                                                    }
                                                },
                                                children: getIcon(file.type)
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 193,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: file.name
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 204,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FileList.tsx",
                                        lineNumber: 192,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/FileList.tsx",
                                    lineNumber: 191,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                    children: file.owner
                                }, void 0, false, {
                                    fileName: "[project]/components/FileList.tsx",
                                    lineNumber: 207,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                    children: new Date(file.modifiedAt).toLocaleDateString()
                                }, void 0, false, {
                                    fileName: "[project]/components/FileList.tsx",
                                    lineNumber: 208,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                    children: formatSize(file.sizeBytes)
                                }, void 0, false, {
                                    fileName: "[project]/components/FileList.tsx",
                                    lineNumber: 209,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$table$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TableCell"], {
                                    onClick: (e)=>e.stopPropagation(),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenu"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuTrigger"], {
                                                asChild: true,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                    variant: "ghost",
                                                    className: "h-8 w-8 p-0",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "sr-only",
                                                            children: "Open menu"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FileList.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 45
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2d$vertical$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreVertical$3e$__["MoreVertical"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FileList.tsx",
                                                            lineNumber: 215,
                                                            columnNumber: 45
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/FileList.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 41
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 212,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuContent"], {
                                                align: "end",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: ()=>onShare(file),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileList.tsx",
                                                                lineNumber: 220,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Share"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 219,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: ()=>onDownload(file),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileList.tsx",
                                                                lineNumber: 223,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Download"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 222,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: ()=>onRename(file.id),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileList.tsx",
                                                                lineNumber: 226,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Rename"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 225,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$move$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Move$3e$__["Move"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileList.tsx",
                                                                lineNumber: 229,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Move"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 228,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: ()=>onCopyPath(file),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileList.tsx",
                                                                lineNumber: 232,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Copy Path"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 231,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 234,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        onClick: (e)=>{
                                                            e.stopPropagation();
                                                            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])("Permissions", {
                                                                description: file.permissions
                                                            });
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileList.tsx",
                                                                lineNumber: 239,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Permissions"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 235,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuSeparator"], {}, void 0, false, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 241,
                                                        columnNumber: 41
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dropdown$2d$menu$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DropdownMenuItem"], {
                                                        className: "text-red-600",
                                                        onClick: ()=>onDelete(file.id),
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "mr-2 h-4 w-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileList.tsx",
                                                                lineNumber: 243,
                                                                columnNumber: 45
                                                            }, this),
                                                            " Delete"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileList.tsx",
                                                        lineNumber: 242,
                                                        columnNumber: 41
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileList.tsx",
                                                lineNumber: 218,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FileList.tsx",
                                        lineNumber: 211,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/FileList.tsx",
                                    lineNumber: 210,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, file.id, true, {
                            fileName: "[project]/components/FileList.tsx",
                            lineNumber: 182,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/components/FileList.tsx",
                    lineNumber: 180,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/FileList.tsx",
            lineNumber: 162,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/FileList.tsx",
        lineNumber: 161,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/ui/sheet.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Sheet",
    ()=>Sheet,
    "SheetClose",
    ()=>SheetClose,
    "SheetContent",
    ()=>SheetContent,
    "SheetDescription",
    ()=>SheetDescription,
    "SheetFooter",
    ()=>SheetFooter,
    "SheetHeader",
    ()=>SheetHeader,
    "SheetTitle",
    ()=>SheetTitle,
    "SheetTrigger",
    ()=>SheetTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Sheet({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "sheet",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
function SheetTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "sheet-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 16,
        columnNumber: 10
    }, this);
}
function SheetClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "sheet-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 22,
        columnNumber: 10
    }, this);
}
function SheetPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "sheet-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 28,
        columnNumber: 10
    }, this);
}
function SheetOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "sheet-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SheetContent({ className, children, side = 'right', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetPortal, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SheetOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 57,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "sheet-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500', side === 'right' && 'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm', side === 'left' && 'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm', side === 'top' && 'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b', side === 'bottom' && 'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t', className),
                ...props,
                children: [
                    children,
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {
                                className: "size-4"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 76,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/sheet.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/sheet.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/sheet.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 56,
        columnNumber: 5
    }, this);
}
function SheetHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-1.5 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
function SheetFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "sheet-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('mt-auto flex flex-col gap-2 p-4', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
function SheetTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "sheet-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-foreground font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 109,
        columnNumber: 5
    }, this);
}
function SheetDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "sheet-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/sheet.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/separator.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Separator",
    ()=>Separator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-separator/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Separator({ className, orientation = 'horizontal', decorative = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$separator$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "separator",
        decorative: decorative,
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/separator.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/app/data:8be4d9 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40d16576a1197cb79f87d426537e25047357caad19":"getFileShares"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getFileShares",
    ()=>getFileShares
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getFileShares = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40d16576a1197cb79f87d426537e25047357caad19", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFileShares"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBvcyBmcm9tICdvcydcbmltcG9ydCB7IEZpbGVJdGVtIH0gZnJvbSAnQC9saWIvbW9ja0RhdGEnXG5cbmNvbnN0IEJBU0VfUEFUSCA9IG9zLmhvbWVkaXIoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZXMoY3VycmVudFBhdGhTZWdtZW50czogc3RyaW5nW10pOiBQcm9taXNlPEZpbGVJdGVtW10+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLmpvaW4oLi4uY3VycmVudFBhdGhTZWdtZW50cylcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oQkFTRV9QQVRILCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2s6IEVuc3VyZSB3ZSBkb24ndCBlc2NhcGUgaG9tZSBkaXJlY3RvcnkgKGJhc2ljIGNoZWNrKVxuICAgICAgICBpZiAoIWZ1bGxQYXRoLnN0YXJ0c1dpdGgoQkFTRV9QQVRIKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZDogQ2Fubm90IHRyYXZlcnNlIGFib3ZlIGhvbWUgZGlyZWN0b3J5XCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZnMucmVhZGRpcihmdWxsUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRyaWVzLm1hcChhc3luYyAoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnlQYXRoID0gcGF0aC5qb2luKGZ1bGxQYXRoLCBlbnRyeS5uYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChlbnRyeVBhdGgpXG5cbiAgICAgICAgICAgICAgICBsZXQgdHlwZTogRmlsZUl0ZW1bJ3R5cGUnXSA9ICdmaWxlJ1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB0eXBlID0gJ2ZvbGRlcidcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuemlwJykgfHwgZW50cnkubmFtZS5lbmRzV2l0aCgnLnRhcicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5neicpKSB0eXBlID0gJ2FyY2hpdmUnXG5cbiAgICAgICAgICAgICAgICAvLyBQZXJtaXNzaW9uIHN0cmluZyBzaW11bGF0aW9uIChOb2RlIGZzIGRvZXNuJ3QgZ2l2ZSBcInJ3eFwiIHN0cmluZyBkaXJlY3RseSBlYXNpbHkgYWNyb3NzIHBsYXRmb3JtcywgXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGNhbiBhcHByb3hpbWF0ZSBmcm9tIG1vZGUpXG4gICAgICAgICAgICAgICAgY29uc3QgcGVybXMgPSAoc3RhdHMubW9kZSAmIHBhcnNlSW50KCc3NzcnLCA4KSkudG9TdHJpbmcoOCkgLy8gc2ltcGxlIG9jdGFsXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLCAvLyBVc2UgcGF0aCBhcyBJRFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gIC8vIE1vY2tpbmcgdGhlIHJ3eCBzdHJpbmcgaXMgY29tcGxleCwgc2hvd2luZyBvY3RhbCBmb3Igbm93XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgZGlyZWN0b3J5OlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnXG5cbmNvbnN0IGV4ZWNBc3luYyA9IHV0aWwucHJvbWlzaWZ5KGV4ZWMpXG5cbmNvbnN0IHVzZXJuYW1lQ2FjaGUgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJuYW1lKHVpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodXNlcm5hbWVDYWNoZS5oYXModWlkKSkgcmV0dXJuIHVzZXJuYW1lQ2FjaGUuZ2V0KHVpZCkhXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNBc3luYyhgaWQgLW51ICR7dWlkfWApXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdGRvdXQudHJpbSgpXG4gICAgICAgIHVzZXJuYW1lQ2FjaGUuc2V0KHVpZCwgbmFtZSlcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodWlkKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXNlckV4aXN0cyh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY0FzeW5jKGBpZCAtdSAke3VzZXJuYW1lfWApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhcmVGaWxlKHNvdXJjZVBhdGg6IHN0cmluZywgdGFyZ2V0VXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIC8vIFZhbGlkYXRlIHRhcmdldCB1c2VyIGV4aXN0c1xuICAgIGlmICghYXdhaXQgdXNlckV4aXN0cyh0YXJnZXRVc2VybmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBVc2VyICcke3RhcmdldFVzZXJuYW1lfScgZG9lcyBub3QgZXhpc3Qgb24gdGhpcyBzeXN0ZW0uYCB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcbiAgICAgICAgY29uc3QgdGFyZ2V0VXNlckRpciA9IHBhdGguam9pbihzaGFyZWRSb290LCB0YXJnZXRVc2VybmFtZSlcblxuICAgICAgICAvLyBFbnN1cmUgc2hhcmVkIGRpcmVjdG9yaWVzIGV4aXN0XG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldFVzZXJEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3Qgc291cmNlTmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlUGF0aClcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSBwYXRoLmpvaW4odGFyZ2V0VXNlckRpciwgc291cmNlTmFtZSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZnMuc3ltbGluayhzb3VyY2VQYXRoLCBkZXN0UGF0aClcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBTdWNjZXNzZnVsbHkgc2hhcmVkIHdpdGggJHt0YXJnZXRVc2VybmFtZX1gIH1cbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgQWxyZWFkeSBzaGFyZWQgd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hhcmluZyBmaWxlOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gc2hhcmUgZmlsZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlU2hhcmVzKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcblxuICAgICAgICAvLyBTY2FuIGFsbCB1c2VyIGRpcmVjdG9yaWVzIGluIHNoYXJlZCByb290XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGlycyA9IGF3YWl0IGZzLnJlYWRkaXIoc2hhcmVkUm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICAgICAgICBjb25zdCBzaGFyZXM6IHN0cmluZ1tdID0gW11cblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlcy5wdXNoKHVzZXJEaXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90IGEgc3ltbGluayBvciBvdGhlciBlcnJvciwgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbm5vdCByZWFkIHVzZXIgZGlyLCBpZ25vcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2hhcmVzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFNoYXJlZCByb290IGxpa2VseSBkb2Vzbid0IGV4aXN0IHlldFxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGFyZWRGaWxlcyhjdXJyZW50UGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IFByb21pc2U8RmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gb3MudXNlckluZm8oKS51c2VybmFtZVxuICAgICAgICBjb25zdCBzaGFyZWRSb290ID0gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJ2hwY19zaGFyZWQnLCBjdXJyZW50VXNlcilcblxuICAgICAgICBhd2FpdCBmcy5ta2RpcihzaGFyZWRSb290LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5jdXJyZW50UGF0aFNlZ21lbnRzKVxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2tcbiAgICAgICAgaWYgKCFmdWxsUGF0aC5zdGFydHNXaXRoKHNoYXJlZFJvb3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkOiBDYW5ub3QgdHJhdmVyc2UgYWJvdmUgc2hhcmVkIHJvb3RcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGZ1bGxQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudHJpZXMubWFwKGFzeW5jIChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBwYXRoLmpvaW4oZnVsbFBhdGgsIGVudHJ5Lm5hbWUpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmcy5zdGF0KGVudHJ5UGF0aClcblxuICAgICAgICAgICAgICAgIGxldCB0eXBlOiBGaWxlSXRlbVsndHlwZSddID0gJ2ZpbGUnXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIHNoYXJlZCBmaWxlcywgd2UgbWlnaHQgd2FudCB0byBrbm93IHdobyBzaGFyZWQgaXQgKHRoZSBsaW5rIG93bmVyIHVzdWFsbHkpXG4gICAgICAgICAgICAgICAgLy8gYnV0IGxzdGF0IG9uIHRoZSBsaW5rIGl0c2VsZiBpbiB0aGUgcGFyZW50IGRpciBtaWdodCBiZSBuZWVkZWQgaWYgd2Ugd2FudCBsaW5rIGluZm8uXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vdywgcHJlc2VudGluZyB0aGUgdGFyZ2V0IGZpbGUgaW5mbyBpcyBmaW5lLlxuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHR5cGUgZXh0ZW5zaW9uIGxvZ2ljIHNhbWUgYXMgZ2V0RmlsZXNcbiAgICAgICAgICAgICAgICBpZiAoIWVudHJ5LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5zaCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5weScpKSB0eXBlID0gJ3NjcmlwdCdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLnppcCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy50YXInKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcuZ3onKSkgdHlwZSA9ICdhcmNoaXZlJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcm1zID0gKHN0YXRzLm1vZGUgJiBwYXJzZUludCgnNzc3JywgOCkpLnRvU3RyaW5nKDgpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgc2hhcmVkIGZpbGVzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoYXJlZEZpbGVJdGVtIGV4dGVuZHMgRmlsZUl0ZW0ge1xuICAgIHNoYXJlZFdpdGg6IHsgdXNlcm5hbWU6IHN0cmluZywgbGlua1BhdGg6IHN0cmluZyB9W11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE91dGdvaW5nU2hhcmVzKCk6IFByb21pc2U8U2hhcmVkRmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNoYXJlZFJvb3QgPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcpXG4gICAgICAgIGNvbnN0IG15SG9tZSA9IG9zLmhvbWVkaXIoKVxuXG4gICAgICAgIC8vIE1hcCBvZiBzb3VyY2VQYXRoIC0+IHsgc2hhcmVkV2l0aDogW10gfVxuICAgICAgICBjb25zdCBzaGFyZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCB7IHVzZXJuYW1lOiBzdHJpbmcsIGxpbmtQYXRoOiBzdHJpbmcgfVtdPigpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEaXJzID0gYXdhaXQgZnMucmVhZGRpcihzaGFyZWRSb290LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBpbnNpZGUgbXkgaG9tZSBkaXJlY3RvcnkgKG9yIGJlbG9uZ3MgdG8gbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWRlYWxseSBjaGVjayBpZiBJIG93biB0aGUgdGFyZ2V0IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnN0YXJ0c1dpdGgobXlIb21lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJlTWFwLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5zZXQodGFyZ2V0LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5nZXQodGFyZ2V0KT8ucHVzaCh7IHVzZXJuYW1lOiB1c2VyRGlyLm5hbWUsIGxpbmtQYXRoIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhIHN5bWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IG1hcCB0byBTaGFyZWRGaWxlSXRlbSBsaXN0XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzOiBTaGFyZWRGaWxlSXRlbVtdID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2ZpbGVQYXRoLCBzaGFyZXNdIG9mIHNoYXJlTWFwLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChmaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IEZpbGVJdGVtWyd0eXBlJ10gPSAnZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBuYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5jc3YnKSB8fCBuYW1lLmVuZHNXaXRoKCcuanNvbicpKSB0eXBlID0gJ2RhdGEnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy56aXAnKSB8fCBuYW1lLmVuZHNXaXRoKCcudGFyJykgfHwgbmFtZS5lbmRzV2l0aCgnLmd6JykpIHR5cGUgPSAnYXJjaGl2ZSdcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJtcyA9IChzdGF0cy5tb2RlICYgcGFyc2VJbnQoJzc3NycsIDgpKS50b1N0cmluZyg4KVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IGF3YWl0IGdldFVzZXJuYW1lKHN0YXRzLnVpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEF0OiBzdGF0cy5tdGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUJ5dGVzOiBzdGF0cy5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkV2l0aDogc2hhcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWxlIG1pZ2h0IGhhdmUgYmVlbiBkZWxldGVkIGJ1dCBsaW5rIGV4aXN0c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzXG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBvdXRnb2luZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNoYXJlRmlsZSh0YXJnZXRVc2VybmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkTGlua1BhdGggPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcsIHRhcmdldFVzZXJuYW1lLCBmaWxlTmFtZSlcbiAgICAgICAgYXdhaXQgZnMudW5saW5rKHNoYXJlZExpbmtQYXRoKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgVW5zaGFyZWQgJHtmaWxlTmFtZX0gd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gdW5zaGFyZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQZXJtaXNzaW9ucyhmaWxlUGF0aDogc3RyaW5nLCBtb2RlOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmcy5jaG1vZChmaWxlUGF0aCwgbW9kZSlcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYFVwZGF0ZWQgcGVybWlzc2lvbnMgZm9yICR7cGF0aC5iYXNlbmFtZShmaWxlUGF0aCl9YCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjaGFuZ2UgcGVybWlzc2lvbnNcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZVxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aFNlZ21lbnRzID0gSlNPTi5wYXJzZShmb3JtRGF0YS5nZXQoJ3BhdGhTZWdtZW50cycpIGFzIHN0cmluZylcblxuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGZpbGUgcHJvdmlkZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5qb2luKC4uLmN1cnJlbnRQYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aClcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShwYXRoLmpvaW4odGFyZ2V0RGlyLCBmaWxlLm5hbWUpLCBidWZmZXIpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBVcGxvYWRlZCAke2ZpbGUubmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIlVwbG9hZCBmYWlsZWRcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyKHBhdGhTZWdtZW50czogc3RyaW5nW10sIGZvbGRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5wYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aCwgZm9sZGVyTmFtZSlcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldERpcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENyZWF0ZWQgZm9sZGVyICR7Zm9sZGVyTmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXJcIiB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFzSHNCIn0=
}),
"[project]/components/DetailsDrawer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DetailsDrawer",
    ()=>DetailsDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/sheet.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/separator.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-text.js [app-ssr] (ecmascript) <export default as FileText>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/folder.js [app-ssr] (ecmascript) <export default as Folder>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/copy.js [app-ssr] (ecmascript) <export default as Copy>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/hard-drive.js [app-ssr] (ecmascript) <export default as HardDrive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-ssr] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/file-code.js [app-ssr] (ecmascript) <export default as FileCode>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/database.js [app-ssr] (ecmascript) <export default as Database>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/archive.js [app-ssr] (ecmascript) <export default as Archive>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-ssr] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$8be4d9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:8be4d9 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function DetailsDrawer({ isOpen, onClose, file, onCopyPath, onDownload, onShare }) {
    const [shares, setShares] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadShares = async ()=>{
            if (file && isOpen) {
                setShares([]);
                const sharedUsers = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$8be4d9__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFileShares"])(file.path);
                setShares(sharedUsers);
            }
        };
        loadShares();
    }, [
        file,
        isOpen
    ]);
    if (!file) return null;
    const getIcon = (type)=>{
        switch(type){
            case 'folder':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Folder$3e$__["Folder"], {
                    className: "h-10 w-10 text-blue-500"
                }, void 0, false, {
                    fileName: "[project]/components/DetailsDrawer.tsx",
                    lineNumber: 62,
                    columnNumber: 35
                }, this);
            case 'script':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$code$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileCode$3e$__["FileCode"], {
                    className: "h-10 w-10 text-green-500"
                }, void 0, false, {
                    fileName: "[project]/components/DetailsDrawer.tsx",
                    lineNumber: 63,
                    columnNumber: 35
                }, this);
            case 'data':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$database$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Database$3e$__["Database"], {
                    className: "h-10 w-10 text-yellow-500"
                }, void 0, false, {
                    fileName: "[project]/components/DetailsDrawer.tsx",
                    lineNumber: 64,
                    columnNumber: 33
                }, this);
            case 'archive':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                    className: "h-10 w-10 text-orange-500"
                }, void 0, false, {
                    fileName: "[project]/components/DetailsDrawer.tsx",
                    lineNumber: 65,
                    columnNumber: 36
                }, this);
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                    className: "h-10 w-10 text-gray-500"
                }, void 0, false, {
                    fileName: "[project]/components/DetailsDrawer.tsx",
                    lineNumber: 66,
                    columnNumber: 29
                }, this);
        }
    };
    const formatSize = (bytes)=>{
        if (bytes === 0) return "-";
        const k = 1024;
        const sizes = [
            'Bytes',
            'KB',
            'MB',
            'GB',
            'TB'
        ];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sheet"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetContent"], {
            className: "w-[400px] sm:w-[540px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetHeader"], {
                    className: "mb-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            getIcon(file.type),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetTitle"], {
                                        className: "text-xl break-all",
                                        children: file.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/DetailsDrawer.tsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetDescription"], {
                                        children: file.path
                                    }, void 0, false, {
                                        fileName: "[project]/components/DetailsDrawer.tsx",
                                        lineNumber: 86,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DetailsDrawer.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DetailsDrawer.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/DetailsDrawer.tsx",
                    lineNumber: 81,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    className: "flex-1 gap-2",
                                    onClick: ()=>onDownload(file),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 96,
                                            columnNumber: 29
                                        }, this),
                                        "Download"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DetailsDrawer.tsx",
                                    lineNumber: 95,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                    variant: "outline",
                                    className: "flex-1 gap-2",
                                    onClick: ()=>onCopyPath(file),
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$copy$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Copy$3e$__["Copy"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 100,
                                            columnNumber: 29
                                        }, this),
                                        "Copy Path"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DetailsDrawer.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DetailsDrawer.tsx",
                            lineNumber: 94,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "secondary",
                            className: "w-full gap-2",
                            onClick: ()=>onShare(file),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                    className: "h-4 w-4"
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailsDrawer.tsx",
                                    lineNumber: 105,
                                    columnNumber: 25
                                }, this),
                                "Share (Symlink)"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DetailsDrawer.tsx",
                            lineNumber: 104,
                            columnNumber: 21
                        }, this),
                        shares.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm font-medium mb-2",
                                    children: "Shared with"
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailsDrawer.tsx",
                                    lineNumber: 111,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex flex-wrap gap-2",
                                    children: shares.map((user)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-secondary text-secondary-foreground text-xs px-2.5 py-0.5 rounded-full flex items-center gap-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                                    className: "h-3 w-3"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DetailsDrawer.tsx",
                                                    lineNumber: 115,
                                                    columnNumber: 41
                                                }, this),
                                                user
                                            ]
                                        }, user, true, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 114,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailsDrawer.tsx",
                                    lineNumber: 112,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DetailsDrawer.tsx",
                            lineNumber: 110,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$separator$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {}, void 0, false, {
                            fileName: "[project]/components/DetailsDrawer.tsx",
                            lineNumber: 123,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "font-semibold text-sm text-muted-foreground uppercase tracking-wider",
                                    children: "Details"
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailsDrawer.tsx",
                                    lineNumber: 126,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-[24px_1fr_1fr] gap-4 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$hard$2d$drive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__HardDrive$3e$__["HardDrive"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 129,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Size"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 130,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: formatSize(file.sizeBytes)
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 131,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 133,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Owner / Group"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 134,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: [
                                                file.owner,
                                                " : ",
                                                file.group
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 137,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Modified"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 138,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm",
                                            children: new Date(file.modifiedAt).toLocaleDateString()
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 139,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 141,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Permissions"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 142,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            className: "text-xs bg-muted p-1 rounded font-mono",
                                            children: file.permissions
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 143,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2d$text$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FileText$3e$__["FileText"], {
                                            className: "h-4 w-4 text-muted-foreground"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 145,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm font-medium",
                                            children: "Type"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 146,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm capitalize",
                                            children: file.type
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailsDrawer.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DetailsDrawer.tsx",
                                    lineNumber: 128,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DetailsDrawer.tsx",
                            lineNumber: 125,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DetailsDrawer.tsx",
                    lineNumber: 93,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$sheet$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SheetFooter"], {
                    className: "mt-8"
                }, void 0, false, {
                    fileName: "[project]/components/DetailsDrawer.tsx",
                    lineNumber: 152,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DetailsDrawer.tsx",
            lineNumber: 80,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DetailsDrawer.tsx",
        lineNumber: 79,
        columnNumber: 9
    }, this);
}
}),
"[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Dialog",
    ()=>Dialog,
    "DialogClose",
    ()=>DialogClose,
    "DialogContent",
    ()=>DialogContent,
    "DialogDescription",
    ()=>DialogDescription,
    "DialogFooter",
    ()=>DialogFooter,
    "DialogHeader",
    ()=>DialogHeader,
    "DialogOverlay",
    ()=>DialogOverlay,
    "DialogPortal",
    ()=>DialogPortal,
    "DialogTitle",
    ()=>DialogTitle,
    "DialogTrigger",
    ()=>DialogTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as XIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Dialog({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "dialog",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function DialogTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "dialog-trigger",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function DialogPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        "data-slot": "dialog-portal",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function DialogClose({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
        "data-slot": "dialog-close",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 30,
        columnNumber: 10
    }, this);
}
function DialogOverlay({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Overlay"], {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
function DialogContent({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogPortal, {
        "data-slot": "dialog-portal",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(DialogOverlay, {}, void 0, false, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 59,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg', className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Close"], {
                        "data-slot": "dialog-close",
                        className: "ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__XIcon$3e$__["XIcon"], {}, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "sr-only",
                                children: "Close"
                            }, void 0, false, {
                                fileName: "[project]/components/ui/dialog.tsx",
                                lineNumber: 75,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ui/dialog.tsx",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ui/dialog.tsx",
                lineNumber: 60,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2 text-center sm:text-left', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 85,
        columnNumber: 5
    }, this);
}
function DialogFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col-reverse gap-2 sm:flex-row sm:justify-end', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
function DialogTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Title"], {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-lg leading-none font-semibold', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 111,
        columnNumber: 5
    }, this);
}
function DialogDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$dialog$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Description"], {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground text-sm', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/dialog.tsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/input.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Input",
    ()=>Input
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Input({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm', 'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]', 'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/input.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/label.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Label",
    ()=>Label
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-label/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Label({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$label$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/label.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ShareDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ShareDialog",
    ()=>ShareDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/dialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/label.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function ShareDialog({ isOpen, onClose, onConfirm, file }) {
    const [username, setUsername] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Reset username when dialog opens
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) setUsername("");
    }, [
        isOpen
    ]);
    const handleConfirm = async ()=>{
        if (!username.trim()) return;
        setIsLoading(true);
        try {
            await onConfirm(username);
            onClose();
        } catch (error) {
        // Error handling should be done by parent (e.g. showing toast), 
        // but we ensure we stop loading state if error happens here or just finish.
        // Actually parent catches error for Toast, so we usually just finish.
        } finally{
            setIsLoading(false);
        }
    };
    if (!file) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Dialog"], {
        open: isOpen,
        onOpenChange: onClose,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogContent"], {
            className: "sm:max-w-[425px]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogTitle"], {
                            children: "Share File"
                        }, void 0, false, {
                            fileName: "[project]/components/ShareDialog.tsx",
                            lineNumber: 55,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogDescription"], {
                            children: [
                                "Create a symlink for ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                    children: file.name
                                }, void 0, false, {
                                    fileName: "[project]/components/ShareDialog.tsx",
                                    lineNumber: 57,
                                    columnNumber: 46
                                }, this),
                                " in another user's shared folder."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ShareDialog.tsx",
                            lineNumber: 56,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ShareDialog.tsx",
                    lineNumber: 54,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "grid gap-4 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-4 items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$label$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
                                htmlFor: "username",
                                className: "text-right",
                                children: "Username"
                            }, void 0, false, {
                                fileName: "[project]/components/ShareDialog.tsx",
                                lineNumber: 62,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                id: "username",
                                value: username,
                                onChange: (e)=>setUsername(e.target.value),
                                className: "col-span-3",
                                placeholder: "e.g. alice",
                                onKeyDown: (e)=>{
                                    if (e.key === "Enter") handleConfirm();
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/ShareDialog.tsx",
                                lineNumber: 65,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ShareDialog.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ShareDialog.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$dialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DialogFooter"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            variant: "outline",
                            onClick: onClose,
                            disabled: isLoading,
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/components/ShareDialog.tsx",
                            lineNumber: 78,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                            onClick: handleConfirm,
                            disabled: !username.trim() || isLoading,
                            children: isLoading ? "Sharing..." : "Share"
                        }, void 0, false, {
                            fileName: "[project]/components/ShareDialog.tsx",
                            lineNumber: 81,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ShareDialog.tsx",
                    lineNumber: 77,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ShareDialog.tsx",
            lineNumber: 53,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ShareDialog.tsx",
        lineNumber: 52,
        columnNumber: 9
    }, this);
}
}),
"[project]/app/data:a9be73 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4063d695a9e853e52488e4eae429ab5f3c0eb3e216":"getFiles"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getFiles",
    ()=>getFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getFiles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4063d695a9e853e52488e4eae429ab5f3c0eb3e216", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getFiles"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBvcyBmcm9tICdvcydcbmltcG9ydCB7IEZpbGVJdGVtIH0gZnJvbSAnQC9saWIvbW9ja0RhdGEnXG5cbmNvbnN0IEJBU0VfUEFUSCA9IG9zLmhvbWVkaXIoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZXMoY3VycmVudFBhdGhTZWdtZW50czogc3RyaW5nW10pOiBQcm9taXNlPEZpbGVJdGVtW10+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLmpvaW4oLi4uY3VycmVudFBhdGhTZWdtZW50cylcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oQkFTRV9QQVRILCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2s6IEVuc3VyZSB3ZSBkb24ndCBlc2NhcGUgaG9tZSBkaXJlY3RvcnkgKGJhc2ljIGNoZWNrKVxuICAgICAgICBpZiAoIWZ1bGxQYXRoLnN0YXJ0c1dpdGgoQkFTRV9QQVRIKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZDogQ2Fubm90IHRyYXZlcnNlIGFib3ZlIGhvbWUgZGlyZWN0b3J5XCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZnMucmVhZGRpcihmdWxsUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRyaWVzLm1hcChhc3luYyAoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnlQYXRoID0gcGF0aC5qb2luKGZ1bGxQYXRoLCBlbnRyeS5uYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChlbnRyeVBhdGgpXG5cbiAgICAgICAgICAgICAgICBsZXQgdHlwZTogRmlsZUl0ZW1bJ3R5cGUnXSA9ICdmaWxlJ1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB0eXBlID0gJ2ZvbGRlcidcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuemlwJykgfHwgZW50cnkubmFtZS5lbmRzV2l0aCgnLnRhcicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5neicpKSB0eXBlID0gJ2FyY2hpdmUnXG5cbiAgICAgICAgICAgICAgICAvLyBQZXJtaXNzaW9uIHN0cmluZyBzaW11bGF0aW9uIChOb2RlIGZzIGRvZXNuJ3QgZ2l2ZSBcInJ3eFwiIHN0cmluZyBkaXJlY3RseSBlYXNpbHkgYWNyb3NzIHBsYXRmb3JtcywgXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGNhbiBhcHByb3hpbWF0ZSBmcm9tIG1vZGUpXG4gICAgICAgICAgICAgICAgY29uc3QgcGVybXMgPSAoc3RhdHMubW9kZSAmIHBhcnNlSW50KCc3NzcnLCA4KSkudG9TdHJpbmcoOCkgLy8gc2ltcGxlIG9jdGFsXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLCAvLyBVc2UgcGF0aCBhcyBJRFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gIC8vIE1vY2tpbmcgdGhlIHJ3eCBzdHJpbmcgaXMgY29tcGxleCwgc2hvd2luZyBvY3RhbCBmb3Igbm93XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgZGlyZWN0b3J5OlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnXG5cbmNvbnN0IGV4ZWNBc3luYyA9IHV0aWwucHJvbWlzaWZ5KGV4ZWMpXG5cbmNvbnN0IHVzZXJuYW1lQ2FjaGUgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJuYW1lKHVpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodXNlcm5hbWVDYWNoZS5oYXModWlkKSkgcmV0dXJuIHVzZXJuYW1lQ2FjaGUuZ2V0KHVpZCkhXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNBc3luYyhgaWQgLW51ICR7dWlkfWApXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdGRvdXQudHJpbSgpXG4gICAgICAgIHVzZXJuYW1lQ2FjaGUuc2V0KHVpZCwgbmFtZSlcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodWlkKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXNlckV4aXN0cyh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY0FzeW5jKGBpZCAtdSAke3VzZXJuYW1lfWApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhcmVGaWxlKHNvdXJjZVBhdGg6IHN0cmluZywgdGFyZ2V0VXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIC8vIFZhbGlkYXRlIHRhcmdldCB1c2VyIGV4aXN0c1xuICAgIGlmICghYXdhaXQgdXNlckV4aXN0cyh0YXJnZXRVc2VybmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBVc2VyICcke3RhcmdldFVzZXJuYW1lfScgZG9lcyBub3QgZXhpc3Qgb24gdGhpcyBzeXN0ZW0uYCB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcbiAgICAgICAgY29uc3QgdGFyZ2V0VXNlckRpciA9IHBhdGguam9pbihzaGFyZWRSb290LCB0YXJnZXRVc2VybmFtZSlcblxuICAgICAgICAvLyBFbnN1cmUgc2hhcmVkIGRpcmVjdG9yaWVzIGV4aXN0XG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldFVzZXJEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3Qgc291cmNlTmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlUGF0aClcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSBwYXRoLmpvaW4odGFyZ2V0VXNlckRpciwgc291cmNlTmFtZSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZnMuc3ltbGluayhzb3VyY2VQYXRoLCBkZXN0UGF0aClcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBTdWNjZXNzZnVsbHkgc2hhcmVkIHdpdGggJHt0YXJnZXRVc2VybmFtZX1gIH1cbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgQWxyZWFkeSBzaGFyZWQgd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hhcmluZyBmaWxlOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gc2hhcmUgZmlsZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlU2hhcmVzKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcblxuICAgICAgICAvLyBTY2FuIGFsbCB1c2VyIGRpcmVjdG9yaWVzIGluIHNoYXJlZCByb290XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGlycyA9IGF3YWl0IGZzLnJlYWRkaXIoc2hhcmVkUm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICAgICAgICBjb25zdCBzaGFyZXM6IHN0cmluZ1tdID0gW11cblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlcy5wdXNoKHVzZXJEaXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90IGEgc3ltbGluayBvciBvdGhlciBlcnJvciwgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbm5vdCByZWFkIHVzZXIgZGlyLCBpZ25vcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2hhcmVzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFNoYXJlZCByb290IGxpa2VseSBkb2Vzbid0IGV4aXN0IHlldFxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGFyZWRGaWxlcyhjdXJyZW50UGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IFByb21pc2U8RmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gb3MudXNlckluZm8oKS51c2VybmFtZVxuICAgICAgICBjb25zdCBzaGFyZWRSb290ID0gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJ2hwY19zaGFyZWQnLCBjdXJyZW50VXNlcilcblxuICAgICAgICBhd2FpdCBmcy5ta2RpcihzaGFyZWRSb290LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5jdXJyZW50UGF0aFNlZ21lbnRzKVxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2tcbiAgICAgICAgaWYgKCFmdWxsUGF0aC5zdGFydHNXaXRoKHNoYXJlZFJvb3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkOiBDYW5ub3QgdHJhdmVyc2UgYWJvdmUgc2hhcmVkIHJvb3RcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGZ1bGxQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudHJpZXMubWFwKGFzeW5jIChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBwYXRoLmpvaW4oZnVsbFBhdGgsIGVudHJ5Lm5hbWUpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmcy5zdGF0KGVudHJ5UGF0aClcblxuICAgICAgICAgICAgICAgIGxldCB0eXBlOiBGaWxlSXRlbVsndHlwZSddID0gJ2ZpbGUnXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIHNoYXJlZCBmaWxlcywgd2UgbWlnaHQgd2FudCB0byBrbm93IHdobyBzaGFyZWQgaXQgKHRoZSBsaW5rIG93bmVyIHVzdWFsbHkpXG4gICAgICAgICAgICAgICAgLy8gYnV0IGxzdGF0IG9uIHRoZSBsaW5rIGl0c2VsZiBpbiB0aGUgcGFyZW50IGRpciBtaWdodCBiZSBuZWVkZWQgaWYgd2Ugd2FudCBsaW5rIGluZm8uXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vdywgcHJlc2VudGluZyB0aGUgdGFyZ2V0IGZpbGUgaW5mbyBpcyBmaW5lLlxuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHR5cGUgZXh0ZW5zaW9uIGxvZ2ljIHNhbWUgYXMgZ2V0RmlsZXNcbiAgICAgICAgICAgICAgICBpZiAoIWVudHJ5LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5zaCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5weScpKSB0eXBlID0gJ3NjcmlwdCdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLnppcCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy50YXInKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcuZ3onKSkgdHlwZSA9ICdhcmNoaXZlJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcm1zID0gKHN0YXRzLm1vZGUgJiBwYXJzZUludCgnNzc3JywgOCkpLnRvU3RyaW5nKDgpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgc2hhcmVkIGZpbGVzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoYXJlZEZpbGVJdGVtIGV4dGVuZHMgRmlsZUl0ZW0ge1xuICAgIHNoYXJlZFdpdGg6IHsgdXNlcm5hbWU6IHN0cmluZywgbGlua1BhdGg6IHN0cmluZyB9W11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE91dGdvaW5nU2hhcmVzKCk6IFByb21pc2U8U2hhcmVkRmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNoYXJlZFJvb3QgPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcpXG4gICAgICAgIGNvbnN0IG15SG9tZSA9IG9zLmhvbWVkaXIoKVxuXG4gICAgICAgIC8vIE1hcCBvZiBzb3VyY2VQYXRoIC0+IHsgc2hhcmVkV2l0aDogW10gfVxuICAgICAgICBjb25zdCBzaGFyZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCB7IHVzZXJuYW1lOiBzdHJpbmcsIGxpbmtQYXRoOiBzdHJpbmcgfVtdPigpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEaXJzID0gYXdhaXQgZnMucmVhZGRpcihzaGFyZWRSb290LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBpbnNpZGUgbXkgaG9tZSBkaXJlY3RvcnkgKG9yIGJlbG9uZ3MgdG8gbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWRlYWxseSBjaGVjayBpZiBJIG93biB0aGUgdGFyZ2V0IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnN0YXJ0c1dpdGgobXlIb21lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJlTWFwLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5zZXQodGFyZ2V0LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5nZXQodGFyZ2V0KT8ucHVzaCh7IHVzZXJuYW1lOiB1c2VyRGlyLm5hbWUsIGxpbmtQYXRoIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhIHN5bWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IG1hcCB0byBTaGFyZWRGaWxlSXRlbSBsaXN0XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzOiBTaGFyZWRGaWxlSXRlbVtdID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2ZpbGVQYXRoLCBzaGFyZXNdIG9mIHNoYXJlTWFwLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChmaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IEZpbGVJdGVtWyd0eXBlJ10gPSAnZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBuYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5jc3YnKSB8fCBuYW1lLmVuZHNXaXRoKCcuanNvbicpKSB0eXBlID0gJ2RhdGEnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy56aXAnKSB8fCBuYW1lLmVuZHNXaXRoKCcudGFyJykgfHwgbmFtZS5lbmRzV2l0aCgnLmd6JykpIHR5cGUgPSAnYXJjaGl2ZSdcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJtcyA9IChzdGF0cy5tb2RlICYgcGFyc2VJbnQoJzc3NycsIDgpKS50b1N0cmluZyg4KVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IGF3YWl0IGdldFVzZXJuYW1lKHN0YXRzLnVpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEF0OiBzdGF0cy5tdGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUJ5dGVzOiBzdGF0cy5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkV2l0aDogc2hhcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWxlIG1pZ2h0IGhhdmUgYmVlbiBkZWxldGVkIGJ1dCBsaW5rIGV4aXN0c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzXG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBvdXRnb2luZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNoYXJlRmlsZSh0YXJnZXRVc2VybmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkTGlua1BhdGggPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcsIHRhcmdldFVzZXJuYW1lLCBmaWxlTmFtZSlcbiAgICAgICAgYXdhaXQgZnMudW5saW5rKHNoYXJlZExpbmtQYXRoKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgVW5zaGFyZWQgJHtmaWxlTmFtZX0gd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gdW5zaGFyZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQZXJtaXNzaW9ucyhmaWxlUGF0aDogc3RyaW5nLCBtb2RlOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmcy5jaG1vZChmaWxlUGF0aCwgbW9kZSlcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYFVwZGF0ZWQgcGVybWlzc2lvbnMgZm9yICR7cGF0aC5iYXNlbmFtZShmaWxlUGF0aCl9YCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjaGFuZ2UgcGVybWlzc2lvbnNcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZVxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aFNlZ21lbnRzID0gSlNPTi5wYXJzZShmb3JtRGF0YS5nZXQoJ3BhdGhTZWdtZW50cycpIGFzIHN0cmluZylcblxuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGZpbGUgcHJvdmlkZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5qb2luKC4uLmN1cnJlbnRQYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aClcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShwYXRoLmpvaW4odGFyZ2V0RGlyLCBmaWxlLm5hbWUpLCBidWZmZXIpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBVcGxvYWRlZCAke2ZpbGUubmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIlVwbG9hZCBmYWlsZWRcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyKHBhdGhTZWdtZW50czogc3RyaW5nW10sIGZvbGRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5wYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aCwgZm9sZGVyTmFtZSlcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldERpcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENyZWF0ZWQgZm9sZGVyICR7Zm9sZGVyTmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXJcIiB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJnUkFTc0IifQ==
}),
"[project]/app/data:531425 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60c646fe7379a2a2d65c23cd27673dff057d09f365":"shareFile"},"app/actions.ts",""] */ __turbopack_context__.s([
    "shareFile",
    ()=>shareFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var shareFile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60c646fe7379a2a2d65c23cd27673dff057d09f365", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "shareFile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBvcyBmcm9tICdvcydcbmltcG9ydCB7IEZpbGVJdGVtIH0gZnJvbSAnQC9saWIvbW9ja0RhdGEnXG5cbmNvbnN0IEJBU0VfUEFUSCA9IG9zLmhvbWVkaXIoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZXMoY3VycmVudFBhdGhTZWdtZW50czogc3RyaW5nW10pOiBQcm9taXNlPEZpbGVJdGVtW10+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLmpvaW4oLi4uY3VycmVudFBhdGhTZWdtZW50cylcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oQkFTRV9QQVRILCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2s6IEVuc3VyZSB3ZSBkb24ndCBlc2NhcGUgaG9tZSBkaXJlY3RvcnkgKGJhc2ljIGNoZWNrKVxuICAgICAgICBpZiAoIWZ1bGxQYXRoLnN0YXJ0c1dpdGgoQkFTRV9QQVRIKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZDogQ2Fubm90IHRyYXZlcnNlIGFib3ZlIGhvbWUgZGlyZWN0b3J5XCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZnMucmVhZGRpcihmdWxsUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRyaWVzLm1hcChhc3luYyAoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnlQYXRoID0gcGF0aC5qb2luKGZ1bGxQYXRoLCBlbnRyeS5uYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChlbnRyeVBhdGgpXG5cbiAgICAgICAgICAgICAgICBsZXQgdHlwZTogRmlsZUl0ZW1bJ3R5cGUnXSA9ICdmaWxlJ1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB0eXBlID0gJ2ZvbGRlcidcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuemlwJykgfHwgZW50cnkubmFtZS5lbmRzV2l0aCgnLnRhcicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5neicpKSB0eXBlID0gJ2FyY2hpdmUnXG5cbiAgICAgICAgICAgICAgICAvLyBQZXJtaXNzaW9uIHN0cmluZyBzaW11bGF0aW9uIChOb2RlIGZzIGRvZXNuJ3QgZ2l2ZSBcInJ3eFwiIHN0cmluZyBkaXJlY3RseSBlYXNpbHkgYWNyb3NzIHBsYXRmb3JtcywgXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGNhbiBhcHByb3hpbWF0ZSBmcm9tIG1vZGUpXG4gICAgICAgICAgICAgICAgY29uc3QgcGVybXMgPSAoc3RhdHMubW9kZSAmIHBhcnNlSW50KCc3NzcnLCA4KSkudG9TdHJpbmcoOCkgLy8gc2ltcGxlIG9jdGFsXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLCAvLyBVc2UgcGF0aCBhcyBJRFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gIC8vIE1vY2tpbmcgdGhlIHJ3eCBzdHJpbmcgaXMgY29tcGxleCwgc2hvd2luZyBvY3RhbCBmb3Igbm93XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgZGlyZWN0b3J5OlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnXG5cbmNvbnN0IGV4ZWNBc3luYyA9IHV0aWwucHJvbWlzaWZ5KGV4ZWMpXG5cbmNvbnN0IHVzZXJuYW1lQ2FjaGUgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJuYW1lKHVpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodXNlcm5hbWVDYWNoZS5oYXModWlkKSkgcmV0dXJuIHVzZXJuYW1lQ2FjaGUuZ2V0KHVpZCkhXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNBc3luYyhgaWQgLW51ICR7dWlkfWApXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdGRvdXQudHJpbSgpXG4gICAgICAgIHVzZXJuYW1lQ2FjaGUuc2V0KHVpZCwgbmFtZSlcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodWlkKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXNlckV4aXN0cyh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY0FzeW5jKGBpZCAtdSAke3VzZXJuYW1lfWApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhcmVGaWxlKHNvdXJjZVBhdGg6IHN0cmluZywgdGFyZ2V0VXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIC8vIFZhbGlkYXRlIHRhcmdldCB1c2VyIGV4aXN0c1xuICAgIGlmICghYXdhaXQgdXNlckV4aXN0cyh0YXJnZXRVc2VybmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBVc2VyICcke3RhcmdldFVzZXJuYW1lfScgZG9lcyBub3QgZXhpc3Qgb24gdGhpcyBzeXN0ZW0uYCB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcbiAgICAgICAgY29uc3QgdGFyZ2V0VXNlckRpciA9IHBhdGguam9pbihzaGFyZWRSb290LCB0YXJnZXRVc2VybmFtZSlcblxuICAgICAgICAvLyBFbnN1cmUgc2hhcmVkIGRpcmVjdG9yaWVzIGV4aXN0XG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldFVzZXJEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3Qgc291cmNlTmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlUGF0aClcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSBwYXRoLmpvaW4odGFyZ2V0VXNlckRpciwgc291cmNlTmFtZSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZnMuc3ltbGluayhzb3VyY2VQYXRoLCBkZXN0UGF0aClcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBTdWNjZXNzZnVsbHkgc2hhcmVkIHdpdGggJHt0YXJnZXRVc2VybmFtZX1gIH1cbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgQWxyZWFkeSBzaGFyZWQgd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hhcmluZyBmaWxlOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gc2hhcmUgZmlsZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlU2hhcmVzKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcblxuICAgICAgICAvLyBTY2FuIGFsbCB1c2VyIGRpcmVjdG9yaWVzIGluIHNoYXJlZCByb290XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGlycyA9IGF3YWl0IGZzLnJlYWRkaXIoc2hhcmVkUm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICAgICAgICBjb25zdCBzaGFyZXM6IHN0cmluZ1tdID0gW11cblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlcy5wdXNoKHVzZXJEaXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90IGEgc3ltbGluayBvciBvdGhlciBlcnJvciwgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbm5vdCByZWFkIHVzZXIgZGlyLCBpZ25vcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2hhcmVzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFNoYXJlZCByb290IGxpa2VseSBkb2Vzbid0IGV4aXN0IHlldFxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGFyZWRGaWxlcyhjdXJyZW50UGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IFByb21pc2U8RmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gb3MudXNlckluZm8oKS51c2VybmFtZVxuICAgICAgICBjb25zdCBzaGFyZWRSb290ID0gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJ2hwY19zaGFyZWQnLCBjdXJyZW50VXNlcilcblxuICAgICAgICBhd2FpdCBmcy5ta2RpcihzaGFyZWRSb290LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5jdXJyZW50UGF0aFNlZ21lbnRzKVxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2tcbiAgICAgICAgaWYgKCFmdWxsUGF0aC5zdGFydHNXaXRoKHNoYXJlZFJvb3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkOiBDYW5ub3QgdHJhdmVyc2UgYWJvdmUgc2hhcmVkIHJvb3RcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGZ1bGxQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudHJpZXMubWFwKGFzeW5jIChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBwYXRoLmpvaW4oZnVsbFBhdGgsIGVudHJ5Lm5hbWUpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmcy5zdGF0KGVudHJ5UGF0aClcblxuICAgICAgICAgICAgICAgIGxldCB0eXBlOiBGaWxlSXRlbVsndHlwZSddID0gJ2ZpbGUnXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIHNoYXJlZCBmaWxlcywgd2UgbWlnaHQgd2FudCB0byBrbm93IHdobyBzaGFyZWQgaXQgKHRoZSBsaW5rIG93bmVyIHVzdWFsbHkpXG4gICAgICAgICAgICAgICAgLy8gYnV0IGxzdGF0IG9uIHRoZSBsaW5rIGl0c2VsZiBpbiB0aGUgcGFyZW50IGRpciBtaWdodCBiZSBuZWVkZWQgaWYgd2Ugd2FudCBsaW5rIGluZm8uXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vdywgcHJlc2VudGluZyB0aGUgdGFyZ2V0IGZpbGUgaW5mbyBpcyBmaW5lLlxuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHR5cGUgZXh0ZW5zaW9uIGxvZ2ljIHNhbWUgYXMgZ2V0RmlsZXNcbiAgICAgICAgICAgICAgICBpZiAoIWVudHJ5LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5zaCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5weScpKSB0eXBlID0gJ3NjcmlwdCdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLnppcCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy50YXInKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcuZ3onKSkgdHlwZSA9ICdhcmNoaXZlJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcm1zID0gKHN0YXRzLm1vZGUgJiBwYXJzZUludCgnNzc3JywgOCkpLnRvU3RyaW5nKDgpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgc2hhcmVkIGZpbGVzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoYXJlZEZpbGVJdGVtIGV4dGVuZHMgRmlsZUl0ZW0ge1xuICAgIHNoYXJlZFdpdGg6IHsgdXNlcm5hbWU6IHN0cmluZywgbGlua1BhdGg6IHN0cmluZyB9W11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE91dGdvaW5nU2hhcmVzKCk6IFByb21pc2U8U2hhcmVkRmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNoYXJlZFJvb3QgPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcpXG4gICAgICAgIGNvbnN0IG15SG9tZSA9IG9zLmhvbWVkaXIoKVxuXG4gICAgICAgIC8vIE1hcCBvZiBzb3VyY2VQYXRoIC0+IHsgc2hhcmVkV2l0aDogW10gfVxuICAgICAgICBjb25zdCBzaGFyZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCB7IHVzZXJuYW1lOiBzdHJpbmcsIGxpbmtQYXRoOiBzdHJpbmcgfVtdPigpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEaXJzID0gYXdhaXQgZnMucmVhZGRpcihzaGFyZWRSb290LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBpbnNpZGUgbXkgaG9tZSBkaXJlY3RvcnkgKG9yIGJlbG9uZ3MgdG8gbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWRlYWxseSBjaGVjayBpZiBJIG93biB0aGUgdGFyZ2V0IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnN0YXJ0c1dpdGgobXlIb21lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJlTWFwLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5zZXQodGFyZ2V0LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5nZXQodGFyZ2V0KT8ucHVzaCh7IHVzZXJuYW1lOiB1c2VyRGlyLm5hbWUsIGxpbmtQYXRoIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhIHN5bWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IG1hcCB0byBTaGFyZWRGaWxlSXRlbSBsaXN0XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzOiBTaGFyZWRGaWxlSXRlbVtdID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2ZpbGVQYXRoLCBzaGFyZXNdIG9mIHNoYXJlTWFwLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChmaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IEZpbGVJdGVtWyd0eXBlJ10gPSAnZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBuYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5jc3YnKSB8fCBuYW1lLmVuZHNXaXRoKCcuanNvbicpKSB0eXBlID0gJ2RhdGEnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy56aXAnKSB8fCBuYW1lLmVuZHNXaXRoKCcudGFyJykgfHwgbmFtZS5lbmRzV2l0aCgnLmd6JykpIHR5cGUgPSAnYXJjaGl2ZSdcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJtcyA9IChzdGF0cy5tb2RlICYgcGFyc2VJbnQoJzc3NycsIDgpKS50b1N0cmluZyg4KVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IGF3YWl0IGdldFVzZXJuYW1lKHN0YXRzLnVpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEF0OiBzdGF0cy5tdGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUJ5dGVzOiBzdGF0cy5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkV2l0aDogc2hhcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWxlIG1pZ2h0IGhhdmUgYmVlbiBkZWxldGVkIGJ1dCBsaW5rIGV4aXN0c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzXG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBvdXRnb2luZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNoYXJlRmlsZSh0YXJnZXRVc2VybmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkTGlua1BhdGggPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcsIHRhcmdldFVzZXJuYW1lLCBmaWxlTmFtZSlcbiAgICAgICAgYXdhaXQgZnMudW5saW5rKHNoYXJlZExpbmtQYXRoKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgVW5zaGFyZWQgJHtmaWxlTmFtZX0gd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gdW5zaGFyZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQZXJtaXNzaW9ucyhmaWxlUGF0aDogc3RyaW5nLCBtb2RlOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmcy5jaG1vZChmaWxlUGF0aCwgbW9kZSlcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYFVwZGF0ZWQgcGVybWlzc2lvbnMgZm9yICR7cGF0aC5iYXNlbmFtZShmaWxlUGF0aCl9YCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjaGFuZ2UgcGVybWlzc2lvbnNcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZVxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aFNlZ21lbnRzID0gSlNPTi5wYXJzZShmb3JtRGF0YS5nZXQoJ3BhdGhTZWdtZW50cycpIGFzIHN0cmluZylcblxuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGZpbGUgcHJvdmlkZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5qb2luKC4uLmN1cnJlbnRQYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aClcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShwYXRoLmpvaW4odGFyZ2V0RGlyLCBmaWxlLm5hbWUpLCBidWZmZXIpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBVcGxvYWRlZCAke2ZpbGUubmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIlVwbG9hZCBmYWlsZWRcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyKHBhdGhTZWdtZW50czogc3RyaW5nW10sIGZvbGRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5wYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aCwgZm9sZGVyTmFtZSlcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldERpcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENyZWF0ZWQgZm9sZGVyICR7Zm9sZGVyTmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXJcIiB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJpUkF1RnNCIn0=
}),
"[project]/app/data:5264fa [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40099588628f710f4d9e22c199e98f338eb465781b":"getSharedFiles"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getSharedFiles",
    ()=>getSharedFiles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getSharedFiles = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40099588628f710f4d9e22c199e98f338eb465781b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getSharedFiles"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBvcyBmcm9tICdvcydcbmltcG9ydCB7IEZpbGVJdGVtIH0gZnJvbSAnQC9saWIvbW9ja0RhdGEnXG5cbmNvbnN0IEJBU0VfUEFUSCA9IG9zLmhvbWVkaXIoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZXMoY3VycmVudFBhdGhTZWdtZW50czogc3RyaW5nW10pOiBQcm9taXNlPEZpbGVJdGVtW10+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLmpvaW4oLi4uY3VycmVudFBhdGhTZWdtZW50cylcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oQkFTRV9QQVRILCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2s6IEVuc3VyZSB3ZSBkb24ndCBlc2NhcGUgaG9tZSBkaXJlY3RvcnkgKGJhc2ljIGNoZWNrKVxuICAgICAgICBpZiAoIWZ1bGxQYXRoLnN0YXJ0c1dpdGgoQkFTRV9QQVRIKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZDogQ2Fubm90IHRyYXZlcnNlIGFib3ZlIGhvbWUgZGlyZWN0b3J5XCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZnMucmVhZGRpcihmdWxsUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRyaWVzLm1hcChhc3luYyAoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnlQYXRoID0gcGF0aC5qb2luKGZ1bGxQYXRoLCBlbnRyeS5uYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChlbnRyeVBhdGgpXG5cbiAgICAgICAgICAgICAgICBsZXQgdHlwZTogRmlsZUl0ZW1bJ3R5cGUnXSA9ICdmaWxlJ1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB0eXBlID0gJ2ZvbGRlcidcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuemlwJykgfHwgZW50cnkubmFtZS5lbmRzV2l0aCgnLnRhcicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5neicpKSB0eXBlID0gJ2FyY2hpdmUnXG5cbiAgICAgICAgICAgICAgICAvLyBQZXJtaXNzaW9uIHN0cmluZyBzaW11bGF0aW9uIChOb2RlIGZzIGRvZXNuJ3QgZ2l2ZSBcInJ3eFwiIHN0cmluZyBkaXJlY3RseSBlYXNpbHkgYWNyb3NzIHBsYXRmb3JtcywgXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGNhbiBhcHByb3hpbWF0ZSBmcm9tIG1vZGUpXG4gICAgICAgICAgICAgICAgY29uc3QgcGVybXMgPSAoc3RhdHMubW9kZSAmIHBhcnNlSW50KCc3NzcnLCA4KSkudG9TdHJpbmcoOCkgLy8gc2ltcGxlIG9jdGFsXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLCAvLyBVc2UgcGF0aCBhcyBJRFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gIC8vIE1vY2tpbmcgdGhlIHJ3eCBzdHJpbmcgaXMgY29tcGxleCwgc2hvd2luZyBvY3RhbCBmb3Igbm93XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgZGlyZWN0b3J5OlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnXG5cbmNvbnN0IGV4ZWNBc3luYyA9IHV0aWwucHJvbWlzaWZ5KGV4ZWMpXG5cbmNvbnN0IHVzZXJuYW1lQ2FjaGUgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJuYW1lKHVpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodXNlcm5hbWVDYWNoZS5oYXModWlkKSkgcmV0dXJuIHVzZXJuYW1lQ2FjaGUuZ2V0KHVpZCkhXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNBc3luYyhgaWQgLW51ICR7dWlkfWApXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdGRvdXQudHJpbSgpXG4gICAgICAgIHVzZXJuYW1lQ2FjaGUuc2V0KHVpZCwgbmFtZSlcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodWlkKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXNlckV4aXN0cyh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY0FzeW5jKGBpZCAtdSAke3VzZXJuYW1lfWApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhcmVGaWxlKHNvdXJjZVBhdGg6IHN0cmluZywgdGFyZ2V0VXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIC8vIFZhbGlkYXRlIHRhcmdldCB1c2VyIGV4aXN0c1xuICAgIGlmICghYXdhaXQgdXNlckV4aXN0cyh0YXJnZXRVc2VybmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBVc2VyICcke3RhcmdldFVzZXJuYW1lfScgZG9lcyBub3QgZXhpc3Qgb24gdGhpcyBzeXN0ZW0uYCB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcbiAgICAgICAgY29uc3QgdGFyZ2V0VXNlckRpciA9IHBhdGguam9pbihzaGFyZWRSb290LCB0YXJnZXRVc2VybmFtZSlcblxuICAgICAgICAvLyBFbnN1cmUgc2hhcmVkIGRpcmVjdG9yaWVzIGV4aXN0XG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldFVzZXJEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3Qgc291cmNlTmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlUGF0aClcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSBwYXRoLmpvaW4odGFyZ2V0VXNlckRpciwgc291cmNlTmFtZSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZnMuc3ltbGluayhzb3VyY2VQYXRoLCBkZXN0UGF0aClcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBTdWNjZXNzZnVsbHkgc2hhcmVkIHdpdGggJHt0YXJnZXRVc2VybmFtZX1gIH1cbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgQWxyZWFkeSBzaGFyZWQgd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hhcmluZyBmaWxlOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gc2hhcmUgZmlsZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlU2hhcmVzKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcblxuICAgICAgICAvLyBTY2FuIGFsbCB1c2VyIGRpcmVjdG9yaWVzIGluIHNoYXJlZCByb290XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGlycyA9IGF3YWl0IGZzLnJlYWRkaXIoc2hhcmVkUm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICAgICAgICBjb25zdCBzaGFyZXM6IHN0cmluZ1tdID0gW11cblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlcy5wdXNoKHVzZXJEaXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90IGEgc3ltbGluayBvciBvdGhlciBlcnJvciwgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbm5vdCByZWFkIHVzZXIgZGlyLCBpZ25vcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2hhcmVzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFNoYXJlZCByb290IGxpa2VseSBkb2Vzbid0IGV4aXN0IHlldFxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGFyZWRGaWxlcyhjdXJyZW50UGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IFByb21pc2U8RmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gb3MudXNlckluZm8oKS51c2VybmFtZVxuICAgICAgICBjb25zdCBzaGFyZWRSb290ID0gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJ2hwY19zaGFyZWQnLCBjdXJyZW50VXNlcilcblxuICAgICAgICBhd2FpdCBmcy5ta2RpcihzaGFyZWRSb290LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5jdXJyZW50UGF0aFNlZ21lbnRzKVxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2tcbiAgICAgICAgaWYgKCFmdWxsUGF0aC5zdGFydHNXaXRoKHNoYXJlZFJvb3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkOiBDYW5ub3QgdHJhdmVyc2UgYWJvdmUgc2hhcmVkIHJvb3RcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGZ1bGxQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudHJpZXMubWFwKGFzeW5jIChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBwYXRoLmpvaW4oZnVsbFBhdGgsIGVudHJ5Lm5hbWUpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmcy5zdGF0KGVudHJ5UGF0aClcblxuICAgICAgICAgICAgICAgIGxldCB0eXBlOiBGaWxlSXRlbVsndHlwZSddID0gJ2ZpbGUnXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIHNoYXJlZCBmaWxlcywgd2UgbWlnaHQgd2FudCB0byBrbm93IHdobyBzaGFyZWQgaXQgKHRoZSBsaW5rIG93bmVyIHVzdWFsbHkpXG4gICAgICAgICAgICAgICAgLy8gYnV0IGxzdGF0IG9uIHRoZSBsaW5rIGl0c2VsZiBpbiB0aGUgcGFyZW50IGRpciBtaWdodCBiZSBuZWVkZWQgaWYgd2Ugd2FudCBsaW5rIGluZm8uXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vdywgcHJlc2VudGluZyB0aGUgdGFyZ2V0IGZpbGUgaW5mbyBpcyBmaW5lLlxuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHR5cGUgZXh0ZW5zaW9uIGxvZ2ljIHNhbWUgYXMgZ2V0RmlsZXNcbiAgICAgICAgICAgICAgICBpZiAoIWVudHJ5LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5zaCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5weScpKSB0eXBlID0gJ3NjcmlwdCdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLnppcCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy50YXInKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcuZ3onKSkgdHlwZSA9ICdhcmNoaXZlJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcm1zID0gKHN0YXRzLm1vZGUgJiBwYXJzZUludCgnNzc3JywgOCkpLnRvU3RyaW5nKDgpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgc2hhcmVkIGZpbGVzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoYXJlZEZpbGVJdGVtIGV4dGVuZHMgRmlsZUl0ZW0ge1xuICAgIHNoYXJlZFdpdGg6IHsgdXNlcm5hbWU6IHN0cmluZywgbGlua1BhdGg6IHN0cmluZyB9W11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE91dGdvaW5nU2hhcmVzKCk6IFByb21pc2U8U2hhcmVkRmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNoYXJlZFJvb3QgPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcpXG4gICAgICAgIGNvbnN0IG15SG9tZSA9IG9zLmhvbWVkaXIoKVxuXG4gICAgICAgIC8vIE1hcCBvZiBzb3VyY2VQYXRoIC0+IHsgc2hhcmVkV2l0aDogW10gfVxuICAgICAgICBjb25zdCBzaGFyZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCB7IHVzZXJuYW1lOiBzdHJpbmcsIGxpbmtQYXRoOiBzdHJpbmcgfVtdPigpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEaXJzID0gYXdhaXQgZnMucmVhZGRpcihzaGFyZWRSb290LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBpbnNpZGUgbXkgaG9tZSBkaXJlY3RvcnkgKG9yIGJlbG9uZ3MgdG8gbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWRlYWxseSBjaGVjayBpZiBJIG93biB0aGUgdGFyZ2V0IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnN0YXJ0c1dpdGgobXlIb21lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJlTWFwLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5zZXQodGFyZ2V0LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5nZXQodGFyZ2V0KT8ucHVzaCh7IHVzZXJuYW1lOiB1c2VyRGlyLm5hbWUsIGxpbmtQYXRoIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhIHN5bWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IG1hcCB0byBTaGFyZWRGaWxlSXRlbSBsaXN0XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzOiBTaGFyZWRGaWxlSXRlbVtdID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2ZpbGVQYXRoLCBzaGFyZXNdIG9mIHNoYXJlTWFwLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChmaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IEZpbGVJdGVtWyd0eXBlJ10gPSAnZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBuYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5jc3YnKSB8fCBuYW1lLmVuZHNXaXRoKCcuanNvbicpKSB0eXBlID0gJ2RhdGEnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy56aXAnKSB8fCBuYW1lLmVuZHNXaXRoKCcudGFyJykgfHwgbmFtZS5lbmRzV2l0aCgnLmd6JykpIHR5cGUgPSAnYXJjaGl2ZSdcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJtcyA9IChzdGF0cy5tb2RlICYgcGFyc2VJbnQoJzc3NycsIDgpKS50b1N0cmluZyg4KVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IGF3YWl0IGdldFVzZXJuYW1lKHN0YXRzLnVpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEF0OiBzdGF0cy5tdGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUJ5dGVzOiBzdGF0cy5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkV2l0aDogc2hhcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWxlIG1pZ2h0IGhhdmUgYmVlbiBkZWxldGVkIGJ1dCBsaW5rIGV4aXN0c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzXG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBvdXRnb2luZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNoYXJlRmlsZSh0YXJnZXRVc2VybmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkTGlua1BhdGggPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcsIHRhcmdldFVzZXJuYW1lLCBmaWxlTmFtZSlcbiAgICAgICAgYXdhaXQgZnMudW5saW5rKHNoYXJlZExpbmtQYXRoKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgVW5zaGFyZWQgJHtmaWxlTmFtZX0gd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gdW5zaGFyZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQZXJtaXNzaW9ucyhmaWxlUGF0aDogc3RyaW5nLCBtb2RlOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmcy5jaG1vZChmaWxlUGF0aCwgbW9kZSlcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYFVwZGF0ZWQgcGVybWlzc2lvbnMgZm9yICR7cGF0aC5iYXNlbmFtZShmaWxlUGF0aCl9YCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjaGFuZ2UgcGVybWlzc2lvbnNcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZVxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aFNlZ21lbnRzID0gSlNPTi5wYXJzZShmb3JtRGF0YS5nZXQoJ3BhdGhTZWdtZW50cycpIGFzIHN0cmluZylcblxuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGZpbGUgcHJvdmlkZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5qb2luKC4uLmN1cnJlbnRQYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aClcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShwYXRoLmpvaW4odGFyZ2V0RGlyLCBmaWxlLm5hbWUpLCBidWZmZXIpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBVcGxvYWRlZCAke2ZpbGUubmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIlVwbG9hZCBmYWlsZWRcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyKHBhdGhTZWdtZW50czogc3RyaW5nW10sIGZvbGRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5wYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aCwgZm9sZGVyTmFtZSlcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldERpcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENyZWF0ZWQgZm9sZGVyICR7Zm9sZGVyTmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXJcIiB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJzUkFnS3NCIn0=
}),
"[project]/app/data:0cd4ff [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00f724b4ca412bcb595c35212354467d12f2529459":"getOutgoingShares"},"app/actions.ts",""] */ __turbopack_context__.s([
    "getOutgoingShares",
    ()=>getOutgoingShares
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var getOutgoingShares = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00f724b4ca412bcb595c35212354467d12f2529459", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getOutgoingShares"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBvcyBmcm9tICdvcydcbmltcG9ydCB7IEZpbGVJdGVtIH0gZnJvbSAnQC9saWIvbW9ja0RhdGEnXG5cbmNvbnN0IEJBU0VfUEFUSCA9IG9zLmhvbWVkaXIoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZXMoY3VycmVudFBhdGhTZWdtZW50czogc3RyaW5nW10pOiBQcm9taXNlPEZpbGVJdGVtW10+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLmpvaW4oLi4uY3VycmVudFBhdGhTZWdtZW50cylcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oQkFTRV9QQVRILCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2s6IEVuc3VyZSB3ZSBkb24ndCBlc2NhcGUgaG9tZSBkaXJlY3RvcnkgKGJhc2ljIGNoZWNrKVxuICAgICAgICBpZiAoIWZ1bGxQYXRoLnN0YXJ0c1dpdGgoQkFTRV9QQVRIKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZDogQ2Fubm90IHRyYXZlcnNlIGFib3ZlIGhvbWUgZGlyZWN0b3J5XCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZnMucmVhZGRpcihmdWxsUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRyaWVzLm1hcChhc3luYyAoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnlQYXRoID0gcGF0aC5qb2luKGZ1bGxQYXRoLCBlbnRyeS5uYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChlbnRyeVBhdGgpXG5cbiAgICAgICAgICAgICAgICBsZXQgdHlwZTogRmlsZUl0ZW1bJ3R5cGUnXSA9ICdmaWxlJ1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB0eXBlID0gJ2ZvbGRlcidcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuemlwJykgfHwgZW50cnkubmFtZS5lbmRzV2l0aCgnLnRhcicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5neicpKSB0eXBlID0gJ2FyY2hpdmUnXG5cbiAgICAgICAgICAgICAgICAvLyBQZXJtaXNzaW9uIHN0cmluZyBzaW11bGF0aW9uIChOb2RlIGZzIGRvZXNuJ3QgZ2l2ZSBcInJ3eFwiIHN0cmluZyBkaXJlY3RseSBlYXNpbHkgYWNyb3NzIHBsYXRmb3JtcywgXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGNhbiBhcHByb3hpbWF0ZSBmcm9tIG1vZGUpXG4gICAgICAgICAgICAgICAgY29uc3QgcGVybXMgPSAoc3RhdHMubW9kZSAmIHBhcnNlSW50KCc3NzcnLCA4KSkudG9TdHJpbmcoOCkgLy8gc2ltcGxlIG9jdGFsXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLCAvLyBVc2UgcGF0aCBhcyBJRFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gIC8vIE1vY2tpbmcgdGhlIHJ3eCBzdHJpbmcgaXMgY29tcGxleCwgc2hvd2luZyBvY3RhbCBmb3Igbm93XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgZGlyZWN0b3J5OlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnXG5cbmNvbnN0IGV4ZWNBc3luYyA9IHV0aWwucHJvbWlzaWZ5KGV4ZWMpXG5cbmNvbnN0IHVzZXJuYW1lQ2FjaGUgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJuYW1lKHVpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodXNlcm5hbWVDYWNoZS5oYXModWlkKSkgcmV0dXJuIHVzZXJuYW1lQ2FjaGUuZ2V0KHVpZCkhXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNBc3luYyhgaWQgLW51ICR7dWlkfWApXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdGRvdXQudHJpbSgpXG4gICAgICAgIHVzZXJuYW1lQ2FjaGUuc2V0KHVpZCwgbmFtZSlcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodWlkKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXNlckV4aXN0cyh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY0FzeW5jKGBpZCAtdSAke3VzZXJuYW1lfWApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhcmVGaWxlKHNvdXJjZVBhdGg6IHN0cmluZywgdGFyZ2V0VXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIC8vIFZhbGlkYXRlIHRhcmdldCB1c2VyIGV4aXN0c1xuICAgIGlmICghYXdhaXQgdXNlckV4aXN0cyh0YXJnZXRVc2VybmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBVc2VyICcke3RhcmdldFVzZXJuYW1lfScgZG9lcyBub3QgZXhpc3Qgb24gdGhpcyBzeXN0ZW0uYCB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcbiAgICAgICAgY29uc3QgdGFyZ2V0VXNlckRpciA9IHBhdGguam9pbihzaGFyZWRSb290LCB0YXJnZXRVc2VybmFtZSlcblxuICAgICAgICAvLyBFbnN1cmUgc2hhcmVkIGRpcmVjdG9yaWVzIGV4aXN0XG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldFVzZXJEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3Qgc291cmNlTmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlUGF0aClcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSBwYXRoLmpvaW4odGFyZ2V0VXNlckRpciwgc291cmNlTmFtZSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZnMuc3ltbGluayhzb3VyY2VQYXRoLCBkZXN0UGF0aClcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBTdWNjZXNzZnVsbHkgc2hhcmVkIHdpdGggJHt0YXJnZXRVc2VybmFtZX1gIH1cbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgQWxyZWFkeSBzaGFyZWQgd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hhcmluZyBmaWxlOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gc2hhcmUgZmlsZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlU2hhcmVzKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcblxuICAgICAgICAvLyBTY2FuIGFsbCB1c2VyIGRpcmVjdG9yaWVzIGluIHNoYXJlZCByb290XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGlycyA9IGF3YWl0IGZzLnJlYWRkaXIoc2hhcmVkUm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICAgICAgICBjb25zdCBzaGFyZXM6IHN0cmluZ1tdID0gW11cblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlcy5wdXNoKHVzZXJEaXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90IGEgc3ltbGluayBvciBvdGhlciBlcnJvciwgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbm5vdCByZWFkIHVzZXIgZGlyLCBpZ25vcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2hhcmVzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFNoYXJlZCByb290IGxpa2VseSBkb2Vzbid0IGV4aXN0IHlldFxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGFyZWRGaWxlcyhjdXJyZW50UGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IFByb21pc2U8RmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gb3MudXNlckluZm8oKS51c2VybmFtZVxuICAgICAgICBjb25zdCBzaGFyZWRSb290ID0gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJ2hwY19zaGFyZWQnLCBjdXJyZW50VXNlcilcblxuICAgICAgICBhd2FpdCBmcy5ta2RpcihzaGFyZWRSb290LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5jdXJyZW50UGF0aFNlZ21lbnRzKVxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2tcbiAgICAgICAgaWYgKCFmdWxsUGF0aC5zdGFydHNXaXRoKHNoYXJlZFJvb3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkOiBDYW5ub3QgdHJhdmVyc2UgYWJvdmUgc2hhcmVkIHJvb3RcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGZ1bGxQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudHJpZXMubWFwKGFzeW5jIChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBwYXRoLmpvaW4oZnVsbFBhdGgsIGVudHJ5Lm5hbWUpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmcy5zdGF0KGVudHJ5UGF0aClcblxuICAgICAgICAgICAgICAgIGxldCB0eXBlOiBGaWxlSXRlbVsndHlwZSddID0gJ2ZpbGUnXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIHNoYXJlZCBmaWxlcywgd2UgbWlnaHQgd2FudCB0byBrbm93IHdobyBzaGFyZWQgaXQgKHRoZSBsaW5rIG93bmVyIHVzdWFsbHkpXG4gICAgICAgICAgICAgICAgLy8gYnV0IGxzdGF0IG9uIHRoZSBsaW5rIGl0c2VsZiBpbiB0aGUgcGFyZW50IGRpciBtaWdodCBiZSBuZWVkZWQgaWYgd2Ugd2FudCBsaW5rIGluZm8uXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vdywgcHJlc2VudGluZyB0aGUgdGFyZ2V0IGZpbGUgaW5mbyBpcyBmaW5lLlxuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHR5cGUgZXh0ZW5zaW9uIGxvZ2ljIHNhbWUgYXMgZ2V0RmlsZXNcbiAgICAgICAgICAgICAgICBpZiAoIWVudHJ5LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5zaCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5weScpKSB0eXBlID0gJ3NjcmlwdCdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLnppcCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy50YXInKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcuZ3onKSkgdHlwZSA9ICdhcmNoaXZlJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcm1zID0gKHN0YXRzLm1vZGUgJiBwYXJzZUludCgnNzc3JywgOCkpLnRvU3RyaW5nKDgpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgc2hhcmVkIGZpbGVzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoYXJlZEZpbGVJdGVtIGV4dGVuZHMgRmlsZUl0ZW0ge1xuICAgIHNoYXJlZFdpdGg6IHsgdXNlcm5hbWU6IHN0cmluZywgbGlua1BhdGg6IHN0cmluZyB9W11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE91dGdvaW5nU2hhcmVzKCk6IFByb21pc2U8U2hhcmVkRmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNoYXJlZFJvb3QgPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcpXG4gICAgICAgIGNvbnN0IG15SG9tZSA9IG9zLmhvbWVkaXIoKVxuXG4gICAgICAgIC8vIE1hcCBvZiBzb3VyY2VQYXRoIC0+IHsgc2hhcmVkV2l0aDogW10gfVxuICAgICAgICBjb25zdCBzaGFyZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCB7IHVzZXJuYW1lOiBzdHJpbmcsIGxpbmtQYXRoOiBzdHJpbmcgfVtdPigpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEaXJzID0gYXdhaXQgZnMucmVhZGRpcihzaGFyZWRSb290LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBpbnNpZGUgbXkgaG9tZSBkaXJlY3RvcnkgKG9yIGJlbG9uZ3MgdG8gbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWRlYWxseSBjaGVjayBpZiBJIG93biB0aGUgdGFyZ2V0IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnN0YXJ0c1dpdGgobXlIb21lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJlTWFwLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5zZXQodGFyZ2V0LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5nZXQodGFyZ2V0KT8ucHVzaCh7IHVzZXJuYW1lOiB1c2VyRGlyLm5hbWUsIGxpbmtQYXRoIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhIHN5bWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IG1hcCB0byBTaGFyZWRGaWxlSXRlbSBsaXN0XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzOiBTaGFyZWRGaWxlSXRlbVtdID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2ZpbGVQYXRoLCBzaGFyZXNdIG9mIHNoYXJlTWFwLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChmaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IEZpbGVJdGVtWyd0eXBlJ10gPSAnZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBuYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5jc3YnKSB8fCBuYW1lLmVuZHNXaXRoKCcuanNvbicpKSB0eXBlID0gJ2RhdGEnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy56aXAnKSB8fCBuYW1lLmVuZHNXaXRoKCcudGFyJykgfHwgbmFtZS5lbmRzV2l0aCgnLmd6JykpIHR5cGUgPSAnYXJjaGl2ZSdcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJtcyA9IChzdGF0cy5tb2RlICYgcGFyc2VJbnQoJzc3NycsIDgpKS50b1N0cmluZyg4KVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IGF3YWl0IGdldFVzZXJuYW1lKHN0YXRzLnVpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEF0OiBzdGF0cy5tdGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUJ5dGVzOiBzdGF0cy5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkV2l0aDogc2hhcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWxlIG1pZ2h0IGhhdmUgYmVlbiBkZWxldGVkIGJ1dCBsaW5rIGV4aXN0c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzXG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBvdXRnb2luZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNoYXJlRmlsZSh0YXJnZXRVc2VybmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkTGlua1BhdGggPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcsIHRhcmdldFVzZXJuYW1lLCBmaWxlTmFtZSlcbiAgICAgICAgYXdhaXQgZnMudW5saW5rKHNoYXJlZExpbmtQYXRoKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgVW5zaGFyZWQgJHtmaWxlTmFtZX0gd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gdW5zaGFyZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQZXJtaXNzaW9ucyhmaWxlUGF0aDogc3RyaW5nLCBtb2RlOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmcy5jaG1vZChmaWxlUGF0aCwgbW9kZSlcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYFVwZGF0ZWQgcGVybWlzc2lvbnMgZm9yICR7cGF0aC5iYXNlbmFtZShmaWxlUGF0aCl9YCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjaGFuZ2UgcGVybWlzc2lvbnNcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZVxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aFNlZ21lbnRzID0gSlNPTi5wYXJzZShmb3JtRGF0YS5nZXQoJ3BhdGhTZWdtZW50cycpIGFzIHN0cmluZylcblxuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGZpbGUgcHJvdmlkZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5qb2luKC4uLmN1cnJlbnRQYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aClcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShwYXRoLmpvaW4odGFyZ2V0RGlyLCBmaWxlLm5hbWUpLCBidWZmZXIpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBVcGxvYWRlZCAke2ZpbGUubmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIlVwbG9hZCBmYWlsZWRcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyKHBhdGhTZWdtZW50czogc3RyaW5nW10sIGZvbGRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5wYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aCwgZm9sZGVyTmFtZSlcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldERpcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENyZWF0ZWQgZm9sZGVyICR7Zm9sZGVyTmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXJcIiB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5UkFpT3NCIn0=
}),
"[project]/app/data:29d7c0 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60f535c6df1a1d9b470e0d25988d8759c27e1030c2":"unshareFile"},"app/actions.ts",""] */ __turbopack_context__.s([
    "unshareFile",
    ()=>unshareFile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var unshareFile = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60f535c6df1a1d9b470e0d25988d8759c27e1030c2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "unshareFile"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBvcyBmcm9tICdvcydcbmltcG9ydCB7IEZpbGVJdGVtIH0gZnJvbSAnQC9saWIvbW9ja0RhdGEnXG5cbmNvbnN0IEJBU0VfUEFUSCA9IG9zLmhvbWVkaXIoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZXMoY3VycmVudFBhdGhTZWdtZW50czogc3RyaW5nW10pOiBQcm9taXNlPEZpbGVJdGVtW10+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLmpvaW4oLi4uY3VycmVudFBhdGhTZWdtZW50cylcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oQkFTRV9QQVRILCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2s6IEVuc3VyZSB3ZSBkb24ndCBlc2NhcGUgaG9tZSBkaXJlY3RvcnkgKGJhc2ljIGNoZWNrKVxuICAgICAgICBpZiAoIWZ1bGxQYXRoLnN0YXJ0c1dpdGgoQkFTRV9QQVRIKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZDogQ2Fubm90IHRyYXZlcnNlIGFib3ZlIGhvbWUgZGlyZWN0b3J5XCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZnMucmVhZGRpcihmdWxsUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRyaWVzLm1hcChhc3luYyAoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnlQYXRoID0gcGF0aC5qb2luKGZ1bGxQYXRoLCBlbnRyeS5uYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChlbnRyeVBhdGgpXG5cbiAgICAgICAgICAgICAgICBsZXQgdHlwZTogRmlsZUl0ZW1bJ3R5cGUnXSA9ICdmaWxlJ1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB0eXBlID0gJ2ZvbGRlcidcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuemlwJykgfHwgZW50cnkubmFtZS5lbmRzV2l0aCgnLnRhcicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5neicpKSB0eXBlID0gJ2FyY2hpdmUnXG5cbiAgICAgICAgICAgICAgICAvLyBQZXJtaXNzaW9uIHN0cmluZyBzaW11bGF0aW9uIChOb2RlIGZzIGRvZXNuJ3QgZ2l2ZSBcInJ3eFwiIHN0cmluZyBkaXJlY3RseSBlYXNpbHkgYWNyb3NzIHBsYXRmb3JtcywgXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGNhbiBhcHByb3hpbWF0ZSBmcm9tIG1vZGUpXG4gICAgICAgICAgICAgICAgY29uc3QgcGVybXMgPSAoc3RhdHMubW9kZSAmIHBhcnNlSW50KCc3NzcnLCA4KSkudG9TdHJpbmcoOCkgLy8gc2ltcGxlIG9jdGFsXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLCAvLyBVc2UgcGF0aCBhcyBJRFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gIC8vIE1vY2tpbmcgdGhlIHJ3eCBzdHJpbmcgaXMgY29tcGxleCwgc2hvd2luZyBvY3RhbCBmb3Igbm93XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgZGlyZWN0b3J5OlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnXG5cbmNvbnN0IGV4ZWNBc3luYyA9IHV0aWwucHJvbWlzaWZ5KGV4ZWMpXG5cbmNvbnN0IHVzZXJuYW1lQ2FjaGUgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJuYW1lKHVpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodXNlcm5hbWVDYWNoZS5oYXModWlkKSkgcmV0dXJuIHVzZXJuYW1lQ2FjaGUuZ2V0KHVpZCkhXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNBc3luYyhgaWQgLW51ICR7dWlkfWApXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdGRvdXQudHJpbSgpXG4gICAgICAgIHVzZXJuYW1lQ2FjaGUuc2V0KHVpZCwgbmFtZSlcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodWlkKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXNlckV4aXN0cyh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY0FzeW5jKGBpZCAtdSAke3VzZXJuYW1lfWApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhcmVGaWxlKHNvdXJjZVBhdGg6IHN0cmluZywgdGFyZ2V0VXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIC8vIFZhbGlkYXRlIHRhcmdldCB1c2VyIGV4aXN0c1xuICAgIGlmICghYXdhaXQgdXNlckV4aXN0cyh0YXJnZXRVc2VybmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBVc2VyICcke3RhcmdldFVzZXJuYW1lfScgZG9lcyBub3QgZXhpc3Qgb24gdGhpcyBzeXN0ZW0uYCB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcbiAgICAgICAgY29uc3QgdGFyZ2V0VXNlckRpciA9IHBhdGguam9pbihzaGFyZWRSb290LCB0YXJnZXRVc2VybmFtZSlcblxuICAgICAgICAvLyBFbnN1cmUgc2hhcmVkIGRpcmVjdG9yaWVzIGV4aXN0XG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldFVzZXJEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3Qgc291cmNlTmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlUGF0aClcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSBwYXRoLmpvaW4odGFyZ2V0VXNlckRpciwgc291cmNlTmFtZSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZnMuc3ltbGluayhzb3VyY2VQYXRoLCBkZXN0UGF0aClcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBTdWNjZXNzZnVsbHkgc2hhcmVkIHdpdGggJHt0YXJnZXRVc2VybmFtZX1gIH1cbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgQWxyZWFkeSBzaGFyZWQgd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hhcmluZyBmaWxlOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gc2hhcmUgZmlsZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlU2hhcmVzKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcblxuICAgICAgICAvLyBTY2FuIGFsbCB1c2VyIGRpcmVjdG9yaWVzIGluIHNoYXJlZCByb290XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGlycyA9IGF3YWl0IGZzLnJlYWRkaXIoc2hhcmVkUm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICAgICAgICBjb25zdCBzaGFyZXM6IHN0cmluZ1tdID0gW11cblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlcy5wdXNoKHVzZXJEaXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90IGEgc3ltbGluayBvciBvdGhlciBlcnJvciwgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbm5vdCByZWFkIHVzZXIgZGlyLCBpZ25vcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2hhcmVzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFNoYXJlZCByb290IGxpa2VseSBkb2Vzbid0IGV4aXN0IHlldFxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGFyZWRGaWxlcyhjdXJyZW50UGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IFByb21pc2U8RmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gb3MudXNlckluZm8oKS51c2VybmFtZVxuICAgICAgICBjb25zdCBzaGFyZWRSb290ID0gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJ2hwY19zaGFyZWQnLCBjdXJyZW50VXNlcilcblxuICAgICAgICBhd2FpdCBmcy5ta2RpcihzaGFyZWRSb290LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5jdXJyZW50UGF0aFNlZ21lbnRzKVxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2tcbiAgICAgICAgaWYgKCFmdWxsUGF0aC5zdGFydHNXaXRoKHNoYXJlZFJvb3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkOiBDYW5ub3QgdHJhdmVyc2UgYWJvdmUgc2hhcmVkIHJvb3RcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGZ1bGxQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudHJpZXMubWFwKGFzeW5jIChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBwYXRoLmpvaW4oZnVsbFBhdGgsIGVudHJ5Lm5hbWUpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmcy5zdGF0KGVudHJ5UGF0aClcblxuICAgICAgICAgICAgICAgIGxldCB0eXBlOiBGaWxlSXRlbVsndHlwZSddID0gJ2ZpbGUnXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIHNoYXJlZCBmaWxlcywgd2UgbWlnaHQgd2FudCB0byBrbm93IHdobyBzaGFyZWQgaXQgKHRoZSBsaW5rIG93bmVyIHVzdWFsbHkpXG4gICAgICAgICAgICAgICAgLy8gYnV0IGxzdGF0IG9uIHRoZSBsaW5rIGl0c2VsZiBpbiB0aGUgcGFyZW50IGRpciBtaWdodCBiZSBuZWVkZWQgaWYgd2Ugd2FudCBsaW5rIGluZm8uXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vdywgcHJlc2VudGluZyB0aGUgdGFyZ2V0IGZpbGUgaW5mbyBpcyBmaW5lLlxuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHR5cGUgZXh0ZW5zaW9uIGxvZ2ljIHNhbWUgYXMgZ2V0RmlsZXNcbiAgICAgICAgICAgICAgICBpZiAoIWVudHJ5LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5zaCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5weScpKSB0eXBlID0gJ3NjcmlwdCdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLnppcCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy50YXInKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcuZ3onKSkgdHlwZSA9ICdhcmNoaXZlJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcm1zID0gKHN0YXRzLm1vZGUgJiBwYXJzZUludCgnNzc3JywgOCkpLnRvU3RyaW5nKDgpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgc2hhcmVkIGZpbGVzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoYXJlZEZpbGVJdGVtIGV4dGVuZHMgRmlsZUl0ZW0ge1xuICAgIHNoYXJlZFdpdGg6IHsgdXNlcm5hbWU6IHN0cmluZywgbGlua1BhdGg6IHN0cmluZyB9W11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE91dGdvaW5nU2hhcmVzKCk6IFByb21pc2U8U2hhcmVkRmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNoYXJlZFJvb3QgPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcpXG4gICAgICAgIGNvbnN0IG15SG9tZSA9IG9zLmhvbWVkaXIoKVxuXG4gICAgICAgIC8vIE1hcCBvZiBzb3VyY2VQYXRoIC0+IHsgc2hhcmVkV2l0aDogW10gfVxuICAgICAgICBjb25zdCBzaGFyZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCB7IHVzZXJuYW1lOiBzdHJpbmcsIGxpbmtQYXRoOiBzdHJpbmcgfVtdPigpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEaXJzID0gYXdhaXQgZnMucmVhZGRpcihzaGFyZWRSb290LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBpbnNpZGUgbXkgaG9tZSBkaXJlY3RvcnkgKG9yIGJlbG9uZ3MgdG8gbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWRlYWxseSBjaGVjayBpZiBJIG93biB0aGUgdGFyZ2V0IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnN0YXJ0c1dpdGgobXlIb21lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJlTWFwLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5zZXQodGFyZ2V0LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5nZXQodGFyZ2V0KT8ucHVzaCh7IHVzZXJuYW1lOiB1c2VyRGlyLm5hbWUsIGxpbmtQYXRoIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhIHN5bWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IG1hcCB0byBTaGFyZWRGaWxlSXRlbSBsaXN0XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzOiBTaGFyZWRGaWxlSXRlbVtdID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2ZpbGVQYXRoLCBzaGFyZXNdIG9mIHNoYXJlTWFwLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChmaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IEZpbGVJdGVtWyd0eXBlJ10gPSAnZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBuYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5jc3YnKSB8fCBuYW1lLmVuZHNXaXRoKCcuanNvbicpKSB0eXBlID0gJ2RhdGEnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy56aXAnKSB8fCBuYW1lLmVuZHNXaXRoKCcudGFyJykgfHwgbmFtZS5lbmRzV2l0aCgnLmd6JykpIHR5cGUgPSAnYXJjaGl2ZSdcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJtcyA9IChzdGF0cy5tb2RlICYgcGFyc2VJbnQoJzc3NycsIDgpKS50b1N0cmluZyg4KVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IGF3YWl0IGdldFVzZXJuYW1lKHN0YXRzLnVpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEF0OiBzdGF0cy5tdGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUJ5dGVzOiBzdGF0cy5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkV2l0aDogc2hhcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWxlIG1pZ2h0IGhhdmUgYmVlbiBkZWxldGVkIGJ1dCBsaW5rIGV4aXN0c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzXG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBvdXRnb2luZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNoYXJlRmlsZSh0YXJnZXRVc2VybmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkTGlua1BhdGggPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcsIHRhcmdldFVzZXJuYW1lLCBmaWxlTmFtZSlcbiAgICAgICAgYXdhaXQgZnMudW5saW5rKHNoYXJlZExpbmtQYXRoKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgVW5zaGFyZWQgJHtmaWxlTmFtZX0gd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gdW5zaGFyZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQZXJtaXNzaW9ucyhmaWxlUGF0aDogc3RyaW5nLCBtb2RlOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmcy5jaG1vZChmaWxlUGF0aCwgbW9kZSlcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYFVwZGF0ZWQgcGVybWlzc2lvbnMgZm9yICR7cGF0aC5iYXNlbmFtZShmaWxlUGF0aCl9YCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjaGFuZ2UgcGVybWlzc2lvbnNcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZVxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aFNlZ21lbnRzID0gSlNPTi5wYXJzZShmb3JtRGF0YS5nZXQoJ3BhdGhTZWdtZW50cycpIGFzIHN0cmluZylcblxuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGZpbGUgcHJvdmlkZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5qb2luKC4uLmN1cnJlbnRQYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aClcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShwYXRoLmpvaW4odGFyZ2V0RGlyLCBmaWxlLm5hbWUpLCBidWZmZXIpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBVcGxvYWRlZCAke2ZpbGUubmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIlVwbG9hZCBmYWlsZWRcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyKHBhdGhTZWdtZW50czogc3RyaW5nW10sIGZvbGRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5wYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aCwgZm9sZGVyTmFtZSlcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldERpcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENyZWF0ZWQgZm9sZGVyICR7Zm9sZGVyTmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXJcIiB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJtUkFrVHNCIn0=
}),
"[project]/app/data:490e10 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60e19c8c998f07a6ca71d9eb820622f55035e0d360":"changePermissions"},"app/actions.ts",""] */ __turbopack_context__.s([
    "changePermissions",
    ()=>changePermissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var changePermissions = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60e19c8c998f07a6ca71d9eb820622f55035e0d360", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "changePermissions"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcblxuaW1wb3J0IGZzIGZyb20gJ2ZzL3Byb21pc2VzJ1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcbmltcG9ydCBvcyBmcm9tICdvcydcbmltcG9ydCB7IEZpbGVJdGVtIH0gZnJvbSAnQC9saWIvbW9ja0RhdGEnXG5cbmNvbnN0IEJBU0VfUEFUSCA9IG9zLmhvbWVkaXIoKVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0RmlsZXMoY3VycmVudFBhdGhTZWdtZW50czogc3RyaW5nW10pOiBQcm9taXNlPEZpbGVJdGVtW10+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZWxhdGl2ZVBhdGggPSBwYXRoLmpvaW4oLi4uY3VycmVudFBhdGhTZWdtZW50cylcbiAgICAgICAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oQkFTRV9QQVRILCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2s6IEVuc3VyZSB3ZSBkb24ndCBlc2NhcGUgaG9tZSBkaXJlY3RvcnkgKGJhc2ljIGNoZWNrKVxuICAgICAgICBpZiAoIWZ1bGxQYXRoLnN0YXJ0c1dpdGgoQkFTRV9QQVRIKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQWNjZXNzIGRlbmllZDogQ2Fubm90IHRyYXZlcnNlIGFib3ZlIGhvbWUgZGlyZWN0b3J5XCIpXG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBlbnRyaWVzID0gYXdhaXQgZnMucmVhZGRpcihmdWxsUGF0aCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3QgZmlsZXMgPSBhd2FpdCBQcm9taXNlLmFsbChlbnRyaWVzLm1hcChhc3luYyAoZW50cnkpID0+IHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnlQYXRoID0gcGF0aC5qb2luKGZ1bGxQYXRoLCBlbnRyeS5uYW1lKVxuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChlbnRyeVBhdGgpXG5cbiAgICAgICAgICAgICAgICBsZXQgdHlwZTogRmlsZUl0ZW1bJ3R5cGUnXSA9ICdmaWxlJ1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0RpcmVjdG9yeSgpKSB0eXBlID0gJ2ZvbGRlcidcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChlbnRyeS5uYW1lLmVuZHNXaXRoKCcuemlwJykgfHwgZW50cnkubmFtZS5lbmRzV2l0aCgnLnRhcicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5neicpKSB0eXBlID0gJ2FyY2hpdmUnXG5cbiAgICAgICAgICAgICAgICAvLyBQZXJtaXNzaW9uIHN0cmluZyBzaW11bGF0aW9uIChOb2RlIGZzIGRvZXNuJ3QgZ2l2ZSBcInJ3eFwiIHN0cmluZyBkaXJlY3RseSBlYXNpbHkgYWNyb3NzIHBsYXRmb3JtcywgXG4gICAgICAgICAgICAgICAgLy8gYnV0IHdlIGNhbiBhcHByb3hpbWF0ZSBmcm9tIG1vZGUpXG4gICAgICAgICAgICAgICAgY29uc3QgcGVybXMgPSAoc3RhdHMubW9kZSAmIHBhcnNlSW50KCc3NzcnLCA4KSkudG9TdHJpbmcoOCkgLy8gc2ltcGxlIG9jdGFsXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLCAvLyBVc2UgcGF0aCBhcyBJRFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gIC8vIE1vY2tpbmcgdGhlIHJ3eCBzdHJpbmcgaXMgY29tcGxleCwgc2hvd2luZyBvY3RhbCBmb3Igbm93XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIHJlYWRpbmcgZGlyZWN0b3J5OlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5pbXBvcnQgeyBleGVjIH0gZnJvbSAnY2hpbGRfcHJvY2VzcydcbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnXG5cbmNvbnN0IGV4ZWNBc3luYyA9IHV0aWwucHJvbWlzaWZ5KGV4ZWMpXG5cbmNvbnN0IHVzZXJuYW1lQ2FjaGUgPSBuZXcgTWFwPG51bWJlciwgc3RyaW5nPigpXG5cbmFzeW5jIGZ1bmN0aW9uIGdldFVzZXJuYW1lKHVpZDogbnVtYmVyKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICBpZiAodXNlcm5hbWVDYWNoZS5oYXModWlkKSkgcmV0dXJuIHVzZXJuYW1lQ2FjaGUuZ2V0KHVpZCkhXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV4ZWNBc3luYyhgaWQgLW51ICR7dWlkfWApXG4gICAgICAgIGNvbnN0IG5hbWUgPSBzdGRvdXQudHJpbSgpXG4gICAgICAgIHVzZXJuYW1lQ2FjaGUuc2V0KHVpZCwgbmFtZSlcbiAgICAgICAgcmV0dXJuIG5hbWVcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBTdHJpbmcodWlkKVxuICAgIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gdXNlckV4aXN0cyh1c2VybmFtZTogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZXhlY0FzeW5jKGBpZCAtdSAke3VzZXJuYW1lfWApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhcmVGaWxlKHNvdXJjZVBhdGg6IHN0cmluZywgdGFyZ2V0VXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIC8vIFZhbGlkYXRlIHRhcmdldCB1c2VyIGV4aXN0c1xuICAgIGlmICghYXdhaXQgdXNlckV4aXN0cyh0YXJnZXRVc2VybmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGBVc2VyICcke3RhcmdldFVzZXJuYW1lfScgZG9lcyBub3QgZXhpc3Qgb24gdGhpcyBzeXN0ZW0uYCB9XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcbiAgICAgICAgY29uc3QgdGFyZ2V0VXNlckRpciA9IHBhdGguam9pbihzaGFyZWRSb290LCB0YXJnZXRVc2VybmFtZSlcblxuICAgICAgICAvLyBFbnN1cmUgc2hhcmVkIGRpcmVjdG9yaWVzIGV4aXN0XG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldFVzZXJEaXIsIHsgcmVjdXJzaXZlOiB0cnVlIH0pXG5cbiAgICAgICAgY29uc3Qgc291cmNlTmFtZSA9IHBhdGguYmFzZW5hbWUoc291cmNlUGF0aClcbiAgICAgICAgY29uc3QgZGVzdFBhdGggPSBwYXRoLmpvaW4odGFyZ2V0VXNlckRpciwgc291cmNlTmFtZSlcblxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgYXdhaXQgZnMuc3ltbGluayhzb3VyY2VQYXRoLCBkZXN0UGF0aClcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBTdWNjZXNzZnVsbHkgc2hhcmVkIHdpdGggJHt0YXJnZXRVc2VybmFtZX1gIH1cbiAgICAgICAgfSBjYXRjaCAoZTogYW55KSB7XG4gICAgICAgICAgICBpZiAoZS5jb2RlID09PSAnRUVYSVNUJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBgQWxyZWFkeSBzaGFyZWQgd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cgZVxuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igc2hhcmluZyBmaWxlOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gc2hhcmUgZmlsZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGaWxlU2hhcmVzKGZpbGVQYXRoOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZ1tdPiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkUm9vdCA9IHBhdGguam9pbihvcy5ob21lZGlyKCksICdocGNfc2hhcmVkJylcblxuICAgICAgICAvLyBTY2FuIGFsbCB1c2VyIGRpcmVjdG9yaWVzIGluIHNoYXJlZCByb290XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB1c2VyRGlycyA9IGF3YWl0IGZzLnJlYWRkaXIoc2hhcmVkUm9vdCwgeyB3aXRoRmlsZVR5cGVzOiB0cnVlIH0pXG4gICAgICAgICAgICBjb25zdCBzaGFyZXM6IHN0cmluZ1tdID0gW11cblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IGZpbGVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlcy5wdXNoKHVzZXJEaXIubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90IGEgc3ltbGluayBvciBvdGhlciBlcnJvciwgaWdub3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbm5vdCByZWFkIHVzZXIgZGlyLCBpZ25vcmVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2hhcmVzXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIFNoYXJlZCByb290IGxpa2VseSBkb2Vzbid0IGV4aXN0IHlldFxuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTaGFyZWRGaWxlcyhjdXJyZW50UGF0aFNlZ21lbnRzOiBzdHJpbmdbXSk6IFByb21pc2U8RmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRVc2VyID0gb3MudXNlckluZm8oKS51c2VybmFtZVxuICAgICAgICBjb25zdCBzaGFyZWRSb290ID0gcGF0aC5qb2luKG9zLmhvbWVkaXIoKSwgJ2hwY19zaGFyZWQnLCBjdXJyZW50VXNlcilcblxuICAgICAgICBhd2FpdCBmcy5ta2RpcihzaGFyZWRSb290LCB7IHJlY3Vyc2l2ZTogdHJ1ZSB9KVxuXG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5jdXJyZW50UGF0aFNlZ21lbnRzKVxuICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCByZWxhdGl2ZVBhdGgpXG5cbiAgICAgICAgLy8gU2VjdXJpdHkgY2hlY2tcbiAgICAgICAgaWYgKCFmdWxsUGF0aC5zdGFydHNXaXRoKHNoYXJlZFJvb3QpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBY2Nlc3MgZGVuaWVkOiBDYW5ub3QgdHJhdmVyc2UgYWJvdmUgc2hhcmVkIHJvb3RcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGVudHJpZXMgPSBhd2FpdCBmcy5yZWFkZGlyKGZ1bGxQYXRoLCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICBjb25zdCBmaWxlcyA9IGF3YWl0IFByb21pc2UuYWxsKGVudHJpZXMubWFwKGFzeW5jIChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVBhdGggPSBwYXRoLmpvaW4oZnVsbFBhdGgsIGVudHJ5Lm5hbWUpXG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHMgPSBhd2FpdCBmcy5zdGF0KGVudHJ5UGF0aClcblxuICAgICAgICAgICAgICAgIGxldCB0eXBlOiBGaWxlSXRlbVsndHlwZSddID0gJ2ZpbGUnXG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuXG4gICAgICAgICAgICAgICAgLy8gRm9yIHNoYXJlZCBmaWxlcywgd2UgbWlnaHQgd2FudCB0byBrbm93IHdobyBzaGFyZWQgaXQgKHRoZSBsaW5rIG93bmVyIHVzdWFsbHkpXG4gICAgICAgICAgICAgICAgLy8gYnV0IGxzdGF0IG9uIHRoZSBsaW5rIGl0c2VsZiBpbiB0aGUgcGFyZW50IGRpciBtaWdodCBiZSBuZWVkZWQgaWYgd2Ugd2FudCBsaW5rIGluZm8uXG4gICAgICAgICAgICAgICAgLy8gRm9yIG5vdywgcHJlc2VudGluZyB0aGUgdGFyZ2V0IGZpbGUgaW5mbyBpcyBmaW5lLlxuXG4gICAgICAgICAgICAgICAgLy8gRGV0ZXJtaW5lIHR5cGUgZXh0ZW5zaW9uIGxvZ2ljIHNhbWUgYXMgZ2V0RmlsZXNcbiAgICAgICAgICAgICAgICBpZiAoIWVudHJ5LmlzRGlyZWN0b3J5KCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5zaCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5weScpKSB0eXBlID0gJ3NjcmlwdCdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLmNzdicpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHR5cGUgPSAnZGF0YSdcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZW50cnkubmFtZS5lbmRzV2l0aCgnLnppcCcpIHx8IGVudHJ5Lm5hbWUuZW5kc1dpdGgoJy50YXInKSB8fCBlbnRyeS5uYW1lLmVuZHNXaXRoKCcuZ3onKSkgdHlwZSA9ICdhcmNoaXZlJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0IHBlcm1zID0gKHN0YXRzLm1vZGUgJiBwYXJzZUludCgnNzc3JywgOCkpLnRvU3RyaW5nKDgpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogZW50cnlQYXRoLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgICAgICAgICBwYXRoOiBlbnRyeVBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG93bmVyOiBhd2FpdCBnZXRVc2VybmFtZShzdGF0cy51aWQpLFxuICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgIG1vZGlmaWVkQXQ6IHN0YXRzLm10aW1lLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgICAgICAgIHNpemVCeXRlczogc3RhdHMuc2l6ZSxcbiAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKVxuXG4gICAgICAgIHJldHVybiBmaWxlcy5maWx0ZXIoKGYpOiBmIGlzIEZpbGVJdGVtID0+IGYgIT09IG51bGwpXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGdldHRpbmcgc2hhcmVkIGZpbGVzOlwiLCBlcnJvcilcbiAgICAgICAgcmV0dXJuIFtdXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNoYXJlZEZpbGVJdGVtIGV4dGVuZHMgRmlsZUl0ZW0ge1xuICAgIHNoYXJlZFdpdGg6IHsgdXNlcm5hbWU6IHN0cmluZywgbGlua1BhdGg6IHN0cmluZyB9W11cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE91dGdvaW5nU2hhcmVzKCk6IFByb21pc2U8U2hhcmVkRmlsZUl0ZW1bXT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHNoYXJlZFJvb3QgPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcpXG4gICAgICAgIGNvbnN0IG15SG9tZSA9IG9zLmhvbWVkaXIoKVxuXG4gICAgICAgIC8vIE1hcCBvZiBzb3VyY2VQYXRoIC0+IHsgc2hhcmVkV2l0aDogW10gfVxuICAgICAgICBjb25zdCBzaGFyZU1hcCA9IG5ldyBNYXA8c3RyaW5nLCB7IHVzZXJuYW1lOiBzdHJpbmcsIGxpbmtQYXRoOiBzdHJpbmcgfVtdPigpXG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJEaXJzID0gYXdhaXQgZnMucmVhZGRpcihzaGFyZWRSb290LCB7IHdpdGhGaWxlVHlwZXM6IHRydWUgfSlcblxuICAgICAgICAgICAgZm9yIChjb25zdCB1c2VyRGlyIG9mIHVzZXJEaXJzKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1c2VyRGlyLmlzRGlyZWN0b3J5KCkpIGNvbnRpbnVlXG5cbiAgICAgICAgICAgICAgICBjb25zdCB1c2VyUGF0aCA9IHBhdGguam9pbihzaGFyZWRSb290LCB1c2VyRGlyLm5hbWUpXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua3MgPSBhd2FpdCBmcy5yZWFkZGlyKHVzZXJQYXRoKVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGlua1BhdGggPSBwYXRoLmpvaW4odXNlclBhdGgsIGxpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGF3YWl0IGZzLnJlYWRsaW5rKGxpbmtQYXRoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRhcmdldCBpcyBpbnNpZGUgbXkgaG9tZSBkaXJlY3RvcnkgKG9yIGJlbG9uZ3MgdG8gbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWRlYWxseSBjaGVjayBpZiBJIG93biB0aGUgdGFyZ2V0IGZpbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LnN0YXJ0c1dpdGgobXlIb21lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXNoYXJlTWFwLmhhcyh0YXJnZXQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5zZXQodGFyZ2V0LCBbXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU1hcC5nZXQodGFyZ2V0KT8ucHVzaCh7IHVzZXJuYW1lOiB1c2VyRGlyLm5hbWUsIGxpbmtQYXRoIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE5vdCBhIHN5bWxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBDb252ZXJ0IG1hcCB0byBTaGFyZWRGaWxlSXRlbSBsaXN0XG4gICAgICAgICAgICBjb25zdCByZXN1bHRzOiBTaGFyZWRGaWxlSXRlbVtdID0gW11cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2ZpbGVQYXRoLCBzaGFyZXNdIG9mIHNoYXJlTWFwLmVudHJpZXMoKSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRzID0gYXdhaXQgZnMuc3RhdChmaWxlUGF0aClcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmFtZSA9IHBhdGguYmFzZW5hbWUoZmlsZVBhdGgpXG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHR5cGU6IEZpbGVJdGVtWyd0eXBlJ10gPSAnZmlsZSdcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpIHR5cGUgPSAnZm9sZGVyJ1xuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChuYW1lLmVuZHNXaXRoKCcuc2gnKSB8fCBuYW1lLmVuZHNXaXRoKCcucHknKSkgdHlwZSA9ICdzY3JpcHQnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy5jc3YnKSB8fCBuYW1lLmVuZHNXaXRoKCcuanNvbicpKSB0eXBlID0gJ2RhdGEnXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG5hbWUuZW5kc1dpdGgoJy56aXAnKSB8fCBuYW1lLmVuZHNXaXRoKCcudGFyJykgfHwgbmFtZS5lbmRzV2l0aCgnLmd6JykpIHR5cGUgPSAnYXJjaGl2ZSdcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJtcyA9IChzdGF0cy5tb2RlICYgcGFyc2VJbnQoJzc3NycsIDgpKS50b1N0cmluZyg4KVxuXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogZmlsZVBhdGgsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogdHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgICAgICAgICAgICAgICAgICAgICAgb3duZXI6IGF3YWl0IGdldFVzZXJuYW1lKHN0YXRzLnVpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBncm91cDogU3RyaW5nKHN0YXRzLmdpZCksXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEF0OiBzdGF0cy5tdGltZS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZUJ5dGVzOiBzdGF0cy5zaXplLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGVybWlzc2lvbnM6IGAwJHtwZXJtc31gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkV2l0aDogc2hhcmVzXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBGaWxlIG1pZ2h0IGhhdmUgYmVlbiBkZWxldGVkIGJ1dCBsaW5rIGV4aXN0c1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzXG5cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmV0dXJuIFtdXG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZ2V0dGluZyBvdXRnb2luZyBzaGFyZXM6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4gW11cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNoYXJlRmlsZSh0YXJnZXRVc2VybmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nKTogUHJvbWlzZTx7IHN1Y2Nlc3M6IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZyB9PiB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3Qgc2hhcmVkTGlua1BhdGggPSBwYXRoLmpvaW4ob3MuaG9tZWRpcigpLCAnaHBjX3NoYXJlZCcsIHRhcmdldFVzZXJuYW1lLCBmaWxlTmFtZSlcbiAgICAgICAgYXdhaXQgZnMudW5saW5rKHNoYXJlZExpbmtQYXRoKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBtZXNzYWdlOiBgVW5zaGFyZWQgJHtmaWxlTmFtZX0gd2l0aCAke3RhcmdldFVzZXJuYW1lfWAgfVxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2UgfHwgXCJGYWlsZWQgdG8gdW5zaGFyZVwiIH1cbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VQZXJtaXNzaW9ucyhmaWxlUGF0aDogc3RyaW5nLCBtb2RlOiBzdHJpbmcpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBmcy5jaG1vZChmaWxlUGF0aCwgbW9kZSlcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYFVwZGF0ZWQgcGVybWlzc2lvbnMgZm9yICR7cGF0aC5iYXNlbmFtZShmaWxlUGF0aCl9YCB9XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIkZhaWxlZCB0byBjaGFuZ2UgcGVybWlzc2lvbnNcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBsb2FkRmlsZShmb3JtRGF0YTogRm9ybURhdGEpOiBQcm9taXNlPHsgc3VjY2VzczogYm9vbGVhbiwgbWVzc2FnZTogc3RyaW5nIH0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBmaWxlID0gZm9ybURhdGEuZ2V0KCdmaWxlJykgYXMgRmlsZVxuICAgICAgICBjb25zdCBjdXJyZW50UGF0aFNlZ21lbnRzID0gSlNPTi5wYXJzZShmb3JtRGF0YS5nZXQoJ3BhdGhTZWdtZW50cycpIGFzIHN0cmluZylcblxuICAgICAgICBpZiAoIWZpbGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGZpbGUgcHJvdmlkZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGJ1ZmZlciA9IEJ1ZmZlci5mcm9tKGF3YWl0IGZpbGUuYXJyYXlCdWZmZXIoKSlcbiAgICAgICAgY29uc3QgcmVsYXRpdmVQYXRoID0gcGF0aC5qb2luKC4uLmN1cnJlbnRQYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aClcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShwYXRoLmpvaW4odGFyZ2V0RGlyLCBmaWxlLm5hbWUpLCBidWZmZXIpXG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIG1lc3NhZ2U6IGBVcGxvYWRlZCAke2ZpbGUubmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVcGxvYWQgZXJyb3I6XCIsIGVycm9yKVxuICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogZXJyb3IubWVzc2FnZSB8fCBcIlVwbG9hZCBmYWlsZWRcIiB9XG4gICAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlRm9sZGVyKHBhdGhTZWdtZW50czogc3RyaW5nW10sIGZvbGRlck5hbWU6IHN0cmluZyk6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBtZXNzYWdlOiBzdHJpbmcgfT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlbGF0aXZlUGF0aCA9IHBhdGguam9pbiguLi5wYXRoU2VnbWVudHMpXG4gICAgICAgIGNvbnN0IHRhcmdldERpciA9IHBhdGguam9pbihCQVNFX1BBVEgsIHJlbGF0aXZlUGF0aCwgZm9sZGVyTmFtZSlcblxuICAgICAgICBpZiAoIXRhcmdldERpci5zdGFydHNXaXRoKEJBU0VfUEFUSCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFjY2VzcyBkZW5pZWRcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGZzLm1rZGlyKHRhcmdldERpcilcbiAgICAgICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgbWVzc2FnZTogYENyZWF0ZWQgZm9sZGVyICR7Zm9sZGVyTmFtZX1gIH1cbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSBmb2xkZXJcIiB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ5UkE0VHNCIn0=
}),
"[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Tabs",
    ()=>Tabs,
    "TabsContent",
    ()=>TabsContent,
    "TabsList",
    ()=>TabsList,
    "TabsTrigger",
    ()=>TabsTrigger
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-tabs/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
function Tabs({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "tabs",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex flex-col gap-2', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function TabsList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["List"], {
        "data-slot": "tabs-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function TabsTrigger({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "tabs-trigger",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("data-[state=active]:bg-background dark:data-[state=active]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
function TabsContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$tabs$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
        "data-slot": "tabs-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex-1 outline-none', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/tabs.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/badge.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Badge",
    ()=>Badge,
    "badgeVariants",
    ()=>badgeVariants
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/class-variance-authority/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
const badgeVariants = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$class$2d$variance$2d$authority$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cva"])('inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden', {
    variants: {
        variant: {
            default: 'border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90',
            secondary: 'border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90',
            destructive: 'border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
            outline: 'text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground'
        }
    },
    defaultVariants: {
        variant: 'default'
    }
});
function Badge({ className, variant, asChild = false, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'span';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "badge",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])(badgeVariants({
            variant
        }), className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/badge.tsx",
        lineNumber: 38,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/breadcrumb.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Breadcrumb",
    ()=>Breadcrumb,
    "BreadcrumbEllipsis",
    ()=>BreadcrumbEllipsis,
    "BreadcrumbItem",
    ()=>BreadcrumbItem,
    "BreadcrumbLink",
    ()=>BreadcrumbLink,
    "BreadcrumbList",
    ()=>BreadcrumbList,
    "BreadcrumbPage",
    ()=>BreadcrumbPage,
    "BreadcrumbSeparator",
    ()=>BreadcrumbSeparator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-slot/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-ssr] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/ellipsis.js [app-ssr] (ecmascript) <export default as MoreHorizontal>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
;
function Breadcrumb({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        "aria-label": "breadcrumb",
        "data-slot": "breadcrumb",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 8,
        columnNumber: 10
    }, this);
}
function BreadcrumbList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
        "data-slot": "breadcrumb-list",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 13,
        columnNumber: 5
    }, this);
}
function BreadcrumbItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "breadcrumb-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center gap-1.5', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
function BreadcrumbLink({ asChild, className, ...props }) {
    const Comp = asChild ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$slot$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Slot"] : 'a';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(Comp, {
        "data-slot": "breadcrumb-link",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('hover:text-foreground transition-colors', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
function BreadcrumbPage({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "breadcrumb-page",
        role: "link",
        "aria-disabled": "true",
        "aria-current": "page",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-foreground font-normal', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 54,
        columnNumber: 5
    }, this);
}
function BreadcrumbSeparator({ children, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        "data-slot": "breadcrumb-separator",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('[&>svg]:size-3.5', className),
        ...props,
        children: children ?? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {}, void 0, false, {
            fileName: "[project]/components/ui/breadcrumb.tsx",
            lineNumber: 78,
            columnNumber: 20
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
function BreadcrumbEllipsis({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        "data-slot": "breadcrumb-ellipsis",
        role: "presentation",
        "aria-hidden": "true",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex size-9 items-center justify-center', className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$ellipsis$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MoreHorizontal$3e$__["MoreHorizontal"], {
                className: "size-4"
            }, void 0, false, {
                fileName: "[project]/components/ui/breadcrumb.tsx",
                lineNumber: 95,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "sr-only",
                children: "More"
            }, void 0, false, {
                fileName: "[project]/components/ui/breadcrumb.tsx",
                lineNumber: 96,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/breadcrumb.tsx",
        lineNumber: 88,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/ui/select.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Select",
    ()=>Select,
    "SelectContent",
    ()=>SelectContent,
    "SelectGroup",
    ()=>SelectGroup,
    "SelectItem",
    ()=>SelectItem,
    "SelectLabel",
    ()=>SelectLabel,
    "SelectScrollDownButton",
    ()=>SelectScrollDownButton,
    "SelectScrollUpButton",
    ()=>SelectScrollUpButton,
    "SelectSeparator",
    ()=>SelectSeparator,
    "SelectTrigger",
    ()=>SelectTrigger,
    "SelectValue",
    ()=>SelectValue
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@radix-ui/react-select/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as CheckIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDownIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUpIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function Select({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Root"], {
        "data-slot": "select",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
function SelectGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Group"], {
        "data-slot": "select-group",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 18,
        columnNumber: 10
    }, this);
}
function SelectValue({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Value"], {
        "data-slot": "select-value",
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 24,
        columnNumber: 10
    }, this);
}
function SelectTrigger({ className, size = 'default', children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Trigger"], {
        "data-slot": "select-trigger",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*='text-'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive dark:bg-input/30 dark:hover:bg-input/50 flex w-fit items-center justify-between gap-2 rounded-md border bg-transparent px-3 py-2 text-sm whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 data-[size=default]:h-9 data-[size=sm]:h-8 *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                asChild: true,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
                    className: "size-4 opacity-50"
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, this);
}
function SelectContent({ className, children, position = 'popper', ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Portal"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Content"], {
            "data-slot": "select-content",
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md', position === 'popper' && 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1', className),
            position: position,
            ...props,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollUpButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Viewport"], {
                    className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('p-1', position === 'popper' && 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'),
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(SelectScrollDownButton, {}, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 82,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, this);
}
function SelectLabel({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Label"], {
        "data-slot": "select-label",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('text-muted-foreground px-2 py-1.5 text-xs', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 93,
        columnNumber: 5
    }, this);
}
function SelectItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Item"], {
        "data-slot": "select-item",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("focus:bg-accent focus:text-accent-foreground [&_svg:not([class*='text-'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "absolute right-2 flex size-3.5 items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemIndicator"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckIcon$3e$__["CheckIcon"], {
                        className: "size-4"
                    }, void 0, false, {
                        fileName: "[project]/components/ui/select.tsx",
                        lineNumber: 117,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/ui/select.tsx",
                    lineNumber: 116,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ItemText"], {
                children: children
            }, void 0, false, {
                fileName: "[project]/components/ui/select.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 107,
        columnNumber: 5
    }, this);
}
function SelectSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Separator"], {
        "data-slot": "select-separator",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('bg-border pointer-events-none -mx-1 my-1 h-px', className),
        ...props
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 130,
        columnNumber: 5
    }, this);
}
function SelectScrollUpButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollUpButton"], {
        "data-slot": "select-scroll-up-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUpIcon$3e$__["ChevronUpIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 151,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 143,
        columnNumber: 5
    }, this);
}
function SelectScrollDownButton({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$radix$2d$ui$2f$react$2d$select$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ScrollDownButton"], {
        "data-slot": "select-scroll-down-button",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('flex cursor-default items-center justify-center py-1', className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDownIcon$3e$__["ChevronDownIcon"], {
            className: "size-4"
        }, void 0, false, {
            fileName: "[project]/components/ui/select.tsx",
            lineNumber: 169,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ui/select.tsx",
        lineNumber: 161,
        columnNumber: 5
    }, this);
}
;
}),
"[project]/components/FileExplorer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FileExplorer",
    ()=>FileExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/FileList.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DetailsDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DetailsDrawer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ShareDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$a9be73__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:a9be73 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$531425__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:531425 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$5264fa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:5264fa [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$0cd4ff__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:0cd4ff [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$29d7c0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:29d7c0 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$490e10__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/data:490e10 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/button.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/input.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/tabs.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/badge.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock.js [app-ssr] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/lock-open.js [app-ssr] (ecmascript) <export default as Unlock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/breadcrumb.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ui/select.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-grid.js [app-ssr] (ecmascript) <export default as LayoutGrid>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/list.js [app-ssr] (ecmascript) <export default as List>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/info.js [app-ssr] (ecmascript) <export default as Info>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-up.js [app-ssr] (ecmascript) <export default as ChevronUp>");
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function FileExplorer() {
    const [currentPath, setCurrentPath] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [files, setFiles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [selectedFile, setSelectedFile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isDetailsOpen, setIsDetailsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isShareOpen, setIsShareOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fileToShare, setFileToShare] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [viewMode, setViewMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('list');
    const [sortConfig, setSortConfig] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        column: 'name',
        direction: 'asc'
    });
    const [textSearch, setTextSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [ownerFilter, setOwnerFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [modifiedFilter, setModifiedFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("newest");
    const [typeFilter, setTypeFilter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    const [currentCategory, setCurrentCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("home");
    const [outgoingShares, setOutgoingShares] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sharedTab, setSharedTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("incoming");
    // Reset path when category changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setCurrentPath([]);
    }, [
        currentCategory
    ]);
    // Get unique owners
    const owners = Array.from(new Set(files.map((f)=>f.owner)));
    // Initial load and path navigation
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const loadFiles = async ()=>{
            let fetchedFiles = [];
            if (currentCategory === 'shared') {
                if (sharedTab === 'incoming') {
                    fetchedFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$5264fa__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getSharedFiles"])(currentPath);
                    setFiles(fetchedFiles);
                } else {
                    const outgoing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$0cd4ff__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOutgoingShares"])();
                    setOutgoingShares(outgoing);
                    setFiles(outgoing); // For reusing the file list view initially, but we might likely need a custom view
                }
            } else {
                fetchedFiles = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$a9be73__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getFiles"])(currentPath);
                setFiles(fetchedFiles);
            }
        };
        loadFiles();
    }, [
        currentPath,
        currentCategory,
        sharedTab
    ]);
    // Filter files based on search and current logic (mocked)
    // In a real app this would query the backend based on path
    // Filter files logic
    const filteredFiles = files.filter((file)=>{
        const matchesSearch = file.name.toLowerCase().includes(textSearch.toLowerCase());
        const matchesOwner = ownerFilter === "all" || file.owner === ownerFilter;
        const matchesType = typeFilter === "all" || typeFilter === 'folder' && file.type === 'folder' || typeFilter === 'script' && file.type === 'script' || typeFilter === 'data' && file.type === 'data';
        // Category filter simulation
        if (currentCategory === 'trash') {
            // In a real app, we'd check if file.deletedAt is set.
            // For now, let's just show no files to simulate 'empty trash' or maybe filtered out ones
            // But to show "Refinement" I'll just say:
            return false // Empty trash for now, or we could add a 'isDeleted' flag to mockData.
            ;
        }
        // Shared projects simulation
        if (currentCategory === 'shared') {
            return matchesSearch && matchesOwner && matchesType && file.group === 'researchers';
        }
        // Recent simulation
        if (currentCategory === 'recent') {
            // Show all but maybe sorted by time.
            return matchesSearch && matchesOwner && matchesType;
        }
        return matchesSearch && matchesOwner && matchesType;
    }).sort((a, b)=>{
        // Special modified filter handling (overrides column sort for simplicity if strictly enforcing the dropdown logic)
        // However, usually detailed table sort and a "view" dropdown might conflict.
        // The requirement says "Modified dropdown (Newest, Oldest)".
        // Let's make the modified dropdown set the primary sort to 'modifiedAt'.
        let aValue = a[sortConfig.column];
        let bValue = b[sortConfig.column];
        if (modifiedFilter !== 'custom') {
        // If we are strictly using the dropdown, we might ignore the table header sort or sync them.
        // For this implementation, I will let the specific modified dropdown take precedence for 'modifiedAt' sorting
        // but if the user clicks a header, we might want to respect that.
        // A cleaner approach for "Newest/Oldest" dropdown is:
        // It effectively sets column='modifiedAt' and direction='desc'/'asc'.
        }
        if (aValue === undefined || bValue === undefined) return 0;
        if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
        return 0;
    });
    // Update sort when Modified dropdown changes
    const handleModifiedFilterChange = (value)=>{
        setModifiedFilter(value);
        if (value === 'newest') {
            setSortConfig({
                column: 'modifiedAt',
                direction: 'desc'
            });
        } else if (value === 'oldest') {
            setSortConfig({
                column: 'modifiedAt',
                direction: 'asc'
            });
        }
    };
    const handleFileSelect = (file)=>{
        setSelectedFile(file);
        setIsDetailsOpen(true);
    };
    const handleFolderNavigate = (folderId)=>{
        const folder = files.find((f)=>f.id === folderId);
        if (folder) {
            setCurrentPath([
                ...currentPath,
                folder.name
            ]);
        }
    };
    const handleNewItem = (type)=>{
        const newItem = {
            id: Math.random().toString(36).substr(2, 9),
            name: type === 'folder' ? 'New Folder' : `new_${type}.${type === 'script' ? 'sh' : 'txt'}`,
            type: type === 'upload' ? 'file' : type,
            path: `/home/rahul/new_${type}`,
            owner: 'rahul',
            group: 'researchers',
            modifiedAt: new Date().toISOString(),
            sizeBytes: 0,
            permissions: type === 'folder' ? 'drwxr-xr-x' : '-rw-r--r--'
        };
        setFiles([
            newItem,
            ...files
        ]);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])(`Created new ${type}`);
    };
    const handleDelete = (fileId)=>{
        setFiles(files.filter((f)=>f.id !== fileId));
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])("File deleted");
        if (selectedFile?.id === fileId) {
            setSelectedFile(null);
            setIsDetailsOpen(false);
        }
    };
    const handleRename = (fileId)=>{
        const file = files.find((f)=>f.id === fileId);
        if (!file) return;
        const newName = window.prompt("Enter new name:", file.name);
        if (newName && newName !== file.name) {
            setFiles(files.map((f)=>f.id === fileId ? {
                    ...f,
                    name: newName
                } : f));
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])("Renamed file");
        }
    };
    const handleCopyPath = (file)=>{
        navigator.clipboard.writeText(file.path);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])("Path copied to clipboard");
    };
    const handleDownload = (file)=>{
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"])(`Downloading ${file.name}...`);
    };
    const handleShare = (file)=>{
        setFileToShare(file);
        setIsShareOpen(true);
    };
    const handleShareConfirm = async (username)=>{
        if (!fileToShare) return;
        await new Promise((resolve, reject)=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].promise((0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$531425__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["shareFile"])(fileToShare.path, username), {
                loading: 'Creating symlink...',
                success: (data)=>{
                    resolve();
                    if (data.success) return data.message;
                    throw new Error(data.message);
                },
                error: (err)=>{
                    reject(err);
                    return err.message;
                }
            });
        });
    };
    const handleUnshare = async (username, fileName)=>{
        const confirm = window.confirm(`Stop sharing ${fileName} with ${username}?`);
        if (!confirm) return;
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$29d7c0__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["unshareFile"])(username, fileName);
        if (result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(result.message);
            // Refresh list
            const outgoing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$0cd4ff__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOutgoingShares"])();
            setOutgoingShares(outgoing);
            setFiles(outgoing);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.message);
        }
    };
    const handlePermissionChange = async (file, mode)=>{
        const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$490e10__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["changePermissions"])(file.path, mode);
        if (result.success) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(result.message);
            // Refresh
            const outgoing = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$data$3a$0cd4ff__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getOutgoingShares"])();
            setOutgoingShares(outgoing);
            setFiles(outgoing);
        } else {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.message);
        }
    };
    const handleSort = (column)=>{
        setSortConfig((current)=>({
                column,
                direction: current.column === column && current.direction === 'asc' ? 'desc' : 'asc'
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex h-screen bg-background overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Sidebar"], {
                className: "hidden md:block w-64 flex-shrink-0",
                currentCategory: currentCategory,
                onCategoryChange: setCurrentCategory,
                onNewItem: handleNewItem
            }, void 0, false, {
                fileName: "[project]/components/FileExplorer.tsx",
                lineNumber: 268,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 flex flex-col min-w-0 h-full",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                        className: "border-b bg-card p-4 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-xl font-semibold truncate capitalize",
                                        children: currentCategory === 'home' ? currentPath.length > 0 ? currentPath[currentPath.length - 1] : "Home" : currentCategory
                                    }, void 0, false, {
                                        fileName: "[project]/components/FileExplorer.tsx",
                                        lineNumber: 279,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "relative w-64",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                                        className: "absolute left-2 top-2.5 h-4 w-4 text-muted-foreground"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 285,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$input$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Input"], {
                                                        placeholder: "Search files or folders...",
                                                        className: "pl-8",
                                                        value: textSearch,
                                                        onChange: (e)=>setTextSearch(e.target.value)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 286,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileExplorer.tsx",
                                                lineNumber: 284,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "ghost",
                                                size: "icon",
                                                onClick: ()=>setIsDetailsOpen(!isDetailsOpen),
                                                className: isDetailsOpen ? "bg-muted" : "",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$info$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Info$3e$__["Info"], {
                                                    className: "h-5 w-5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                    lineNumber: 300,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileExplorer.tsx",
                                                lineNumber: 294,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FileExplorer.tsx",
                                        lineNumber: 283,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FileExplorer.tsx",
                                lineNumber: 278,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-4 flex-1 overflow-x-auto",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Breadcrumb"], {
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbList"], {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbItem"], {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbLink"], {
                                                                className: "cursor-pointer",
                                                                onClick: ()=>setCurrentPath([]),
                                                                children: "Home"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 310,
                                                                columnNumber: 41
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                            lineNumber: 309,
                                                            columnNumber: 37
                                                        }, this),
                                                        currentPath.map((folder, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "flex items-center",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbSeparator"], {}, void 0, false, {
                                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                                        lineNumber: 319,
                                                                        columnNumber: 45
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbItem"], {
                                                                        children: index === currentPath.length - 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbPage"], {
                                                                            children: folder
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                                            lineNumber: 322,
                                                                            columnNumber: 53
                                                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$breadcrumb$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BreadcrumbLink"], {
                                                                            className: "cursor-pointer",
                                                                            onClick: ()=>setCurrentPath(currentPath.slice(0, index + 1)),
                                                                            children: folder
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                                            lineNumber: 324,
                                                                            columnNumber: 53
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                                        lineNumber: 320,
                                                                        columnNumber: 45
                                                                    }, this)
                                                                ]
                                                            }, index, true, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 318,
                                                                columnNumber: 41
                                                            }, this))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                    lineNumber: 308,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileExplorer.tsx",
                                                lineNumber: 307,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                variant: "outline",
                                                size: "icon",
                                                className: "h-6 w-6",
                                                disabled: currentPath.length === 0,
                                                onClick: ()=>setCurrentPath(currentPath.slice(0, -1)),
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$up$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronUp$3e$__["ChevronUp"], {
                                                    className: "h-4 w-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                    lineNumber: 343,
                                                    columnNumber: 33
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/FileExplorer.tsx",
                                                lineNumber: 336,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FileExplorer.tsx",
                                        lineNumber: 306,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: typeFilter,
                                                onValueChange: setTypeFilter,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "w-[120px] h-8 text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Type"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                            lineNumber: 350,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 349,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "all",
                                                                children: "All Types"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 353,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "folder",
                                                                children: "Folders"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 354,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "script",
                                                                children: "Scripts"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 355,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "data",
                                                                children: "Data"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 356,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 352,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileExplorer.tsx",
                                                lineNumber: 348,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: ownerFilter,
                                                onValueChange: setOwnerFilter,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "w-[140px] h-8 text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Owner/Group"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                            lineNumber: 362,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 361,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "all",
                                                                children: "All Owners"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 365,
                                                                columnNumber: 37
                                                            }, this),
                                                            owners.map((owner)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                    value: owner,
                                                                    children: owner
                                                                }, owner, false, {
                                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                                    lineNumber: 367,
                                                                    columnNumber: 41
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 364,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileExplorer.tsx",
                                                lineNumber: 360,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Select"], {
                                                value: modifiedFilter,
                                                onValueChange: handleModifiedFilterChange,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectTrigger"], {
                                                        className: "w-[120px] h-8 text-xs",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectValue"], {
                                                            placeholder: "Modified"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                            lineNumber: 374,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 373,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectContent"], {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "newest",
                                                                children: "Newest"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 377,
                                                                columnNumber: 37
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$select$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SelectItem"], {
                                                                value: "oldest",
                                                                children: "Oldest"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 378,
                                                                columnNumber: 37
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 376,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileExplorer.tsx",
                                                lineNumber: 372,
                                                columnNumber: 29
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center border rounded-md bg-background",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: viewMode === 'list' ? 'secondary' : 'ghost',
                                                        size: "sm",
                                                        className: "h-8 px-2 rounded-none rounded-l-md",
                                                        onClick: ()=>setViewMode('list'),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$list$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__List$3e$__["List"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                            lineNumber: 389,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 383,
                                                        columnNumber: 33
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                        variant: viewMode === 'grid' ? 'secondary' : 'ghost',
                                                        size: "sm",
                                                        className: "h-8 px-2 rounded-none rounded-r-md",
                                                        onClick: ()=>setViewMode('grid'),
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$grid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutGrid$3e$__["LayoutGrid"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                            lineNumber: 397,
                                                            columnNumber: 37
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 391,
                                                        columnNumber: 33
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/FileExplorer.tsx",
                                                lineNumber: 382,
                                                columnNumber: 29
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/FileExplorer.tsx",
                                        lineNumber: 347,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/FileExplorer.tsx",
                                lineNumber: 305,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/FileExplorer.tsx",
                        lineNumber: 277,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        className: "flex-1 overflow-auto p-6",
                        children: currentCategory === 'shared' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Tabs"], {
                            value: sharedTab,
                            onValueChange: setSharedTab,
                            className: "w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsList"], {
                                    className: "mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "incoming",
                                            children: "Shared with Me"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FileExplorer.tsx",
                                            lineNumber: 409,
                                            columnNumber: 33
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsTrigger"], {
                                            value: "outgoing",
                                            children: "Shared by Me"
                                        }, void 0, false, {
                                            fileName: "[project]/components/FileExplorer.tsx",
                                            lineNumber: 410,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/FileExplorer.tsx",
                                    lineNumber: 408,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "incoming",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileList"], {
                                        files: filteredFiles,
                                        onFileSelect: handleFileSelect,
                                        onFolderNavigate: handleFolderNavigate,
                                        onSort: handleSort,
                                        sortConfig: sortConfig,
                                        viewMode: viewMode,
                                        onDelete: handleDelete,
                                        onRename: handleRename,
                                        onCopyPath: handleCopyPath,
                                        onDownload: handleDownload,
                                        onShare: handleShare
                                    }, void 0, false, {
                                        fileName: "[project]/components/FileExplorer.tsx",
                                        lineNumber: 414,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/FileExplorer.tsx",
                                    lineNumber: 413,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$tabs$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TabsContent"], {
                                    value: "outgoing",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-md border",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                            className: "w-full caption-bottom text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                    className: "[&_tr]:border-b",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        className: "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
                                                                children: "File"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 434,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
                                                                children: "Shared With"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 435,
                                                                columnNumber: 49
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                                className: "h-12 px-4 text-left align-middle font-medium text-muted-foreground",
                                                                children: "Permissions"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 436,
                                                                columnNumber: 49
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                        lineNumber: 433,
                                                        columnNumber: 45
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                    lineNumber: 432,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                    className: "[&_tr:last-child]:border-0",
                                                    children: [
                                                        outgoingShares.map((file)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                                className: "border-b transition-colors hover:bg-muted/50",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "p-4 align-middle font-medium",
                                                                        children: file.name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                                        lineNumber: 442,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "p-4 align-middle",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex flex-wrap gap-2",
                                                                            children: file.sharedWith.map((share, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$badge$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Badge"], {
                                                                                    variant: "secondary",
                                                                                    className: "gap-1 pr-1",
                                                                                    children: [
                                                                                        share.username,
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                                            onClick: ()=>handleUnshare(share.username, file.name),
                                                                                            className: "ml-1 rounded-full p-0.5 hover:bg-destructive hover:text-destructive-foreground",
                                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                                                                className: "h-3 w-3"
                                                                                            }, void 0, false, {
                                                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                                                lineNumber: 452,
                                                                                                columnNumber: 73
                                                                                            }, this)
                                                                                        }, void 0, false, {
                                                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                                                            lineNumber: 448,
                                                                                            columnNumber: 69
                                                                                        }, this)
                                                                                    ]
                                                                                }, idx, true, {
                                                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                                                    lineNumber: 446,
                                                                                    columnNumber: 65
                                                                                }, this))
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                                            lineNumber: 444,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                                        lineNumber: 443,
                                                                        columnNumber: 53
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                        className: "p-4 align-middle",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "ghost",
                                                                                    size: "sm",
                                                                                    className: file.permissions.endsWith('4') ? "text-orange-500" : "text-muted-foreground",
                                                                                    onClick: ()=>handlePermissionChange(file, '444'),
                                                                                    title: "Set Read Only",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                                                        className: "h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                                                        lineNumber: 467,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                                                    lineNumber: 460,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                                                                    variant: "ghost",
                                                                                    size: "sm",
                                                                                    className: file.permissions.endsWith('7') || file.permissions.endsWith('6') ? "text-green-500" : "text-muted-foreground",
                                                                                    onClick: ()=>handlePermissionChange(file, '644'),
                                                                                    title: "Set Read/Write",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Unlock$3e$__["Unlock"], {
                                                                                        className: "h-4 w-4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                                                        lineNumber: 476,
                                                                                        columnNumber: 65
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                                                    lineNumber: 469,
                                                                                    columnNumber: 61
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "text-xs text-muted-foreground font-mono",
                                                                                    children: file.permissions
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                                                    lineNumber: 478,
                                                                                    columnNumber: 61
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                                            lineNumber: 459,
                                                                            columnNumber: 57
                                                                        }, this)
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/FileExplorer.tsx",
                                                                        lineNumber: 458,
                                                                        columnNumber: 53
                                                                    }, this)
                                                                ]
                                                            }, file.id, true, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 441,
                                                                columnNumber: 49
                                                            }, this)),
                                                        outgoingShares.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                colSpan: 3,
                                                                className: "p-4 text-center text-muted-foreground",
                                                                children: "You haven't shared any files yet."
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/FileExplorer.tsx",
                                                                lineNumber: 485,
                                                                columnNumber: 53
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/FileExplorer.tsx",
                                                            lineNumber: 484,
                                                            columnNumber: 49
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/FileExplorer.tsx",
                                                    lineNumber: 439,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/FileExplorer.tsx",
                                            lineNumber: 431,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/FileExplorer.tsx",
                                        lineNumber: 430,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/FileExplorer.tsx",
                                    lineNumber: 429,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/FileExplorer.tsx",
                            lineNumber: 407,
                            columnNumber: 25
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$FileList$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FileList"], {
                            files: filteredFiles,
                            onFileSelect: handleFileSelect,
                            onFolderNavigate: handleFolderNavigate,
                            onSort: handleSort,
                            sortConfig: sortConfig,
                            viewMode: viewMode,
                            onDelete: handleDelete,
                            onRename: handleRename,
                            onCopyPath: handleCopyPath,
                            onDownload: handleDownload,
                            onShare: handleShare
                        }, void 0, false, {
                            fileName: "[project]/components/FileExplorer.tsx",
                            lineNumber: 496,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/FileExplorer.tsx",
                        lineNumber: 405,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/FileExplorer.tsx",
                lineNumber: 275,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DetailsDrawer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DetailsDrawer"], {
                isOpen: isDetailsOpen,
                onClose: ()=>setIsDetailsOpen(false),
                file: selectedFile,
                onCopyPath: handleCopyPath,
                onDownload: handleDownload,
                onShare: handleShare
            }, void 0, false, {
                fileName: "[project]/components/FileExplorer.tsx",
                lineNumber: 513,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ShareDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ShareDialog"], {
                isOpen: isShareOpen,
                onClose: ()=>setIsShareOpen(false),
                onConfirm: handleShareConfirm,
                file: fileToShare
            }, void 0, false, {
                fileName: "[project]/components/FileExplorer.tsx",
                lineNumber: 522,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/FileExplorer.tsx",
        lineNumber: 267,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=_cdeaca8a._.js.map