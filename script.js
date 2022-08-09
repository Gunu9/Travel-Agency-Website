console.log("Hello World");

// let Place = document.querySelectorAll(".Place").length;

// for (let i = 0 , sno = 0; i < Place; i++ , sno++) {

//   document.querySelectorAll(".Place")[i].addEventListener('click', ()=>{
//     console.log("Place is clicked!!!");
//     let placeName = document.getElementsByClassName("destinationH2")[sno];
//     this.name = placeName;
//     console.log(placeName);
//     console.log(typeof placeName, `${this.name}`);

//     window.location.assign('Htmls/Place.html');

//        });
//   }

let bookedticket = document.querySelectorAll(".BookT").length;
for (let i = 0, sno = 0; i < bookedticket; i++, sno++) {
  document.querySelectorAll(".BookT")[i].addEventListener("click", () => {
    let Destination = document.getElementsByClassName("trainD")[sno];
    console.log(JSON.stringify(Destination);
    document.getElementById(
      "trainSectionId"
    ).innerHTML = `booked! a ticket to ${Destination}`;
  });
}
