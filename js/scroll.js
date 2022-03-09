const bigSize = document.getElementById('bigSize');
const lineRed = document.getElementById('lineRed');
const smallSize = document.getElementById('smallSize');
window.addEventListener('scroll', () => {
    if (window.scrollY < 400) {
        bigSize.style.fontSize = `${30 + window.scrollY / 12}px`;
    }
    else if(window.scrollY >= 400 && window.scrollY < 700) {
        document.getElementById('slideLeft').style.left = `${window.scrollY / 10}px`;
        lineRed.style.left = `${window.scrollY / 10}px`;
        lineRed.style.width = `${50 + window.scrollY / 2}px`;
    }
    else if(window.scrollY >= 700 && window.scrollY < 1000) {
        document.querySelector('.img').style.right = `${window.scrollY / 10}px`;
    }
    else if (window.scrollY >= 1000) {
        smallSize.style.fontSize = `${90 - window.scrollY/30}px`;
    }
})
bigSize.addEventListener ('click', () => {
    document.querySelector('.box2').scrollIntoView({behavior:"smooth"});
})
bigSize.addEventListener ('mouseover', () => {
    event.target.style.color = 'red';
})
bigSize.addEventListener ('mouseout', () => {
    event.target.style.color = 'black';
})
smallSize.addEventListener ('click', () => {
    event.target.style.color = 'red';
    window.scroll({
        top: 0,
        behavior:'smooth'
    })
})
smallSize.addEventListener ('mouseover', () => {
    event.target.style.color = 'red';
})
smallSize.addEventListener ('mouseout', () => {
    event.target.style.color = 'black';
})