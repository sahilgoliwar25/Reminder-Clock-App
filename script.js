//Live Clock Code
let hrsCount = document.getElementsByClassName("hrsCount");
let minsCount = document.getElementsByClassName("minsCount");
let secsCount = document.getElementsByClassName("secsCount");
let Format = document.getElementsByClassName("Format");
function startClock() {
  let time = new Date();
  let hrs = time.getHours();
  let mins = time.getMinutes();
  let secs = time.getSeconds();
  let AMPM = "AM";
  if (hrs > 12) {
    hrs -= 12;
    AMPM = "PM";
  }
  if (hrs === 0) {
    hrs = 12;
  }

  hrsCount[0].innerHTML = `${hrs}`;
  minsCount[0].innerHTML = `${mins}`;
  secsCount[0].innerHTML = `${secs}`;
  Format[0].innerHTML = `${AMPM}`;
}
setInterval(() => {
  startClock();
}, 1000);

//Change content according to the current time
let textTag = document.getElementsByClassName("textTag");
let msgText = document.getElementsByClassName("msgText");
let ImgBox = document.getElementsByClassName("ImgBox");
function changeContent() {
  let time = new Date();
  let hrs = time.getHours();
  if (hrs >= 7 && hrs <= 11) {
    textTag[0].innerHTML = "GOOD MORNING!! WAKE UP !!";
    msgText[0].innerHTML = "GRAB SOME HEALTHY BREAKFAST!!!";
    ImgBox[0].style.backgroundImage = "url('./Group 5183 (1).svg')";
  } else if (hrs >= 12 && hrs <= 15) {
    textTag[0].innerHTML = "GOOD AFTERNOON!! TAKE SOME SLEEP";
    msgText[0].innerHTML = "LET'S HAVE SOME LUNCH !!";
    ImgBox[0].style.backgroundImage = "url('./Group 5183.svg')";
  } else if (hrs >= 16 && hrs <= 19) {
    textTag[0].innerHTML = `GOOD EVENING!!`;
    msgText[0].innerHTML = "STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
    ImgBox[0].style.backgroundImage = "url('./lunch_image.png')";
  } else if (hrs >= 20 && hrs <= 6) {
    textTag[0].innerHTML = `GOOD NIGHT!!`;
    msgText[0].innerHTML = "CLOSE YOUR EYES AND GO TO SLEEP";
    ImgBox[0].style.backgroundImage = "url('./Group 5184.svg')";
  }
}
setInterval(() => {
  changeContent();
}, 1000);

//
let field1 = document.getElementById("field1");
let field2 = document.getElementById("field2");
let field3 = document.getElementById("field3");
let field4 = document.getElementById("field4");
let textAlarmLine = document.getElementsByClassName("textAlarmLine");

function selectedOption() {
  var text = field1.options[field1.selectedIndex].text;
  textAlarmLine[0].innerHTML = `${text}`;

  var text = field2.options[field2.selectedIndex].text;
  textAlarmLine[1].innerHTML = `${text}`;

  var text = field3.options[field3.selectedIndex].text;
  textAlarmLine[2].innerHTML = `${text}`;

  var text = field4.options[field4.selectedIndex].text;
  textAlarmLine[3].innerHTML = `${text}`;
}

function onHoverFunc() {
  document.getElementsByClassName("setAlarmBtn")[0].innerHTML = "Party Time!";
}
function onLeaveFunc() {
  document.getElementsByClassName("setAlarmBtn")[0].innerHTML = "Set Alarm";
}
