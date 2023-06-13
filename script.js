let count = 0;
let value = document.querySelector('.value');
let btns = document.querySelectorAll('.btn');

btns.forEach(function (btn){
    btn.addEventListener('click', function(e){
        const action= e.currentTarget.classList;
        if(action.contains('decrease')){
            count--
        }
        else if(action.contains('increase')){
        count++;      }
        else{
            count=0;
        }
        value.textContent= count
    })
})



// counter another method


