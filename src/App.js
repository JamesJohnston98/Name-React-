import React, {useState, useEffect, useRef} from 'react';

function App() {
//ref is similar to state allows you to store a value but will not cause you to re-render like state would 
  const [name, setName] = useState('');
  const inputRef = useRef();

  //store the previous value of the name 
  const prevName = useRef('');

//useEffect to allow the previously entered name to be saved 
//this will run when the name changes
//ref is good for persisting the elements across renders

useEffect(() => {
prevName.current = name;

}, [name]);

  //function which will run and give focus to the input when button is clicked

  //will give the focus of the user to the text box when the button is clicked 
  function focus(){
    inputRef.current.focus();
  }

  return (
   <>
   <input ref={inputRef} value={name} onChange={e => setName(e.target.value)}/>
   <div>My name is {name} and it used to be {prevName.current}</div>
   <button onClick={focus}>Focus</button>
   </>
  );
}

export default App;
