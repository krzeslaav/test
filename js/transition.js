window.onload = ()=>{
     const transition_en = document.querySelector(".transition")
     const links = document.querySelectorAll("a");
     setTimeout(()=>{
          transition_en.classList.remove("is-active")
     }, 500)
     for(let i=0;i< links.length;i++){
          const link = links[i];
          link.addEventListener("click",(e)=>{
               e.preventDefault();
               let target = e.target.href;
               console.log(target)
               transition_en.classList.add("is-active");
               setTimeout(()=>{
                    window.location.href = target;
               },500)
          })
     }
}
