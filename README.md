# Hometask #2 | React, Redux

1. Your task is to rewrite the existing notes app using React.js, [Redux](https://redux.js.org/) (or [Redux Toolkit](https://redux-toolkit.js.org/)) and **TypeScript**.
2. All the functionality should be the same - users can add, edit and remove notes, archive and unarchive them.
3. Store data in the redux store. Prepopulate it with 7 notes and use it by default as an initial state so that they are shown when the page is reloaded.
4. Aim to structure components properly (container, page, component), reuse components, and reflect the apps component hierarchy:
[https://dev.to/admantium/structuring-react-components-n6g](https://dev.to/admantium/structuring-react-components-n6g)
5. Bonus task: Tables for &quot;List of notes&quot; and &quot;Summary&quot; should use the same table component.

![](RackMultipart20220415-4-qmiz28_html_72cd98565fbff929.png)

The goal of the task is to let you get better acquainted with React.js and Redux. If you don&#39;t know some of the APIs needed for the task, you might use these resources as references:
[https://reactjs.org/docs/getting-started.html](https://reactjs.org/docs/getting-started.html)
[https://redux.js.org/api/api-reference](https://redux.js.org/api/api-reference)

While working on your task you should utilize all of the following **:**

1. React
  1. Functional (a.k.a. stateless) component
  2. React Hooks
2. Redux
  1. Use Action Creators, write meaningful action names
  2. Keep the immutability and readability of your reducers
  3. Do not transform your store data in the components
  4. Use the Redux DevTools Extension for Debugging

To set up the basic React app structure use Create React App:
[https://reactjs.org/docs/create-a-new-react-app.html](https://reactjs.org/docs/create-a-new-react-app.html)

Using template &quot;typescript&quot;:
_npx create-react-app my-app --template typescript_

Or use the following guide:
[https://create-react-app.dev/docs/adding-typescript](https://create-react-app.dev/docs/adding-typescript)

To connect the Redux library use Redux Core or Redux Toolkit (which is not recommended for beginners):
[https://redux.js.org/introduction/getting-started](https://redux.js.org/introduction/getting-started)

Or, as a basic boilerplate use the following repo:
[https://github.com/yogeshdatir/React-Notes-and-Collections/tree/master/Redux/redux-boiler-plate/src/components](https://github.com/yogeshdatir/React-Notes-and-Collections/tree/master/Redux/redux-boiler-plate/src/components)

Use the following guide for writing the application using the best practices:
[https://redux.js.org/style-guide/style-guide](https://redux.js.org/style-guide/style-guide)
