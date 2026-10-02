# 📋 TaskBoard - Modern Task Management Application

![React](https://img.shields.io/badge/React-19.0-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-8.3-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v4.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**TaskBoard** is a sleek, responsive, and lightweight task management web application built with **React 19**, **Vite**, and **Tailwind CSS v4**. It offers an intuitive interface to help you organize daily tasks, stay productive, and keep track of completed goals with automatic local storage persistence.

---

## ✨ Features

- 📝 **Create & Manage Tasks**: Easily add new tasks with keyboard shortcut support (`Enter` key).
- ✏️ **Edit & Update**: Inline task editing functionality to update task details on the fly.
- 🗑️ **Delete Tasks**: Remove unwanted or out-of-date tasks with a single click.
- ✅ **Completion Status**: Mark tasks as finished with immediate visual strikethrough feedback.
- 👁️ **Filter Finished Tasks**: Toggle visibility to show or hide completed tasks for a cleaner workspace.
- 💾 **Local Storage Persistence**: Automatically syncs and saves your tasks in the browser's local storage so your data is never lost across sessions.
- 📱 **Fully Responsive UI**: Mobile-first design crafted with Tailwind CSS v4 for a seamless experience on phones, tablets, and desktops.
- 🗂️ **Tabbed Navigation**: Switch between **Home** (Add & Manage) and **Your Tasks** views.

---

## 🛠️ Tech Stack

- **Frontend Library**: [React 19](https://react.dev/)
- **Build Tool / Bundler**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) with `@tailwindcss/vite`
- **Icon Set**: [React Icons](https://react-icons.github.io/react-icons/) (`FaEdit`, `AiFillDelete`)
- **ID Generator**: [UUID (v4)](https://www.npmjs.com/package/uuid)
- **Linter**: ESLint 10

---

## 📁 Project Structure

```text
TaskBoard Project/
├── public/                 # Static assets
├── src/
│   ├── assets/             # Images and design assets
│   ├── component/
│   │   └── Navbar.jsx      # Navigation header with tab switching
│   ├── App.css             # Component-specific styles
│   ├── App.jsx             # Main Application component & state management
│   ├── index.css           # Tailwind CSS imports & base styles
│   └── main.jsx            # Application entry point
├── eslint.config.js        # ESLint configuration
├── index.html              # HTML template
├── package.json            # Dependencies and npm scripts
├── vite.config.js          # Vite build configuration
└── README.md               # Project documentation
```

---

## 🚀 Getting Started

Follow these steps to set up and run TaskBoard locally on your machine.

### Prerequisites

Make sure you have **Node.js** (v18.0.0 or higher) and **npm** installed on your system.
- Check Node version: `node -v`
- Check npm version: `npm -v`

### Installation & Local Setup

1. **Clone the repository** (or download the source code):
   ```bash
   git clone https://github.com/your-username/taskboard-project.git
   cd "TaskBoard Project"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to `http://localhost:5173` (or the URL output in your terminal) to view the application.

---

## 📜 Available Scripts

In the project directory, you can run:

| Command | Action |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Bundles the application into static files for production deployment in `dist/`. |
| `npm run preview` | Locally previews the built production bundle. |
| `npm run lint` | Runs ESLint to check for code quality and style issues. |

---

## 💡 How to Use

1. **Adding a Task**:
   - Type your task description into the input field (must be at least 4 characters long).
   - Press `Enter` or click the **Save** button.
2. **Completing a Task**:
   - Click the checkbox next to any task to mark it as completed or incomplete.
3. **Editing a Task**:
   - Click the blue edit icon (pencil) on a task item. The task text will load into the input field for modification.
4. **Deleting a Task**:
   - Click the delete icon (trash bin) to remove a task permanently.
5. **Filtering Completed Tasks**:
   - Check or uncheck **Show Finished Tasks** to toggle the visibility of completed items.
6. **Tab Navigation**:
   - Use the top navigation bar to switch between **Home** and **Your Tasks**.

---
