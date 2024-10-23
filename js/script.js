document.getElementById('menu-icon').addEventListener('click', function() {
    const menuList = document.getElementById('menu-list');
    if (menuList.classList.contains('hidden')) {
        menuList.classList.remove('hidden');
    } else {
        menuList.classList.add('hidden');
    }
});


document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission for validation

    // Get form values
    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNumber = document.getElementById("phoneNumber").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;

    clearErrors();

    if (firstName === "") {
        displayError("firstName", "First Name is required");
        isValid = false;
    }

    if (lastName === "") {
        displayError("lastName", "Last Name is required");
        isValid = false;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        displayError("email", "Please enter a valid email address");
        isValid = false;
    }

   
    const phonePattern = /^[0-9]{10}$/;
    if (!phoneNumber.match(phonePattern)) {
        displayError("phoneNumber", "Please enter a valid 10-digit phone number");
        isValid = false;
    }

  
    if (password.length < 8) {
        displayError("password", "Password must be at least 8 characters long");
        isValid = false;
    }

   
    if (isValid) {
        const formData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            phone_number: phoneNumber,
            password: password
        };

        console.log(formData);
        alert("Form submitted successfully!");
    }
});

function displayError(fieldId, message) {
    const inputField = document.getElementById(fieldId);
    const errorDiv = document.createElement("div");
    errorDiv.className = "error";
    errorDiv.textContent = message;
    inputField.parentElement.appendChild(errorDiv);
}

function clearErrors() {
    const errorMessages = document.querySelectorAll(".error");
    errorMessages.forEach(function(error) {
        error.remove();
    });
}
