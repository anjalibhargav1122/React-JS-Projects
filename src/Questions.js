export let data = [{
    id: 1,
    qes: ' What is the purpose of the useState hook in React?',
    ans: 'The useState hook is used in React functional components to add state variables to the component s scope, enabling it to manage and update its state.'
},
{
    id: 2,
    qes: ' How do you declare a state variable using useState hook?',
    ans: 'You declare a state variable using the useState hook by calling it with the initial state value as an argument, like this:` const [state, setState] = useState(initialState);`.'
},
{
    id: 3,
    qes: ' Can you use multiple state variables with useState hook in a single component?',
    ans: 'Yes, you can use multiple useState hooks to declare multiple state variables in a single component, allowing you to manage different aspects of the component s state independently.'
},
{
    id: 4,
    qes: ' How do you update the state variable using useState hook?',
    ans: 'To update the state variable declared with useState hook, you call the setter function returned by useState, passing the new state value as an argument, like this: ` setState(newValue);`.'
},
{
    id: 5,
    qes: ' Is it possible to pass a function to setState in useState hook?',
    ans: 'Yes, you can pass a function to setState in the useState hook. This function receives the previous state value as an argument and returns the new state value, ensuring the correct state update, especially when the new state depends on the previous state.'
}];
