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


document.querySelectorAll(".cProject").forEach((cl) => {
  cl.addEventListener("click", (e) => {
    let btnId = e.target.id
    let inHtml = ""

    const overlay = document.createElement("div")
    overlay.setAttribute('class', 'overdy')
    overlay.setAttribute('id', "overlay-id")
    document.body.appendChild(overlay)

    const sec = document.createElement("section")
    sec.setAttribute('id', 'modal')
    sec.setAttribute('class', 'modal')
    document.querySelector(".main-container").appendChild(sec)

    popupData.forEach((data) => {

      if (data.idx == btnId) {
        inHtml = `
          <div class="modal-header">
            <a>
            <i id="closePopupIcon" class="fa-solid fa-xmark"></i>
            </a>
            <img id="popupimg" src="${data.ftimg}" alt="Mobile Snapshot">
          </div>

        `
        // If screen is desktop
        if (x.matches) {
          console.log("desktop")

          // document.querySelector('.modal-header').

          inHtml += `
          <div class="modal-sub">
          <p>Keeping track of hundreds of components</p>
            <div class="modal-buttons">
              <button class="green-button" type="button">
                See Live <img src="./imgs/cmore-icon.png">
              </button>
              <button class="green-button" type="button">
                See Source <img src="./imgs/github-icon.png">
              </button>
            </div>
          </div>
          <div class="modal-badges">
            <ul>
          `
          data.badges.forEach((a) => {
            inHtml += `<li> ${a} </li>`
          })
          inHtml += `
          </ul>
          </div>
          <div class="modal-p">
            <p>${data.p}</p>
          </div>
          `
        // If screen is mobile
        } else {
          console.log("mobile")
              inHtml += `

              <div class="modal-sub">
                <p>Keeping track of hundreds of components</p>
              <div class="modal-badges">
                <ul>`
              data.badges.forEach((a) => {
                  inHtml += `<li> ${a} </li>`
                })
              inHtml += `
                </ul>
                </div>
              </div>
              <div class="modal-p">
                <p>${data.p}</p>
              </div>
              <div class="modal-buttons">
              <button class="green-button" type="button">
                See Live <img src="./imgs/cmore-icon.png">
              </button>
              <button class="green-button" type="button">
                See Source <img src="./imgs/github-icon.png">
              </button>
              </div>
              
              `
            }
          }

      })
      document.querySelector(".modal").innerHTML = inHtml

      document.getElementById("closePopupIcon").addEventListener("click", () => {
        sec.parentNode.removeChild(sec)
        document.body.removeChild(overlay)
      })
    
      // Close popup when clicking outside
    overlay.addEventListener('click', () => {
      sec.parentNode.removeChild(sec)
      document.body.removeChild(overlay)
    })
  })
})

