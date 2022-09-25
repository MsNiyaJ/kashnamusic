import Hero from './components/Hero';
import JumpToTop from './components/JumpToTop';
import Videos from './components/Videos';
import './global.css';

function App() {
  return (
    <div>
      <Hero />
      <JumpToTop />
      <main>
        <Videos />
      </main>
    </div>
  );
}

export default App;
