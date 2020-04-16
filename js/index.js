 // console.log();
    const ipad = window.matchMedia('screen and (max-width:768px)');
    const menu = document.querySelector(".menu");
    console.log(menu);
    const burgerButton = document.querySelector("#burger-menu");
    console.log(burgerButton)


    ipad.addListener(validation)

      function validation(event){
        if (event.matches){
        burgerButton.addEventListener('click', hideShow);
        } else{
        burgerButton.removeEventListener('click', hideShow);
        }
        console.log(event)
      }

      function hideShow(){
        if(menu.classList.contains("is-active")){
        menu.classList.remove("is-active")
    } else{
        menu.classList.add("is-active");
        }
      }