### REACT QUERY

What?

# A library for fetching data in a React application

Why?

1. Since React is a Ul library, there is no specific pattern for data fetching
2. useEffect hook for data fetching and useState hook to maintain component state like loadin
   error or resulting data
3. If the data is needed throughout the app, we tend to use state management libraries
4. Most of the state management libraries are good for working with client state.
   Ex: 'theme' for the application / whether a modal is open
5. State management libraries are not great for working with asynchronous or server state

Client state :

Persisted in your app memory and accessing or updating it is synchronous

Server state:

Persisted remotely and requires asynchronous APIs for fetching or updating
Has shared ownership
Data can be updated by someone else without your knowledge
UI data may not be in sync with the remote data
Challenging when you have to deal with caching, deduping multiple requests for the same data,
updating stale data in the background, performance optimizations etc

https://bobbyhadz.com/blog/react-state-types#:~:text=%23%20Server%20State&text=It%20decreases%20the%20load%20on,users%20at%20the%20same%20time).
