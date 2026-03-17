---
name: style_improvement
description: "Surgical code refactor to improve code style and update style based on requirements. Focus on improving code for performance"
agent: agent
---

# Style improvement

## Overview

Analyze the current css, tailwdind styles with HTML structure and suggest improvements to the code style. Focus on improving code for performance, readability, and maintainability.

## Improvements

## Color Usage Guidelines

**CRITICAL RULE: Before using ANY color in Tailwind classes, you MUST check if it exists in `src/global.css` first.**

## Never use arbitrary values in Tailwind classed

```diff
- <div className="bg-[#123456] text-[#654321] p-[20px]">
+ <div className="bg-custom-blue text-custom-red p-spacing-20">
```

## Variables naming convention

Name CSS variable should describe the purpose of the variable, not the specific value. This allows for more flexibility and reusability across the codebase.

```diff
- /* BAD: Specific value in variable name */
- --color-blue-500: #123456;
- --font-family-figma-bold: "Inter Bold", sans-serif;
+ /* GOOD: Purpose-based variable name */
+ --color-primary-500: #123456;
+ --font-family-display: "Inter Bold", sans-serif;
```

When requesting new variables, follow these patterns:

- **Colors**: `--color-{name}-{shade}`
  - Examples: `--color-primary-500`, `--color-gray-100`, `--color-success-600`
- **Spacing**: `--spacing-{size}`
  - Examples: `--spacing-128`, `--spacing-72`
- **Fonts**: `--font-family-{type}`
  - Examples: `--font-family-display`, `--font-family-mono`
- **Breakpoints**: `--breakpoint-{size}`
  - Examples: `--breakpoint-3xl`, `--breakpoint-4xl`

## Tailwind v4: CSS-First Configuration

```css
/* app/globals.css */
@import "tailwindcss";

@theme {
  /* Custom colors */
  --color-brand-50: #eff6ff;
  --color-brand-100: #dbeafe;
  --color-brand-900: #1e3a8a;

  /* Custom spacing */
  --spacing-128: 32rem;

  /* Custom fonts */
  --font-family-sans: "Inter", sans-serif;

  /* Custom breakpoints */
  --breakpoint-3xl: 1920px;
}
```

## Too many div tags

```diff
# BAD: Deeply nested divs for layout
- <div className="bg-gray-100 p-4">
-   <div className="max-w-4xl mx-auto">
-     <div className="flex flex-col md:flex-row">
-       <div className="w-full md:w-1/2">
-         <div className="p-4">

# GOOD: Use semantic HTML and utility classes
+ <section className="bg-gray-100 p-4">
+   <div className="max-w-4xl mx-auto flex flex-col md:flex-row">
+     <div className="w-full md:w-1/2 p-4">
```

## Abuse of absolute positioning

```diff
# BAD: Absolute positioning for layout
- <div className="relative">
-   <div className="absolute top-0 left-0 w-full h-full">
-     <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
-       Centered Text
-     </p>
-   </div>
- </div>
# GOOD: Use flexbox or grid for centering
+ <div className="flex items-center justify-center h-full">
+   <p>Centered Text</p>
+ </div>
```

## Semantic HTML

```diff
# BAD: Using divs for everything
- <div className="header">
-   <div className="nav">
-     <div className="nav-item">Home</div>
-     <div className="nav-item">About</div>
-   </div>
- </div>
# GOOD: Use semantic elements
+ <header>
+   <nav>
+     <ul className="flex space-x-4">
+       <li><a href="#" className="nav-item">Home</a></li>
+       <li><a href="#" className="nav-item">About</a></li>
+     </ul>
+   </nav>
+ </header>
```

## Remove dead css classes

```diff
# BAD: Unused classes in the codebase
- <div className="figma-bold text-2xl text-blue-500"> // figma-bold is not defined anywhere
# GOOD: Remove unused classes and use defined variables
+ <div className="font-bold text-2xl text-color-primary-500">
```

## Duplicate styles

```diff
# BAD: Duplicate styles across components
- <div className="bg-gray-100 p-4 rounded-lg shadow-md font-bold text-xl mb-4">
-   <h2 className="text-xl font-bold mb-2">
-     <span className="text-blue-500 font-bold text-xl">Card Title</span>
-   </h2>
- </div>
# GOOD: based on Object-Oriented CSS (OOCSS) principles. structure styles at parent level and skin at child level
+ <div className="m-4 rounded-lg p-4 shadow-md">
+   <h2 className="font-bold text-color-primary-500 text-xl">
+     Card Title
+   </h2>
+ </div>
```

## Never use inline styles

```diff
# BAD: Inline styles for dynamic values
- <div style={{ backgroundColor: "#123456", padding: "20px" }}>
# GOOD: Use Tailwind classes or CSS variables
+ <div className="bg-custom-blue p-spacing-20">
```

## Always prefer utility classes over custom CSS for simple styles

```diff
# BAD: Custom CSS for simple styles
- .figma-bold {
-    font-family: var(--font-figma-bold);
-    font-weight: 700;
-    text-transform: uppercase;
-    letter-spacing: var(--tracking-hero-title);
- } }
# GOOD: Use Tailwind utility classes for simple styles
+ <h1 className="font-bold font-family-black-ops-one uppercase"> // font-family-black-ops-one is defined in global.css
```
