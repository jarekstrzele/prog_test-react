import './App.css';

const Person = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h2>Last Name: {props.name} </h2>

      <h2>Age: {props.age}</h2>

    </>
  )
}


const App= ()=> {
  const name = 'John' ;
  const isNameShowing = false ;
  return (
    <div className="App">
     <Person name={"John"} />
     <Person name={'Janek'} lastname={'kowalski'} age={39}/>
     <Person />
    </div>
  );
}

export default App;
