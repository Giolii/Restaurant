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

// function loadComponent(component) {
//   content.innerHTML = '';
//   content.appendChild(component());
// }


//new function
function loadComponent(component) {
  // Add hidden class for transition
  content.classList.add('hidden');

  // Wait for the transition to end
  setTimeout(() => {
    content.innerHTML = ''; // Clear current content
    content.appendChild(component()); // Load new component

    // Trigger reflow to restart the transition
    void content.offsetWidth;

    // Remove hidden class to show new content with transition
    content.classList.remove('hidden');
  }, 500); // Duration should match the CSS transition duration
}
//end new function


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
