import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Feed from './Feed';
import SidebarRight from './SidebarRight';
import Login from './Login';
import { useStateValue } from './StateProvider';


function App() {

  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {/* <h1>Lets build the facebook clone!</h1> */}
      {!user ? (
        <Login />
      ) : (
        <> {/* JSX fragment */}
        <Header />

        <div className="app__body">
          <Sidebar />
          <Feed />
          <SidebarRight />
        </div>
        {/* JSX fragment end */}
        </> 
      )}
    </div>
  );
}

export default App;
