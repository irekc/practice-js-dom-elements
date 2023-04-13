console.log('DOM'); 

const elList = document.querySelectorAll('[data-url]');

if(elList) {
    elList.forEach(el => {
        // const attr = el.getAttribute('data-url');
        const attr = el.dataset.url;
        el.setAttribute('href', attr);
        console.log(el, elList)
    }
    )
}