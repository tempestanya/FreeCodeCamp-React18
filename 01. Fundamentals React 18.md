---------------------------------------------------------------------
CTRL + C ---> stop the server
NPM START ---> start the server
---------------------------------------------------------------------
# React Fundamentals

#### https://github.com/john-smilga/react-course-v3

## Introduction

ReactJS is a JavaScript Library that is used for building user-interfaces.

Consists of "Components". Components are independent chunks of user-interfaces.

ReactJS Official Documentation - https://legacy.reactjs.org/

#### Advantages

-   A bunch of independent, isolated & re-usable user-interfaces that can be combined together easily!

-   Changes can be propagated easily by changing the component only!

-   React uses Virtual-DOM, which makes sure that only the component that needs to be updated is affected. Therefore, the whole app is not re-rendered which leads to increased developement speeds!

#### Note

-   The Project consists of atleast one element: the ROOT element.

-   The Project proceeds by building the general-structure of the components, and then the data is passed into these components.

-   **Terminal/Command-Prompt:** An alternative way to communicate with our computer using various commands.

#### NodeJS

-   A Cross-Platform JavaScript Runtime Environment, which is used to build fast & scalable network-applications.

-   We will require NodeJS to create our React-App instance, as well as run it!

-   Official Website - https://nodejs.org/en

## Setup

Official Website - https://react.dev/

We need to setup a few things to start working-off in React.

-   For this, we will utilise the Package: **create-react-app**. This package is developed/updated by Facebook which ensures credibility.

-   This Package helps us to initiate our React-Application easily, thus, helping us to avoid complex config-setups/build-tools.

-   NodeJS also includes **npm (Node Package Manager)**, which helps us quickly install external-packages.
-   **Install an external-package:**

    -   npm install packageName

    -   npmi packageName

-   **Create a new React-Application instance:**

    -   npx create-react-app app-name
    -   npx create-react-app@latest app-name

    -   npx is used to execute the create-react-app package, rather than installing it on our machine.

-   **Run the React-Application:**

    -   npm start

    -   npm is used to start the development-server on our machine.
    -   Everytime there is a change in the code, the development-server automatically updates the browser.

## Folder Structure

-   **node_modules:** Contains all the dependencies that the project is utilising.

-   **public:** Contains static-assets including "index.html", which is responsible for what you see on the browser.

    -   The logic/functionality of the application is set-up inside the "src" folder, and it is injected from the "src" into the id="root" element, which then renders the React-Application as a whole in our browser.

    -   **index.html**
        -   title
        -   fonts
        -   css
        -   favicon
        -   id="root" - our entire React-Application lives inside this root-element.

-   **src:** In simple terms - it is the "brain" of our app.

    -   This is where we will do all of our work, set all components, functions, utlities, pages, css, assets, etc.

    -   No restriction on the folder-structure inside the "src", as long as index.js is present.

    -   src/index.js is the JavaScript entry point.

-   **.gitignore:** It is used to specify which files source control(Git) should ignore.

-   **package.json:** Every Node.js(not only React) project has a package.json file, which contains information about the project.

    -   Primarily focused on 2 things - Scripts & Dependencies!

        -   **Scripts:** Lists the commands that we can execute in our project.

            -   npm start

            -   npm run build

            -   npm run commandName

        -   **Dependencies:** Lists the "main" Dependencies/Libraries are present that are being used in the project. These "main" dependencies further have their own dependencies which are present inside the node_modules folder as discussed earlier.

            -   Dependencies has its own Dependencies.

            -   Therefore, it is advisable to not push node_modules to github because of its large size.

            -   Instead, we can specify the dependencies/libraries being used inside package.json.

            -   Then, we can simply use _npm install_ to install the required dependencies.

-   **package-lock.json:** A snapshot of the entire dependency-tree.

-   **README.md:** The markdown-file where we can share more information about the project such as build-instructions.

## First Component

-   In order to create a component in React, we need to create a JavaScript Function!

-   When you think of a component, think of a function!

#### Code

```js
function Greeting() {
    return <h2>My First Component</h2>;
}

// arrow function also works

const Greeting = () => {
    return <h2>My First Component</h2>;
};
```

-   **Rules while writing a function for a component:**

    -   Starts with a capital-letter.

    -   Function must ALWAYS return JSX or HTML.

    -   You must ALWAYS close the tag `<Greeting />`.

#### Typical Component

-   Firstly, create the function/component.

-   Secondly, export the function/component.

-   ES6 modules will be covered later in the course.

-   Exporting the component helps us to use the exported-component anywhere inside our application.

#### Code

