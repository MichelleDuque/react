import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Main from './Main';
import avatar from './avatar.webp'
import Card from './Card';

function Logo(props){
  const logoAvatar ={
    width:"100px",
  }

  const userPic = <img src={avatar} style={logoAvatar} className='logoAvatar' alt="Avatar"/>;
  return userPic;
}

function App() {
  return( 
  <div className="App">
  <Header firstName="Bob" />
  <Logo />
  <Header firstName="Gary" />
  <Main greet="Howdy" />
  <Sidebar greet="Hi" />
  <h1>Task: Add three Card elements</h1>
  <Card h2="First card's h2" h3="First card's h3" /> 
  <Card h2="Second card's h2" h3="Second card's h3" /> 
  <Card h2="Third card's h2" h3="Third card's h3" /> 

  </div>
  );
}

export default App;
