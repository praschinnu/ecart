import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Cart from './pages/Cart';
import Home from './pages/Home';
import WishList from './pages/WishList';
import Pnf from './pages/Pnf';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/wishlist' element={ <WishList></WishList>}></Route>
        <Route path='*' element={<Pnf></Pnf>}></Route>
      </Routes>
      
      
      <Footer></Footer>
    </div>
  );
}

export default App;
