import React from 'react';
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import Login from "./login";

export default function App() {
  return (
    <div>
        <Login />
    </div>
  )
}
ReactDOM.render(App(), document.getElementById("root"));