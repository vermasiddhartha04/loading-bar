document.addEventListener("DOMContentLoaded", function() {
    var loadingBar = document.getElementById("loading-bar");
    var content = document.getElementById("content");
    var width = 0;
    var interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            loadingBar.style.display = "none";
            content.style.display = "block";
        } else {
            width++;
            loadingBar.style.width = width + "%";
        }
    }, 30); // Adjust the interval speed (in milliseconds) as needed
});
