import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FileUpload } from "./FileUpload";

function App() {
  return (
    <div className="App">
      {/* <h2>upload image in mysql using node js and reactjs</h2> */}
      <FileUpload />
    </div>
  );
}

export default App;
