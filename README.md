# State Management in Front-End apps

- - -

## What happens without state?😵

## What is a state?

Usually when we mention state, we refer to the variables that tend to change over time and once changed those values updates are reflected on UI at run time. For this purpose States came into existence. 🥳

## But why state 🤔???

- ### [is this a solution?](./src/components/cases/case2.jsx)😓

  As we saw in [case 2](./src/components/cases/case2.jsx) we were able to increment the counter value and reflect changes on the UI without using a state, right? So you are wondering what is the point of using states if we can achieve the functionality of states. Well, it is about how much effort needed to update the values in normal method, also the performance needed.

- ### What do you think of code in [case 3](./src/components/cases/case3.jsx) 😁

  Amazing right? Lolz 😂

- ### Let's take a look at [case 4](./src/components/cases/case4.jsx)

  So you started getting to know more about how we can leverage states, isn't this great😁

- ### Exercise
  
  - Click [here to go to your exercise](./src/components/exercise.jsx)

  - <b>Requirements</b>
      Your client is a a service provider who provides different service for their customers, so they asked you to build a form to receive feedback from their customers to improve the service quality. They requested their form to be as follows:
    - Form Fields are
      - Name (Should enter at least first name)
      - Email (Email validation setup)
      - Phone number (Should at least contain 9 numbers)
      - Feedback type (Complaint, Suggestion) - List
      - Feedback message (Length min 10 words max 150 words)
      - Other Info (optional, can be empty)

    - Fields should be inside one object, once submitted to be mapped and Displayed like however you like.
    - Preferable to access state object items dynamically when setting them up.
    - Submission in 25 minutes.
    - Questions are welcome, so feel free to ask.

## Resources that might help

- [States](https://reactjs.org/docs/hooks-state.html)
- [Controlled Forms](https://javascript.plainenglish.io/react-controlled-forms-with-hooks-538762aab935)
