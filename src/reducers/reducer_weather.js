import { FETCH_WEATHER } from '../actions/index'

export default function(state = [], action) {
  console.log('Action received:', action)

  switch (action.type) {
    case FETCH_WEATHER:

    //Need to avoid state mutation in reducers as well. concat() method merges two arrays and returns a new one
    // return state.concat([action.payload.data])
    return [action.payload.data, ...state]
    //^spread operator does very similar thing, detects and array and adds to it
  }
}