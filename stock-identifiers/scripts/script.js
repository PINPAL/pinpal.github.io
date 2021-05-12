const homescreenIconsList = document.getElementById("homescreenIconsList");
const jailbreakIconsList = document.getElementById("jailbreakIconsList");
const preferencesIconsList = document.getElementById("preferencesIconsList");

// sorts lists alphabetically
// required in order to label correctly
// probably more efficient to just order them manually in this file as they are static
// but I'm lazy. so if you fancy doing a pull request go ahead :D
stockApps.sort((a, b) => a.name.localeCompare(b.name));
jailbreakApps.sort((a, b) => a.name.localeCompare(b.name));

// function to iterate through list of apps and render with letter seperators
function renderLetterBasedApps(listOfApps) {
  let firstLetter = -1;
  let finalList = document.createElement("div");
  for (i = 0; i < listOfApps.length; i++) {
    // check to see if new alphabetical tag is required
    if (listOfApps[i].name.charCodeAt(0) > firstLetter) {
      firstLetter = listOfApps[i].name.toUpperCase().charCodeAt(0);
      let div = document.createElement("div");
      div.className = "letterIndicator";
      div.innerText = listOfApps[i].name[0].toUpperCase();
      div.id = "letter-" + listOfApps[i].name[0].toLowerCase();
      finalList.appendChild(div);
    }
    // create each element of the list
    let div = document.createElement("div");
    div.setAttribute("onClick", "triggerCopy(this)");
    let img = document.createElement("img");
    img.src =
      "appIcons/" +
      listOfApps[i].name.toLowerCase().replace(/\ /g, "") +
      ".png";
    let h1 = document.createElement("h1");
    h1.innerText = listOfApps[i].name;
    let input = document.createElement("input");
    input.value = listOfApps[i].id;
    input.type = "text";
    input.readOnly = true;
    div.append(img, h1, input);
    finalList.append(div);
  }
  return finalList;
}

// iterate through list of preferences icons
let finalPrefsList = document.createElement("div");
for (i = 0; i < prefs.length; i++) {
  // create each element of the list
  let div = document.createElement("div");
  // check to see if blank seperator is needed
  if (prefs[i].hasOwnProperty("name")) {
    div.setAttribute("onClick", "triggerCopy(this)");
    let img = document.createElement("img");
    img.src =
      "appIcons/prefs/" +
      prefs[i].name.toLowerCase().replace(/\ /g, "") +
      ".png";
    let h1 = document.createElement("h1");
    h1.innerText = prefs[i].name;
    let input = document.createElement("input");
    input.value = prefs[i].id;
    input.type = "text";
    input.readOnly = true;
    div.append(img, h1, input);
  } else {
    div.className = "letterIndicator";
  }
  finalPrefsList.appendChild(div);
}
// append/render preference icons to list
preferencesIconsList.appendChild(finalPrefsList);

// append/render stock & jailbreak apps to list
homescreenIconsList.appendChild(renderLetterBasedApps(stockApps));
jailbreakIconsList.appendChild(renderLetterBasedApps(jailbreakApps));
