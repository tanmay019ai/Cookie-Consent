const cookiebox = document.querySelector(".cookies");
const showConsent = () => {
    cookiebox.classList.remove("hide"); // Ensure "hide" is removed
    cookiebox.classList.add("show"); // Add "show" to pop up
};

const hideConsent = () => {
    cookiebox.classList.remove("show"); // Ensure "show" is removed
    cookiebox.classList.add("hide"); // Add "hide" to pop down
};

// Show the consent box on page load
window.addEventListener("load", () => {
    setTimeout(showConsent, 500);
});

// Close button functionality
document.getElementById("but1").addEventListener("click", hideConsent);

// Like cookies button functionality (optional)
document.getElementById("but2").addEventListener("click", hideConsent);