```js
const Greeting = () => {
    return <h2>My First Component</h2>;
};
export default Greeting;
```

#### Root Component

-   The root-component is set up inside src/index.js.

-   An application can contain thousands of components, but won't work without the root-component.

-   We will inject the root-component inside the id="root" element to implement our React-Application.

-   Exporting the component helps us to use the exported-component anywhere inside our application.

#### Code

**index.js**

```js
import React from "react"; // grab React from 'react' package!
import ReactDOM from "react-dom/client"; // grab ReactDOM 'react-dom/client' package!

function Greeting() {
    return <h2>My First Component</h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
// createRoot method creates the root-component, getElementById is used to find element with id="root" inside index.html;

root.render(<Greeting />); // render the function/component!
```

-   The above code is special to only the root-component, inside src/index.js.

-   Always need to self-close tags in React.

## Extensions & Settings.json

-   **Auto Rename Tag**

-   **Prettier: Code Formatter**

    -   Format on Save
    -   Format on Paste
    -   Default Formatter - Set as Prettier
    -   We can write commands/rules in settings.json as an alternative to change the settings.

-   **Emmet Abbreviations**

    -   By default, disabled for React.
    -   Syntax: h2#idname.classname

-   **ES7+ React/Redux Snippets**

    -   Everytime we need a new component, we will create a new file.
    -   This is because the components can become huge in size.

    -   This extension will set-up the component based on the name of the file.
    -   No need to import React with every component with the new syntax.
    -   Disable: Settings: Import React On Top

    -   rafce - Arrow Function with Export
    -   rfce - Regular Function with Export

## First Component in Detail

-   Starts with a capital-letter.

-   Function must ALWAYS return JSX or HTML.

-   You must ALWAYS close the tag `<Greeting />`.

-   JSX makes it easier to code, it calls createElement() method under the hood!

#### Example

```js
// component/function using JSX Syntax
function Greeting() {
    return (
        <div>
            <h2>hello world</h2>
        </div>
    );
}

// component/function using createElement() method
const Greeting = () => {
    return React.createElement(
        "div",
        {},
        React.createElement("h2", {}, "hello world")
    );
};
```

_It is clear from the above example, that JSX is easier to code with._

### JSX Rules

-   MUST return a SINGLE parent element.

-   Preferable to use semantic elements.

-   If you do not prefer `<div>` or semantic elements, use Fragments!

-   **Fragments**: Allows to group elements, without adding extra nodes/elements.

#### Example

```js
return (
    <React.Fragment>
        <h3>Hello People!</h3>
        <ul>
            <li>
                <a href='#'>Hello World</a>
            </li>
        </ul>
    </React.Fragment>
);

// shorthand

return (
    <>
        <h3>Hello People!</h3>
        <ul>
            <li>
                <a href='#'>Hello World</a>
            </li>
        </ul>
    </>
);
```

### Property Naming Convention: camelCase

#### Example

```js
// ReactJS Syntax
return (
  <div tabIndex={1}>
    <button onClick={myFunction}>click me</button>
    <label htmlFor='name'>Name</label>
    <input readOnly={true} id='name' />
  </div>
)

// HTML Syntax
<div tabindex="1">
    <button onclick="myFunction()">click me</button>
    <label for='name'>Name</label>
    <input readonly id='name' />
</div>
```

_The attributes for HTML tags have a 'camelCase' naming convention in JSX Syntax._

-   **className** instead of class attribute!

#### Example

```js
return <div className='someValue'>hello</div>;
```

-   MUST **self-close** every tag, or React will throw an error!

#### Example

```js
return <img />;
return <input />;
```

-   **Formatting**

    -   Opening tag can be in the same line as return.

    -   If not on the same line, need to use paranthesis - return();

## Arrow Functions

```js
// Normal Functions

function sum(x, y) {
    return x + y;
}
console.log(sum(2, 2));

const sum = function (x, y) {
    return x + y;
};
console.log(sum(2, 2));

// Arrow Functions - allow us to write shorter function syntax!

const sum = (x, y) => {
    return x + y;
};
console.log(sum(2, 2));

// if your function has only one statement, you can skip {} and return keyword!

const sum = (x, y) => x + y;
console.log(sum(2, 2));

// if you have only one parameter, you can skip the () parentheses!

const sum = (x) => x;
console.log(sum(2));
```

## Nested Components

```js
function Greeting() {
    return (
        <div>
            <Person />
            <Message />
        </div>
    );
}

const Person = () => <h2>john doe</h2>;
const Message = () => {
    return <p>this is my message</p>;
};
```

_Render the Person component, Message component inside Greeting component._

