# React-Redux Weather Forecast App

Don't ever manipulate `state` directly: NO this.state = something or state.push()

## Challenges

1 Figure out a way to make "ajax" requests with Redux (Not from React components)
2 Figure out how to do the charts with third party library
3 how to deal with redux app where state changes signifcantly over time

### Controlled Field/Component

Controlled field is a form element where the value of the input is set by the state of component, not the other way around.

### React-Redux Middleware

Functions that let actions pass, manipulate them, log them or stops them
Can have many types, steps, etc., but all just functions actions apss through before hitting reducer

Actions Flows enters middlewares, in this case Redux-Promise middleware
Does the action have a promise as a payload?
YES:
  Stop this action
  After Promise resolves, create a new action and send it to reducer
NO:
  Let it go through

### Wrap-up

- Lots of Redux. Used Action Creator (fetchWeather) that had a constant for the action type FETCH_WETCH, which cut down on the ability for us to make typos.
- Middlewares: Used redux-promise to handle a promise we received using axios and we used axios to make ajax request. Middleware automatically detected that we provided a payload of a promise, stopped it and then waited for the promise to resolved. Once resolved, took data coming back from req, stuck it on payload property and sent it to all reducers.
- Covered reducers, specifically avoiding mutating state. NEVER WANT TO DO state.weather.push() or state = something. Instead we want to return a new object that takes place of existing state. For an array, we used desctructuring of an existing array with spread operator - take an existing array, "flatten it out" and create a new one.
- Covered sparklines and google maps API. In future try react-google-maps with GoogleMapLoader and GoogleMap
