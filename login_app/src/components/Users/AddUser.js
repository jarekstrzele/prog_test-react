import React, { useState } from 'react' ;
import Card from '../UI/Card' ;
import classes from './AddUser.module.css' ;
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal' ;


const AddUser = props => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredName.trim().length === 0 || enteredAge.trim().length === 0){
            setError({
                title: "Invalid input",
                msg:"Please enter a valid name and age (non-empty values)."
            }) ;
            return ;
        }

        if (+enteredAge < 1){
            setError({
                title: "Invalid age",
                msg:"Please enter a valid age (>0)."
            }) ;
            return ;
        }
        console.log(enteredName, enteredAge) ;
        props.onAddUser(enteredName, enteredAge) ;
        setEnteredName('');
        setEnteredAge('') ;
    }

    const nameChangeHandkler = (event) =>{
        setEnteredName(event.target.value) ;
    }

    const ageChangeHandkler = (event) =>{
        setEnteredAge(event.target.value) ;
    }

    const errorHandler = () =>{
        setError(null) ;
    }



    return (
   <>   
    { error && <ErrorModal title={error.title} msg={error.msg} onConfirm={errorHandler} /> } 
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
            
            <Button type="submit">Add user</Button>
        </form>
    </Card>
</>
    )

};


export default AddUser ;