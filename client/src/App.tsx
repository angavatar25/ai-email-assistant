import { BrowserRouter as Router, useLocation, useRoutes } from 'react-router';
import './App.css'
import Home from './pages/Home'
import ChatRoom from './pages/ChatRoom';

const AppRouter = () => {
  const location = useLocation();

  const routing = [
    { path: "/", element: <Home/> },
    { path: "/chat", element: <ChatRoom/> }
  ];

  const routes = useRoutes(routing, location);

  return (
    <div key={location.pathname}>{routes}</div>
  )
}

function App() {
  return (
    <Router>
      <AppRouter/>
    </Router>
  )
}

export default App
