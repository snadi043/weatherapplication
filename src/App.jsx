import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';
import './index.css'

function App() {
  return (
    <>
      <header className="header">
        <div id="logo-img">
          <img src={logo} alt="logo-react"/>
        </div>
        <h1>Learn React</h1>
        <h1>Learn & Master GitHub Actions</h1>
      </header>
      <MainContent />
    </>
  );
}

export default App;
