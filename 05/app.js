console.log('DOM');

const curr = document.querySelector('.js-curr');

const removeButton = document.createElement('button');
removeButton.innerText = 'usuń z koszyka';
removeButton.className = 'article__btn'

const article1 = curr.parentElement;
article1.appendChild(removeButton);

const currSiblings = [...article1.children];
console.log(currSiblings);

currSiblings.forEach(el => {
    if(el !== curr) {
        console.log(el)
        // el.className += ' siblings'
        el.classList.add('siblings')

    }
})

const article2 = article1.nextElementSibling;
article2.setAttribute('title', 'nextElementSibling');

const article3 = article2.nextElementSibling;
const newP = document.createElement('p');
newP.innerText = 'some text';
const lastArticle3Button = article3.querySelector('.article__btn');
article3.insertBefore(newP, lastArticle3Button);

const newArticle = article2.cloneNode(true);
const section = article1.parentElement;
section.insertBefore(newArticle, article1)




