import React from 'react';
import {Header} from "./components/";
import {Sidebar} from "./components/Sidebar";
import {SIDEBAR} from "./components/Sidebar/data";

import './App.scss';
import {TasksList} from "./components/TasksList";

function App() {
  return (
    <div className="app">

    <Sidebar menu={SIDEBAR} />

      <div className="app-wrapper">
          <Header title="Website" btn="..."/>
          <TasksList/>
      </div>
    </div>
  );
}

export default App;
