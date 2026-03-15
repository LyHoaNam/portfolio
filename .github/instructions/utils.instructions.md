---
description: "Pure utility functions for data transformation, formatting, validation, and helpers"
applyTo: "src/utils/**"
---

## 🎯 What Are Utility Functions?

Utilities are **pure, reusable functions** that perform common operations without side effects.  
Think: `formatDate`, `cn`, `debounce`, `validateEmail`, `capitalize`, `generateId`.

### Core Principles:

- ✅ **Pure functions** - Same input always produces same output
- ✅ **No side effects** - Don't mutate arguments, no API calls, no DOM manipulation
- ✅ **Reusable** - Used across multiple components/features
- ✅ **Documented** - JSDoc with examples
- ✅ **Single responsibility** - Each function does one thing well
- ✅ **Open close** - Add behavior via small interfaces/strategies or discriminated unions; avoid growing if/switch forests.
- ✅ **Interface Segregation** - Full TypeScript types with generics where appropriate
- ✅ **Dependency Inversion** - Infra (library) lives in src/infra/adapters/\* and is injected via context/factories. No direct infra imports in here
- ✅ **Testable** - Covered by unit tests with good edge case coverage
- ✅ **IIFE Singleton ** - With private state and public methods, if needed for things like ID generation or memoization. Avoid global mutable state.

---

## 🎯 What Belongs in Utils

### ✅ Utils Are For:

- **Data formatting** - Dates, numbers, currency, strings
- **Data transformation** - Mapping, filtering, sorting helpers
- **Validation** - Email, URL, phone number patterns
- **String manipulation** - Capitalize, truncate, slugify
- **Array/Object helpers** - Group by, unique, deep clone
- **Class name utilities** - Conditional class merging (cn)
- **Math/calculations** - Percentages, rounding, ranges
- **ID generation** - UUIDs, random strings
- **Type guards** - Runtime type checking

### ❌ Utils Are NOT For:

- **Component logic** - Extract to custom hooks instead
- **API calls** - Belongs in services
- **State management** - Use stores or hooks
- **Business logic** - Keep in services or feature components
- **Side effects** - No DOM manipulation, no network requests

---

## ✅ Utility Best Practices

### 1. Pure Functions Only

```tsx
// ✅ GOOD - Pure function
export const double = (n: number): number => n * 2;

// ❌ BAD - Side effect (modifies external state)
let total = 0;
export const addToTotal = (n: number) => {
  total += n; // ❌ Side effect
};
```

### 2. Don't Mutate Arguments

```tsx
// ✅ GOOD - Returns new array
export const addItem = <T>(array: T[], item:  T): T[] => {
  return [...array, item];
};

// ❌ BAD - Mutates input
export const addItem = <T>(array: T[], item: T): T[] => {
  array.push(item); // ❌ Mutation
  return array;
};
```

### 3. Use TypeScript Generics

```tsx
// ✅ GOOD - Generic, works with any type
export const first = <T>(array: T[]): T | undefined => {
  return array[0];
};

// ❌ BAD - Only works with specific type
export const first = (array: string[]): string | undefined => {
  return array[0];
};
```

### 4. Document with Examples

```tsx
/**
 * Capitalize first letter of string
 *
 * @param str - String to capitalize
 * @returns Capitalized string
 *
 * @example
 * capitalize('hello') // 'Hello'
 */
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
```

### 5. Handle Edge Cases

```tsx
// ✅ GOOD - Handles empty string
export const capitalize = (str: string): string => {
  if (!str) return ""; // ✅ Edge case handled
  return str.charAt(0).toUpperCase() + str.slice(1);
};

// ❌ BAD - Crashes on empty string
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1); // ❌ Crashes if str is ''
};
```

---

## ❌ Common Mistakes

### Mistake 1: Side Effects in Utils

```tsx
// ❌ BAD - Makes API call
export const fetchUser = async (id: string) => {
  return await fetch(`/api/users/${id}`); // ❌ API call = side effect
};

// ✅ GOOD - Pure data transformation
export const formatUserId = (id: string): string => {
  return `USER_${id.toUpperCase()}`;
};
```

### Mistake 2: Mutating Input

```tsx
// ❌ BAD - Sorts in place
export const sortUsers = (users: User[]) => {
  return users.sort((a, b) => a.name.localeCompare(b.name)); // ❌ Mutates
};

// ✅ GOOD - Creates new array
export const sortUsers = (users: User[]) => {
  return [...users].sort((a, b) => a.name.localeCompare(b.name));
};
```

### Mistake 3: Component Logic in Utils

```tsx
// ❌ BAD - Uses React hooks
export const useFormattedDate = (date: Date) => {
  const [formatted, setFormatted] = useState("");
  // ...  ❌ This is a hook, not a util
};

// ✅ GOOD - Pure formatting
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString();
};
```

### Mistake 4: Not Handling Errors

```tsx
// ❌ BAD - Can throw errors
export const parseJson = (str: string) => {
  return JSON.parse(str); // ❌ Throws on invalid JSON
};

// ✅ GOOD - Returns safe default
export const parseJson = <T>(str: string, fallback: T): T => {
  try {
    return JSON. parse(str);
  } catch {
    return fallback;
  }
};
```

---
