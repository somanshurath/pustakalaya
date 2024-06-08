import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

import BookCard from '../components/BookCard';
import BookshelfButton from '../components/BookshelfButton';

const Searchpage = () => {
    const [search, setSearch] = useState('');
    const [results, setResults] = useState([]);

    useEffect(() => {
        if (search.length === 0) {
            setResults([]);
            return;
        }
        const searchWithPlus = search.replace(/\s/g, '+');
        console.log(searchWithPlus);
        fetch(
            `https://openlibrary.org/search.json?title=${searchWithPlus}&limit=10&page=1&lang=eng`
        )
            .then((res) => res.json())
            .then((data) => {
                setResults(data.docs);
            });
    }, [search]);

    return (
        <div className='SearchPage'>
            <h1>Search by book name:</h1>
            <BookshelfButton />
            <input
                className='SearchBar'
                type='text'
                placeholder=''
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />

            {search.length === 0 ? (
                <div className='SearchResultsEmpty'>
                    <p>
                        Browse through the vast collection of books and add them
                        to your bookshelf!
                    </p>
                </div>
            ) : results.length == 0 ? (
                <div className='SearchResultsEmpty'>
                    <p>Loading</p>
                </div>
            ) : (
                <div className='SearchResults'>
                    {results.map((book) => (
                        <div key={book.cover_i}>
                            <BookCard book={book} addBool={true} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Searchpage;
