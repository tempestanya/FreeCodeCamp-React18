import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

const books = [
    {
        author: 'Joseph Murphy ',
        title: 'The Power of Your Subconscious Mind',
        img: "https://m.media-amazon.com/images/I/51QnuLIY2uL._SY445_SX342_.jpg",
        id: 1,
    },
    {
        author: 'Francesc Miralles',
        title: 'Ikigai',
        img: "https://m.media-amazon.com/images/I/81l3rZK4lnL._SY342_.jpg",
        id: 2,
    },
    {
        author: 'James Clear',
        title: 'Atomic Habits',
        img: "https://m.media-amazon.com/images/I/81Ls+SBCLiL._SY466_.jpg",
        id: 3,
    }
];


function BookList() {
    return(
        <section className='booklist'>
            {books.map((book) => {
                return <Book {...book} key = {book.id} />;
            })}
        </section>
    )
}


const Book = (props) => {
    const { img, title, author } = props;
    console.log(props);
    return (
        <article className='book'>
            <img src= {img} alt= {title} />
            <h2>{title}</h2>
            <h4>{author}</h4>
        </article>
    )
}    


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);