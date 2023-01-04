import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from "axios";

/**
 * COMPONENT
 */
const Home = (props) => {
  const username = useSelector((state) => state.auth.me.username);
  // https://www.omdbapi.com/?t=black+panter&apikey=4b7b09d1


  const [movieList, setMovieList] = useState('')
// max heros is 1562
  async function getData() {
    const res= await axios.get(
      // https://www.omdbapi.com/?s=a&page=1&apikey=4b7b09d1
      `
      https://api.themoviedb.org/3/search/movie?api_key=212ec8bcf9be4eac4873968fe650566f&query=batman&page=2
      `
      // https://api.themoviedb.org/3/movie/550?api_key=212ec8bcf9be4eac4873968fe650566f
      // https://www.omdbapi.com/?t=black+panter&apikey=4b7b09d1
    )
      console.log(res)
  }


  return (
    <div>
      <h3>Welcome, {username}</h3>
      <button onClick={getData}>CLICK ME</button>
    </div>
  );
};

export default Home;
