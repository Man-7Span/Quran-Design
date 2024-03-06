import Lenis from '@studio-freight/lenis'


const lenis = new Lenis(
    {
        lerp: 0.04
    }
)

lenis.on('scroll', (e) => {
    duration: 2
})

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)

}

requestAnimationFrame(raf)

const dropdownButton = document.getElementById('dropdownHoverButton');
const dropdownMenu = document.getElementById('dropdownMenu');

dropdownButton.addEventListener('click', () => {
    dropdownMenu.classList.toggle('hidden');
    
});
