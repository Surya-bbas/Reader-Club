import React, {useState, useContext, useEffect} from 'react';
import { useCallback } from 'react';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from './firebaseConfig';

const URL = "http://openlibrary.org/search.json?title=";
const AppContext = React.createContext();


const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("the lost world");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [resultTitle, setResultTitle] = useState("");
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        // Listener for authentication state changes
        const unsubscribe = onAuthStateChanged(auth,(user) => {
        if (user) {
            // User is logged in
            setCurrentUser(user);
            console.log(currentUser);
        } else {
            // User is logged out
            setCurrentUser(null);
            console.log(currentUser);
        }
        });
    
    
    }, []);
    

    const fetchBooks = useCallback(async() => {

        

        setLoading(true);
        try{
            const response = await fetch(`${URL}${searchTerm}`);
            const data = await response.json();
            const {docs} = data;

            if(docs){
                const newBooks = docs.slice(0, 20).map((bookSingle) => {
                    const {key, author_name, cover_i, edition_count, first_publish_year, title} = bookSingle;

                    return {
                        id: key,
                        author: author_name,
                        cover_id: cover_i,
                        edition_count: edition_count,
                        first_publish_year: first_publish_year,
                        title: title
                    }
                });

                setBooks(newBooks);

                if(newBooks.length > 1){
                    setResultTitle("Your Search Result");
                } else {
                    setResultTitle("No Search Result Found!")
                }
            } else {
                setBooks([]);
                setResultTitle("No Search Result Found!");
            }
            setLoading(false);
        } catch(error){
            console.log(error);
            setLoading(false);
        }
    }, [searchTerm]);

    useEffect(() => {
        fetchBooks();
    }, [searchTerm, fetchBooks]);

    return (
        <AppContext.Provider value = {{
            loading, books, setSearchTerm, resultTitle, setResultTitle,currentUser
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext, AppProvider};