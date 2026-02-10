document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let role = document.getElementById("role").value;
    let user = document.getElementById("username").value;

    alert("Login sebagai: " + role + "\nUsername: " + user);
});