-   We can nest infinitely many components inside other components.

-   So, we have a single root-component, conventionally called 'App'!

-   And, we nest the rest of components inside of this root-component.

-   Inject the root-component into `<div id='root'>`, and the root-component consists of other nested components.

## Book List Project

### Intial Setup!

#### Code

```js
import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => <h2>image placeholder</h2>;
const Title = () => {
    return <h2>Book Title</h2>;
};
const Author = () => <h4>Author</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

-   Reference Site: https://www.amazon.com/Best-Sellers-Books/zgbs/books/

-   Choose a book, copy the image, title & author.

#### Code

```js
import React from "react";
import ReactDOM from "react-dom/client";

function BookList() {
    return (
        <section>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article>
            <Image />
            <Title />
            <Author />
        </article>
    );
};

const Image = () => (
    <img
        src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
        alt='Interesting Facts For Curious Minds'
    />
);
const Title = () => {
    return <h2>Interesting Facts For Curious Minds</h2>;
};
const Author = () => <h4>Jordan Moore</h4>;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

### CSS

-   Create index.css in "src" folder.

-   Import the file into our project!

#### index.css

```css
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
        Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    background: #f1f5f8;
    color: #222;
}
```

-   Don't need to provide the "Path" with libraries, just the library name.

-   Need to specify the "Path" & the "Extension" for our own assets like css.

-   Always going to start with a ' . ' which means we are looking in the same folder.

-   _Syntax - import "./index.css";_

#### Add Classes & Import index.css!

```js
import "./index.css";

function BookList() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className='book'>
            <Image />
            <Title />
            <Author />
        </article>
    );
};
```

#### Complete the CSS!

```css
.booklist {
    width: 90vw;
    max-width: 1170px;
    margin: 5rem auto;
    display: grid;
    gap: 2rem;
}

@media screen and (min-width: 768px) {
    .booklist {
        grid-template-columns: repeat(3, 1fr);
    }
}

.book {
    background: #fff;
    border-radius: 1rem;
    padding: 2rem;
    text-align: center;
}

.book img {
    width: 100%;
    object-fit: cover;
}

.book h2 {
    margin-top: 1rem;
    font-size: 1rem;
}
```

### Images

-   External Images (hosted on different server) - can access using a URL.

-   Local Images (public folder) - less performant, not optimized.

-   Local Images (src folder) - better solution for assets, since under the hood they get optimized.

#### Example

-   Create images folder in public, and add the image.

-   Replace the url in the src to './images/imageName.extension'

-   The path of the image is specified relative to the public folder.

-   Whatever assets we place in public, are instantly available to the project!

```js
const Image = () => (
    <img src='./images/book-1.jpg' alt='Interesting Facts For Curious Minds' />
);
```

### CSS Inside JSX

-   An example of Inline-Styling.

-   Implemented with the "style" attribute.

-   Set the style attribute equal to the curly braces.

-   CSS Properties with hyphen are replaced by camelCase convention.

-   { } in JSX means we are going back to the JavaScript Land.

-   Provide a JavaScript Object inside the curly braces.

#### Code

```js
const Author = () => (
    <h4 style={{ color: "#617d98", fontSize: "0.75rem", marginTop: "0.5rem" }}>
        Jordan Moore
    </h4>
);
```

-   External Libraries use inline-css, so if you want to make some changes, reference the library-documentation.

-   Alternatively, we can pass the reference to a JavaScript Object, instead of directly passing the values.

#### Code

```js
const Author = () => {
    const inlineHeadingStyles = {
        // javascript object!
        color: "#617d98",
        fontSize: "0.75rem",
        marginTop: "0.5rem",
    };

    return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>; // reference the object!
};
```

### JSX - JavaScript

-   Refactor to a single book-component (personal preference).

#### Code

