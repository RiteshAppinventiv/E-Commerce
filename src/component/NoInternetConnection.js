import React, {useState, useEffect} from 'react';

const NoInternetConnection = (props) => {
    // state variable holds the state of the internet connection
    console.log("online");
    const [isOnline, setOnline] = useState(true);

    // On initization set the isOnline state.
    useEffect(()=>{
        setOnline(navigator.onLine)
    },[])

    // event listeners to update the state 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        console.log("offline");
        setOnline(false)
    });

    // if user is online, return the child component else return a custom component
    if(isOnline){
    return(
        props.children
    )
    } else {
        return(<h1>No Interner Connection. Please try again later.</h1>)
    }
}

export default NoInternetConnection;