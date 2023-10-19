nazwa = document.querySelector("#name");
koalicja = document.querySelector("#koalicja");
ilosc = document.querySelector("#ilosc");
btn1 = document.querySelector("#btn1");
btn2 = document.querySelector("#btn2");
display1 = document.querySelector(".display1");
display2 = document.querySelector(".display2");
display3 = document.querySelector(".display3");

btn1.addEventListener("click", function (evt) {
  evt.preventDefault();
  // console.log("aa");

  element = document.createElement("li");
  element.innerHTML = "ABC";
  // element.innerHTML=nazwa.value
  display2.appendChild(element);
});
