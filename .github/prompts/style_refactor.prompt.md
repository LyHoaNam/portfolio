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
