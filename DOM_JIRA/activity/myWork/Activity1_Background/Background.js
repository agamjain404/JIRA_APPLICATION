const pink = document.querySelector('.pink');
const brown = document.querySelector('.brown');
const black = document.querySelector('.black');
const blue = document.querySelector('.blue');

pink.addEventListener('click', function(e){
    document.body.style.backgroundColor = "pink";
});

brown.addEventListener('click', function(e){
    document.body.style.backgroundColor = "brown";
});

black.addEventListener('click', function(e){
    document.body.style.backgroundColor = "black";
});

blue.addEventListener('click', function(e){
    document.body.style.backgroundColor = "blue";
});