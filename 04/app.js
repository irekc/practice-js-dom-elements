console.log('DOM');

// struktura do wykorzystania w pętli
const menuItems = [
    {text: 'start', url: '/'},
    {text: 'galeria', url: '/gallery'},
    {text: 'kontakt', url: '/contact'},
];

const nav = document.querySelector('nav');
const ulElement = document.createElement('ul');
nav.appendChild(ulElement)

if(ulElement) {
    menuItems.forEach(element => {
        const liElement = document.createElement('li');
        const aElement = document.createElement('a')
        
        aElement.innerText = element.text;
        aElement.setAttribute('href', element.url)
        
        ulElement.appendChild(liElement);
        liElement.appendChild(aElement)


    })

}