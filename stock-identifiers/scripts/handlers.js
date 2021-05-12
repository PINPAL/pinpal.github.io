// handles when user selects a different category from the navigation bar
const targets = [
  { name: "Apps", id: "homescreenContent" },
  { name: "Settings", id: "preferencesContent" },
  { name: "Jailbreak", id: "jailbreakContent" },
];
function switchMode(newTarget) {
  // remove selected tag from all buttons
  let buttons = document
    .getElementById("modeSwitcher")
    .getElementsByTagName("button");
  for (i = 0; i < buttons.length; i++) {
    buttons[i].classList.remove("selected");
  }
  // add selected tag to new button
  newTarget.classList.add("selected");
  // handle changing of content
  for (i = 0; i < targets.length; i++) {
    let contentTarget = document.getElementById(targets[i].id);
    if (newTarget.innerText == targets[i].name) {
      contentTarget.style.transform = "translateX(0)";
      setTimeout(() => {
        contentTarget.classList.remove("hidden");
        contentTarget.style.transform = "";
      }, 325);
    } else {
      contentTarget.classList.add("hidden");
      contentTarget.style.transform = "translateX(-75%)";
    }
  }
}

// handles when user clicks on an app and will copy the bundle ID to clipboard
function triggerCopy(element) {
  let toCopy = element.getElementsByTagName("input")[0];
  toCopy.select();
  toCopy.setSelectionRange(0, 1000);
  document.execCommand("copy");
}

// handles switching between grid & list view
function changeView(isGrid) {
  let compatibleLists = document.getElementsByClassName("supportsGridView");
  if (isGrid) {
    for (i = 0; i < compatibleLists.length; i++) {
      compatibleLists[i].classList.add("isGridView");
    }
  } else {
    for (i = 0; i < compatibleLists.length; i++) {
      compatibleLists[i].classList.remove("isGridView");
    }
  }
}
