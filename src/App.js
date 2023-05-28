import Navbar from './components/navbar';
import Gallery from './components/gallery';
import Product from './components/product';
import { MyProvider } from './context';

function App() {
  
  return (
    <div className=' w-[100vw]  mobile:w-[80vw] mobile:grid mobile:grid-auto-rows-2 mobile:grid-auto-cols-2 mobile:mx-auto mobile:justify-center  mobile:place-items-center mobile:gap-12' >
      <MyProvider>
        <Navbar />
        <Gallery />
        <Product />  
      </MyProvider>
        
    </div>
  );
}

export default App;
