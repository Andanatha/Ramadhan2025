const toggleButton = document.getElementById("darkModeToggle");

// Cek apakah ada preferensi pengguna sebelumnya
if (localStorage.getItem("darkMode") === "enabled") {
    document.body.classList.add("dark-mode");
    toggleButton.checked = true;
}

// Event saat tombol diklik
toggleButton.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode");

    // Simpan status di localStorage agar tetap setelah refresh
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("darkMode", "enabled");
    } else {
        localStorage.setItem("darkMode", "disabled");
    }
});
