const themeSelector = document.querySelector('#theme-selector');
const logo = document.querySelector('#logo');
const body = document.body;

function changeTheme() { 
    if (themeSelector.value === 'dark') {
        body.classList.add('dark');
        logo.src = 'byui-logo-white.jpg';   // replace with correct path to white logo
    } else {
        body.classList.remove('dark');
        logo.src = 'byui-logo_blue.jpg';    // replace with correct path to blue logo
    }
}

changeTheme();

themeSelector.addEventListener('change', changeTheme);