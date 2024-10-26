function moveCircle() {
    let circle = document.getElementById('circle')
    circle.style.top = Math.random() * (window.
    innerHeight - 5) + 'px'
    circle.style.left = Math.random() * (window.
    innerWidth - 5) + 'px'
}