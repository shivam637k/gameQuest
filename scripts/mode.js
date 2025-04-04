// document.addEventListener("DOMContentLoaded", function () {
//     const themeToggle = document.getElementById("theme-toggle");
//     const themeIcon = document.getElementById("theme-icon");

//     // Check localStorage for the theme
//     const savedTheme = localStorage.getItem("theme") || "light";
//     document.documentElement.setAttribute("data-theme", savedTheme);
//     themeToggle.checked = savedTheme === "dark";
//     themeIcon.textContent = savedTheme === "dark" ? "🌙" : "🌞";

//     // Theme toggle event listener
//     themeToggle.addEventListener("change", function () {
//         const theme = this.checked ? "dark" : "light";
//         document.documentElement.setAttribute("data-theme", theme);
//         localStorage.setItem("theme", theme);
//         themeIcon.textContent = theme === "dark" ? "🌙" : "🌞";
//     });
// });













// document.addEventListener("DOMContentLoaded", function () {
//     const themeToggle = document.getElementById("theme-toggle");
//     const themeIcon = document.getElementById("theme-icon");

//     // Check localStorage for the theme
//     const savedTheme = localStorage.getItem("theme") || "light";

//     // Apply theme on page load
//     applyTheme(savedTheme);

//     // Set initial toggle state
//     if (themeToggle) {
//         themeToggle.checked = savedTheme === "dark";
//     }

//     // Set initial icon
//     if (themeIcon) {
//         themeIcon.textContent = savedTheme === "dark" ? "🌙" : "🌞";
//     }

//     // Theme toggle event listener
//     if (themeToggle) {
//         themeToggle.addEventListener("change", function () {
//             const theme = this.checked ? "dark" : "light";
//             applyTheme(theme);
//             localStorage.setItem("theme", theme);

//             if (themeIcon) {
//                 themeIcon.textContent = theme === "dark" ? "🌙" : "🌞";
//             }
//         });
//     }

//     // Function to apply theme
//     function applyTheme(theme) {
//         document.documentElement.setAttribute("data-theme", theme);
//     }
// });

// window.addEventListener('storage', function (event) {
//     if (event.key === 'theme') {
//         applyTheme(event.newValue);

//         if (themeToggle) {
//             themeToggle.checked = event.newValue === "dark";
//         }

//         if (themeIcon) {
//             themeIcon.textContent = event.newValue === "dark" ? "🌙" : "🌞";
//         }
//     }
// });















document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    const themeIcon = document.getElementById("theme-icon");

    // Function to apply theme
    function applyTheme(theme) {
        document.documentElement.setAttribute("data-theme", theme);

        // Update toggle state if it exists
        if (themeToggle) {
            themeToggle.checked = theme === "dark";
        }

        // Update icon if it exists
        if (themeIcon) {
            themeIcon.textContent = theme === "dark" ? "🌙" : "🌞";
        }
    }

    // Check localStorage for the theme on page load
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);

    // Theme toggle event listener
    if (themeToggle) {
        themeToggle.addEventListener("change", function () {
            const theme = this.checked ? "dark" : "light";
            localStorage.setItem("theme", theme);
            applyTheme(theme);
        });
    }

    // Listen for storage events (changes from other tabs)
    window.addEventListener('storage', function (event) {
        if (event.key === 'theme') {
            applyTheme(event.newValue);
        }
    });
});