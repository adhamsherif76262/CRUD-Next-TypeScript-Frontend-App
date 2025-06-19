"use client"

import React, { useEffect, useRef, useState } from 'react'
// import styles from "./page.module.css"
import styles from './page.module.css'
import Link from 'next/link'
import User_Handling_Component from '@/Components/User_Handling_Component';

function About_Us() {

    const [count, setCount] = useState(0);
    const [, setmorethan] = useState(false);
    const [, setlessthan] = useState(false);
    const Input_ref_1 = useRef<HTMLInputElement>(null)
    const Input_ref_2 = useRef<HTMLInputElement>(null)
    
    const handleIncrement = () => {
        // This is called the functional update form of setState.
        // This Uses the latest value React has for this state or value.

        // setCount(prev => prev + 1);
        // setCount(oldValue => oldValue + 1);
        // setCount(previous => previous + 1);
        // setCount(x => x + 1);
        // They all work the same because they're all just function parameters. 
        // React internally passes the most recent state value to that function.

        // For Objects         
        // setUser(prevUser => ({
        //     ...prevUser,
        //     age: prevUser.age + 1
        // }));

        //For Arrays
        // setItems(prevItems => [...prevItems, newItem]);

        setCount(prev => prev + 1); 
    };
    
    const handleDecrement = () => {
        // This is called the functional update form of setState.
        // This Uses the latest value React has for this state or value.

        // setCount(prev => prev - 1);
        // setCount(oldValue => oldValue - 1);
        // setCount(previous => previous - 1);
        // setCount(x => x - 1);
        // They all work the same because they're all just function parameters. 
        // React internally passes the most recent state value to that function.

        // For Objects
        // setUser(prevUser => ({
        //     ...prevUser,
        //     age: prevUser.age - 1
        // }));

        //For Arrays
        // setItems(prevItems => [...prevItems, newItem]);

        setCount(prev => prev - 1); 
    };

    const handleFocus = () => {
        if(Input_ref_1.current){
            Input_ref_1.current.focus();
        }
        console.log(Input_ref_1.current?.value)
    };
    // type Any = {
    //     e : Event
    // }
    const handleChange = (e : React.ChangeEvent<HTMLInputElement>) =>{
        if(e.target){

            console.log(e.target.value)
        }
    }

    useEffect(() => {
        if (count > 0) {
            setmorethan(true);
            console.log("Counter is more than 0");
            console.log(count);
        } else {
            setmorethan(false);
        }
    
        if (count < 0) {
            setlessthan(true);
            console.log("Counter is less than 0");
            console.log(count);
        } else {
            setlessthan(false);
        }
    }, [count]);

  return (
    <>
        <User_Handling_Component></User_Handling_Component>
        <div className={styles.divClass}>
          The About Us page
        </div>
        
        <Link className={styles.divClass} href="/">Go To Home page</Link>

        <div className={styles.divClass}> Counter Value :: {count}</div>
        <button className={styles.divClass} onClick={handleIncrement} type='button'>Increment Counter</button>
        <button className={styles.divClass} onClick={handleDecrement} type='button'>Decrement Counter</button>
        <input style={{width : "50%"}} ref={Input_ref_1} className={styles.divClass} placeholder="Displays value after click in the console"/>
        <button className={styles.divClass} onClick={handleFocus} type='button'>CLick To Focus</button>
        <input style={{width : "50%"}} ref={Input_ref_2} onChange={handleChange} className={styles.divClass} placeholder="Displays value on change in the console"/>
    </>
  )
}

export default About_Us
