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
    if(leftside.style.visibility==="visible"){
    leftside.style.visibility = "hidden";
    }else{
        leftside.style.visibility="visible";
    }
});

//leftside btn logic


//tools btn logic
let toolsbtn = document.querySelector(".tools");
toolsbtn.addEventListener("click",() => {
    leftside.style.visibility="hidden";
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
    jdtarget.innerHTML = `<div style="height:100%; width:100%; font-size:13px">${jdpull.value}</div>`
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
let addstreet = document.getElementById("address");
let addcountry=document.getElementById("country")
let addcity=document.getElementById("city")
let addtarget = document.querySelector(".address1");

function addUpdate(){

    addtarget.innerHTML += `<div>${addcity.value}</div>`
    addtarget.innerHTML += `<div>${addcountry.value}</div>`
    addtarget.innerHTML += `<div>${addstreet.value}</div>`
    
}

addstreet.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        addUpdate();
        e.preventDefault();
    }
});
addcountry.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        addUpdate();
        e.preventDefault();
    }
});
addcity.addEventListener("keypress",(e)=>{
    if(e.key == "Enter"){
        addUpdate();
        e.preventDefault();
    }
});

//address logic

//form-catch



//print logic
let print = document.querySelector(".print");
let rightSide = document.querySelector(".resume");
let printpage = () =>{
    html2pdf().from(rightSide).save();
};

print.addEventListener("click",printpage);





function addInformationToResume(){
    alert()
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
let changeBackGround=document.querySelector(".resume")

document.getElementById("c0").addEventListener("click",function(){
    for(let i=0;i<changeColor1.length;i++){
    changeColor1[i].style.background="blue"
    changeColor2[i].style.background="blue"
    changeBackGround.style.background="skyblue"
    document.querySelector(".circle1").style.background="rgb(141, 141, 9)"
    document.querySelector(".circle2").style.background="red"
    document.querySelector(".circle3").style.background="tomato"
    document.querySelector(".circle4").style.background="orangered"
    document.querySelector(".circle5").style.background="orange"    
}
})
document.getElementById("c1").addEventListener("click",function(){
    for(let i=0;i<changeColor1.length;i++){
        changeColor1[i].style.background="yellow"
        changeColor2[i].style.background="yellow"
        changeBackGround.style.background="lightyellow"
        document.querySelector(".circle1").style.background="rgb(141, 141, 9)"
        document.querySelector(".circle2").style.background="blue"
        document.querySelector(".circle3").style.background="cadetblue"
        document.querySelector(".circle4").style.background="skyblue"
        document.querySelector(".circle5").style.background="rgb(43, 220, 226)"    
    }  
})
document.getElementById("c2").addEventListener("click",function(){
    for(let i=0;i<changeColor1.length;i++){
        changeColor1[i].style.background="red"
        changeColor2[i].style.background="red"
        changeBackGround.style.background="tomato"    
        document.querySelector(".circle1").style.background="red"
        document.querySelector(".circle2").style.background="yellow"
        document.querySelector(".circle3").style.background="rgb(221,221,50)"
        document.querySelector(".circle4").style.background="rgb(252,252,120)"
        document.querySelector(".circle5").style.background="yellowgreen"
    } 
})
document.getElementById("c3").addEventListener("click",function(){
    for(let i=0;i<changeColor1.length;i++){
        changeColor1[i].style.background="greenyellow"
        changeColor2[i].style.background="greenyellow"
        changeBackGround.style.background="rgb(207, 230, 173)" 
        document.querySelector(".circle1").style.background="green"
        document.querySelector(".circle2").style.background="blue"
        document.querySelector(".circle3").style.background="rgb(31,211,31)"
        document.querySelector(".circle4").style.background="rgb(111,199,111)"
        document.querySelector(".circle5").style.background="rgb(171,224,171)"   
    }
})
document.getElementById("c4").addEventListener("click",function(){
    for(let i=0;i<changeColor1.length;i++){
        changeColor1[i].style.background="hotpink"
        changeColor2[i].style.background="hotpink"
        changeBackGround.style.background="lightpink"
        document.querySelector(".circle1").style.background=" rgb(126, 5, 55)"
        document.querySelector(".circle2").style.background="blue"
        document.querySelector(".circle3").style.background="tomato"
        document.querySelector(".circle4").style.background="palevioletred"
        document.querySelector(".circle5").style.background="rgb(244,144,284)"    
    }
})
document.getElementById("c5").addEventListener("click",function(){
    for(let i=0;i<changeColor1.length;i++){
        changeColor1[i].style.background="magneta"
        changeColor2[i].style.background="magneta"
        changeBackGround.style.background="lightcoral" 
        document.querySelector(".circle1").style.background=" rgb(126, 5, 55)"
        document.querySelector(".circle2").style.background="blue"
        document.querySelector(".circle3").style.background="tomato"
        document.querySelector(".circle4").style.background="rgb(104, 104, 21)"
        document.querySelector(".circle5").style.background="rgb(192,59,114)"   
    }
})
document.getElementById("c6").addEventListener("click",function(){
    for(let i=0;i<changeColor1.length;i++){
        changeColor1[i].style.background="midnightblue"
        changeColor2[i].style.background="midnightblue"
        changeBackGround.style.background="cadetblue"    
        document.querySelector(".circle1").style.background="darkblue"
        document.querySelector(".circle2").style.background="red"
        document.querySelector(".circle3").style.background="skyblue"
        document.querySelector(".circle4").style.background="cadetblue"
        document.querySelector(".circle5").style.background="blue"
    }
})
document.getElementById("c7").addEventListener("click",function(){
    for(let i=0;i<changeColor1.length;i++){
        changeColor1[i].style.background="rgb(116,116,14)"
        changeColor2[i].style.background="rgb(116,116,14)"
        changeBackGround.style.background="wheat"
        document.querySelector(".circle1").style.background="rgb(141, 141, 9)"
        document.querySelector(".circle2").style.background="blue"
        document.querySelector(".circle3").style.background="red"
        document.querySelector(".circle4").style.background="rgb(104, 104, 21)"
        document.querySelector(".circle5").style.background="rgb(71,71,10)"
    }
})


    
