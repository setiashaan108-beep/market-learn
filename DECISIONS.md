# Architecture Decision Records (ADRs)

The purpose of this document is to record the core architectural decisions, their context, and the reasoning behind them for this project.

---

## ADR-001 — React + TypeScript

#### Status
Accepted

#### Decision
Use **React** with **TypeScript** as the core frontend stack.

#### Reason 
Provides robust type safety, enhances long-term maintainability, offers superior IDE autocomplete support, and ensures alignment with modern industry hiring standards.

---

## ADR-002 — Vite Build Tool

#### Status
Accepted

#### Decision
Fast local development and simple integration with the selected React/TypeScript stack.

#### Alternative
Webpack-based setup.

#### Trade-off
We accept Vite-specific tooling conventions in exchange for simpler/faster development.

---

## ADR-003 — Feature-Oriented Project Structure

#### Status
Accepted

#### Decision
Organize the codebase by domain features (e.g., `/features/auth`, `/features/dashboard`) rather than technical roles (e.g., `/components`, `/hooks`).

#### Reason
Keeps closely related business logic, components, and hooks together. This scales efficiently as the application grows and prevents a bloated, unmanageable global directory.

---

## ADR-004 — Redux Toolkit (RTK)

#### Status
Accepted

#### Decision
Use **Redux Toolkit** strictly for globally shared, complex application states. 

#### Reason
Avoids the anti-pattern of putting local UI or transient server data into a global store. It keeps state management simple, predictable, and boilerplate-free.

---

## ADR-005 — Vitest + React Testing Library (RTL)

#### Status
Accepted

#### Decision
Use **Vitest** as the test runner and **React Testing Library** for component testing.

#### Reason
Vitest integrates seamlessly into the Vite pipeline with zero-config overhead. RTL forces user-centric testing that focuses on component behavior rather than internal implementation details, ensuring highly resilient tests.