```js
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

function BookList() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className='book'>
            <img
                src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
                alt='Interesting Facts For Curious Minds'
            />
            <h2>Interesting Facts For Curious Minds</h2>
            <h4>Jordan Moore</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

-   { } in JSX means going back to JS Land

-   Value inside the curly braces must be an expression. (expressions always return a value!)

-   Value inside the curly braces cannot be a simple statement.

#### Example

```js
const author = "Jordan Moore"; // object outside the component
const Book = () => {
    const title = "Interesting Facts For Curious Minds"; // object inside the component
    return (
        <article className='book'>
            <img
                src='https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg'
                alt='Interesting Facts For Curious Minds'
            />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};
```

-   `<p>{let x = 6}</p>` : Throws an error, as it doesn't return a value.

-   `<p>{6 + 6}</p>` : No error, as it returns a value.

#### Code

```js
const author = "Jordan Moore";
const Book = () => {
    const title = "Interesting Facts For Curious Mindssssss";
    return (
        <article className='book'>
            <img
                src='./images/book-1.jpg'
                alt='Interesting Facts For Curious Minds'
            />
            <h2>{title}</h2>

            <h4>{author.toUpperCase()} </h4>
            {/* <p>{let x = 6}</p> */}
            <p>{6 + 6}</p>
        </article>
    );
};
```

### Props

#### Refactoring the Code!

```js
const author = "Jordan Moore";
const title = "Interesting Facts For Curious Minds";
const img =
    "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg";

function BookList() {
    return (
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    );
}

const Book = () => {
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};
```

-   What do we do when we want to pass different data to the same individual components?

-   The solution is using the "props" object.

-   Every component automatically gets a "props" object by default, defined in the parameter.

-   The object is conventionally called "props", and is provided by React under the hood.

-   Initially, this object is empty.

#### Code

```js
const Book = (props) => {
    console.log(props);
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            {console.log(props)}
        </article>
    );
};
```

-   We can provide the values for this object in the area where we render our components.

-   Provide the property name, along with the value.

-   for string use " ", and for number/variable is { }.

-   Access using - _object.property_

-   The prop will only be displayed, if the prop is provided, otherwise no value!

#### Example

```js
function BookList() {
    return (
        <section className='booklist'>
            <Book job='developer' />
            <Book title='random' number={22} />
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            {console.log(props)}
            <p>{props.job}</p>
            <p>{props.title}</p>
            <p>{props.number}</p>
        </article>
    );
};
```

#### Refactor Code!

```js
function BookList() {
    return (
        <section className='booklist'>
            <Book author={author} title={title} img={img} />
            <Book author={author} title={title} img={img} />
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    return (
        <article className='book'>
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    );
};
```

### Props - Somewhat Dynamic Setup

Different values in both of the components!

#### Code

```js
const firstBook = {
    author: "Jordan Moore",
    title: "Interesting Facts For Curious Minds",
    img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
};
const secondBook = {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
};

function BookList() {
    return (
        <section className='booklist'>
            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            />
            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    return (
        <article className='book'>
            <img src={props.img} alt={props.title} />
            <h2>{props.title}</h2>
            <h4>{props.author}</h4>
        </article>
    );
};
```

### Access Props - Multiple Approaches

-   Object Destruturing - https://www.youtube.com/watch?v=i4vhNKihfto&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=9&t=1s

-   It is a way to access or unpack properties easily from an object.

#### Example

```js
const obj = {
    first: "bob",
    last: "sanders",
    city: "chicago",
    siblings: {
        sister: "jane",
    },
};

// object destructuring!
// const { first, last, city } = obj;

const {
    first,
    last: lastName,
    city,
    siblings: { sister },
} = obj;

// automatically create variables - first, lastName, city, sister.
// values are assigned corresponding to the property inside the object.

console.log(first, lastName, city, sister);

function printObj(person) {
    // console.log(person.first);
    // console.log(person.last);

    // access object properties using destructuring!

    const { first, last } = obj;
    console.log(first);
    console.log(last);
}

function printObj({ first, last }) {
    console.log(first);
    console.log(last);
}

printObj(obj);
```

-   No need for props.propName!

-   Destructure the object directly inside the component.

#### Example

```js
const Book = (props) => {
    console.log(props);
    const { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};
```

-   Destructure inside function parameters - in our case props.

-   If you have console.log(props) - it won't be defined in this case.

```js
const Book = ({ img, title, author }) => {
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};
```

### Children Prop

-   Used to render something between component tags. `<Book></Book>`

-   It is a special prop provided by React, always referenced by the name "children".

-   Always need to use children prop to render something extra inside a component.

-   Can place it anywhere inside the JSX.

-   Mostly used for Context API.

#### Code

```js
function BookList() {
    return (
        <section className='booklist'>
            <Book
                author={firstBook.author}
                title={firstBook.title}
                img={firstBook.img}
            >
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Commodi, praesentium quibusdam. Mollitia a debitis omnis
                    labore, incidunt facere perspiciatis consequuntur!
                </p>
                <button>Click Me!</button>
            </Book>

            <Book
                author={secondBook.author}
                title={secondBook.title}
                img={secondBook.img}
            />
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    const { img, title, author, children } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            {children}
        </article>
    );
};
```

### Simple List

-   JavaScript Map - https://www.youtube.com/watch?v=80KX6aD9R7M&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=2

-   Callback is a function that is passed as an argument to another function.

-   It is used to handle asynchronous operations:
    -   Reading a File
    -   Network Requests
    -   Interacting with Databases

#### Example

```js
// Example 1

hello();
goodbye();

function hello() {
    console.log("hello");
}
function goodbye() {
    console.log("goodbye");
}

// if hello() takes a lot of time to execute, JavaScript will not wait for it to complete execution.
// instead, it will call goodbye() and goodbye() will be executed before hello().
// to fix this asynchronous nature, we use "Callback Functions".

hello(goodbye);

function hello(callback) {
    console.log("hello");
    callback();
}
function goodbye() {
    console.log("goodbye");
}

// Example 2

sum(display, 10, 20);

function sum(callback, x, y) {
    let result = x + y;
    callback(result); // when the computation is complete, call this function.
}
function display(result) {
    console.log(result);
}
```

-   map: iterate over the data and display it on the browser.

-   map always returns a new array.

-   map does not change the size of the original array.

-   map always uses the values from the original array in the new array.

#### Example

```js
const obj = [
    {
        name: "bob",
        age: 20,
        position: "developer",
    },
    {
        name: "anna",
        age: 25,
        position: "designer",
    },
    {
        name: "susy",
        age: 30,
        position: "the boss",
    },
    {
        name: "john",
        age: 26,
        position: "intern",
    },
];

// iterate over obj array and grab all the ages?
// first, create an array variable to store the all the ages in an array.
// second, map over the obj array and pass a callback function in the parameter.

// const ages = obj.map(() => {});

// const ages = obj.map(function () {});

// const ages = obj.map(function (person) {
//     return person;
// });

// return all the objects of obj array, as individual array items inside a new array.
// callback function is used to pick up and return the values into the new "ages" array.

const ages = obj.map((persons) => {
    return persons.age;
});
console.log(ages);

// DRY RUN:
// persons = first object, return the age from the first object.
// persons = second object, return the age from the second object.
// persons = third object, return the age from the third object.
// all the returned values are stored in ages array, the new array created by the map method.

// Construct an Object:
// item parameter gets each object of the obj array, as an individual array element.

const newPeople = obj.map((item) => {
    return {
        firstName: item.name,
        Age: item.age,
        Posi: item.position,
    };
});
console.log(newPeople);
```

-   In React, we cannot render Objects directly inside the JSX.

#### Code

```js
const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    },
];

function BookList() {
    return <section className='booklist'>{books}</section>; // run-time error
}
```

-   While working with arrays, use map method to make things easier.

-   Maps are also used to wrap elements inside HTML/JSX.

#### Example

```js
const names = ["john", "susan", "peter"];

const newName = names.map((name) => {
    console.log(name);
    return <h1>{name}</h1>;
});

console.log(newName); // new array

function BookList() {
    return <section className='booklist'>{newName}</section>;
}
```

### Proper List

-   Iterating over the books array, and for each book, we will return a new Component.

#### Code

```js
const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    },
];

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return (
                    <div>
                        <h1>{book}</h1>
                    </div>
                );
            })}
        </section>
    );
}
```

-   The above code is wrong, because we cannot return objects (inside `<h1>`) in React.

-   Therefore, we need to pull out the properties from the object to correct the code.

#### Code

```js
const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    },
];

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return (
                    <div>
                        <h1>{book.title}</h1>
                    </div>
                );
            })}
        </section>
    );
}
```

-   The above code is syntactically correct!

-   The above example uses only the booklist component.

-   The example below uses the books component to render out the HTML.

#### Code

```js
const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
    },
];

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                const { img, title, author } = book;
                return <Book img={img} title={title} author={author} />;
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};
```

-   Iterate over the books array.

-   The parameter "book" takes the value of each object of the books array, one by one.

-   Then, we pull out the properties from each book object.

-   We return to provide the props for the book component using the values from the above pulled properties.

-   The map method returns a new array of items inside the books array which we can store in another variable.

-   **NOTE:** The above code gives a warning - Each child in a list should have a unique "key" prop.

### Key Props

-   Everytime we render a list of items (map method), React will want to keep a track of those items.

-   Therefore, we provide a unique identifier and set it equal to a key prop, which is typically called "id".

-   In our example, we set the key prop on the main return (booklist-component), because this is where the iteration takes place.

-   Therefore, the trick is to find the place where the iteration occurs, and set the key on the item you are returning (the parent).

#### Code

```js
const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
        id: 1,
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
        id: 2,
    },
];

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                const { img, title, author, id } = book;
                return (
                    <Book img={img} title={title} author={author} key={id} />
                );
            })}
        </section>
    );
}
```

### Pass the Entire Object As Props

-   It is difficult to pull out all the properites, if the object consists of alot of properties.

-   We have 2 options in this case!

    -   We can pass the entire object as a prop.
    -   We can use the spread operator (preferable).

#### First Method

-   Pass the book-object from the map method inside a prop, called bookObj (the name can vary).

-   Now props is an object, that contains the bookObj-Object inside it (Object inside Object).

```js
function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book bookObj={book} key={book.id} />;
            })}
        </section>
    );
}

