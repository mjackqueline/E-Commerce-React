import React from 'react';
import Book from './UI/Book';
import { books } from '../data';

const Featured = () => {
    console.log(books);
    console.log();
  return (
    <section id="features">
        <div className="container">
            <div className="row">
                <h2 className="section__title">
                    <h2>Featured <span className="purple">Books</span></h2>
                    <div className="books">
                        {books
                        .filter((book) => book.rating === 5)
                        .slice(0, 4)
                        .map((book) => (
                        <Book book={book} key={book.id}/>
                        ))}
                    </div>
                </h2>
            </div>
        </div>
    </section>
  )
}

export default Featured
