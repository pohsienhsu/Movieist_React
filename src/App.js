import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async() => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/movies");
      console.log(response.data);
      setMovies(response.data);

    } catch(err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className='App'>

    </div>
  );
}

export default App;