const Book = (props) => {
    console.log(props); // destructure inside function.
    const { img, title, author } = props.bookObj;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

// ALTERNATIVE

const Book = ({ bookObj: { img, author, title } }) => {
    // destructure inside function parameters.
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};
```

#### Second Method

-   Spread Operator - https://www.youtube.com/watch?v=4Zyr5a3m0Fc&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=11

-   Split array-items into single-items and COPY them.

```js
const friends = ["ancy", "nathan", "susan"];
const newFriends = [...friends, "kush"];
console.log(friends); //['ancy', 'nathan', 'susan']
console.log(newFriends); //['ancy', 'nathan', 'susan', 'kush']
```

-   Since we copy the values, and not reference them, so any change in the new array does not affect the old array.

```js
const someObj = {
    name: "kush",
    age: 18,
};

const newObj = { ...someObj, city: "delhi" };

console.log(someObj); // { name: 'kush', age: 18 }
console.log(newObj); // { name: 'kush', age: 18, city: 'delhi' }
```

```js
const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
        id: 1,
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
        id: 2,
    },
];

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                // copy the entire book object, and provide it's properties as a prop.
                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
}

const Book = (props) => {
    console.log(props);
    const { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};
```

### Events

-   Events in React are similar to Events in Vanilla JS.

-   Our Application needs to respond to an event, when the user interacts with the application.

-   Below is the example of a component "EventExamples" that contains a function, to handle the "click" event.

-   List of events availaible in React - https://legacy.reactjs.org/docs/events.html

-   Most commonly used are -
    -   onClick (click event)
    -   onSubmit (submit a form)
    -   onChange (change the input)

#### Code

```js
const EventExamples = () => {
    const handleButtonClick = () => {
        alert("Handle Button Click!");
    };

    return (
        <section>
            <button onClick={handleButtonClick}>Click Me!</button>
        </section>
    );
};
```

-   onChange: Event triggered when user types something in the "input" field.

-   Call the corresponding function, when the event is fired off.

#### Code

```js
function BookList() {
    return (
        <section className='booklist'>
            <EventExamples />

            {books.map((book) => {
                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
}

const EventExamples = () => {
    const handleFormInput = () => {
        console.log("Handle Form Input!");
    };
    const handleButtonClick = () => {
        alert("Handle Button Click!");
    };

    return (
        <section>
            <form>
                <h2>Typical Form</h2>
                <input
                    type='text'
                    name='example'
                    onChange={handleFormInput}
                    style={{ margin: "1rem 0" }}
                />
            </form>
            <button onClick={handleButtonClick}>Click Me!</button>
        </section>
    );
};
```

### Event Object & Form Submission

-   Whenever we invoke the function for an event, we have access to an "event object".

-   This object contains a bunch of useful information.

-   We can give whatever name we want, to the event object, inside the parameter of the function.

#### Code

```js
const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e); // event object!
        console.log(e.target); // points to the element!
        console.log(e.target.name); // points to the name of the element!
        console.log(e.target.value); // points to the value inside the element!
    };
    const handleButtonClick = () => {
        alert("Handle Button Click!");
    };

    return (
        <section>
            <form>
                <h2>Typical Form</h2>
                <input
                    type='text'
                    name='example'
                    onChange={handleFormInput}
                    style={{ margin: "1rem 0" }}
                />
            </form>
            <button onClick={handleButtonClick}>Click Me!</button>
        </section>
    );
};
```

-   Default behaviour of forms is to collect the values, and send it to some URL.

-   But, since we are handling the forms ourselves, we need to use the "preventDefault()" method to inform the browser that we are handling the form submissions ourselves.

#### Code

```js
const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e); // event object!
        console.log(e.target); // points to the element!
        console.log(e.target.name); // points to the name of the element!
        console.log(e.target.value); // points to the value inside the element!
    };
    const handleButtonClick = () => {
        alert("Handle Button Click!");
    };
    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
    };

    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Typical Form</h2>
                <input
                    type='text'
                    name='example'
                    onChange={handleFormInput}
                    style={{ margin: "1rem 0" }}
                />
            </form>
            <button onClick={handleButtonClick}>Click Me!</button>
        </section>
    );
};
```

-   Instead of pressing Enter Key to submit the form, we can set-up a button with type = 'submit' attribute to submit the form as well.

```js
const EventExamples = () => {
    const handleFormInput = (e) => {
        console.log(e); // event object!
        console.log(e.target); // points to the element!
        console.log(e.target.name); // points to the name of the element!
        console.log(e.target.value); // points to the value inside the element!
    };
    const handleButtonClick = () => {
        alert("Handle Button Click!");
    };
    const handleFormSubmission = (e) => {
        e.preventDefault();
        console.log("Form Submitted!");
    };

    return (
        <section>
            <form onSubmit={handleFormSubmission}>
                <h2>Typical Form</h2>
                <input
                    type='text'
                    name='example'
                    onChange={handleFormInput}
                    style={{ margin: "1rem 0" }}
                />
                <button type='submit'>Submit!</button>
            </form>
            <button onClick={handleButtonClick}>Click Me!</button>
        </section>
    );
};
```

-   Alternative Approach

```js
<button type='submit' onClick={handleFormSubmission}>
    Submit!
