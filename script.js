const text = document.getElementById('text');
const yes = document.getElementById('yes');
const no = document.getElementById('no');
const body = document.body;



function change_position(){
    no.style.position = 'absolute';
    total_height = window.innerHeight;
    total_width = window.innerWidth;

    var randomX = Math.random() * (total_width - no.offsetWidth);
    var randomY = Math.random() * (total_height - no.offsetHeight);

    no.style.left = randomX + 'px';
    no.style.top = randomY + 'px';
}


let click = 0
function said_no(){
    if (click === 0){
        text.textContent = 'Pleaseeeeeee';
    } else if (click === 1){
        text.textContent = 'Pleaseeeeeeeeeeeeeeeeeeee';
    } else if (click === 2){
        text.textContent = 'I will be sad if you say No again';
    } else if (click === 3){
        text.textContent = 'Its your last time!';
    } else if (click == 4){
        text.textContent = 'Oh Come on please!';
        yes.textContent = 'Okay'
    } else{
        change_position()
    }
    click = click + 1
}

no.addEventListener('click', ()=>{
    said_no();
})
yes.addEventListener('click', ()=>{
    if (click<4){
        text.textContent = 'Yayeee Lets Goooo 🥳'
        no.style.display = 'none';
    } else if (text.textContent === 'Finally 😭'){
        setInterval(function(){
            text.append('Finally 😭')
        }, 10)
    } else{
        text.textContent = 'Finally 😭'
        no.style.display = 'none';
    }
})