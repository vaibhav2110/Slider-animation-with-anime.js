document.addEventListener('DOMContentLoaded', () => {
    anime.timeline({

        })
        .add({
            targets: '.my_nav',
            left: ['5%', '16%'],
            easing: 'easeOutExpo',
            duration: 1500,
            opacity: [0, 1]
        })
        .add({
            targets: '.img_back',
            top: ['40%', '50%'],
            easing: 'easeOutExpo',
            duration: 1500,
            opacity: [0, 1],
            offset: '-=1300'
        })
        .add({
            targets: '.texts',
            right: ['8%', '10%'],
            easing: 'easeOutExpo',
            duration: 1500,
            opacity: [0, 1],
            offset: '-=1200'
        })


    const artLink = document.getElementById('artLink');
    const workLink = document.getElementById('workLink');
    const onlineLink = document.getElementById('onlineLink');
    const collectionLink = document.getElementById('collectionLink');

    let linkArray = [artLink, workLink, onlineLink, collectionLink];

    let imgs = {
        artImg: 'https://images.unsplash.com/photo-1540204977819-7eccea962a56?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=f229822e41af5def50c339dcff517efa&auto=format&fit=crop&w=1051&q=80',
        workImg: 'https://images.unsplash.com/photo-1540243622076-432084797f3e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=06beb02b4681daaa0e10bfcb38a9bcfd&auto=format&fit=crop&w=1014&q=80',
        onlineImg: 'https://images.unsplash.com/photo-1540292446300-4f97945502f3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5628a713a4899bb205b7f07d05d88c54&auto=format&fit=crop&w=1050&q=80',
        collectionImg: 'https://images.unsplash.com/photo-1540303795566-d6d68e274b74?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8e5abacf3e15e5f6ae36c1ae021758d&auto=format&fit=crop&w=1050&q=80'
    };

    let people = {
        art: {
            name: 'ANDERS KYLEBERG',
            designation: 'SET DESIGN PHOTOGRAPHY'
        },
        work: {
            name: 'VAIBHAV PRAKASH',
            designation: 'WEB DEVELOPER'
        },
        online: {
            name: 'BENJAMIN KYLEBERG',
            designation: 'FRESH QYE VS MAKE UP'
        },
        collection: {
            name: 'KARIN WESTERNLAND',
            designation: 'MUSE MAGAZINE'
        }
    };

    linkArray.forEach(link => {
        link.addEventListener('click', (event) => {
            switch (link) {
                case artLink:
                    changeContent(link, imgs.artImg, people.art);
                    break;
                case workLink:
                    changeContent(link, imgs.workImg, people.work);
                    break;
                case onlineLink:
                    changeContent(link, imgs.onlineImg, people.online);
                    break;
                case collectionLink:
                    changeContent(link, imgs.collectionImg, people.collection);
                    break;
            }
        })
    });
    
    function changeContent(link, img, person){
        anime.timeline({
            
        })
        .add({
            targets: '.img_back img',
            translateY: -700,
            opacity: 0,
            easing: 'easeInExpo',
            duration: 700,
            complete: (anim)=>{
                document.querySelector('.img_back img').src = ''+img;
            }
        })
        .add({
            targets: '.name, .designation',
            translateY: -200,
            opacity: 0,
            easing: 'easeInExpo',
            duration: 800,
            offset: '-=700',
            delay: (el, i) => i*100,
            complete: (anim)=>{
                document.querySelector('.name').textContent = person.name;
                document.querySelector('.designation').textContent = person.designation;
            }
        })
        .add({
            targets: '.img_back img',
            translateY: [700, 0],
            opacity: [0,1],
            easing: 'easeOutExpo',
            duration: 900
        })
        .add({
            targets: '.name, .designation',
            translateY: [200, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 800,
            delay: (el, i) => i*100,
            offset: '-=700'
        })
    }
    

})






















