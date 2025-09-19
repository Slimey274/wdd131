const themeSelector = document.querySelector('#theme-selector');
function changeTheme() {
    const body = document.body;
    const logo = document.querySelector('#logo'); 
    if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo-white.png';   // replace with correct path to white logo
    } 
    else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.jpg';    // replace with correct path to blue logo
    }
}

themeSelector.addEventListener('change', changeTheme);