document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.querySelector('.typewriter');
    const text = typewriter.innerHTML;
    typewriter.innerHTML = '';
    
    let i = 0;
    function type() {
        if (i < text.length) {
            typewriter.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    
    type();
});