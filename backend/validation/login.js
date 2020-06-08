const Validator =   require ("validator");
const isEmpty   =   require("is-empty");

module.exports = function validateLoginInput(data){
    let errors={};

    //Convert Empty fields into strings for running Validator
    data.email      =   !isEmpty(data.email)    ?   data.email  :   "";
    data.password   =   !isEmpty(data.password) ?   data.password:  "";

    //Validate Email
    if(Validator.isEmpty(data.email)){
        errors.email    =   "Email Field Can't be Empty";        
    }   else if(!Validator.isEmail(data.email)){
        errors.email    =   "Email is Invalid";
    }

    //Validate Password
    if(Validator.isEmpty(data.password)){
        errors.password =   "Password Field can't be Empty";
    }

    return{
        errors,
        isValid :   isEmpty(errors)
    };

};