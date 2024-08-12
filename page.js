document.addEventListener("DOMContentLoaded", function() {
    const img = document.getElementById('pic');
    const images = [
        'images/images_4.jpeg',
        'images/workspace.jpg',
        'images/diagram.PNG',
        'images/flowchart.jpg',
        'images/quantum_image_1.jpg'
    ];
    let index = 0;

    function changeImage() {
        index = (index + 1) % images.length;
        img.src = images[index];
    }

    setInterval(changeImage, 2000);
});