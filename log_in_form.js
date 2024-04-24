function togglePasswordVisibility() {
    var passwordInput = document.getElementById("password");
    var togglePasswordButton = document.getElementById("togglePassword");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePasswordButton.textContent = "Hide";
    } else {
        passwordInput.type = "password";
        togglePasswordButton.textContent = "Show";
    }
}