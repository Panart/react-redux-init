import { CHANGE_LOGIN, } from 'ActionsTypes'

export default function(state = {
  login: ''
}, action) {

  switch (action.type) {

    case CHANGE_LOGIN:
      return {
        login: action.login
      }

    default:
      return state

  }
  
}