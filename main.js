/*==================
===================*/


const button = document.querySelector('#js-btn');
button.addEventListener('click', () => {
    const input = document.getElementById('number').value;
    const result = document.getElementById('result-text');

    switch(input) {
        case "1":
            result.innerText = " 負け ";
            break;
        case "2":
            result.innerText = " 勝ち!! ";
            break;
        default:
            result.innerText = " あいこ ";
            break
    }
});


