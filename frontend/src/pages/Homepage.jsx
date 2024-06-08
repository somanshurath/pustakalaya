import React from 'react';
import { useState } from 'react';

import BookCard from '../components/BookCard';

const Homepage = () => {
    const [results, setResults] = useState([]);

    return (
        <div>
            <h1>My Bookshelf</h1>
            <div className='SearchResults'>
                {results.map((book) => (
                    <div key={book.cover_i}>
                        <BookCard book={book} addBool={false}/>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Homepage;
