import "./App.css";
import {person }from "./data"
import DatesCount from "./components/datesCount"
import ContentBox from "./components/ContentBox" 
import EditList from "./components/EditList"
import React , {useState} from "react"
function App() {
  const [personData, setPersonData] = useState(person);
  const onDelete = ()=>{
    setPersonData([])
  }

    const onShow = () => {
      setPersonData(person);
    };
  return (
    <div className="bg-slate-100 w-screen h-screen flex justify-center flex-col items-center">
      <DatesCount person={personData} />
      <ContentBox person={personData} />
      <EditList deleteData={onDelete} showData={onShow} />
    </div>
  );
}

export default App;
