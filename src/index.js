import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const firstbook = {
    author: 'Joseph Murphy ',
    title: 'The Power of Your Subconscious Mind',
    img: "https://m.media-amazon.com/images/I/51QnuLIY2uL._SY445_SX342_.jpg"
};
const secondbook = {
    author: 'Francesc Miralles',
    title: 'Ikigai',
    img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._SY342_.jpg"
};
const thirdbook = {
    author: 'James Clear',
    title: 'Atomic Habits',
    img: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY466_.jpg"
};


function BookList() {
    return(
        <section className='booklist'>
            <Book author = {firstbook.author} title = {firstbook.title} img = {firstbook.img}/>
            <Book author = {secondbook.author} title = {secondbook.title} img = {secondbook.img}/>
            <Book author = {thirdbook.author} title = {thirdbook.title} img = {thirdbook.img}/>
        </section>
    )
}


const Book = ({img, title, author} ) => {
    return(
        <article className='book'>
            <img src= {img} alt= {title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}    


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);