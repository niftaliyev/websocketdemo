import { sender } from './websocket.js';

const element = document.getElementById("myBtn");
element.addEventListener("click", myFunction);


const left = document.getElementById("left");
const right = document.getElementById("right");
const up = document.getElementById("up");
const down = document.getElementById("down");


left.addEventListener('click',function(){
    sender('ArrowLeft');
});
right.addEventListener('click',function(){
    sender('ArrowRight');
});
up.addEventListener('click',function(){
    sender('ArrowUp');
});
down.addEventListener('click',function(){
    sender('ArrowDown');
});

function myFunction() {
    // socket.send(document.getElementById("txtinput").value);
    sender(document.getElementById("txtinput").value);
    document.getElementById("txtinput").value = '';

}


let myCircle = document.querySelector('.circle');

window.addEventListener('load', () =>{
 	myCircle.style.position = 'absolute';
 	myCircle.style.left = 0;
 	myCircle.style.top = 0;
});

window.addEventListener('keyup', (event) => {
 switch (event.key) {
 	case 'ArrowLeft':
 		myCircle.style.left = parseInt(myCircle.style.left) - 15 + 'px';
 		break;
 	case 'ArrowRight':
 		myCircle.style.left = parseInt(myCircle.style.left) + 15 + 'px';
 		break;
 	case 'ArrowUp':
 		myCircle.style.top = parseInt(myCircle.style.top) - 15 + 'px';
 		break;
 	case 'ArrowDown':
 		myCircle.style.top = parseInt(myCircle.style.top) + 15 + 'px';
 		break;
    }
});