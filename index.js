let number = document.querySelector('.btn')

number.addEventListener('click', numberGenerate)

function numberGenerate() {
    let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    let randomChoose = [x[Math.floor(Math.random() * 8 + 1)]]
    console.log(randomChoose)
    let k = new Set(randomChoose);



    while (k.size != 4) {
        k.add(m[Math.floor(Math.random() * 9 + 1)])

    }



    let fourDigit = [...k].join('')

    console.log(fourDigit)
}
