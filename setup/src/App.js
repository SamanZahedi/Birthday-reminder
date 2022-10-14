import React, { useState, useEffect } from 'react'
import axios from "axios";
import Loading from './Loading'
import Tours from './Tours'


// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

   const removeIt = (id) => { 
     const newTours = tours.filter(tour => tour.id !== id);
       setTours(newTours);
     };
   
//------ axios version --------//
// useEffect(()=>{
//   axios.get(url).then(result=>{
//     setTours(result.data)
//     setIsLoading(false)
//   })
// },[])

//--------- We need this way to REFRESH -----//
  const fetchTours = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setIsLoading(false);
      setTours(tours);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }
  if (tours.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>
            refresh
          </button>
        </div>
      </main>
    );
  }


  return (
    <>
      <Tours tours={tours} setTours={setTours} removeIt={removeIt}/>

    </>
  );
}

export default App
