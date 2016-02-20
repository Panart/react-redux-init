import expect from 'expect'
import * as actions from 'Actions'
import * as types from 'ActionTypes'

describe('actions', () => {
  it('should create an action to change login', () => {
    const login = 'login'
    const expectedAction = {
      type: types.CHANGE_LOGIN,
      login
    }
    expect(actions.changeLogin(login)).toEqual(expectedAction)
  })
})