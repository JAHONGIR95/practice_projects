const todos = document.querySelector('.todos');
const modal = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title')
const modalName = document.querySelector('.modal-name')


fetch('https://jsonplaceholder.typicode.com/posts').then((res) => {
    res.json().then((data) => {
        data.forEach((todo, key) => {

            const aTag = document.createElement('a');
            aTag.setAttribute('href', `#`);
            aTag.setAttribute('class', `links`);
            aTag.setAttribute('data-id', `${todo.id}`);
            
            aTag.textContent = key + 1 + ' ' + todo.title;
            
            todos.appendChild(aTag);
                
        });
        
        links = document.querySelectorAll('.links');
        links.forEach(link => {
            link.addEventListener('click', function () {

                modal.style.transform = `translateY(0)`;
                modalName.textContent = link.dataset.id + ' ' + data[link.dataset.id - 1].title;
                modalTitle.textContent = link.dataset.id + ' ' + data[link.dataset.id - 1].body;
            })
        })
    });
});
console.log(links);