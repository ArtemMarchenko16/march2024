import React from 'react';
import './App.css';
import Simpson from "./сomponents/simpsons/Simpson";

function App(){
  return (
      <>
        <Simpson name={"Bart Simpson"} age={10} photo={"https://logowik.com/content/uploads/images/131_bartsimpson.jpg"}></Simpson>
        <Simpson name={"Homer Simpson"} age={39} photo={"https://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png"}></Simpson>
        <Simpson name={"Marge Simpson"} age={36} photo={"https://upload.wikimedia.org/wikipedia/en/0/0b/Marge_Simpson.png"}></Simpson>
      </>

  );
}

export default App;
