const lamp = document.getElementById("lamp");
let switchedOn = false;

lamp.onclick = function () {
  // if (lamp.classList.contains("active-lamp")) {
  //   lamp.classList.remove("active-lamp");
  // } else {
  //   lamp.classList.add("active-lamp");
  // }
 
  if (switchedOn) {
    lamp.classList.remove("active-lamp");
  } else {
    lamp.classList.add("active-lamp");
  }

  switchedOn = !switchedOn;
};
