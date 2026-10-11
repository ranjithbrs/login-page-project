# 🔐 Client-Side Authentication & Login Flow

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen?style=for-the-badge&logo=githubpages&logoColor=white)](https://ranjithbrs.github.io/login-page-project/)
[![Frontend: HTML5](https://img.shields.io/badge/Frontend-HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](index.html)
[![Styling: CSS3](https://img.shields.io/badge/Styling-CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](style.css)
[![Logic: JavaScript](https://img.shields.io/badge/Script-JavaScript%20ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](script.js)
[![License: MIT](https://img.shields.io/badge/License-MIT-purple?style=for-the-badge)](LICENSE)

> 🌟 **A sleek, interactive user login gateway demonstrating how modern web applications verify identities and secure user accounts.**

---

## 💡 What is this Project in 30 Seconds? (In Plain English)

Whenever you log into apps like Instagram, Netflix, or your college portal, you enter a username and password.

This project is a **modern, responsive web login page**:
- 📱 **Looks Great on Mobile & Desktop:** Automatically reshapes its layout for phones, tablets, and computers.
- ⚠️ **Helpful Error Warnings:** Alerts the user immediately if they accidentally forgot to type their username or password.
- 🔑 **Instant Account Verification:** Checks credentials and seamlessly redirects the user into a welcome portal.

---

## 🌐 Live Application

- 🚀 **Live Demo:** [ranjithbrs.github.io/login-page-project](https://ranjithbrs.github.io/login-page-project/)
- 🐙 **GitHub Repository:** [github.com/ranjithbrs/login-page-project](https://github.com/ranjithbrs/login-page-project)

---

## 📑 Table of Contents
- [What is this Project?](#-what-is-this-project-in-30-seconds-in-plain-english)
- [Authentication Workflow](#-authentication-workflow)
- [Pre-Configured Demo Credentials](#-pre-configured-demo-credentials)
- [Key Features](#-key-features)
- [Repository Structure](#-repository-structure)
- [Local Setup & Running](#-local-setup--running)
- [Author & Connect](#-author)
- [License](#-license)

---

## 📐 Authentication Workflow

```mermaid
flowchart TD
    subgraph View["🖥️ Client View (index.html)"]
        A[User Inputs Username & Password] --> B[Submit Event Triggered]
    end

    subgraph Controller["⚙️ Client-Side Validation (script.js)"]
        B --> C{Username Empty?}
        C -->|Yes| D[Alert: 'Type your name']
        C -->|No| E{Password Empty?}
        E -->|Yes| F[Alert: 'Type your password']
        E -->|No| G{Validate against users dictionary}
        G -->|Match Found| H[Alert: 'Login successfully']
        G -->|No Match| I[Alert: 'Invalid login']
    end

    subgraph Navigation["🚀 Protected View (welcome.html)"]
        H --> J[Redirect window.location.href to welcome.html]
        J --> K[Display Personalized Welcome & Overview]
    end
```

---

## 🔑 Pre-Configured Demo Credentials

Test the client-side login validation using any of the following accounts:

| Username | Password | Access Status |
| :--- | :--- | :--- |
| `Ranjith` | `1234` | ✅ Authorized |
| `Arun` | `abcd` | ✅ Authorized |
| `Priya` | `pass123` | ✅ Authorized |
| `Kumar` | `9876` | ✅ Authorized |

---

## ✨ Key Features

- **Form Validation**: Evaluates empty form fields and guards against null/empty input submissions.
- **Client-Side Authorization**: Verifies user identity against internal dictionary hash structures.
- **Responsive Layout**: Centered, card-style login view optimized for both mobile and desktop screens.
- **Smooth Navigation**: Seamless programmatic redirection from login gatekeeper (`index.html`) to protected welcome view (`welcome.html`).

---

## 📁 Repository Structure

```text
login-page-project/
├── index.html                  # Main authentication form interface
├── welcome.html                # Post-login destination view
├── style.css                   # Responsive layout and styling
├── script.js                   # Client-side validation and redirect logic
├── LICENSE                     # MIT open source license
└── README.md                   # Project documentation
```

---

## 🚀 Local Setup & Running

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ranjithbrs/login-page-project.git
   cd login-page-project
   ```

2. **Open in Browser:**
   Simply double-click `index.html` or run with any static server:
   ```bash
   npx serve .
   ```

---

## 👨‍💻 Author

**Ranjith B**  
🎓 *B.Tech Computer Science & Business Systems (CSBS)*  
🏛️ *Nehru Institute of Engineering and Technology, Coimbatore*  

- 💼 **LinkedIn**: [linkedin.com/in/ranjith-b-csbs](https://linkedin.com/in/ranjith-b-csbs)  
- 🐙 **GitHub**: [github.com/ranjithbrs](https://github.com/ranjithbrs)  
- 🌐 **Portfolio**: [ranjithbrs.github.io/portfolio](https://ranjithbrs.github.io/portfolio/)  
- 📧 **Email**: ranjithb2k06@gmail.com  

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
