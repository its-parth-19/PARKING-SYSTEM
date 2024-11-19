import './Styles/navbar.css';
import './Styles/footer.css';
import Navbar from './Component/Navbar';
import Footer from './Component/Footer';
import Body from './Component/Body';
import SignUp from './Component/SignUp';
// import Login from './Component/Login';
import ParkingSpace from './Component/ParkingSpace';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SignUp/>
      <Body/>
      {/* <Login/> */}
      <ParkingSpace/>
      <Footer/>
    </div>
  );
}

export default App;
