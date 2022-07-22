import { popupData } from "./popups.js";

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

// ### Handling the hamburger menu ###
// Handling hamburgerMenu open/close behavior
document.getElementById("menuHamburger").addEventListener("click", () => {
  if (hambIcon.style.display === 'block') {
    showItems();
  } else {
    hideItems();
  }
})
// Handling when an item from the menu is clicked
document.querySelector(".menuItem").addEventListener("click", () => {
  const menuItems = document.getElementById('myMenuItems');
  if (menuItems.style.display === 'flex') {
    hideItems();
  }
})

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

const worksContainer = document.createElement("div")
worksContainer.setAttribute('class', 'main-container-works')
let worksHtmlContainer = ""
popupData.forEach( () => {
  worksHtmlContainer += `
  <div class="grid-container-works">
					<div class="grey-bckgd"></div>
					<div class="card-contents">
					<div class="card-subt">
						<h3>Multi-Post Stories Gain+Glory</h3>
					</div>
					<div class="card-buttons">
						<ul>
							<li>
								Ruby on rails
							</li>
							<li>
								css
							</li>
							<li>
								JavaScript
							</li>
							<li>
								html
							</li>
						</ul>
					</div>
					<div class="card-see-prjct">
						<button class="green-button" id="cProject${i}" type="button">See Project</button>
					</div>
					</div>
			</div>
  `
})

document.getElementById("cProject").addEventListener("click", () => {
  if (x.matches) {
    console.log("desktop")
  } else {
    console.log("mobile")
    console.log(popupData[0].badges)
    const sec = document.createElement("section")
    sec.setAttribute('id', 'modal')
    sec.setAttribute('class', 'modal')
    const secHeader = document.createElement("div")
    secHeader.setAttribute('class', 'modal-header')

    sec.appendChild(secHeader)
    document.querySelector(".main-container").appendChild(sec)
    document.querySelector(".modal-header").innerHTML = `
    <img src="./imgs/Snapshoot_Mobiles.svg" alt="Mobile Snapshot">
    <a>
      <i id="closePopupIcon" class="fa-solid fa-xmark"></i>
    </a>`
  }
})

