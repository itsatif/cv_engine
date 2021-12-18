async function TextEditor(element){
    const newEditor =  await ClassicEditor
    .create(element,{
      toolbar: [ 'heading', 'bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote' ],
    } )
    return newEditor
   
  }


  let editor = document.getElementById("editor");

  ClassicEditor.create("editor")
  .catch(error => {
      console.error("error");
  });

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
  
let print = document.querySelector(".print");
  
let printpage = () =>{
    window.print();
};

print.addEventListener("click",printpage);

let tools = document.querySelector(".tools-div");
//leftside btn logic
let editbtn = document.querySelector(".edit");
console.log(editbtn);
let leftside = document.querySelector(".left");
editbtn.addEventListener("click",()=> {
    tools.style.display="none";
    if(leftside.style.display==="block"){
    leftside.style.display = "none";
    }else{
        leftside.style.display="block";
    }
});

//leftside btn logic


//tools btn logic
let toolsbtn = document.querySelector(".tools");
toolsbtn.addEventListener("click",() => {
    leftside.style.display="none";
    if(tools.style.display==="block"){
    tools.style.display="none";
    }else{
        tools.style.display="block";
    }
}); 
//tools btn logic


//form catch


const name1 = document.querySelector("#name");
console.log(name1);
let nameperson = document.querySelector(".first-name");

function nameupdate(){
    nameperson.innerText = name1.value;
    // nameupdate();  
}

name1.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        console.log('you entered correct')
        nameupdate();
        e.preventDefault();
    }
})

//email update
let email1 = document.getElementById("email");

let emailup = document.querySelector(".email1");

function emailUpdate(){
    emailup.innerText = email1.value;
};

email1.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        emailUpdate();
        e.preventDefault();
    }
});

//email update

//about me update
let about = document.querySelector(".aboutme");


//mobile number update
let numberUpdates = document.querySelector(".mobile1");
let mobileEntered = document.getElementById("mobile");
function numberUpdate(){
    numberUpdates.innerText = mobileEntered.value;
}

mobileEntered.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        numberUpdate();
        e.preventDefault();
    }
});
//mobile number update

//education description

let schoolName = document.getElementById("schoolname");
let eduSchool = document.querySelector(".education-description");
let cityOfSchool = document.getElementById("cityed");
let eduSchool1 = document.querySelector(".education-description-years");
let graduationDate = document.querySelector("#graduation");
let country1 = document.getElementById("countryEdu");
let btech = document.getElementById("degree");
console.log(country1.value);
function EducationDetails(){
    eduSchool.innerHTML = `<div style="width:300px"><h4>${schoolName.value}</h4></div>
                             <div>${cityOfSchool.value},${country1.value}</div>
                             <div><p>${btech.value}</p>${graduationDate.value}</div>`
}


schoolName.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        EducationDetails()
        e.preventDefault();
    }
});




cityOfSchool.addEventListener("keypress",(e)=>{
    if(e.key=="Enter"){
        EducationDetails()
        e.preventDefault();
    }
});
//education deatils








//form-catch



// function addAnother(){
//     let newNumber = document.createElement("tel");

//     let 
// }
