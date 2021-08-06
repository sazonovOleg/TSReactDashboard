import React from 'react';
import './App.css';
import {Header} from "./components/index";
import {MenuItemType} from "./components/Header/HeaderMenu";

const HEADER_MENU:MenuItemType[] = [
    {title:'Tasks',url: '/'},
    {title:'Kanban', url:'/'},
    {title:'Activity', url:'/'},
    {title:'Calendar', url:'/'},
    {title:'Files', url:'/'}];

function App() {
  return (
    <div className="App">
      <Header title="Website" menu={HEADER_MENU}/>
    </div>
  );
}

export default App;
