document.addEventListener('DOMContentLoaded', ()=>{
    let links = document.querySelectorAll('.list a');
    links.forEach(link => {
        link.addEventListener('mouseenter', ()=>{
            let letter = link.querySelectorAll('.letter');
            anime({
                targets: letter,
                translateY: (el, i)=> -(i%3)*2,
                duration: 300,
                delay: (el, i)=>i*30
            })
        })
        link.addEventListener('mouseleave', ()=>{
            let letter = link.querySelectorAll('.letter');
            anime({
                targets: letter,
                translateY: 0
            })
        })
    })
})