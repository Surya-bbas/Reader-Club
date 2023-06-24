import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";
import {useGlobalContext} from '../../context.'

const Book = (book) => {
  console.log(book);
  const {addtocar,setAddtocar} = useGlobalContext()
  console.log('cart item', addtocar);
  return (
    
    <div className='flex justify-center items-center '>

      <div className="bg-[#FFF!important] shadow-md hover:scale-105 hover:shadow-xl duration-500 rounded-xl book-item flex flex-column flex-sb text-purple-600 space-y-2 min-h-[660px!important] ">
          <Link to = {`/book/${book.id}`} {...book} className='book-item-img'>
            <img src = {book.cover_img} alt = "cover"  />         
          </Link>
          {/* <button className='bg-[#0B6EFE] rounded-[22px] p-5 mr-5 text-white'>
            Read
          </button> */}

          <div className="px-4 py-3 w-[240px] space-y-2">
            <div className='book-item-info-item title fw-7  text-center pt-4  text-4xl  '>
              <span>{book.title}</span>             
            </div>
            <span
              class="whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-lg text-purple-700 mr-5 truncate "
            >
              Published on {book.first_publish_year}
            </span>
            
            <p className="text-2lg font-bold text-black truncate block capitalize"><span className='text-capitalize fw-7 text-2lg'>Author: </span>
             <span>{book.author.join(", ")}</span></p>
            <div className="flex items-center justify-between">
              {/* <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
              <del>
                <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
              </del> */}
              <div className='whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-lg text-purple-700 mr-5 truncate '>
                <span className=''>Total Editions: </span>
                <span>{book.edition_count}</span>

              </div>
              <button onClick={()=>setAddtocar(book.id)}>

                <div className="ml-auto whitespace-nowrap rounded-full bg-purple-100 px-2.5 py-0.5 text-sm text-purple-700 h-20 w-20 flex justify-center items-center">
                  <Link to='' >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
                      <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                  </Link>
                </div>

              </button>
            </div>
          </div>
        </div>



        
         {/* <div className='book-item-info text-center'>
           <Link to = {`/book/${book.id}`} {...book}>
             <div className='book-item-info-item title fw-7 fs-18'>
               <span>{book.title}</span>
             </div>
           </Link>
           <div className='book-item-info-item author fs-15'>
             <span className='text-capitalize fw-7'>Author: </span>
             <span>{book.author.join(", ")}</span>
           </div>
           <div className='book-item-info-item edition-count fs-15'>
             <span className='text-capitalize fw-7'>Total Editions: </span>
             <span>{book.edition_count}</span>
           </div>
           <div className='book-item-info-item publish-year fs-15'>
             <span className='text-capitalize fw-7'>First Publish Year: </span>
             <span>{book.first_publish_year}</span>
           </div>
         </div> */}
    </div>


    
  )
}

export default Book