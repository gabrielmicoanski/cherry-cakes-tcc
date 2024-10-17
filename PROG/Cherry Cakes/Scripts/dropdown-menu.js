document.getElementById('profileIcon').addEventListener('click', function() {
    const dropdown = document.getElementById('profileDropdown');
    if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
    }
});


window.onclick = function(event) {
    if (!event.target.matches('.bi-person-circle')) {
        const dropdowns = document.getElementsByClassName('dropdown');
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }
        }
    }
}