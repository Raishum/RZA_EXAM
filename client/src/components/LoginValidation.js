function Validatiion(values){
    // alert('')

    // Validatiion check that password and email mach the Validatiion
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/


    // Error message that will hsow if not correct 
    if(values.email === "") {
        error.email = "Name should not be empty"
    }
    else if(!email_pattern.test(values.email)) {
        error.email = "Email Didn't match"
    }else {
        error.email = ""
    }

    // Password validation
    if(values.password === "") {
        error.password = "Password should not be empty"
    }

    // If the password didnot mach the validation then diplay error message 
    else if(!password_pattern.test(values.password)) {
        error.password = "Password Didn't match. Needs 1 Cap, 8 characters and 1 numerical value"
    }else {
        error.password = ""
    }
    return error;
}

export default Validatiion;