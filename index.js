let buttonPierwszy = document.querySelector('.one')
let buttonDrugi = document.querySelector('.two')
let paragraf = document.querySelector('.paragraf')


buttonPierwszy.addEventListener('click', function() {

    console.log('test1')

    if (paragraf.innerHTML === 'ORION') {
        paragraf.innerHTML = 'BABA'
    } else {
        paragraf.innerHTML = 'ORION'
    }

})