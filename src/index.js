import React from 'react';
import ReactDOM from 'react-dom/client';

import "./index.css";

function BookList() {
    return(
        <section className='booklist'>
            <Book />
            <Book />
            <Book />
            <Book />
        </section>
    )
}

const Book = () => {
    return(
        <article className='book'>
            <img src="https://images-eu.ssl-images-amazon.com/images/I/619U3eefi7L._AC_UL600_SR600,400_.jpg" alt="Lucifer was Innocent" />
            <h2>Lucifer was Innocent</h2>
            <h4>Tirth Raj Parsana</h4>
        </article>
    )
}    


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<BookList />);