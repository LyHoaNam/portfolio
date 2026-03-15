---
description: "Analyze Figma CSS to generate component specifications and hierarchy"
agent: ask
---

Your goal is to analyze CSS copied from Figma and generate a detailed component specification with hierarchy

## Analysis Output Structure

### 1. Component Overview

Provide a high-level description of what this component is and its purpose.

**Example:**

```
Component: LoginCard
Purpose: Authentication form container for user login
Type: Feature Component (src/features/auth/components/)
```

### 2. Visual Hierarchy Analysis

Identify the component tree structure from the CSS classes.

**Format:**

```
LoginCard (Container)
├── LoginHeader (Header Section)
│   ├── LoginTitle (Heading)
│   └── LoginSubtitle (Description)
├── LoginForm (Form Section)
│   ├── EmailInput (Input Field)
│   ├── PasswordInput (Input Field)
│   └── SubmitButton (Button)
└── LoginFooter (Footer Section)
    └── SignUpLink (Link)
```

### 3. CSS Strategy Analysis

Analyze the CSS and separate **Structure** from **Skin** following our CSS strategy.

**Structure (Layout & Positioning):**

- Identify: `display`, `position`, `width`, `height`, `padding`, `margin`, `gap`, `flex-direction`, `align-items`, `justify-content`
- Evaluate: Is `display: flex` necessary? Could `display: block` work?
- Evaluate: Is positioning appropriate? (prefer `relative` over `absolute`)

**Skin (Visual Appearance):**

- Identify: `color`, `background`, `border`, `border-radius`, `box-shadow`, `font-family`, `font-size`, `font-weight`

### 6. Component Breakdown

Break down into atomic components following our component hierarchy.
