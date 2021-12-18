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
let about = document.querySelector("#aboutme");
let aboutTar = document.querySelector(".aboutme-description");
function aboutUpdate(){
    aboutTar.innerHTML = `<div style="font-size:12px; padding-top:8px;">${about.value}</div>`
}

about.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        aboutUpdate();
    }
});
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
    eduSchool.innerHTML = `<div class="jsdivEdu"><h4>${schoolName.value}</h4></div>
                             <div class="jsdivEdu">${cityOfSchool.value},${country1.value}</div>
                             <div class="jsdivEdu"><p>${btech.value}</p>${graduationDate.value}</div>`
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

//Intersets

let intr = document.getElementById("interests");
let intrtarget = document.querySelector(".interests-description");

function intrUpdate(){
    intrtarget.innerHTML += `<li style="font-size:15px; padding-top:10px;">${intr.value}</li>`
}

intr.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        intrUpdate();
        e.preventDefault();
    }
});
//Intersets

//JD Update

let jdtarget = document.querySelector(".job-description-value");
let jdpull = document.querySelector("#job-description");
console.log(jdtarget);

function jdUpdate(){
    jdtarget.innerHTML = `<div style="height:100%; width:100%;">${jdpull.value}</div>`
}

jdpull.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        jdUpdate();
        e.preventDefault();
    }
});

//JD Update


//Experience 
let expselect = document.getElementById("exp");
let exptarget = document.querySelector(".experience-description");

function expUpdate(){
    exptarget.innerHTML += `<li style ="font-size:15px; padding:5px;">${expselect.value}</li>`
}

expselect.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        expUpdate();
        e.preventDefault();
    }
});
//Experience

//address logic
let add = document.getElementById("address");
let addtarget = document.querySelector(".address1");

function addUpdate(){
    addtarget.innerText = add.value;
}

add.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        addUpdate();
        e.preventDefault();
    }
});

//address logic

//form-catch



//print logic
let print = document.querySelector(".print");
let rightSide = document.querySelector(".right");
let printpage = () =>{
    html2pdf().from(rightSide).save();
};

print.addEventListener("click",printpage);

//print logic


// function addAnother(){
//     let newNumber = document.createElement("tel");

//     let 
// }

//skills update
let skills = document.querySelectorAll("#skill");

let skillstarget = document.querySelectorAll(".skills");

function skillUpdate(){
    for(let i=0;i<skills.length;i++){
    skillstarget[i].innerHTML = `<div>${skills[i].value}</div>`
    }
}

skills.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        skillUpdate();
        e.preventDefault();
    }
});


//skills update



function addInformationToResume(){
  nameupdate()
  emailUpdate()
  jdUpdate()
  expUpdate()
  intrUpdate()
  aboutUpdate()
  EducationDetails()
  numberUpdate()
  addUpdate()
}
let submitresume=document.querySelector("#submitresume");
submitresume.addEventListener("click",addInformationToResume)

let changeColor1=document.querySelectorAll(".subheading1")
let changeColor2=document.querySelectorAll(".subheading2")
let colorchangeHeading=["blue","yellow","red","greenyellow","hotpink","magneta","midnightblue"]
let colorchangeBackground=["skyblue","lightyellow","tomato","rgb(207, 230, 173)","lightpink","lightcoral","cadetblue"]

function changeColorOfResume(e) {
    for(let i=0;i<changeColor1.length;i++){
        console.log("hello");
        changeColor1[i].style.background = colorchangeHeading[e];
        changeColor2[i].style.background = colorchangeHeading[e];
        document.querySelector(".resume").style.background=colorchangeBackground[e]
    }
};


document.getElementById("c0").addEventListener("click",changeColorOfResume(0))
document.getElementById("c1").addEventListener("click",changeColorOfResume(1))
document.getElementById("c2").addEventListener("click",changeColorOfResume(2))
document.getElementById("c3").addEventListener("click",changeColorOfResume(3))
document.getElementById("c4").addEventListener("click",changeColorOfResume(4))
document.getElementById("c5").addEventListener("click",changeColorOfResume(5))
document.getElementById("c6").addEventListener("click",changeColorOfResume(6))


function changefontstyle(){
    alert()
    document.querySelector("*").style.fontStyle="cursive"
}
document.querySelector("#cursive").addEventListener("click",changefontstyle)
    
