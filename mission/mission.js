const themeSelector = document.querySelector('#theme-selector');
const logo = document.querySelector('#logo');
const body = document.body;

function changeTheme() {
  if (themeSelector.value === 'dark') {
    body.classList.add('dark');
    logo.src = 'byui-logo_white.jpg'; // change logo for dark mode
  } else {
    body.classList.remove('dark');
    logo.src = 'byui-logo_blue.jpg'; // change logo for light mode
  }
}

// Run once when the page loads
changeTheme();

// Listen for dropdown changes
themeSelector.addEventListener('change', changeTheme);
