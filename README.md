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
