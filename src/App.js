import Parent from './components/parent/Parent'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />

       <Parent />

      <Footer />
    </div>
  );
}

export default App;
