import './App.css';

import TopNav from './components/TopNav';
import SearchBarContainer from './components/SearchBarContainer';
import Varities from './components/Varities';
import Footer from './components/Footer';
import Cart from './components/Cart';

import ProductContent from './components/ProductContent';

function App() {
  return (
    <div className='appContainer'>
      <TopNav />
      <SearchBarContainer />
      <Varities />
      <ProductContent />
      <Footer />
      <Cart />
    </div>
  );
}

export default App;
