import React from 'react'
import { useState , useEffect } from 'react';
import axios from 'axios';


function UserList() {
    const [value, setValue] = useState("")
    useEffect(() => {
      
    // fetch('https://jsonplaceholder.typicode.com/users')
    // .then((response) => response.json())
    // .then((json) => setValue(json));
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        setValue(response.data);
    })
    }, [])
console.log(value);
if(value.length>0){
    return (
        <div>{value.map(x=><p>{x.name}</p>)}</div>
      )
}

}

export default UserList