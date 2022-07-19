const hambIcon = document.getElementById("hamburgerIcon");
const closeIcon = document.getElementById("closeIcon");
const menuItems = document.getElementById("myMenuItems")

// Operation when SHOWING items
const showItems = function () {
  hambIcon.style.display = "none";
  hambIcon.style.visibility = "hidden";
  closeIcon.style.display = "block";
  closeIcon.style.visibility = "visible";
  menuItems.style.display = "flex";
  menuItems.style.visibility = "visible";
}
// Operation when HIDING items
const hideItems = function () {
  closeIcon.style.display = "none";
  closeIcon.style.visibility = "hidden";
  hambIcon.style.display = "block";
  hambIcon.style.visibility = "visible";
  menuItems.style.display = "none";
  menuItems.style.visibility = "hidden";
}
// Handling hamburgerMenu open/close behavior
const hamburgerMenu = function () {
  if (hambIcon.style.display === "block") {
    showItems()
  } else {
    hideItems()
  }
}
// Handling hamburgerMenu open/close behavior when clicking item
const adaptHamburgerMenu = function (){
  const menuItems = document.getElementById("myMenuItems")
  if (menuItems.style.display === "flex") {
    hideItems()
  }
}
