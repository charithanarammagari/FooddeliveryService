document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");
    
    if (username === "Charitha" && password === "2006") {
        window.location.href = "index.html"; // Redirect to your main page
    } else {
        errorMessage.textContent = "Invalid username or password";
    }
});
