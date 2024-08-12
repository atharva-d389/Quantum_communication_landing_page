document.addEventListener("DOMContentLoaded", function() {
    const progressDiv = document.querySelector('.Progress');
    const infoDiv = document.querySelector('.info');
    let isProgressVisible = true;

    function toggleVisibility() {
        if (isProgressVisible) {
            progressDiv.classList.add('fade-out');
            infoDiv.classList.remove('fade-out');
            infoDiv.classList.add('fade-in');
        } else {
            progressDiv.classList.remove('fade-out');
            progressDiv.classList.add('fade-in');
            infoDiv.classList.add('fade-out');
            infoDiv.classList.remove('fade-in');
        }
        isProgressVisible = !isProgressVisible;
    }

    // Start the loop
    setInterval(toggleVisibility, 5000); // 5 seconds
});
