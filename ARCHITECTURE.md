# Architecture

## High-level architecture

The application follows a **feature-oriented React architecture** with role-based layouts.

```text
App
 └── Router
      ├── Public Layout
      ├── Learner Layout
      ├── Instructor Layout
      └── Admin Layout
```

---

## Folder structure

```text
src/
├── app/
├── assets
├── components/
├── features/
├── auth/
    │   └── api/
    │       └── authApi.ts
    │
    └── courses/
        └── api/
            └── coursesApi.ts
├── hooks/
├── layouts/
├── pages/
├── services/
│   └── apiClient.ts
├── store/
├── types/
├── utils/
├── App.css
├── App.tsx
├── index.css
├── main.tsx
```

---

## Pages vs Features

* **Pages** represent routes/screens.
* **Features** represent business/domain functionality.
* Pages compose features; business logic belongs inside features.

> Pages describe **where the user is**; features describe **what the user can do**.

---

## State management strategy

* Keep state local by default.
* Use shared/global state only when multiple parts of the application need it.
* Keep server/API data separate from client-side UI state.

---

## API layer strategy

Shared API infrastructure such as the HTTP client belongs in services/. Domain-specific API functions are colocated with their respective features.

```text
Page
 ↓
Feature
 ↓
API Service
 ↓
authApi / coursesApi
    ↓
domain-specific API operations
```

Components should not make direct API calls.
