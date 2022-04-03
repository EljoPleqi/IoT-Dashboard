import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import MainDeviceView from './components/deviceView/MainDeviceView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/devices/:DeviceId" element={<MainDeviceView />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