</button>
```

#### Mind Grenade #1

-   Alternative approach, pass anonymous function.

-   One liner - less code.

```js
const EventExamples = () => {
    return (
        <section>
            <form>
                <h2>Typical Form</h2>
                <input
                    type='text'
                    name='example'
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    style={{ margin: "1rem 0" }}
                />
            </form>
            <button
                onClick={() => {
                    console.log("Handle Button!");
                }}
            >
                Click Me!
            </button>
        </section>
    );
};
```

#### Mind Grenade #2

-   Components are independent by default.

```js
const Book = (props) => {
    const { img, title, author } = props;

    const displayTitle = () => {
        console.log(title);
    };

    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button onClick={displayTitle}>Display Title!</button>
        </article>
    );
};
```

### React Data Flow

#### Prop Drilling

-   React data flow - we can only pass data down the nested components, not up.

-   Pass data from BookList to Book, not the other way around.

-   Pass props from parent to immediate child only (not grand-child or further down).

-   Can pass down a function as a prop, the same way we pass values as a prop.

-   Can use this function inside the event handlers.

```js
function BookList() {
    const someValue = "shakeAndBake";
    // how to pass down the function as a prop?
    const displayValue = () => {
        console.log(someValue);
    };

    return (
        <section className='booklist'>
            {books.map((book) => {
                return (
                    <Book {...book} key={book.id} displayValue={displayValue} />
                );
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author, displayValue } = props;
    // grab the function from the prop and pass it to the onClick event!

    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button onClick={displayValue}>Click Me!</button>
        </article>
    );
};
```

### Challenge

-   We have a function in a component, and we need to invoke it in our child.

-   Create getBook() function in BookList.

-   Accepts id as an argument and finds the book.

-   Pass the function down to Book component, and invoke on button click.

-   Use Filter & Find - https://www.youtube.com/watch?v=KeYxsev737s&list=PLnHJACx3NwAfRUcuKaYhZ6T5NRIpzgNGJ&index=5

-   The Goal - You should see the selected book in the console.

#### Filter & Find Methods

```js
// filter - returns a new array, can manipulate the size of the new array (unlike map), return values based on some condition, if no match it returns an empty array.
// find - returns a single instance (not an array), returns the first match only, if no match it returns undefined.

const obj = [
    {
        name: "bob",
        age: 20,
        position: "developer",
    },
    {
        name: "anna",
        age: 25,
        position: "designer",
    },
    {
        name: "susy",
        age: 31,
        position: "the boss",
    },
    {
        name: "john",
        age: 35,
        position: "intern",
    },
];

const youngPeople = obj.filter((person) => {
    // return all the items of the array!
    return true;
});
console.log(youngPeople);

const youngPeople = obj.filter((person) => {
    // if (person.age < 30) {
    //     return true;
    // }
    return person.age < 30; // returns true/false based on the condition.
});
console.log(youngPeople);

// persons = first object, if we return true in the callback function, we return the item. If we return false in the callback function, we skip the item.
// persons = second object, and same logic.
// persons = third object, and same logic.

const developers = obj.filter((person) => {
    return person.position === "developer";
});
console.log(developers);

// alternative approach!
const developers = obj.filter((person) => person.position === "developer");
console.log(developers);

// find method returns a single object!
const peter = obj.find((person) => person.name === "john");
console.log(peter);
```

#### Code

```js
function BookList() {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book);
    };

    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key={book.id} getBook={getBook} />;
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author, getBook, id } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button onClick={getBook(id)}>Click Me!</button>
        </article>
    );
};
```

-   We get the console logs, when the application loads, and not when we click the button.

-   `getBook(2)` - this is invoking the function.

-   `getBook` - this is referencing the function.

-   In JavaScript, whenever we invoke a function, it runs instantly when the application loads.

-   Whereas, if we reference a function, it runs only when the event is fired off.

-   Therefore we need to fix our code, to reference the function, and not invoke it instantly.

#### Solution #1

-   First option is to set up wrapper inside of the child component.

-   This way we pass a reference to the function, rather than invoking it.

```js
function BookList() {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book);
    };

    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key={book.id} getBook={getBook} />;
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author, getBook, id } = props;

    const getSingleBook = () => {
        getBook(id);
    };

    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button onClick={getSingleBook}>Click Me!</button>
        </article>
    );
};
```

#### Solution #2

-   We pass in an anonymous function, instead of setting up a seperate reference.

```js
function BookList() {
    const getBook = (id) => {
        const book = books.find((book) => book.id === id);
        console.log(book);
    };

    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key={book.id} getBook={getBook} />;
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author, getBook, id } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <button onClick={() => getBook(id)}>Click Me!</button>
        </article>
    );
};
```

### ES6 Modules

-   Split up our application into multiple files/folders, and have the ability to import and export the code.

-   2 types of exports:

    -   Named Export
    -   Default Export

-   With named export, we MUST import with the same name.

-   With default export, we can import with a different name.

-   books.js - for storing the books data.

-   book.js - for the Book component.

-   While importing, for a named export, use `{    }` and specify the EXACT name.

#### Named Export

##### index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { books } from "./books";

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

##### books.js

```js
export const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
        id: 1,
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
        id: 2,
    },
];
```

#### Default Export

-   We can have only default export for one file.

-   No need to specify the exact name while importing.

##### index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import bananas from "./books";

function BookList() {
    return (
        <section className='booklist'>
            {bananas.map((book) => {
                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
}

const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

##### books.js

```js
const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
        id: 1,
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
        id: 2,
    },
];
export default books;
```

#### Refactor Code

##### index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Book from "./book";
import { books } from "./books";

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key={book.id} />;
            })}
        </section>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

##### books.js

```js
export const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: "https://images-na.ssl-images-amazon.com/images/I/71m+Qtq+HrL._AC_UL900_SR900,600_.jpg",
        id: 1,
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
        id: 2,
    },
];
```

##### book.js

```js
const Book = (props) => {
    const { img, title, author } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    );
};
export default Book;
```

### Local Images (src Folder)

-   Better performance because optimized under the hood.

-   Setup images folder inside the src folder.

-   Import all three images in books.js file.

-   Set image property equal to the import.

-   Yes, each image requires a new import.

```js
import img1 from "./images/book1.jpg";
import img2 from "./images/book2.jpg";
import img3 from "./images/book3.jpg";

