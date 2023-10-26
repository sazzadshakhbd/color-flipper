const colors = ['teal', 'tomato', '#91d2ae', '#fe9666', '#374649', 'rgba(133,122,200,0.9)']
const color = document.querySelector('.color');

document.getElementById('btn').addEventListener('click', function(){
    const randomNumber = getRandomNumber();
    // console.log(randomNumber)
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber];
})

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}