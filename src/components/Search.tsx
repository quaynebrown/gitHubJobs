import axios from 'axios';
import { useState, useEffect } from 'react'




export default function Search() {
    const [userInput, setUserInput] = useState<string>('canada');

    
    
    useEffect(() => {
    //    interface Search {
    //         url: string;
    //         responseType: string;
    //         method: 'GET'
    //     }

    //     const searchObj = {
    //         url: 'https://jobs.github.com/positions.json',
    //         responseType: 'JSON',
    //         method: 'GET'
    //     }
       
            axios({
                url: 'https://jobs.github.com/positions.json',
                method: 'GET',
                responseType: 'json',
            }).then(res => {
                console.log(res)
            }).catch(err => {
                console.error(err)
            });     
    }, [])


    return (
        <div className="wrapper bg-img-container">
            <input 
                onChange={(e) => setUserInput(e.target.value)} 
                type="text" 
                name="search" 
                id="search"
            />
            <button className="btn-search">Search</button> 
        </div>
    )
}
