const form=document.getElementById("form");
const inputField=document.getElementById("username")
const inputErrorMsg=document.querySelector(".input-error-msg")

const emailField=document.getElementById("useremail");
const emailErrorMsg=document.querySelector(".mail-error-msg");


const userpasswordField=document.getElementById("userpassword");
const passwordErrorMsg=document.querySelector(".password-error-msg");


const confirmpasswordField=document.getElementById("confirmpassword");
const confirmpasswordErrorMsg=document.querySelector(".confirm-password-error-msg");


const obj={
    username:'',
    usermail:"",
    userpassword:"",
    userconfirmpassword:"",
    userdob:"",
    gender:"",
    country:""

}






inputField.addEventListener("change",(event)=>{
    var alphanumericRegex = /^[a-zA-Z0-9]+$/;
    const cond=alphanumericRegex.test(event.target.value)
    console.log(cond)
    console.log(event.target.value)
    if(((event.target.value).length>=5 && (event.target.value.length)<=15) && cond){
        inputErrorMsg.textContent=`thank you for enter your name`;
        inputErrorMsg.style.color='green';
        inputErrorMsg.style.borderColor="green";
    }else{
        console.log("entered")
        inputErrorMsg.textContent=`Please enter validname name contains alphanumerics only`;
        inputErrorMsg.style.color='red';
        inputErrorMsg.style.borderColor='red';
    }

})




function errorOrSuccess(field,errorEle){
    field.addEventListener("blur",(event)=>{
        if(event.target.value==="" ){
            errorEle.textContent=`Please enter your ${event.target.name}`;
            errorEle.style.color='red';
            errorEle.style.borderColor='red';
        }else if(field===confirmpasswordField){
            if(userpasswordField.value===confirmpasswordField.value){
                errorEle.textContent=`your password is Matched`;
                errorEle.style.color='green';
             errorEle.style.borderColor="green";
            }else{
                errorEle.textContent=`your password is not matched`;
                errorEle.style.color='red';
                errorEle.style.borderColor='red';
            }
        }
        
        else {
            errorEle.textContent=`thank you for enter your ${event.target.name}`;
            errorEle.style.color='green';
            errorEle.style.borderColor="green";
        }
    })    

}

errorOrSuccess(inputField,inputErrorMsg);
errorOrSuccess(emailField,emailErrorMsg);
errorOrSuccess(userpasswordField,passwordErrorMsg);
errorOrSuccess(confirmpasswordField,confirmpasswordErrorMsg);


var dob = document.getElementById('dateofbirth')
dob.addEventListener("change",
        function validateAge() {
            var dob = document.getElementById('dateofbirth').value;
            var dobDate = new Date(dob);
            var today = new Date();
            var age = today.getFullYear() - dobDate.getFullYear();

            if (age < 18) {
                document.querySelector(".dob-error-msg").textContent="You must be at least 18 years old to register.";
                document.querySelector(".dob-error-msg").style.color="red";
                return false;
            }else{
               document.querySelector(".dob-error-msg").textContent="Thankyou"
               document.querySelector(".dob-error-msg").style.color="green";
            }

            return true;
})

userpasswordField.addEventListener("change",
function validatePassword(event) {
   
    var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const cond= passwordRegex.test(event.target.value);

    if (!cond) {
        passwordErrorMsg.textContent = 'Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and special characters.';
        passwordErrorMsg.style.color="red";
        //event.preventDefault();
      } else {
        passwordErrorMsg.textContent = ''; // Clear any previous error messages
        passwordErrorMsg.style.color="green"
      }
  }
)






const belowcontainer=document.querySelector(".belowcontainer")


function render(obj){
    const {username,usermail,country,gender,userconfirmpassword,userdob,userpassword}=obj

    const name=document.createElement("p");
    name.textContent="username: "+username;
    belowcontainer.appendChild(name);

    const mail=document.createElement("p");
    mail.textContent="usermail :"+usermail;
    belowcontainer.appendChild(mail);

    const password=document.createElement("p");
    password.textContent="userpassword: "+userpassword;
    belowcontainer.appendChild(password);

    const confirmpass=document.createElement("p");
    confirmpass.textContent="confirmPassword: "+userconfirmpassword;
    belowcontainer.appendChild(confirmpass);

    const DateOfbirth=document.createElement("p");
    DateOfbirth.textContent="user date of birth: "+userdob;
    belowcontainer.appendChild(DateOfbirth);

    const usercountry=document.createElement("p");
    usercountry.textContent="user country :"+country;
    belowcontainer.appendChild(usercountry);

    const usergender=document.createElement("p");
    usergender.textContent="user gender :"+gender;
    belowcontainer.appendChild(usergender);



}

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    obj.username=inputField.value;
    obj.usermail=emailField.value;
    obj.userpassword=userpasswordField.value;
    obj.userconfirmpassword=confirmpasswordField.value;
    obj.userdob=dob.value;
    obj.country=document.getElementById("Countries").value;
    if(document.getElementById("male").checked===true){
        obj.gender="male"
    }else if (document.getElementById("female").checked===true){
        obj.gender="female"
    }else{
        obj.gender="others"
    }
    belowcontainer.style.display="flex"

    render(obj)
})