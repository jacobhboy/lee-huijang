import Box from "./components/Box";
import Header from "./components/Header"
import axios from "axios";

function App() {
  axios.get('api/qp5x7acdh0nszyqya7g6u724qknr7vp40rzq6ee7vr3lxkcnmnjv6q53g4zfh/', )
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  
  return (
    <div className="App">
      <Header/>
      <Box 

      />
    </div>
  );
}

export default App;
