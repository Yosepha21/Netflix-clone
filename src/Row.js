import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "axios";
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer";
// import
 


function Row({NavId,title, fetchUrl,isLargeRow,sliderId}) {
  const baseURL="https://api.themoviedb.org/3";
  const imageBaseUrl='http://image.tmdb.org/t/p/original';
  
  const [movies, setMovies] = useState([]);
  const [trailerUrl,setTrailerUrl]=useState('');


  useEffect(() => {
    async function fetchData() {
      const request = await axios?.get(`${baseURL}${fetchUrl}`);
      console.log(request)
      setMovies(request.data.results);
      // console.log(request.data.results)     
      return request;
    }    
    fetchData();
  }, [fetchUrl]);
  // console.log(movies)

  const options = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };


  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams?.get("v"));
        })
        .catch((error) => console.log(error));
    }
  }


  return (
    <div className="row">
      <h1>{title} </h1>
      <div className="row_posters ">
        {movies?.map((movie)=>{
          
        return <img key={movie.id} 
        onClick ={()=>handleClick(movie)}
           className={`row_poster ${isLargeRow &&'row_posterLarge'}`}
          src={(movie.poster_path &&movie.backdrop_path)?`${imageBaseUrl}${isLargeRow ? movie.poster_path: movie.backdrop_path}`:"https://image.tmdb.org/t/p/original/m7tG5E1EbywuwTsl6hq990So0Bx.jpg" }
          alt={movie.name}
          />
        })}
       <div>
       </div>
      </div>
      <div style={{ padding: "10px" }}>
        {trailerUrl && <YouTube videoId={trailerUrl}  opts={options}/>}
      </div>
    </div>
  );
}
export default Row;
