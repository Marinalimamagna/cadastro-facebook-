document.getElementById("showRegister").addEventListener("click", function() {
    document.getElementById("loginForm").classList.add("hidden");
    document.getElementById("registerForm").classList.remove("hidden");
});

document.getElementById("showLogin").addEventListener("click", function() {
    document.getElementById("registerForm").classList.add("hidden");
    document.getElementById("loginForm").classList.remove("hidden");
});
