const userConstants = '../constants/userConstants'

const registration = (state = {}, action) =>{
    switch(action.type){
        case userConstants.SIGNUP_REQEUST:
            return {registering: true}
        case userConstants.SIGNUP_FAILURE:
            return {}
    }

}