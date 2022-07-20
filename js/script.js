const hambIcon = document.getElementById('hamburgerIcon');
const closeIcon = document.getElementById('closeIcon');
const menuItems = document.getElementById('myMenuItems');
const title = document.querySelector('.title');
const sections = document.querySelectorAll('section:not(.main-container)');
const footer = document.querySelector('footer');
const toggleDivs = document.querySelector('.headline:not(.first-child)');

// Operation when SHOWING items
const showItems = () => {
  hambIcon.style.display = 'none';
  hambIcon.style.visibility = 'hidden';
  closeIcon.style.display = 'block';
  closeIcon.style.visibility = 'visible';
  menuItems.style.display = 'flex';
  menuItems.style.visibility = 'visible';
  title.style.visibility = 'hidden';
  sections.forEach((element) => {
    element.style.visibility = 'hidden';
  });
  footer.style.visibility = 'hidden';
  footer.style.display = 'none';
  toggleDivs.style.visibility = 'hidden';
};
// Operation when HIDING items
const hideItems = () => {
  closeIcon.style.display = 'none';
  closeIcon.style.visibility = 'hidden';
  hambIcon.style.display = 'block';
  hambIcon.style.visibility = 'visible';
  menuItems.style.display = 'none';
  menuItems.style.visibility = 'hidden';
  title.style.visibility = 'visible';
  sections.forEach((element) => {
    element.style.visibility = 'visible';
  });
  footer.style.visibility = 'visible';
  footer.style.display = 'block';
  toggleDivs.style.visibility = 'visible';
};
// Handling hamburgerMenu open/close behavior
/* eslint-disable no-unused-vars */
const hamburgerMenu = () => {
  if (hambIcon.style.display === 'block') {
    showItems();
  } else {
    hideItems();
  }
};
// Handling hamburgerMenu open/close behavior when clicking item
/* exported modal */
const adaptHamburgerMenu = () => {
  const menuItems = document.getElementById('myMenuItems');
  if (menuItems.style.display === 'flex') {
    hideItems();
  }
};
/* eslint-enable no-unused-vars */
/* When changing screen-size after closing the hamburger menu
(therefore, hiding the "menuItems" list)
so the items remain hidden on desktop.
This shouldn't really be a problem since users wouldn't be browsing from one screen size to another,
in the same session,
but just to make the code function properly in such unrealistic scenarios, this fix is added */

const x = window.matchMedia('(min-width: 768px)');

x.onchange = (e) => {
  const menuItems = document.getElementById('myMenuItems');
  if (e.matches) {
    menuItems.style.display = 'flex';
    menuItems.style.visibility = 'visible';
  } else {
    menuItems.style.display = 'none';
    menuItems.style.visibility = 'hidden';
  }
};
