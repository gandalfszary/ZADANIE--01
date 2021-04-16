let buttonPierwszy = document.querySelector('.one')
let buttonDrugi = document.querySelector('.two')
let paragraf = document.querySelector('.paragraf')


buttonPierwszy.addEventListener('click', function() {


    console.log('przed imfem')



    if (paragraf.innerHTML === 'ORION') {
        paragraf.innerHTML = 'BABA'

        console.log('po ifie')

    } else {

        console.log('przed zmina na Orion')

        paragraf.innerHTML = 'ORION'

        console.log('po zmianie na Orion')
    }
})