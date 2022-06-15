const burger = document.querySelector('.burger')
const header_navbar = document.querySelector('.navlinks')
const navbar = document.querySelector('.navbar')
burger.addEventListener('click' , () => {
    burger.classList.toggle('active');
    header_navbar.classList.toggle('active');
    navbar.classList.toggle('active')   
});




// ---------------------------------------------------------------------------//




const btn_nb = document.querySelector('.btn_themecolors_nb')
const body = document.body
const btn_nj = document.querySelector('.btn_tc')
const dark = 'dark_theme'
btn_nb.addEventListener('click', () => {
    body.classList.toggle(dark);
    btn_nj.classList.toggle(dark)

});
// colors shanchodecuba 
// var colors = ['red', 'blue', 'green', 'orange'];
// let btn_tc2 = document.querySelector('.btn_tc2')
// btn_tc2.addEventListener('click',() => {
//     var randomColor = colors [Math.floor(Math.random()*colors.length)]
//     let body = document.body;
//     body.style.background = randomColor;
// })




// function getRandomColor() {
//     var letters = '0123456789ABCDEF';
//     var color = '#';
//     for (var i = 0; i < 6; i++) {
//       color += letters[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   }



// function random_colors(string_length){
//     var random_string = '';
//     var characters = '0123456789ABCDEF';
//     for(var i , i = 0; i < string_length; i++){
//         random_string += characters.charAt(Math.floor(Math.random() * characters.length))
//     }
//     return random_string
// }

// my colors

// let btn_tc2 = document.querySelector('.btn_tc2')
// btn_tc2.addEventListener('click', () => {
//     var myArraycolors  = ['red' , 'blue', 'green', 'orange'];
//     const randColors  = Math.floor(Math.random()*myArraycolors.length);
//     const rValuecolors  = myArraycolors[randColors];
//     const body = document.body
//     body.style.background = rValuecolors;     
// });




let btn_tc2 = document.querySelector('.btn_tc2')
btn_tc2.addEventListener('click', () => {
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
      }
    const body = document.body
    body.style.background = getRandomColor();  
    body.style.color = getRandomColor();   
});






// const btn = document.querySelector('.btn_themecolors_nb2');

// btn.addEventListener('click', () => {
//         const clicked = false
//         function toggleBtn2Click(){
//         var nb = document.body
//         if(clicked) {
//         nb.style.color = '#FFFFFF';
//         nb.style.backgroundColor = '#010e18';
//         clicked = false
//         } else {
//         nb.style.color = '#FFFFFF';
//         nb.style.backgroundColor = '#010e18';
//         clicked = true
//         }
//         }   
//         })





// const btn_nb2 = document.querySelector('.btn_themecolors_nb2')
// btn_nb2.addEventListener('click', () => {
//     var nb = document.body
//     nb.style.color = '#FFFFFF';
//     nb.style.backgroundColor = '#010e18';
// })


 
// n = btn_nb2.addEventListener('click', () => {
//     var nb = document.body
//     nb.style.color = '#FFFFFF';
//     nb.style.backgroundColor = '#010e18';
// })

// b = btn_nb2.addEventListener('click', () => {
    
// })


// const btn_nb2 = document.querySelector('.btn_themecolors_nb2')

// if (n) {
    
// } else (b){

// }
    
// btn_nb2.addEventListener('click', () => {
//     if (n) {
        
//     } else (b){
//         var nb = document.body
//         nb.style.color = '#010e18';
//         nb.style.backgroundColor = '#FFFFFF';
//     }
// })


//---------------------------------------------------------------------------//


// FORMS //




let userfirstnameEL = document.forms.formNewsletter.firstname;
let userlastnameEL = document.forms.formNewsletter.lastname;
let useremailEL = document.forms.formNewsletter.email;
let checkboxEL = document.forms.formNewsletter.checkbox;
let form = document.querySelector(".newsletter");



const checkLastuserName = () => {

  let valid = false;

  const min = 3,
        max = 20;

  const userlastname = userlastnameEL.value.trim();

  if (!isEmpty(userlastname)){
    showError(userlastnameEL, "Veiller indiquer votre Nom");
  } else if (!isBetween(userlastname.length, min, max)){
    showError(userlastnameEL, `Votre Nom doit avoir entre ${min} et ${max} caractères.`);
  } else if(isBanned(userlastname)) { 
    showError( userlastnameEL, "Ce Nom n'ai pas autoriser.");
} else if(!isLetter(userlastname)) { 
  showError( userlastnameEL, 'Le Nom ne doit pas contenir de chiffres.');  
} else {
    showSuccess(userlastnameEL);
    valid = true;
}
return valid;
};

const checkFirstuserName = () => {

  let valid = false;

  const min = 3,
        max = 20;

  const userfirstname = userfirstnameEL.value.trim();

  if (!isEmpty(userfirstname)){
    showError(userfirstnameEL, "Veiller indiquer votre Prénom");
  } else if (!isBetween(userfirstname.length, min, max)){
    showError(userfirstnameEL, `Votre Prénom doit avoir entre ${min} et ${max} caractères.`);
  } else if(isBanned(userfirstname)) { 
    showError( userfirstnameEL, "Ce Prénom n'ai pas autoriser.");
  } else if(!isLetter(userfirstname)) { 
    showError( userfirstnameEL, 'Le Prénom ne doit pas contenir de chiffres.');
  } else {
    showSuccess(userfirstnameEL);
    valid = true;
}
return valid;
};

const checkEmailuser = () => {
  let valid = false;

  const useremail = useremailEL.value.trim();

  if (!isEmpty(useremail)){
      showError(useremailEL, "Veiller indiquer votre Email");
  }  else if (!isEmailValid(useremail)) {
    showError(useremailEL, "Email non valide");
  }  else if(isBanned(useremail)) { 
    showError(useremailEL, "Cette Email n'ai pas autoriser.");
  }  else {
    showSuccess(useremailEL);
    valid = true;
}
return valid;
};

const isBanned = (name) => {
    
  const re = /ROOT|Root|root|ADMIN|Admin|admin/;
  return re.test(name);
} ;

const isEmpty = (value) => (value === "" ? false : true);

const isBetween = (length, min, max) => length < min || length > max ? false : true; 

const isLetter = (name) =>{
  const re = /^[A-Za-z]+$/;
  return re.test(name);
  
} ;

const isEmailValid = (email) => {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email); 
};

const showError = (input, message) => {

  const formField = input.parentElement;

  formField.classList.remove("success");
  formField.classList.add("error");
  
  
  const error = formField.querySelector("small");
  error.textContent = message;
};

const showSuccess = (input) => {

  const formField = input.parentElement;

  formField.classList.remove("error");
  formField.classList.add("success");
  
  
  const error = formField.querySelector("small");
  error.textContent = "";
};




let btn_sub = document.querySelector("button.btn_sub")
btn_sub.addEventListener('click' , () => {

    form.addEventListener("submit", function (e) {
  // empécher l'envois du formulaire
  e.preventDefault();

  // validation des champs
  let isFirstuserNamevalid = checkFirstuserName(),
      isLastuserNamevalid = checkLastuserName(),
      isEmailuserValid = checkEmailuser();
      
  let isFormValid =
      isFirstuserNamevalid &&
      isLastuserNamevalid &&
      isEmailuserValid;

  
  // soumettre le formulaire si tout est valide
  if (isFormValid) {
    btn_sub.innerHTML = "Validé";
    btn_sub.style.background = "#28a745";
    

  }
});
  
});



