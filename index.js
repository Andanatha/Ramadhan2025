document.addEventListener("DOMContentLoaded", function () {
    const signupForm = document.getElementById("signupForm");
    const loginForm = document.getElementById("loginForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("signupUsername").value;
            const password = document.getElementById("signupPassword").value;

            if (localStorage.getItem(username)) {
                alert("Username sudah terdaftar!");
            } else {
                localStorage.setItem(username, password);
                alert("Pendaftaran berhasil! Silakan login.");
                window.location.href = "index_log.html";
            }
        });
    }

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const storedPassword = localStorage.getItem(username);
            if (storedPassword && storedPassword === password) {
                alert("Login berhasil!");
                window.location.href = "index1.html";
            } else {
                alert("Username atau password salah!");
            }
        });
    }
});
