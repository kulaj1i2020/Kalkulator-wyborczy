nazwa = document.querySelector("#electoralName");
koalicja = document.querySelector("#isCoalition");
ilosc = document.querySelector("#numberOfVotes");
btnnext = document.querySelector("#next");
btncalc = document.querySelector("#calc");
display0 = document.querySelector(".display0");
display1 = document.querySelector(".display1");
display2 = document.querySelector(".display2");
display3 = document.querySelector(".display3");
// const partia = "";
tablica = new Array();
prog = 0;
i = 0;
sumaglosow = 0;
procent = 0;
btnnext.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("aa");
  display1.style.display = "block";
  display2.style.display = "none";
  i++;
  if (koalicja.checked) {
    koalicja = "jest koalicją";
    prog = 8;
  } else {
    koalicja = "nie jest koalicją";
    prog = 5;
  }
  element = document.createElement("li");
  element.innerHTML =
    nazwa.value + ", " + koalicja + " i ma: " + ilosc.value + " głosy(ów)";

  display1.appendChild(element);
  tablica[i] = ilosc.value;
  sumaglosow = Number(sumaglosow) + ilosc.value;

  //   partia= {n=nazwa.value,
  //     k=koalicja,
  //    i=ilosc.value,

  element2 = document.createElement("tr");
  elementA = document.createElement("td");
  elementA.innerHTML = i;
  element2.appendChild(elementA);
  elementB = document.createElement("td");
  elementB.innerHTML = nazwa.value;
  element2.appendChild(elementB);
  elementC = document.createElement("td");
  elementC.innerHTML = prog + "%";
  element2.appendChild(elementC);
  elementD = document.createElement("td");
  elementD.innerHTML = ilosc.value;
  element2.appendChild(elementD);
  // elementE=document.createElement("td");

  display2.appendChild(element2);
});

btncalc.addEventListener("click", function (evt) {
  evt.preventDefault();
  console.log("bb");
  console.log(tablica[1]);
  console.log(tablica[2]);
  console.log(sumaglosow.value);

  procent = (Number(tablica[1]) / Number(sumaglosow)) * 100;
  elementE = document.createElement("td");
  elementE.innerHTML = procent.value;
  element2.appendChild(elementE);
  display2.appendChild(element2);

  console.log(procent);

  display0.style.display = "none";
  display1.style.display = "none";
  display2.style.display = "block";
});
