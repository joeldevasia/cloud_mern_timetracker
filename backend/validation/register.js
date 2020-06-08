const Validator =   require("Validator");
const isEmpty   =   require("is-empty");

module.exports  =   function validateRegisterInput(data){
    let errors  =   {};

    //Converting the Empty fields to Empty Strings so We can run Validator
    data.name   =   !isEmpty(data.name) ? data.name : "";
    data.email  =   !isEmpty(data.email) ? data.email : "";
    data.password   =   !isEmpty(data.password) ? data.password : "";

    //Validate Name
    if(Validator.isEmpty(data.name)){
        errors.name="Name Field can't be Empty!";
    }

    //Validate Email
    if(Validator.isEmpty(data.email)){
        errors.email="Email Can't be Empty!";
    }else if(!Validator.isEmail(data.email)){
        errors.email="Invalid Email Format!";
    }

    //Validate Password
    if(Validator.isEmpty(data.password)){
        errors.password="Password can't be Empty!";
    }

    //Validate Password for Length
    if(Validator.isLength(data.password,{min:6,max:30})){
        errors.password="Password must be atleast 6 characters!"
    }

    return{
        errors,
        isValid:isEmpty(errors)
    };
};