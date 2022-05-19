let btnA = document.getElementsByTagName('a');

console.log(typeof(btnA));

for (let i = 0; i < btnA.length; i++) {
    btnA[i].addEventListener('click', (e)=>{
        e.preventDefault();
    })
    
}