
// event

// function
function animatedForm(){
    const arrows =document.querySelectorAll(".fa-arrow-down")
    console.log(arrows)
    arrows.forEach(arrow=>{
        arrow.addEventListener("click",()=>{
            const input=arrow.previousElementSibling;
            const parent=arrow.parentElement;
            const nexForm=parent.nextElementSibling;
            console.log("input",nexForm)

            // Check for validation
            if(input.type==="text" && validateUser(input)){
                nexSlide(parent,nexForm);
            }
            else if(input.type==='email' && validateEmail(input)){
                nexSlide(parent,nexForm);
            }
            else if(input.type==='password' && validateUser(input)){
                nexSlide(parent,nexForm);
            }
            else{
                parent.style.animation="shake 0.5s ease"
            }
            parent.addEventListener('animationend',()=>{
                parent.style.animation=""
            })
        })
    })
}
// function valide User
function validateUser(user){
    if(user.value.length<6){
        console.log('not enough caractors ')
        error("rgb(189,87,87")
    
    }
    else {
        error("rgb(87,189,130)")
      
        return true
        
    }
}
// validation email
function validateEmail(email){
    const validation=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test((email.value))){
        error("rgb(87,189,130)");
        return true
    }
    else{
        error("rgb(189,87,87")
    }
}
// NextSlide
function nexSlide(parent,nexForm){
    parent.classList.add("innactive");
    parent.classList.remove("active");
    nexForm.classList.add('active');
}
// function error
function error(color){
document.body.style.backgroundColor=color;
}
// appel func
animatedForm()