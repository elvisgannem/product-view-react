import Navbar from './components/Navbar/index'
import ImagesDisplay from './components/ImagesDisplay/index'
import ProductDescription from './components/ProductDescription/index'

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <ImagesDisplay />
        <ProductDescription />
      </div>
    </div>
  );
}

export default App;
