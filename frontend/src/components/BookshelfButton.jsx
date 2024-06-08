import { useMediaQuery } from 'react-responsive';

const BookshelfButton = () => {
    const isSmallScreen = useMediaQuery({ query: '(max-width: 750px)' });
    const isVerySmallScreen = useMediaQuery({ query: '(max-width: 550px)' });

    return (
        <button className='BookshelfButton'>
            {isVerySmallScreen ? (
                'My Bookshelf'
            ) : isSmallScreen ? (
                <i class='fa-solid fa-book-open'></i>
            ) : (
                'My Bookshelf'
            )}
        </button>
    );
};

export default BookshelfButton;
