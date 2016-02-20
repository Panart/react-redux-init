import * as types from 'ActionsTypes'

export function changeLogin(login) {
  return {
    type: types.CHANGE_LOGIN,
    login: login
  }
}