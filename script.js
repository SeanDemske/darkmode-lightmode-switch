const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

const lightAttributes = {
    src_image1: 'img/undraw_proud_coder_light.svg',
    src_image2: 'img/undraw_feeling_proud_light.svg',
    src_image3: 'img/undraw_conceptual_idea_light.svg',
    navColor: 'rgb(255 255 255 / 50%)',
    textBoxColor: 'rgb(0 0 0 / 50%)',
    switchText: 'Light Mode',
    switchIcon: () => {
        toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun')
    },
    mode: 'light'
}

const darkAttributes = {
    src_image1: 'img/undraw_proud_coder_dark.svg',
    src_image2: 'img/undraw_feeling_proud_dark.svg',
    src_image3: 'img/undraw_conceptual_idea_dark.svg',
    navColor: 'rgb(0 0 0 / 50%)',
    textBoxColor: 'rgb(255 255 255 / 50%)',
    switchText: 'Dark Mode',
    switchIcon: () => {
        toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
    },
    mode: 'dark'
}

// SetModeStyle
function setMode(setting) {
    image1.src = setting.src_image1;
    image2.src = setting.src_image2;
    image3.src = setting.src_image3;
    nav.style.backgroundColor = setting.navColor;
    textBox.style.backgroundColor = setting.textBoxColor;
    toggleIcon.children[0].textContent = setting.switchText;
    setting.switchIcon();
}

// Switch theme dynamically
function switchTheme(event) {
    if (event.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        setMode(darkAttributes);
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        setMode(lightAttributes);
    }
}

// Event Listener
toggleSwitch.addEventListener('change', switchTheme);

// Check local storage for theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
        setMode(darkAttributes);
    }
}