


export var  socket = new WebSocket('ws://10.201.10.81:7890/EchoAll');

socket.addEventListener('open', (event) => {
  console.log('WebSocket connection opened');
});

socket.addEventListener('message', (event) => {
  console.log('Received message: ' + event.data);
  // Handle incoming messages from the server
  // var list = document.querySelector('#itemslist');
  // let li = document.createElement('li');
  // li.innerText = event.data;
  // list.append(li);

  let myCircle = document.querySelector('.circle');
  switch (event.data) {
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

socket.addEventListener('close', (event) => {
  console.log('WebSocket connection closed');
  // Handle the WebSocket connection closing
});

socket.addEventListener('error', (event) => {
  console.log('WebSocket error: ' + event.error);
  // Handle WebSocket errors
});


export function sender(message){
  socket.send(message);
}