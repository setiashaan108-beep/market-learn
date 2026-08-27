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
├── components/
├── layouts/
├── pages/
├── features/
├── services/
├── store/
├── hooks/
├── types/
└── utils/
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

API calls will be centralized in the `services/` layer.

```text
Page
 ↓
Feature
 ↓
API Service
 ↓
Backend
```

Components should not make direct API calls.
