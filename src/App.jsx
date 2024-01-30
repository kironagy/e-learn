import './App.css'
import Sidebar from './components/sidebar';
import Header from './components/header';
import img1 from './assets/images/Untitled-65.png'
import img2 from './assets/images/Untitled-4.png'
import Announcements from './pages/Announcements';

function App() {
  return (
    <div>
          <div  className='page'>
          <img className="logo" src={img1} alt="" />
            <img className="logo-responsive" src={img2}  alt="" />
            <Sidebar/> 
            <div className='content'>
                 <Header/>
                 <Announcements/>
            </div>
        </div>
    </div>
  )
}

export default App
