import home from './home.js';
import menu from './menu.js';
import about from './about.js';
import contact from './contact.js';
import './style.css';

const content = document.querySelector('#content');
const buttons = {
  homeButton: { element: document.querySelector('.homeButton'), component: home },
  menuButton: { element: document.querySelector('.menuButton'), component: menu },
  aboutButton: { element: document.querySelector('.aboutButton'), component: about },
  contactButton: { element: document.querySelector('.contactButton'), component: contact }
};

function loadComponent(component) {
  content.innerHTML = '';
  content.appendChild(component());
}

function initializeEventListeners() {
  for (let key in buttons) {
    buttons[key].element.addEventListener('click', () => loadComponent(buttons[key].component));
  }
}
// Initial load
loadComponent(home);
// Set up event listeners
initializeEventListeners();

//HMR
if (module.hot) {
  module.hot.accept()
}
