const todos = document.querySelector('.todos');
const modal = document.querySelector('.modal');
let links = '';

fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
    res.json().then((data) => {
        data.forEach((todo, key) => {

            const aTag = document.createElement('a');
            aTag.setAttribute('href', `#`);
            aTag.setAttribute('class', `links`);

            // console.log(links);
            
            aTag.textContent = key + 1 + ' ' + todo.title;
            
            todos.appendChild(aTag);
            if (todo.completed) {
                
            }
            
        });
        links = document.querySelectorAll('.links');
        links.forEach(link => {
            link.addEventListener('click', function () {
                modal.style.transform = `translateY(0)`;
            })
        })
    });
});
