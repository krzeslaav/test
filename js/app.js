const body = document.querySelector("body");
const toggler = document.querySelector(".toggler");
const navbar = document.querySelector(".navbar")
const navbar_list = document.querySelector(".navbar-list");
const btnCss = document.querySelector(".styl")

function check_size() {
     if(window.screen.width>=900){
          navbar_list.style.right = "-100vw"; 
          removeEventListener("resize",check_size)
          toggler.classList.remove("toggler-enabled");
          document.querySelector(".menu-btn").classList.remove("open")
          // toggler.style.display = "none";
     }
     

}
toggler.addEventListener("click",()=>{
     if(navbar_list.style.right == '0px'){
          navbar_list.style.right = "-100vw";  
          body.classList.remove("toggler-enabled");
          document.querySelector(".menu-btn").classList.remove("open")

          // toggler.style.display = "none";

     } else{ 
          navbar_list.style.right = "0";
          body.classList.add("toggler-enabled");
          document.querySelector(".menu-btn").classList.add("open")

          // style_change.style.display = "block";
          window.addEventListener("resize",check_size);
          // toggler.style.display = "none";

     }
})



//HIDE NAVBAR WHEN SCROLLING
let lastScroll = 0;
window.addEventListener("scroll",()=>{
     const currentScroll = window.pageYOffset;
     if(currentScroll > lastScroll && !navbar.classList.contains("scroll-down")){
          navbar.classList.remove("scroll-up")
          navbar.classList.add("scroll-down")
     }
     if(currentScroll < lastScroll && navbar.classList.contains("scroll-down")){
          navbar.classList.remove("scroll-down",currentScroll)
          navbar.classList.add("scroll-up")
     }
     lastScroll = currentScroll;
})
//CHANGE CSS COLOURS
let tryb = 0;
btnCss.addEventListener("click",(e)=>{
     if(tryb ==0){
          document.getElementById("page_colors").setAttribute("href","./style/mode_side.css")
          document.getElementById("switch").setAttribute("src","./media/off.png")
          tryb = 1;
         
     } else{
          document.getElementById("page_colors").setAttribute("href","./style/mode_main.css")
          document.getElementById("switch").setAttribute("src","./media/on.png")
          tryb = 0;

     }
})
//update