import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import HomePage from './HomePage';
import Footer from './components/Footer';
import Background from './components/Background';

function App() {
  return (
    <div className="w-screen h-full">
      <Background />
     <div className='relative'>
     <Navbar/>
      <HomePage/>
      <Footer />
     </div>
    </div>
  );
}

export default App;
