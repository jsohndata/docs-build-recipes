import { HashRouter, Routes, Route } from 'react-router-dom';
import Modal from './Modal';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/modal" element={<Modal />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
