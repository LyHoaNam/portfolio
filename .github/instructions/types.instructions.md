---
description: "TypeScript type definitions for type-safe application development"
applyTo: "src/types/**"
---

# 🎯 TypeScript Types Guidelines

> **Purpose:** Standards for defining and organizing TypeScript types  
> **Scope:** Applies to `src/types/` and `src/features/*/types/`

---

## 📁 Type Organization

```
src/types/
├── common.types.ts       # Shared utility types
└── index.ts              # Public exports

src/features/[feature]/types/
├── [feature].types.ts    # Feature-specific types
└── index.ts              # Public exports
```

---

## 🎯 When to Put Types Where

### ✅ Shared Types (`src/types/`)

Use for types that are used across **multiple features**:

- Common utility types
- Global type augmentations
- Shared data structures

### ✅ Feature Types (`src/features/[feature]/types/`)

Use for types specific to **one feature**:

- Feature domain types (Activity, QuickAction, etc.)
- Feature component prop types
- Feature-specific data structures

### ✅ Inline Types

Define inline for:

- Simple component props
- Hook return types
- One-off types not reused

---

## ✅ Type Best Practices

### 1. Common Utility Types

```tsx
// src/types/common.types.ts

/**
 * Make specified keys optional
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

/**
 * Extract array element type
 */
export type ArrayElement<T> = T extends (infer U)[] ? U : never;

/**
 * Nullable type helper
 */
export type Nullable<T> = T | null;
```

### 2. Feature-Specific Types

```tsx
// src/features/home/types/activity.types.ts

/**
 * Activity item for recent activity list
 */
export type Activity = {
  id: string;
  type: "upload" | "analysis" | "report";
  title: string;
  timestamp: string;
  status: "completed" | "pending" | "failed";
};

// Export from feature
export type { Activity } from "./activity.types";
```

### 3. Component Prop Types

```tsx
// Simple components - inline types
export const Button = ({
  variant,
  children,
}: {
  variant: "primary" | "secondary";
  children: React.ReactNode;
}) => {
  return <button>{children}</button>;
};

// Complex/reusable components - exported types
export type ActivityItemProps = {
  activity: Activity;
  onView?: (id: string) => void;
};

export const ActivityItem = ({ activity, onView }: ActivityItemProps) => {
  // Implementation
};

// UI components - extend HTML props
import type { ButtonHTMLAttributes } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
};
```

### 3.1. Always Use `type` Modifier for Type Imports

When importing types, **always** use the `type` modifier for clarity and to ensure no runtime code is included:

```tsx
// ✅ GOOD
import type { Activity } from "@/features/home/types";
import type { ButtonProps } from "@/types/common.types";

// ❌ BAD
import { Activity } from "@/features/home/types";
import { ButtonProps } from "@/types/common.types";
```

### 4. Use const assertions for literals

```tsx
// ✅ GOOD - Type-safe status values
export const ACTIVITY_STATUS = ["completed", "pending", "failed"] as const;
export type ActivityStatus = (typeof ACTIVITY_STATUS)[number];

// ✅ GOOD - Type-safe config
export const QUICK_ACTIONS = {
  upload: { icon: "upload", color: "blue" },
  analyze: { icon: "chart", color: "green" },
} as const;
```

---

## ❌ Common Mistakes

### Mistake 1: Using `any`

```tsx
// ❌ BAD - Disables type checking
export const parseJson = (str: string): any => {
  return JSON.parse(str);
};

// ✅ GOOD - Use unknown or generic
export const parseJson = <T>(str: string, fallback: T): T => {
  try {
    return JSON.parse(str) as T;
  } catch {
    return fallback;
  }
};
```

### Mistake 2: Duplicating Types

```tsx
// ❌ BAD - Repeated structure
export type Activity = {
  id: string;
  type: string;
  title: string;
};

export type QuickAction = {
  id: string;
  type: string;
  label: string;
};

// ✅ GOOD - Compose with base type
type BaseItem = {
  id: string;
  type: string;
};

export type Activity = BaseItem & {
  title: string;
};

export type QuickAction = BaseItem & {
  label: string;
};
```

### Mistake 3: Missing JSDoc

```tsx
// ❌ BAD - No documentation
export type Activity = {
  id: string;
  type: "upload" | "analysis";
  status: "completed" | "pending";
};

// ✅ GOOD - Documented
/**
 * Activity item for recent activity list
 * @property id - Unique activity identifier
 * @property type - Activity type
 * @property status - Current status
 */
export type Activity = {
  id: string;
  type: "upload" | "analysis";
  status: "completed" | "pending";
};
```

---

## 🎯 Type Location Decision

**"Where should I define this type?"**

```
Used by multiple features?
├─ Yes → src/types/common.types.ts
│
└─ No → Used only in one feature?
   ├─ Yes → src/features/[feature]/types/
   └─ No → Define inline with component/hook
```
