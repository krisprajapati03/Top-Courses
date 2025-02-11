import React, { useEffect, useState } from "react";
import { apiUrl , filterData} from "./data";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true)
  const [category, setCategory] = useState(filterData[0].title)
 
  async function fetchData(){
    setLoading(true);
    try{
      let res = await fetch(apiUrl);
      let output = await res.json();
       //save data into a variable
      setCourses(output.data);
    }
    catch{
      toast.error("Something went wrong");      
    } 
    setLoading(false); 
  }
    
  useEffect(()=>{
      fetchData();
  },[]);


  return (
    <div className="bg-slate-800 flex flex-col min-h-screen">
      <div>
        <Navbar/>
      </div>

      <div>
        <div>
          <Filter 
          filterData = {filterData}
          category={category}
          setCategory={setCategory}/>
        </div>

        <div className="w-11/12 max-w-[1200px] mx-auto flex justify-center
        items-center min-h-[50vh] flex-wrap">
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>
    </div>
  );
};

export default App;
