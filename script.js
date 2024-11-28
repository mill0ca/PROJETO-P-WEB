function bounce() {
    let pos = 0;
    const interval = setInterval(function() {
        pos += 10;
        titulo.style.transform = `translateY(${pos}px)`;
        if (pos >= 20) {
            clearInterval(interval); // Interrompe o movimento
        }
    }, 50);
}




const cards = document.querySelectorAll('.card');


function sobe(numero){
cards[numero].style.transform = 'translateY(-10px)'
cards[numero].style.transition = 'transform 0.3s ease-in-out';

}
function desce(numero){
cards[numero].style.transform = 'translateY(0px)'
cards[numero].style.transition = 'transform 0.3s ease-in-out';

}