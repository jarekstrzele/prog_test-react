import React, { useState } from 'react' ;
import Card from '../UI/Card' ;
import classes from './AddUser.module.css' ;
import Button from '../UI/Button';

const AddUser = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        console.log(enteredName, enteredAge) ;
        setEnteredName('');
        setEnteredAge('')
    }

    const nameChangeHandkler = (event) =>{
        setEnteredName(event.target.value) ;
    }

    const ageChangeHandkler = (event) =>{
        setEnteredAge(event.target.value) ;
    }

    return (
    <Card className={classes.input}>       
        <form onSubmit={addUserHandler}>
            
            <lable class="">Username</lable>
            <input id="username" type="text" 
                onChange={nameChangeHandkler}
                value={enteredName}/>
            <lable class="">Age</lable>
            <input id="age" type="number"
                    onChange={ageChangeHandkler}
                    value={enteredAge} />
            
            <button type="submit">Add user</button>
        </form>
       
        
    </Card>

    )

};


export default AddUser ;