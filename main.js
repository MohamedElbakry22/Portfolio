let menu = document.querySelector(".menu");
let bars = document.querySelector(".bars");
let closemenu = document.querySelector(".close-menu");
bars.addEventListener("click", () => {
    menu.style.display="block";
    setTimeout(()=>{
      if(window.innerWidth>450){
        menu.style.width = "340px";
      }else{
        menu.style.width = "100%";
      }
    },0)
  
});
closemenu.addEventListener("click", () => {
  menu.style.width = "0";
  setTimeout(()=>{
    menu.style.display="none";
  },500)
});

