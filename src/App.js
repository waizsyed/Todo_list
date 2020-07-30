import React, {useState} from 'react';
import ToDoLists from './ToDoLists';
function App() {
  const [inputList, SetInputList] = useState("");
  const [Items, setItem] = useState([]);

  const itemEvent = (event)=>{
    SetInputList(event.target.value);
  };

  const listOfItems = () => {
    setItem((oldItems) => {
      return [...oldItems, inputList];
    });
    SetInputList("");
  };

  const deleteItems = (id) =>{
    setItem((oldItems) =>{
      return oldItems.filter((arrElem, index) =>{
        return index !== id; 
      });
    });
  } ;
  return ( <>
    <div className="main_div">
      <div className="center_div">
      <h5>Designed By <span>Syed Waiz</span></h5>
       <br />
       <h1>ToDo List</h1>
       <br />
       <input type="text" placeholder="Add a Items" value={inputList} onChange={itemEvent} />
       <button onClick={listOfItems}> + </button>
       <ol>
        { /*<li> {inputList} </li>*/}
        { Items.map((itemval, index) => {
         return <ToDoLists 
            key = {index}
            id = {index}
            text = {itemval}
            onSelect = {deleteItems}
            />;
        })
        }
       </ol>
       
      </div>
      
    </div>


  </>)

};

export default App;
