
import './App.css';
import React, { useEffect, useState, useCallback } from 'react' ;

function App() {


  const [yourData, setYourData] = useState('')

  async function sendDataHandler(event){
    event.preventDefault();
    
    const new_data_object={
      your_data: yourData
    }
   
    
    const resp = await fetch('https://react-http-9f6af-default-rtdb.firebaseio.com/moje_dane.json', {
      method: 'POST',
      body: JSON.stringify(new_data_object),
      headers:{
        'Content-Type': 'application.json'
      }
    });
    
    const data = await resp.json() ;
    console.log(data) ;

    setYourData('')
  }


  
  function onChangeHandler(event){
    setYourData(event.target.value) ;
    
  }

  
  const getDataHandler = useCallback( async() => {
    const resp = await fetch('https://react-http-9f6af-default-rtdb.firebaseio.com/moje_dane.json') ;

    const data = await resp.json() ;
    console.log(data);   

    const loadedData = []

    for(const key in data){
      loadedData.push({
        id: key,
        my_data: data[key].your_data
      })
    }
    console.log(loadedData)
    console.log(typeof(loadedData))

  }, []
  )

  
  useEffect( () => {
    getDataHandler()
  }, [getDataHandler]  )


  // async function getDataHandler(){
  //   const resp = await fetch('https://react-http-9f6af-default-rtdb.firebaseio.com/moje_dane.json') ;

  //   const data = await resp.json() ;
  //   console.log(data);   

  //   const loadedData = []

  //   for(const key in data){
  //     loadedData.push({
  //       id: key,
  //       my_data: data[key].your_data
  //     })
  //   }
  //   console.log(loadedData)
  //   console.log(typeof(loadedData))

  // }

 

  return (
  <div className='main'>
    <div className="container">
      <h1 className="title">Send text to firebase </h1>
      
      <form className="my_form" onSubmit={sendDataHandler}>       
        <input type="text" 
               onChange={onChangeHandler}
               value={yourData}
        />
       
        <button className="btn" type="submit"> wyślij dane </button>
      </form>

      <button className="btn"
              onClick={getDataHandler}
      > Get data from FireBase </button>
    </div>
 

 
  </div>
  );
}

export default App;
