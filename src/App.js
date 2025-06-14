import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../src/Components/Home/Home';
import './App.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
])

export default App;
