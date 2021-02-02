import React from "react";
import { Button } from "antd";
import "./App.css";

const App = () => (
  <div className="App">
    <p>Scaffolded using:</p>
    <ul>
      <li>create react app</li>
      <li>ant design</li>
      <li>craco antd</li>
      <li>nodemon</li>
      <li>others</li>
    </ul>
    <p>
      Integrates less css, customise the antd theme variables at:
      src/style/AntDesign/customTheme.less
    </p>
    <p>example button</p>
    <Button type="primary">Button</Button>
  </div>
);

export default App;
