window.onload = function () {
  // const container = document.getElementById("container");
  // const buttons = document.getElementsByClassName("btn");
  // const duymeler = document.getElementsByTagName("button");
  // const inputs = document.getElementsByName("ad");

  // // const inputs = document.querySelectorAll("#container > input:nth-child(2)")
  // const input = document.querySelector("#container > input")

  // console.log(inputs)
  // // console.log(duymeler)
  // // console.log(buttons)

  // buttons[0].onclick = function () {
  //   container.style.background = "royalblue";
  // };

  const creatorBtn = document.getElementById("creator");
  const container = document.getElementById("container");

  creatorBtn.onclick = function () {
    const myNewInput = document.createElement("input");

    myNewInput.setAttribute("type", "submit");

    myNewInput.classList.add("btn-primary");

    container.appendChild(myNewInput);

    container.innerHTML = "Hello world"
  };
};
