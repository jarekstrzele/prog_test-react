import React, { useState } from 'react' ; 
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import './App.css' ;

function App() {

  const [userList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
   
    setUsersList(currList =>{
      console.log("App: ", uName, uAge)
      return [...currList,  {name: uName, age: uAge, id: Math.random().toString() }]
    });
  }

  return (
   <div className='style_flex'>
      <AddUser onAddUser={addUserHandler}  />
      <UsersList users={userList}  />
    </div>
  );
}

export default App;
