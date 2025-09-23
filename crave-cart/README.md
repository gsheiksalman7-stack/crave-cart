# Crave Cart food ordering app
 Header
  - Logo
  - Nav items
 Body 
  - Saerch
  - Restaurant Container
    -Restaurant Card
      - Img
      - Restauarant name,Star ratings,Cuisine,Delivery Time
  - Restaurant items
  - ItemList
  - Cart   
 Footer
  - Copyrights
  - Links
  - Address
  - Contact

# Types of imports and exports
 - Default imports and exports
 - named imports and exports

# Hooks
 - useState(super powerful state variables)
  - whenever the state variable updates react re-renders its component
 - UseEffect  

# 2 types of Routing
 - Client side Routing(used with react router) 
 - Server Side Routing(fetches the pages from server)

# making components smaller pieces also known as
 - code splitting
 - chunking
 - dynamic bundling 

 -lazy loading is aslso known as on-demand loading and dynamic import
 
# React Lifecycle Methods
 - REACT LIFE CYCLE - when the parent class component has nested child class components
 - RENDER PHASE -1ST (Mounting the component and renders)

 - PARENT constructor called
 - PARENT render calls (inside the render 2 child class components)

  - CHILD-1 constructor called
  - CHILD-1 render called (inside the render 1 child class components)

   - CHILD-1's CHILD constructor called
   -CHILD-1's CHILD render called

  -CHILD-2 constructor called
  -CHILD-2 render called

  (reconcilation process starts - diff algorithm finds difference between two child components)

COMMIT PHASE -2ND (Updates the DOM - DOM Manipulation and calls componentdidmount)
  - CHILD-1's CHILD componentdidmount called (its first priority is starting from deeper level)
  - CHILD-1 ComponentdidMount called
  - CHILD-2 ComponentdidMount called
  - PARENT ComponentdidMount called

# Component life cycle methods

--MOUNTING--
 - constructor called(state with dummy data)
 - render happens(updates ui with dummy data)
 - componentdidmount called
 - API call made 

--UPDATE--
 - Re-render happens with API data(updates the state with setState)
 - componentdidupdate called

--UNMOUNT--
 - component willunmount called  

# Redux Toolkit
  -Writing data
  - click an add button
  - dispatches action
  - calls a reducer function
  - modifies the slice of the cart store internally
 -Reading data 
  - selector read data and displays in the requiring component
  - subscribing the store means the required component is subscribed to the store using selector
 -STEPS:
  - installing @reduxjs/toolkit and react redux
  - build our stor
  - connect to our store
  - creating a slice (cart)
  - dipatches a action
  - selector 

 MUTATING THE STATE 
  vanilla(older) redux - you Must dont mutate the state and returning the state was mandatory
  - const newstate=[...state]
  - newState.items.push(action.payload)
  - return newState
  Redux Toolkit - We must have to Mutate The State and do not return the state
  - state.items.push(action.payload) 
  - it uses a library called immer js
  - it finds the diff between the two states and updates it

# Optimization
  - Added Pagination Method
  - Added Lazy Loading Method for Restaurant Menu Loading   

# Types of Testing
 - unit testing
 - integration testing
 - end to end testing(E2E testing)
 - react testing library needs jest library also   

# Setting up the testing library
 - install react testing library
 - intall jest library 
 - install dev dependencies (if we use babel)
 - configure babel
 - configure parcel config file to disable babel transpilation
 - install jest config (npx jest --init)
 - install jsdom library
 - install @babel/preset-react to support and make work with jsx
 - include  @babel/preset-react inside the babel config
 - npm install -D @testing-library/jest-dom and import it