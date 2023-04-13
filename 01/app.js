console.log('DOM');

// const newestComment = document.getElementsByClassName('comments__item comments__item--newest');

// if(newestComment) {
//     const CommentElements = newestComment[0].children;

//     console.log(newestComment, CommentElements)
// }

const newestComment = document.querySelector('.comments__item.comments__item--newest');

if(newestComment) {
    const listWithAtrr = newestComment.querySelectorAll('[data-info]');
    console.log(listWithAtrr,listWithAtrr.length)
}