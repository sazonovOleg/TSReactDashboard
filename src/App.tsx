import React from 'react';
import {MenuItemType} from "./types/modulesType";
import {Header,Sidebar} from "./components/";

import './App.scss';

const HEADER_MENU:MenuItemType[] = [
    {title:'Tasks',url: '/'},
    {title:'Kanban', url:'/'},
    {title:'Activity', url:'/'},
    {title:'Calendar', url:'/'},
    {title:'Files', url:'/'}];

function App() {
  return (
    <div className="app">
      <Sidebar/>
      <div className="app-wrapper">
          <Header title="Website" btn="..." menu={HEADER_MENU}/>
      </div>
    </div>
  );
}

export default App;
