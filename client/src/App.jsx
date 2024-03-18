import {Router, Routes, Route} from 'react-router-dom'
import {useCookies} from 'react-cookie'

//pages and components
import Home from './pages/Home';
import Login from './pages/Login';
import ChatPage from './pages/ChatPage'
import Settings from './pages/Settings';
import SideBar from './components/SideBar';
import Notifications from './pages/Notifications';
import Privacy from './pages/Privacy';
import Signup from './pages/Signup';

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(['tokenChat'])
  console.log(cookies.tokenChat)

  return (
    <Routes>
      {
        cookies.tokenChat !== undefined && cookies.tokenChat !== '' ?
        <Route path='/' element={<Home/>}>
          <Route index element={<ChatPage/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
        </Route>
        :
        <>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </>
      }
    </Routes>
  );
}

export default App;
