import { useState, useEffect } from 'react';
import { filterData, apiUrl } from './data';
import './App.css';
import Nav from './component/nav';
import Filter from './component/filter';
import Cards from './component/cards';
import { toast } from 'react-toastify';
import Spinner from './component/Spinner';

function App() {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState('All'); 
  const [data, setData] = useState(filterData);


  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const result = await fetch(apiUrl);
        const output = await result.json();
        setCourses(output.data);
      } catch (error) {
        toast.error("Something went wrong");
      }
      setLoading(false);    };
    fetchData();
  }, []);

  return (
    <div>
      <Nav />
      <Filter buttonContent={data} category={category} setCategory={setCategory} />
      {
        loading ? (
          <Spinner />
        ) : (
          <Cards courses={courses} category={category} />
        )
      }
    </div>
  );
}

export default App;
