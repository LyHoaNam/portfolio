---
name: refactor
description: "Surgical code refactoring to improve maintainability without changing behavior. Covers extracting functions, renaming variables, breaking down god functions, improving type safety, eliminating code smells, and applying design patterns."
agent: agent
---

# Refactor

## Overview

Improve code structure and readability without changing external behavior. Refactoring is gradual evolution, not revolution. Use this for improving existing code, not rewriting from scratch.

## When to Use

Use this skill when:

- Code is hard to understand or maintain
- Functions/classes are too large
- Code smells need addressing
- Adding features is difficult due to code structure
- User asks "clean up this code", "refactor this", "improve this"
- Violates naming conventions or structural patterns

---

## Refactoring Principles

### The Golden Rules

1. **Behavior is preserved** - Refactoring doesn't change what the code does, only how
2. **Small steps** - Make tiny changes, test after each
3. **Version control is your friend** - Commit before and after each safe state
4. **One thing at a time** - Don't mix refactoring with feature changes

### When NOT to Refactor

```
- Code that works and won't change again (if it ain't broke...)
- Critical production code without tests (add tests first)
- When you're under a tight deadline
- "Just because" - need a clear purpose
```

---

## Common Code Smells & Fixes

### 1. Long Method/Function

```diff
# BAD: 200-line function that does everything
- async function processOrder(orderId) {
-   // 50 lines: fetch order
-   // 30 lines: validate order
-   // 40 lines: calculate pricing
-   // 30 lines: update inventory
-   // 20 lines: create shipment
-   // 30 lines: send notifications
- }

# GOOD: Broken into focused functions
+ const processOrder = async (orderId) => {
+   const order = await fetchOrder(orderId);
+   const { isValid, isError } = validateOrder(order);
+   if (isError) throw new Error('Invalid order');
+   if (!isValid) return { order, error: 'Order validation failed' };
+   const pricing = calculatePricing(order);
+   const inventory = await updateInventory(order);
+   const shipment = await createShipment(order);
+   const {isError: notificationError} = await sendNotifications(order, pricing, shipment);
+   if (notificationError) throw new Error('Notification failed');
+   return { order, pricing, inventory, shipment };
+ }
```

### 2. Duplicated Code

```diff
# BAD: Same logic in multiple places
- function calculateUserDiscount(user) {
-   if (user.membership === 'gold') return user.total * 0.2;
-   if (user.membership === 'silver') return user.total * 0.1;
-   return 0;
- }
-
- function calculateOrderDiscount(order) {
-   if (order.user.membership === 'gold') return order.total * 0.2;
-   if (order.user.membership === 'silver') return order.total * 0.1;
-   return 0;
- }

# GOOD: Extract common logic
+ const getMembershipDiscountRate = (membership: string): number => {
+   const rates = { gold: 0.2, silver: 0.1 };
+   return rates[membership] || 0;
+ }
+
+ const calculateUserDiscount = (user: { membership: string; total: number }): number => {
+   return user.total * getMembershipDiscountRate(user.membership);
+ }
+
+ const calculateOrderDiscount = (order: { user: { membership: string }; total: number }): number => {
+   return order.total * getMembershipDiscountRate(order.user.membership);
+ }
```

### 3. Large Class/Component/Module file

```diff
# BAD: 1000-line Component that does everything
- export default function Hero() {
-   // 300 lines: state and hooks handle visibility, animations, interactions
-   // 400 lines: rendering logic with multiple sections, conditional rendering, complex JSX
-  // <Scene3DContainer /> is 300 lines of 3D rendering logic, event handling, state management
-  // <TechStack /> is 200 lines of aside rendering logic, animations, interactions
- }

# GOOD: Break into focused components/modules based on structure pattern and responsibility
+ export const Drawer = (props) => {/* ... */} // handle aside drawer UI at /components/ui/Drawer.tsx
+
+ export const Scene3DContainer = (props) => {/* ... */} // handle 3D scene rendering at /features/3D/components/SceneContainer.tsx
+ export const useScene3D = () => {/* ... */} // handle 3D scene state and logic at /features/3D/hooks/useScene3D.ts
+
+ export const useVisibility = () => {/* ... */} // handle visibility state and logic at /hooks/useVisibility.ts
+
+ export const useAnimations = () => {/* ... */} // handle animation state and logic at /hooks/useAnimations.ts

+ export const Hero = () => {/* ... */} // handle Hero component logic at /components/layout/Hero.tsx
+ export default Hero;
```

