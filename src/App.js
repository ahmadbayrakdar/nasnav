import './App.css';

import TopNav from './components/TopNav';
import SearchBarContainer from './components/SearchBarContainer';
import Varities from './components/Varities';
import Footer from './components/Footer';

import ProductContent from './components/ProductContent';

function App() {
  return (
    <div>
      <TopNav />
      <SearchBarContainer />
      <Varities />
      <ProductContent />
      <Footer />
    </div>
  );
}

export default App;
