import React from 'react' ;
import Card from '../UI/Card' ;
import classes from './AddUser.module.css' ;
import Cutton from '../UI/Button';

const AddUser = props => {

    const addUserHandler = (event) => {
        event.preventDefault();
    }

    return (
    <Card className={classes.input}>       
        <form onSubmit={addUserHandler}>
            
            <lable class="">Username</lable>
            <input id="username" type="text" />
            <lable class="">Age</lable>
            <input id="age" type="number" />
            
            <button type="submit">Add user</button>
        </form>
       
        
    </Card>

    )

};


export default AddUser ;