### 4. Long Parameter/Props List

```diff
# BAD: Too many props in a component
- const UserProfile = ({ email, password, name, age, address, city, country, phone }) => {
-   /* ... */
- }

# GOOD: Group related parameters into objects
+ const UserProfile = ({ user }) => {
+   /* ... */
+ }

# BAD: Too many parameters
- function createUser(email, password, name, age, address, city, country, phone) {
-   /* ... */
- }

# GOOD: Group related parameters
+ interface UserData {
+   email: string;
+   password: string;
+   name: string;
+   age?: number;
+   address?: Address;
+   phone?: string;
+ }
+
+ const createUser = (data: UserData) => {
+   /* ... */
+ }

# EVEN BETTER: Use builder pattern for complex construction
+ const user = UserBuilder
+   .email('test@example.com')
+   .password('secure123')
+   .name('Test User')
+   .address(address)
+   .build();
```

### 5. Poor Naming

```diff
# BAD: Vague or misleading names
- const x = 10; // What is x?
- function doStuff() { /* ... */ } // What stuff?
- .retro-subheading { /* ... */ } // What is this subheading for?
# GOOD: Clear, descriptive names
+ const maxLoginAttempts = 10;
+ const validateUserCredentials = () => { /* ... */ }
+ .subheading--login { /* ... */ }
```

### 6. Magic Numbers/Strings

```diff
# BAD: Unexplained values
- if (user.status === 2) { /* ... */ }
- const discount = total * 0.15;
- setTimeout(callback, 86400000);

# GOOD: Named constants
+ const UserStatus = {
+   ACTIVE: 1,
+   INACTIVE: 2,
+   SUSPENDED: 3
+ } as const;
+
+ const DISCOUNT_RATES = {
+   STANDARD: 0.1,
+   PREMIUM: 0.15,
+   VIP: 0.2
+ } as const;
+
+ const ONE_DAY_MS = 24 * 60 * 60 * 1000;
+
+ if (user.status === UserStatus.INACTIVE) { /* ... */ }
+ const discount = total * DISCOUNT_RATES.PREMIUM;
+ setTimeout(callback, ONE_DAY_MS);
```

### 8. Nested conditionals

```diff
# BAD: nested ternaries in JSX
- isSubscribed ? (
-   isTrial ? <TrialBanner /> : <SubscribedBanner />
- ) : (
-   <SubscribeCTA />
- )
# GOOD: place them inside a component on their own
+ const SubscriptionBanner = ({ isSubscribed, isTrial }) => {
+   if (isSubscribed) {
+     return isTrial ? <TrialBanner /> : <SubscribedBanner />;
+   }
+   return <SubscribeCTA />;
+ }
+ const Component = () => {
+   return (
+     <SubscriptionBanner isSubscribed={isSubscribed} isTrial={isTrial} />
+   );
+ }

# BAD: Arrow code
- function process(order) {
-   if (order) {
-     if (order.user) {
-       if (order.user.isActive) {
-         if (order.total > 0) {
-           return processOrder(order);
+         } else {
+           return { error: 'Invalid total' };
+         }
+       } else {
+         return { error: 'User inactive' };
+       }
+     } else {
+       return { error: 'No user' };
+     }
+   } else {
+     return { error: 'No order' };
+   }
+ }

# GOOD: Guard clauses / early returns
+ function process(order) {
+   if (!order) return { error: 'No order' };
+   if (!order.user) return { error: 'No user' };
+   if (!order.user.isActive) return { error: 'User inactive' };
+   if (order.total <= 0) return { error: 'Invalid total' };
+   return processOrder(order);
+ }

# EVEN BETTER: Using Result type
+ function process(order): Result<ProcessedOrder, Error> {
+   return Result.combine([
+     validateOrderExists(order),
+     validateUserExists(order),
+     validateUserActive(order.user),
+     validateOrderTotal(order)
+   ]).flatMap(() => processOrder(order));
+ }
```

