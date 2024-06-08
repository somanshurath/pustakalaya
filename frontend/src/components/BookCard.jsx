import React from 'react';
import '../index.css';

const BookCard = ({ book, addBool }) => {
    const truncateTitle = (title = book.title, length = 70) => {
        return title.length > length
            ? title.substring(0, length) + '...'
            : title;
    };

    return (
        <div className='BookCard'>
            <div>
                <p className='cardcustom'>
                    <b>Book Title:</b>
                </p>
                <p>{truncateTitle()}</p>
                <p className='cardcustom'>
                    <b>Author:</b>
                </p>
                {book.author_name &&
                    book.author_name.slice(0, 1).map((author, index) => (
                        <p key={index} className='authorname'>
                            {author}
                        </p>
                    ))}
            </div>
            <div>
                {addBool && (
                    <button className='AddButton'>Add to Bookshelf</button>
                )}
                <p className='edcnt'>Edition Count: {book.edition_count}</p>
            </div>
        </div>
    );
};

export default BookCard;
