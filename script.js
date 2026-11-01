/**
 * ============================================================================
 * Project: Login Page Project — Form Validation & Navigation Prototype
 * Author: Ranjith B (ranjithbrs)
 * 
 * ARCHITECTURAL & SECURITY NOTICE (FOR INTERVIEWS & CODE AUDITS):
 * ----------------------------------------------------------------------------
 * This project is a frontend learning exercise focused on:
 *   1. HTML5 Form Handling & PreventDefault event interception.
 *   2. Accessible client-side validation & dynamic DOM state updates.
 *   3. Client-side navigation & SessionStorage data passing.
 * 
 * ⚠️ PRODUCTION SECURITY NOTE:
 * Hardcoded user dictionaries (like `demoUsers` below) in client-side JavaScript
 * are strictly for client UI prototyping and testing. In real-world enterprise
 * systems, client-side credential verification is NEVER secure because anyone can
 * open browser DevTools to read the script. Production systems require:
 *   - Secure transport via HTTPS (TLS encryption).
 *   - Server-side authentication endpoints (e.g., Spring Boot, FastAPI, Node.js).
 *   - Cryptographic password hashing (BCrypt, Argon2) in a secure database.
 *   - HttpOnly signed session cookies or JWT tokens for authorization state.
 * ============================================================================
 */

// Educational Mock User Database (Used strictly for client prototype testing)
const demoUsers = {
  "Ranjith": "1234",
  "Arun": "abcd",
  "Priya": "pass123",
  "Kumar": "9876"
};

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  const messageBox = document.getElementById("messageBox");
  const togglePasswordBtn = document.getElementById("togglePasswordBtn");
  const submitBtn = document.getElementById("submitBtn");

  // Toggle Password Visibility
  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener("click", () => {
      const isPassword = passwordInput.getAttribute("type") === "password";
      passwordInput.setAttribute("type", isPassword ? "text" : "password");
      togglePasswordBtn.textContent = isPassword ? "Hide" : "Show";
      togglePasswordBtn.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
    });
  }

  // Clear errors on typing
  [usernameInput, passwordInput].forEach(input => {
    if (input) {
      input.addEventListener("input", () => {
        clearMessage();
        input.style.borderColor = "";
      });
    }
  });

  // Handle Form Submission
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault(); // Prevent standard page reload

      const username = usernameInput.value.trim();
      const password = passwordInput.value;

      // 1. Validation: Check Empty Username
      if (!username) {
        showMessage("Please enter your username.", "error");
        usernameInput.style.borderColor = "var(--error-border)";
        usernameInput.focus();
        return;
      }

      // 2. Validation: Check Empty Password
      if (!password) {
        showMessage("Please enter your password.", "error");
        passwordInput.style.borderColor = "var(--error-border)";
        passwordInput.focus();
        return;
      }

      // 3. Validation: Check Against Demo Credentials
      if (demoUsers[username] && demoUsers[username] === password) {
        showMessage("✓ Login successful! Redirecting...", "success");
        submitBtn.disabled = true;
        submitBtn.textContent = "Redirecting...";

        // Store user in sessionStorage for the welcome page
        try {
          sessionStorage.setItem("loggedInUser", username);
          sessionStorage.setItem("loginTimestamp", new Date().toLocaleTimeString());
        } catch (err) {
          console.warn("SessionStorage unavailable:", err);
        }

        // Smooth redirect after brief feedback delay
        setTimeout(() => {
          window.location.href = `welcome.html?user=${encodeURIComponent(username)}`;
        }, 600);
      } else {
        // 4. Invalid Credentials
        showMessage("Invalid username or password. Check the demo accounts below.", "error");
        passwordInput.value = "";
        passwordInput.style.borderColor = "var(--error-border)";
        passwordInput.focus();
      }
    });
  }

  /**
   * Displays an accessible status message to the user
   * @param {string} text - Message text to display
   * @param {'error'|'success'} type - Styling category
   */
  function showMessage(text, type) {
    if (!messageBox) return;
    messageBox.textContent = text;
    messageBox.className = `message-box ${type}`;
    messageBox.hidden = false;
  }

  /**
   * Hides the message box
   */
  function clearMessage() {
    if (!messageBox) return;
    messageBox.hidden = true;
    messageBox.textContent = "";
    messageBox.className = "message-box";
  }
});

/**
 * Helper to auto-fill demo accounts for rapid reviewer testing
 * @param {string} user 
 * @param {string} pass 
 */
function fillCredentials(user, pass) {
  const usernameInput = document.getElementById("username");
  const passwordInput = document.getElementById("password");
  if (usernameInput && passwordInput) {
    usernameInput.value = user;
    passwordInput.value = pass;
    usernameInput.style.borderColor = "";
    passwordInput.style.borderColor = "";
    usernameInput.focus();
  }
}