### 9. Too many div tags

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

### 10. Destructure props/state

```diff
# BAD: repeat props everywhere in your component
- const UserProfile = (props) => {
-   return <input value={props.user.name} onChange={props.onChange} />
-
# GOOD: Destructure at the top for cleaner code
+ const UserProfile = ({ user, onChange }) => {
+   return <input value={user.name} onChange={onChange} />
```

### 11. Move lists in a separate component

```diff
# BAD: map lists directly in the main component
- const UserList = ({ users }) => {
-   return (
-     <div>
-      <h1>{topic}</h1>
-      {articles.map((article) => (
-        <div key={article.id}>{article.title}</div>
-      ))}
-    </div>
-   );
- }
# GOOD: Move list rendering to a separate component
+ const ArticleList = ({ articles }) => {/* ... */}
+ const UserList = ({ users }) => {
+   return (
+     <div>
+      <h1>{topic}</h1>
+      <ArticleList articles={articles} />
+    </div>
+   );
+ }
```

### 12. Use absolute paths for imports

```diff
# BAD: relative imports that can get messy
- import Button from '../../components/ui/Button';
- import { useAuth } from '../../../hooks/useAuth';
# GOOD: absolute imports for cleaner code
+ import Button from 'components/ui/Button';
+ import { useAuth } from 'hooks/useAuth';
```

### 13. Avoid prop drilling

```diff
# BAD: passing props through many layers
- <App user={user} onLogin={handleLogin} />
-   |---> <Hero user={user} />
-        |---> <TechStack user={user} />
-             |---> <TechItem user={user} />
-                  |---> <TechIcon user={user} />

# GOOD: Use composition for more control
+ const Hero = ({ user }) => {
+   return (
+     <TechStack user={user}>
+       <TechItem user={user}>
+         <TechIcon user={user} />
+       </TechItem>
+     </TechStack>
+   );
+ }

# OPTIONAL: Use Context or composition to avoid drilling
+ const UserContext = createContext();
+ <App>
+   <UserContext.Provider value={{ user, onLogin: handleLogin }}>
+     <Hero />
+   </UserContext.Provider>
+ </App>
+ const Hero = () => {
+   const { user } = useContext(UserContext);
+   return <TechStack />;
+ }
+ const TechStack = () => {
+   const { user } = useContext(UserContext);
+   return <TechItem />;
+ }
+ const TechItem = () => {
+   const { user } = useContext(UserContext);
+   return <TechIcon />;
+ }

```

### 15. use client components only when necessary and error boundaries with suspense

```diff
# BAD: making everything a client component
- <Hero> 'use client'; // entire Hero component is client, even if only a small part needs interactivity
-   |---> <Scene3DContainer /> // 3D rendering logic that needs interactivity
-   |---> <TechStack />
# GOOD: Only make components client when they need interactivity
+ <Hero>
+   <ErrorBoundary>
+     <Suspense fallback={<Loading />}>
+       <Scene3DContainer /> // this component is client because it has interactivity
+     </Suspense>
+   </ErrorBoundary>
+   <TechStack /> // this component can be server because it's static content
+ </Hero>
```

### 16. Use design patterns when appropriate

```diff
# BAD: no clear structure or pattern for complex logic
- function processOrder(order) {
-   // 100 lines of mixed logic for validation, pricing, inventory, notifications
- }
# GOOD: Use strategy pattern to separate concerns
+ interface OrderProcessor {
+   process(order: Order): Result<ProcessedOrder, Error>;
+ }

### Violations folder structure
project structure standard
```

