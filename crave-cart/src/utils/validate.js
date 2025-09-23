export const checkValidData=(email,password,fullName)=>{
    const emailValidation=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    const passwordValidation=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/.test(password)
    const fullNameValidation=/^[a-zA-Z\s]+$/.test(fullName)
    
    if(!emailValidation) return 'Email is not Valid'
    if(!passwordValidation) return 'Password is not Valid'
    if(!fullNameValidation) return 'fullName is not Valid'
}