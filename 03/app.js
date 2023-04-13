console.log('DOM');

const buttonSettings = {
    attr: {
        className: 'btn',
        title: 'super button'
    },
    css: {
        border: '1px solid #336699',
        padding: '5px 20px',
        color: '#444'
    },
    text: 'Click me!',
}

const parent = document.querySelector('.parent-for-button');
const button = document.createElement('button');

if(parent) {
    parent.appendChild(button)
    for(const value in buttonSettings.attr) {
        button[value] = buttonSettings.attr[value]
    }
    for(const value in buttonSettings.css) {
        button.style[value] = buttonSettings.css[value]
    }
    button.innerText = buttonSettings.text

}