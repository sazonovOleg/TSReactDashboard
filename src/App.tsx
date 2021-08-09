import React from 'react';
import {MenuItemType} from "./types/modulesType";
import {Header} from "./components/";
import {Sidebar} from "./components/Sidebar";
import {SIDEBAR} from "./components/Sidebar/data";

import './App.scss';
import {TasksList} from "./components/TasksList";

const HEADER_MENU:MenuItemType[] = [
    {title:'Tasks',url: '/'},
    {title:'Kanban', url:'/'},
    {title:'Activity', url:'/'},
    {title:'Calendar', url:'/'},
    {title:'Files', url:'/'}];

function App() {
  return (
    <div className="app">

    <Sidebar menu={SIDEBAR} />

      <div className="app-wrapper">
          <Header title="Website" btn="..." menu={HEADER_MENU}/>
          <TasksList/>
      </div>
    </div>
  );
}

export default App;
