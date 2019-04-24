// Your code goes here


const welcome = document.getElementsByTagName('h2')[0];
welcome.addEventListener('mouseover', function(){
    console.log(welcome)
});


const ltGo = document.getElementsByTagName('h2')[1];
ltGo.addEventListener('keydown', function(){
    console.log(ltGo)
});


const pkDesi = document.getElementsByTagName('h2')[3];
pkDesi.addEventListener('drag', function(){
    console.log(pkDesi)
});


const btn = document.querySelector('.btn');
btn.addEventListener('dblclick', function(){
  console.log(btn);
});


const footer = document.querySelector('.footer');
footer.addEventListener('select', function(){
  console.log(footer);
});

const desi = document.querySelector('.destination');
desi.addEventListener('resize', function(){
  console.log(desi);
});



const advent = document.getElementsByTagName('p')[0];
advent.addEventListener('mousedown', function(){
    console.log(advent)
});
