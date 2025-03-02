// stores information in session storage
document.addEventListener("DOMContentLoaded", function () {
    if (sessionStorage.getItem("savedName")) {
        // store the name in session storage
        document.getElementById("name").value = sessionStorage.getItem("savedName");
    }
    if (sessionStorage.getItem("savedEmail")) {
        // store the email in session storage
        document.getElementById("email").value = sessionStorage.getItem("savedEmail");
    }
    
    const checkboxWrapper = document.querySelector("form .flexbox");
    const checkbox = document.querySelector("form .flexbox span");
    const form = document.querySelector("form");
    const errorDiv = document.getElementById("form-error");

    // Checkbox on or off
    checkboxWrapper.addEventListener("click", function () {
        checkbox.classList.toggle("checked");
        checkbox.setAttribute("aria-checked", checkbox.classList.contains("checked"));
    });

    // Confirm form before submission
    form.addEventListener("submit", function (event) {
        sessionStorage.setItem("savedName", document.getElementById("name").value);
        sessionStorage.setItem("savedEmail", document.getElementById("email").value);
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const checkboxInput = document.getElementById("check-me").checked;

        errorDiv.innerHTML = "";
        let valid = true;
        let errorMessages = [];

        if (!name) {
            // full name is required
            errorMessages.push("Full Name is required. Please enter your first and last name as shown on official documents.");
            valid = false;
        }
        if (!email) {
            // email is required
            errorMessages.push("Email Address is required. Ensure you enter a valid email format, e.g., example@domain.com.");
            valid = false;
        }
        if (!checkboxInput) {
            // checkbox is required
            errorMessages.push("You must agree to the terms and conditions to proceed. Please check the box before submitting.");
            valid = false;
        }

        if (!valid) {
            // Display error messages
            event.preventDefault(); // Stop form submission
            errorDiv.innerHTML = errorMessages.join("<br>");
            return;
        }

        // Final confirmation before submission
        const confirmation = confirm(
            `Please confirm your details before submission:\n\nFull Name: ${name}\nEmail: ${email}\n\nClick OK to submit or Cancel to edit.`
        );

        if (!confirmation) {
            event.preventDefault(); // Stop form submission
        }
    });
});

