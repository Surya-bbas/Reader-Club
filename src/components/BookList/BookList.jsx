import React from 'react';
import { useGlobalContext } from '../../context.';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover_not_found.jpg";
import "./BookList.css";

// This component renders a list of books with their covers

const BookList = () => {
  // Accessing books, loading state, and resultTitle from global context
  const { books, loading, resultTitle } = useGlobalContext();

  // Mapping over the books array and creating a new array with book objects that include cover images
  const booksWithCovers = books.map((singleBook) => {
    return {
      ...singleBook,
      // Removing '/works/' from the ID to get only the ID value
      id: (singleBook.id).replace("/works/", ""),
      // Setting the cover image URL based on the cover ID, if available, or using a default cover image
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    }
  });

  // Displaying a loading indicator if the data is still loading
  if (loading) return <Loading />;

  // Rendering the book list section
  return (
    <section className='booklist rounded'>
      <div className='px-20'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            // Rendering Book components for each book in the booksWithCovers array, limiting to 30 books
            booksWithCovers.slice(0, 30).map((item, index) => {
              return (
                <Book key={index} {...item} />
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default BookList;
