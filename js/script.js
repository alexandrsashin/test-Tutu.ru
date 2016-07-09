function move() {
    var elem = document.querySelector(".progress-bar__intro"); 
    var width = 0;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= 100) {
            clearInterval(id);
        } else {
            width++; 
            elem.style.width = width + '%'; 
            document.querySelector(".progress-bar__percentage").innerHTML = width * 1 + '%';
        }
    }
}