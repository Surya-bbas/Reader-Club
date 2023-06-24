import React, { useEffect, useState } from 'react'
import { db } from '../../firebaseConfig'
import { getDoc ,doc } from 'firebase/firestore'
import {useGlobalContext} from '../../context.'
import Book from '../BookList/Book'

const Cart = () => {
    const {currentUser} = useGlobalContext()
    const [cart, setcart] = useState('')
    async function fetchDoc(user){
        return getDoc(doc(db,'user',currentUser.uid)).then((response)=>{
            setcart(response.data().cart);            
        })
    }
    console.log("cart data", cart);

    
    useEffect(() => {
        fetchDoc()
    
      
    }, [])
    
  return (
    <div className='flex justify-center items-center h-[100vh]'>
        <div className='booklist-content grid'>
          {/* {cart &&
            
            //Rendering Book components for each book in the booksWithCovers array, limiting to 30 books
            cart.map((item, index) => {
              return (
                <Book key={index} {...item} />
              )
            })
          } */}
        </div>
    </div>
  )
}

export default Cart