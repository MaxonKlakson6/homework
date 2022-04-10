const isOn = (btn, input) =>{
    if (btn.classList[1] == 'on'){
        btn.classList.remove('on');
        btn.classList.add('off');
        input.setAttribute('type', 'text');
    } else if (btn.classList[1] == 'off'){
        btn.classList.remove('off');
        btn.classList.add('on');
        input.setAttribute('type', 'password');
    }
}


const switchViewFirst = (btn) => {
    const input = document.querySelector('#first')
    isOn(btn, input);
}

const switchViewSecond = (btn) => {
    const input = document.querySelector('#second')
    isOn(btn, input);
}