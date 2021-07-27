const button = document.getElementById('clear');
button.addEventListener('click', () => clearInterval(repeat)); 

const repeat = setInterval(() => console.log('setInterval() éxécuté !'), 500);

const one = setTimeout(() => console.log('message2'), 8000); 
clearTimeout(one);

setInterval(()=> console.log(8), 2000);
