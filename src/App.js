import React,{useState} from 'react';
import data from './data'
import List from './List';
function App() {
const [people,setPoeple]=useState(data);


  
  return <main>


    <section className='container'>

   <h3> {people.length} birthday's today</h3>
   <List people= {people}/>
   <button className='container button' onClick={()=>{setPoeple([])}}> Erase all</button>
   <button className='container button' onClick={()=>{setPoeple(data)}}> Erase all</button>

    </section>
  </main>
  
}

export default App;