export const books = [
    {
        author: "Jordan Moore",
        title: "Interesting Facts For Curious Minds",
        img: img1,
        id: 1,
    },
    {
        author: "James Clear",
        title: "Atomic Habits",
        img: img2,
        id: 2,
    },
    {
        author: "Jimmy Niro",
        title: "Dad Jokes",
        img: img3,
        id: 2,
    },
];
```

### Challenge #1

-   Setup numbering of books to be displayed.

##### index.js

```js
import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import Book from "./book";
import { books } from "./books";

function BookList() {
    return (
        <section className='booklist'>
            {books.map((book, index) => {
                return <Book {...book} key={book.id} number={index} />;
            })}
        </section>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
```

##### book.js

```js
const Book = (props) => {
    const { img, title, author, number } = props;
    return (
        <article className='book'>
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
            <span className='number'>{`# ${number + 1}`}</span>
        </article>
    );
};
export default Book;
```

### Challenge #2

-   Add a title, and also change the page title.

##### index.js

```js
function BookList() {
    return (
        <>
            <h1>Amazon Best Sellers!</h1>
            <section className='booklist'>
                {books.map((book, index) => {
                    return <Book {...book} key={book.id} number={index} />;
                })}
            </section>
        </>
    );
}
```

##### index.css

```css
h1 {
    text-transform: capitalize;
    text-align: center;
    margin-top: 4rem;
}
```

### Build Production Application (Deployment)

-   Stop the development server (ctrl + c).

-   `npm run build` command is used to build the production ready deployment of the application.F

-   "build" folder gets created, does not contain the "src" folder.

-   Use a hosting provider to deploy your application on the internet.

-   We have used "Netlify" in our case.

-   https://fundamentals-project.netlify.app/

<hr>
