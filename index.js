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


//leftside btn logic
let editbtn = document.querySelector(".edit");
console.log(editbtn);
let leftside = document.querySelector(".left");
editbtn.addEventListener("click",()=> {
    if(leftside.style.display==="block"){
    leftside.style.display = "none";
    }else{
        leftside.style.display="block";
    }
});

//leftside btn logic


//tools btn logic
let toolsbtn = document.querySelector(".tools");
let tools = document.querySelector(".tools-div");
toolsbtn.addEventListener("click",()=>{
    if(tools.style.display==="block"){
    tools.style.display="none";
    }else{
        tools.style.display="block";
    }
}); 
//tools btn logic
