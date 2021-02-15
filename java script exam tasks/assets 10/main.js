var button = document.querySelector('#junatish');
var area = document.querySelector('.area');
var input = document.querySelector('#input');

button.addEventListener('click', function(e){
    e.preventDefault();
    var time = input.value;
    
    var ball = document.createElement("div");
    ball.setAttribute('class', `balls`)
    ball.textContent = time;
    area.appendChild(ball);
    
    setInterval(done, 1000);
    function done(){
        var balls = document.querySelector('.balls');
        
        if(time == 0){
            balls.style.display = 'none';   
        } else {
            ball.textContent = time;
            time--;
        } 
    }
    setTimeout(done, 100)
})




