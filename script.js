
var a = 128511
          
var headerTitle = document.getElementById('hello');
var button = document.getElementById('click');

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];  
  }
  return color;
}

function changeText() {
  a=a+1
  headerTitle.textContent = 'Hello class '+String.fromCodePoint(a);
  button.style.backgroundColor = getRandomColor();
}