```
root/
├── public/                   # Static assets
│   ├── images/
│   ├── fonts/
│   └── favicon.ico
│
└── src/
    ├── pages/               # Next.js pages (routing)
    │   ├── index.tsx       # / route (Home page)
    │   ├── about.tsx       # /about route
    │   └── dashboard/      # /dashboard routes
    │
    ├── assets/              # Non-static assets (imported in code)
    │   ├── icons/
    │   └── images/
    │
    ├── components/          # Shared components
    │   └── ui/             # Design system components
    │       ├── Button.tsx
    │       ├── Input.tsx
    │       └── Card.tsx
    │
    ├── config/              # Global configuration
    │   ├── env.ts          # Environment variables
    │   └── constants.ts    # App constants
    │
    ├── features/            # Feature modules (domain-driven)
    │   ├── auth/           # Authentication feature
    │   │   ├── api/
    │   │   ├── components/
    │   │   ├── hooks/
    │   │   ├── stores/
    │   │   ├── types/
    │   │   ├── utils/
    │   │   └── index.ts    # Public API
    │   ├── users/
    │   └── products/
    │
    ├── hooks/               # Shared custom hooks
    │   ├── useDebounce.ts
    │   └── useMediaQuery.ts
    │
    ├── lib/                 # Preconfigured libraries
    │   ├── utils.ts        # cn() utility
    │   ├── api-client.ts   # API client config
    │   └── query-client.ts # React Query config
    │
    ├── providers/           # React context providers
    │   ├── ThemeProvider.tsx
    │   └── AuthProvider.tsx
    │
    ├── stores/              # Global state stores
    │   └── theme-store.ts  # Theme state
    │
    ├── testing/             # Test utilities
    │   ├── test-utils.tsx
    │   └── mocks/
    │
    ├── types/               # Shared TypeScript types
    │   ├── api.types.ts
    │   └── common.types.ts
    │
    └── utils/               # Shared utility functions
        ├── format.ts
        └── validation.ts
```

## Refactoring Steps

1. Identify the code to refactor and the reason (code smell, maintainability, readability)
2. Write tests if not already covered
3. Plan the refactor (what to extract, rename, restructure)
4. Make small, incremental changes
5. Run tests after each change to ensure behavior is preserved

---

## Refactoring Checklist

### Code Quality

- [ ] Functions are small (< 50 lines)
- [ ] Functions do one thing
- [ ] No duplicated code
- [ ] Descriptive names (variables, functions, classes)
- [ ] No magic numbers/strings
- [ ] Dead code removed

### Structure

- [ ] Related code is together
- [ ] Clear module boundaries
- [ ] Dependencies flow in one direction
- [ ] No circular dependencies

### Type Safety

- [ ] Types defined for all public APIs
- [ ] No `any` types without justification
- [ ] Nullable types explicitly marked

---

## Common Refactoring Operations

| Operation                                     | Description                           |
| --------------------------------------------- | ------------------------------------- |
| Extract Method                                | Turn code fragment into method        |
| Extract Component                             | Move behavior to new component        |
| Extract Interface                             | Create interface from implementation  |
| Inline Method                                 | Move method body back to caller       |
| Inline Component                              | Move component behavior to caller     |
| Pull Up Method                                | Move method to superclass             |
| Push Down Method                              | Move method to subclass               |
| Rename Method/Variable                        | Improve clarity                       |
| Introduce Parameter Object                    | Group related parameters              |
| Replace Conditional with Polymorphism         | Use polymorphism instead of switch/if |
| Replace Magic Number with Constant            | Named constants                       |
| Decompose Conditional                         | Break complex conditions              |
| Consolidate Conditional                       | Combine duplicate conditions          |
| Replace Nested Conditional with Guard Clauses | Early returns                         |
| Introduce Null Object                         | Eliminate null checks                 |
| Replace Type Code with Class/Enum             | Strong typing                         |
| Replace Inheritance with Delegation           | Composition over inheritance          |
| CSS style inline                              | Use tailwind classes or CSS classes   |
