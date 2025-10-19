import Header from './Header';
import Home from './Home';
import Projects from './Projects';
import Footer from './Footer';
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
