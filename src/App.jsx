import Header from './Components/Header';
import Home from './Components/Home';
import Projects from './Components/Projects';
import Footer from './Components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Home />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
