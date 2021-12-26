const body = document.querySelector("body");
const toggler = document.querySelector(".toggler");
const navbar_list = document.querySelector(".navbar-list");

function check_size() {
     if(window.screen.width>=900){
          navbar_list.style.right = "-100vw"; 
          removeEventListener("resize",check_size)
          toggler.classList.remove("toggler-enabled");
     }
}
toggler.addEventListener("click",()=>{
     if(navbar_list.style.right == '0px'){
          navbar_list.style.right = "-100vw";  
          body.classList.remove("toggler-enabled");
     } else{ 
          navbar_list.style.right = "0";
          body.classList.add("toggler-enabled");
          window.addEventListener("resize",check_size);
     }
})

