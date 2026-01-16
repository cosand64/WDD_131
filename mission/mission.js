
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    let image = document.getElementById("byui_logo");
    if (current == 'dark') {
        document.body.style.background = 'darkslategrey';
        document.body.style.color = 'white';
        image.setAttribute('src', 'images/byui-logo-dark.png')

    } else {
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        image.setAttribute('src', 'images/byui-logo-blue.webp')
    }
}           
                    