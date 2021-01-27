import logo from './logo.svg';
import './App.css';
import './Style.css';
import myImageAerial from "./beautiful-aerial.jpg";


function App() {
  return (
    <div className="App">
    <div style={{border:"solide 1",maxWifhth:"100vw"}}>
      <h1 className="title red">Mohamed Ali Sammoud</h1>
      <br></br>
      <img style={{width:"300px"}} src={myImageAerial} alt="aerial"></img>
      <br></br>
      <img style={{width:"300px"}} src="/beautiful-shot.jpg"></img>
    </div>
    <video width="320" height="240" controls>
      <source src="/Beauty.mp4" type="video/mp4"></source>
    </video>
    </div>
  );
}

export default App;
