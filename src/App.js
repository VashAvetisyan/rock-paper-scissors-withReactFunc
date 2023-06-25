import "./App.scss";

import Game from "containers/Game/Game";
import Layout from "component/Layout/Layout";


function App() {
  return (
    <div className="App">
      <Layout>
        <Game />
      </Layout>
    </div>
  );
}

export default App;
