import React, { useState } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Switch from "react-switch";
function App() {
  const [switched, setSwitched] = useState(false);

  const handleSwitchChange = (checked) => {
    setSwitched(checked);
  };
  
  return (
    <div>
      <h1>React Switch Örneği</h1>
      <label>
        Anahtarı Aç/Kapat
        <Switch
          onChange={handleSwitchChange}
          checked={switched}
        />
      </label>
      <p>Anahtar {switched ? 'açık' : 'kapalı'}</p>
    </div>
  );
}

export default App;
// const person = { name: "Alex" };
// localStorage.setItem("user", person);
// console.log(localStorage.getItem("user")); // "[object Object]"; not useful!
// localStorage.setItem("user", JSON.stringify(person));
// console.log(JSON.parse(localStorage.getItem("user"))); // { name: "Alex" }