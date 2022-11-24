// import { Route, Router } from "react-router-dom";
import "./App.css";
import Banner from "./Banner";
// import HeaderNavegatuion from "./HeaderNavegatuion";
import Nav from "./Nav";
import requests from "./request";
import Row from "./Row";
// import {MdChevronLeft,MdChevronRight} from 'react-icons/md'


function App() {
  return (
    <div className="App">
      {/* <HeaderNavegatuion/> */}
      <Nav/>
      <Banner/>

      
    
    {/* <Route path="/NETFLIX"></Route>  */}
    <Row sliderId='1' NavId='NETFLIX ORIGINALS'
      title='NETFLIX ORIGINALS' fetchUrl = {requests.fetchNetflixOriginals} isLargeRow
      />
      <Row sliderId='2' NavId='Trending' title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row sliderId='3' NavId='Top Rated' title="Top Rated" fetchUrl={requests.fetchTopRateMovies} />
      <Row sliderId='4' NavId='Action' title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      {/* <Row sliderId='5' NavId='Horror'  title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> */}
      <Row sliderId='6' NavId='romance'  title="romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row sliderId='7'  NavId='Documentaries' title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
     
    </div>
  );
}

export default App;
