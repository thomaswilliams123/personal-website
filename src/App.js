import "./App.css";
import Header from "./Components/Header/header";
import Background from "./Components/background/background";
import Columns from "./Components/Colums/front_Page_Colums";


function App() {
  return (
    <>
      <div>
        <Background />
        <Header />
        <h1 className="name">Thomas Lee<br></br>Williams</h1>
      </div>
      <div class="container">
        <div>
          <h2 className="title">Welcome to my personal website</h2>
        </div>
        <div>
          <Columns />
        </div>
      </div>
    </>
  );
}

export default App;
