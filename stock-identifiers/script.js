ids = [
  { name: "Weather", id: "com.apple.weather" },
  { name: "App Store", id: "com.apple.AppStore" },
  { name: "Apple Watch", id: "com.apple.Bridge" },
  { name: "Calculator", id: "com.apple.calculator" },
  { name: "Calendar", id: "com.apple.mobilecal" },
  { name: "Camera", id: "com.apple.camera" },
  { name: "Classroom", id: "com.apple.classroom" },
  { name: "Clock", id: "com.apple.mobiletimer" },
  { name: "Compass", id: "com.apple.compass" },
  { name: "Contacts", id: "com.apple.MobileAddressBook" },
  { name: "FaceTime", id: "com.apple.facetime" },
  { name: "Files", id: "com.apple.DocumentsApp" },
  { name: "Game Center", id: "com.apple.gamecenter" },
  { name: "Health", id: "com.apple.Health" },
  { name: "Home", id: "com.apple.Home" },
  { name: "iBooks", id: "com.apple.iBooks" },
  { name: "iTunes Store", id: "com.apple.MobileStore" },
  { name: "Mail", id: "com.apple.mobilemail" },
  { name: "Maps", id: "com.apple.Maps" },
  { name: "Measure", id: "com.apple.measure" },
  { name: "Messages", id: "com.apple.MobileSMS" },
  { name: "Music", id: "com.apple.Music" },
  { name: "News", id: "com.apple.news" },
  { name: "Notes", id: "com.apple.mobilenotes" },
  { name: "Phone", id: "com.apple.mobilephone" },
  { name: "Photo Booth", id: "com.apple.Photo-Booth" },
  { name: "Photos", id: "com.apple.mobileslideshow" },
  { name: "Playgrounds", id: "com.apple.Playgrounds" },
  { name: "Podcasts", id: "com.apple.podcasts" },
  { name: "Reminders", id: "com.apple.reminders" },
  { name: "Safari", id: "com.apple.mobilesafari" },
  { name: "Settings", id: "com.apple.Preferences" },
  { name: "Stocks", id: "com.apple.stocks" },
  { name: "Tips", id: "com.apple.tips" },
  { name: "TV", id: "com.apple.tv" },
  { name: "Videos", id: "com.apple.videos" },
  { name: "Voice Memos", id: "com.apple.VoiceMemos" },
  { name: "Wallet", id: "com.apple.Passbook" },
];

prefs = [
  { name: "Airplane Mode", id: "AirplaneMode" },
  { name: "Wi-Fi", id: "WiFi" },
  { name: "Bluetooth", id: "Bluetooth" },
  { name: "Mobile Data", id: "CellularData" },
  { name: "Personal Hotspot", id: "PersonalHotspot" },
  { name: "Cellular", id: "CarrierSettings" },
  { name: "Cellular", id: "Carrier" },
  { name: "VPN", id: "VPN" },
  {},
  { name: "Notifications", id: "NotificationCenter" },
  { name: "Sounds & Haptics", id: "Sounds" },
  { name: "Do Not Disturb", id: "DND" },
  { name: "Screen Time", id: "ScreenTime" },
  {},
  { name: "General", id: "General" },
  { name: "Control Centre", id: "ControlCenter" },
  { name: "Display & Brightness", id: "Display" },
  { name: "Home Screen", id: "" },
  { name: "Accessibility", id: "Accessibility" },
  { name: "Wallpaper", id: "Wallpaper" },
  { name: "Siri & Search", id: "Siri" },
  { name: "Face ID & Passcode", id: "PearlID-D22" },
  { name: "Touch ID & Passcode", id: "TouchID" },
  { name: "Passcode", id: "Passcode" },
  { name: "Emergency SOS", id: "SOS" },
  { name: "Exposure Notifications", id: "" },
  { name: "Battery", id: "BatteryUsage" },
  { name: "Privacy", id: "Privacy" },
  { name: "Microphone", id: "Microphone" },
  { name: "Location", id: "Location" },
  { name: "Speech Recognition", id: "SpeecRecognition" },
  {},
  { name: "App Store", id: "AppStore" },
  { name: "Wallet & Apple Pay", id: "Wallet" },
  { name: "Passbook", id: "" },
  {},
  { name: "Passwords", id: "Passwords" },
  { name: "Accounts & Passwords", id: "KeychainSync" },
  { name: "Accounts & Passwords", id: "PasswordAutoFill" },
  { name: "Mail", id: "Mail" },
  { name: "Contacts", id: "Contacts" },
  { name: "Campass", id: "Compass" },
  { name: "Calendar", id: "Calendar" },
  { name: "Notes", id: "Notes" },
  { name: "Reminders", id: "Reminders" },
  { name: "Voice Memos", id: "VoiceMemos" },
  { name: "Phone", id: "Phone" },
  { name: "Messages", id: "Messages" },
  { name: "FaceTime", id: "FaceTime" },
  { name: "Safari", id: "Safari" },
  { name: "Stocks", id: "Stocks" },
  { name: "News", id: "News" },
  { name: "Translate", id: "" },
  { name: "TV", id: "TVApp" },
  { name: "Shortcuts", id: "Shortcuts" },
  { name: "Health", id: "Health" },
  { name: "Home", id: "HomeData" },
  { name: "Measure", id: "Measure" },
  { name: "Maps", id: "Maps" },
  { name: "Music", id: "Music" },
  { name: "Music", id: "MediaLibrary" },
  {},
  { name: "Nike+", id: "Victoria" },
  { name: "Activity", id: "Motion" },
  {},
  { name: "iCloud", id: "iCloud" },
  { name: "iTunes", id: "iTunes" },
  { name: "iBooks", id: "iBooks" },
  {},
  { name: "Twitter", id: "Twitter" },
  { name: "Facebook", id: "FacebookSettings" },
  { name: "Flickr", id: "FlickrSettings" },
  { name: "Vimeo", id: "VimeoSettings" },
  { name: "Weibo", id: "TencentWeiboSettings" },
  {},
  { name: "Photos", id: "Photos" },
  { name: "Camera", id: "Camera" },
  { name: "Game Center", id: "GameCenter" },
];

