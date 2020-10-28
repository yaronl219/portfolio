import './assets/styles/global.scss'

import Navbar from './cmps/Navbar';
import Footer from './cmps/Footer';
import {ViewRouter} from './cmps/ViewRouter';


function App() {
  const views = ['/', '/projects', '/tech', '/contact']
  return (
    <div className="App">
      <header className="app-header">
        <Navbar views={views}/>
      </header>
      <main className="main">
        <ViewRouter views={views}/>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
