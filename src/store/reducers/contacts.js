import {
  ACTION_FETCH_CONTACT,
  ACTION_ADD_CONTACT,
  ACTION_DELETE_CONTACT
} from '../actions/contacts'

const initialstate = {
  contacts: []
}

export default function rootReducer(state = initialstate, { type, payload }) {
  switch (type) {
    case ACTION_FETCH_CONTACT:
      console.log(payload)
      return {
        ...state,
        contacts: payload
      }
    case ACTION_ADD_CONTACT:
      return {
        ...state,
        contacts: [
          ...state.contacts,
          payload
        ]
      }
    case ACTION_DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((item) => item.id !== payload)
      }
    default:
      return state
  }
}