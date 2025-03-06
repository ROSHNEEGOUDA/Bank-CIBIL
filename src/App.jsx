import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from "./layout";
import Login from './Page/Login';
import HomePage from './Page/HomePage';
import VolunteerRegistration from './Page/Registration';
import Emptypage from './Page/Emptypage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/homepage' element={<Layout><Emptypage/></Layout>} />
        <Route path='/register' element={<VolunteerRegistration />} />
        <Route path='/add-new' element={<Layout><HomePage /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;
