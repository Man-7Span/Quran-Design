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