ids.sort((a, b) => a.name.localeCompare(b.name));

var homescreenIconsList = document.getElementById("homescreenIconsList");

// iterate through list of homescreen app id's and render
let firstLetter = -1;
for (i = 0; i < ids.length; i++) {
  // check to see if new alphabetical tag is required
  if (ids[i].name.charCodeAt(0) > firstLetter) {
    firstLetter = ids[i].name.toUpperCase().charCodeAt(0);
    let div = document.createElement("div");
    div.className = "letterIndicator";
    div.innerText = ids[i].name[0].toUpperCase();
    div.id = "letter-" + ids[i].name[0].toLowerCase();
    homescreenIconsList.appendChild(div);
  }
  // create each element of the list
  let div = document.createElement("div");
  div.setAttribute("onClick", "triggerCopy(this)");
  let img = document.createElement("img");
  img.src = "iOS-icons/" + ids[i].name.toLowerCase().replace(" ", "") + ".png";
  let h1 = document.createElement("h1");
  h1.innerText = ids[i].name;
  let input = document.createElement("input");
  input.value = ids[i].id;
  input.type = "text";
  input.readOnly = true;
  div.append(img, h1, input);
  homescreenIconsList.appendChild(div);
}

// iterate through list of preferences icons and render
for (i = 0; i < prefs.length; i++) {
  // create each element of the list
  let div = document.createElement("div");
  // check to see if blank seperator is needed
  if (prefs[i].hasOwnProperty("name")) {
    div.setAttribute("onClick", "triggerCopy(this)");
    let img = document.createElement("img");
    img.src =
      "iOS-icons/prefs/" +
      prefs[i].name.toLowerCase().replace(" ", "") +
      ".png";
    let h1 = document.createElement("h1");
    h1.innerText = prefs[i].name;
    let input = document.createElement("input");
    input.value = prefs[i].id;
    input.type = "text";
    input.readOnly = true;
    div.append(img, h1, input);
  }
  preferencesIconsList.appendChild(div);
}

var appsContent = document.getElementById("homescreenContent");
var prefsContent = document.getElementById("preferencesContent");

function switchMode(newTarget) {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
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
  if (newTarget.innerText == "Apps") {
    appsContent.classList.remove("hidden");
    prefsContent.classList.add("hidden");
  } else {
    appsContent.classList.add("hidden");
    prefsContent.classList.remove("hidden");
  }
}

function triggerCopy(element) {
  let toCopy = element.getElementsByTagName("input")[0];
  toCopy.select();
  toCopy.setSelectionRange(0, 1000);
  document.execCommand("copy");
}

function changeView(isGrid) {
  console.log("called");
  if (isGrid) {
    homescreenIconsList.classList.add("isGridView");
  } else {
    homescreenIconsList.classList.remove("isGridView");
  }
}
