import logo from './logo.svg';
// import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import MovieDetails from './components/MovieDetails/MovieDetails';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import PageNotFound from './components/PageNotFound/PageNotFound'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className='container'>
        <Routes>

          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/movieDetails/:imdbId' element={<MovieDetails></MovieDetails>}></Route>
          <Route path='*' element={<PageNotFound></PageNotFound>}></Route>

        </Routes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
