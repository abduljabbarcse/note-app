
# Notes App

A full-stack note-taking application built with **Next.js**, **Redux**, **Framer Motion**, and **Axios**, supporting user authentication, CRUD operations on notes, and a responsive UI optimized for all screen sizes.

---
![{263AC430-B6BD-4051-9129-CB30A589E1FE}](https://github.com/user-attachments/assets/3a9f6246-2645-4f74-b257-227e6c561716)
![{30E10335-1000-4C33-8D31-11B95002FA9C}](https://github.com/user-attachments/assets/e87b3883-4679-42e7-8599-2dbd12ce2a5a)


## 🚀 Live Demo

[https://684fa0516d61cf00087ceb1d--notesflowabd.netlify.app/](https://684fa0516d61cf00087ceb1d--notesflowabd.netlify.app/)

## 📦 Installation & Local Setup

### Prerequisites

* Node.js (v18+ recommended)
* npm or yarn

### Steps

```bash
# Clone the repository
git clone https://github.com/abduljabbarcse/notes-app.git
cd notes-app

# Install dependencies
npm install
# or
yarn install

# Run the development server
npm run dev
# or
yarn dev
```

App will be running at: [http://localhost:3000](http://localhost:3000)


---

## ⚙️ Design Decisions & Trade-Offs

### 1. **Framework: Next.js**

* Chosen for its hybrid static/server rendering, built-in routing, and excellent performance.

### 2. **Redux for State Management**

* Allows centralized control of notes and authentication states, making state predictable and easier to debug.

### 3. **Authentication**

* Auth uses cookies for secure session management and `localStorage` for persistence across sessions.
* Route protection is handled using custom middleware for client-side and server-side safety.

### 4. **Responsive Design**

* Mobile-first design strategy.
* Media queries handle layouts for common breakpoints (≤480px, ≤768px, ≤1024px).
* Ensures usability across phones, tablets, and desktops.

### 5. **Animations**

* Framer Motion was integrated to add smooth UX transitions (modal popups, page transitions).

### 6. **Async Thunks with Axios**

* Axios replaces `fetch` for more advanced HTTP request handling (e.g., interceptors, global error handling).
* Async thunks simplify Redux integration of API calls.

### 7. **Persistence**

* Notes and auth state are persisted across sessions using cookies + `localStorage`.

---

## 🧩 External Resources & Justifications

| Resource                                        | Purpose          | Justification                                                                      |
| ----------------------------------------------- | ---------------- | ---------------------------------------------------------------------------------- |
| [Framer Motion](https://www.framer.com/motion/) | UI animations    | Lightweight and highly customizable animation library ideal for React/Next.js apps |
| [Redux Toolkit](https://redux-toolkit.js.org/)  | State management | Simplifies Redux boilerplate and enhances developer experience                     |
| [Axios](https://axios-http.com/)                | HTTP requests    | Offers better configuration, interceptors, and cleaner async API than fetch        |
| [Google Fonts](https://fonts.google.com/)       | Typography       | Custom fonts improve visual identity and user experience                           |

---

## ✅ Features Summary

* 🔐 **User Auth** – Signup, Login, Logout with session and route protection
* 🗒️ **CRUD Notes** – Create, Read, Update, Delete using modals
* 📱 **Responsive UI** – Mobile-first design with breakpoints for tablets and desktops
* 🎨 **Animations** – Modal and UI transitions with Framer Motion
* 🧠 **State Management** – Global Redux store with persistence
* 🌐 **API Integration** – Axios-based endpoints for all data actions

---

## 🧪 Future Improvements

* Add tags and search functionality for notes
* Optimize backend for scalability
* Improve accessibility (ARIA roles, keyboard nav)
* Add dark mode toggle

---
