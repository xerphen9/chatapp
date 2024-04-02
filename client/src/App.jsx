import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { userVerificationRoute } from './routes/ApiRoutes';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

//pages and components
import Home from './pages/Home';
import Login from './pages/Login';
import ChatPage from './pages/ChatPage'
import Settings from './pages/Settings';
import Notifications from './pages/Notifications';
import Privacy from './pages/Privacy';
import Signup from './pages/Signup';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route index element={<ChatPage/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/notifications' element={<Notifications/>}/>
          <Route path='/privacy' element={<Privacy/>}/>
        </Route>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
