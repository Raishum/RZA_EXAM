function Validatiion(values){
    // alert('')

    // Check that email and password meet the validation 
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    // Error messages
    if(values.name === "") {
        error.name = "Name should not be empty"
    }
    else {
        error.name = ""
    }

    // age validation 
    if(values.age === "") {
        error.age = "Age should not be empty"
    }
    else {
        error.age = ""
    }

    // number Validatiion
    if(values.number === "") {
        error.number = "Number should not be empty"
    }
    else {
        error.number = ""
    }


    // cvv number 
    if(values.cvv === "") {
        error.cvv = "Cvv should not be empty"
    }
    else {
        error.cvv = ""
    }

    // email validation
    if(values.email === "") {
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    }else {
        error.email = ""
    }

    // password Validatiion
    if(values.password === "") {
        error.password = "Password should not be empty"
    }
    // test that password meets the values 
    else if(!password_pattern.test(values.password)) {
        error.password = "Password Didn't match"
    }else {
        error.password = ""
    }
    return error;
}

export default Validatiion;