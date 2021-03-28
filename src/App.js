import logo from './logo.svg';
import './App.css';
import Title from './Title';
import POPOSList from './POPOSList';
import Footer from './Footer';
import Like from './Like';

function App() {
  return (
    <div className="App">
      <Title />
      <POPOSList />
      <Like counter="100" />
      <Footer />
    </div>
  );
}

export default App;
