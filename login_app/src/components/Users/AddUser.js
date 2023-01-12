import React, { useState } from 'react' ;
import Card from '../UI/Card' ;
import classes from './AddUser.module.css' ;
import Button from '../UI/Button';

const AddUser = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            return ;
        }

        if (+enteredAge < 1){
            return ;
        }
        console.log(enteredName, enteredAge) ;
        props.onAddUser(enteredName, enteredAge) ;
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
            
            <label class="">Username</label>
            <input id="username" type="text" 
                onChange={nameChangeHandkler}
                value={enteredName}/>
            <label class="">Age</label>
            <input id="age" type="number"
                    onChange={ageChangeHandkler}
                    value={enteredAge} />
            
            <button type="submit">Add user</button>
        </form>
       
        
    </Card>

    )

};


export default AddUser ;