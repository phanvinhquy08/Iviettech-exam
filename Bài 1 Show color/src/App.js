import React, { Component } from 'react';
import './App.css';

import Header from './Components/Header';


const data = [
  { id: 0, code: 451, name: "Blizzard", color: "#FFFFCC" },
  { id: 1, code: 468, name: "Hawk", color: "#FFFF99" },
  { id: 2, code: 485, name: "Canopy", color: "#FFFF66" },
  { id: 3, code: 452, name: "Bone", color: "#CCFF66" },
  { id: 4, code: 469, name: "Red fox", color: "#66FF99" },
  { id: 5, code: 486, name: "Verde", color: "#FFCC99" },
  { id: 6, code: 453, name: "Teepee", color: "#CCCC99" },
  { id: 7, code: 470, name: "Big Sky", color: "#99CC99" },
  { id: 8, code: 487, name: "Helena", color: "#99CC66" },
  { id: 9, code: 454, name: "Sandstone", color: "#FF99CC" },
  { id: 10, code: 471, name: "Glacier", color: "#FF9999" },
  { id: 11, code: 488, name: "Ponderosa Pine", color: "#00CC66" },
  { id: 12, code: 455, name: "Fawn", color: "#FF9900" },
  { id: 13, code: 472, name: "Great Fall", color: "#9999FF" },
  { id: 14, code: 489, name: "Lewis & Clark", color: "#9966CC" },
];

class ShowColor extends Component {
  render() {
    const style = {
      width: "300px",
      display: "flex",
      height: "50px",
      margin: "10px"
    };
    const { code, name, color } = this.props;
    return (
      <div style={style}>
        <div style={{textAlign: "right", width:"150px"}}>
          <div>{code}</div>
          <div>{name}</div>
        </div>
        <div style={{ width: "250px", background: color, marginLeft: "5px" }} />
      </div>
    )
  }
}

class List extends Component {
  render() {
    const { data } = this.props;
    const style = {
      display: "flex",
      flexWrap: "wrap"
    }
    return (
      <div style={style}>
        {data.map(item => <ShowColor key={item.id} {...item} />)}
      </div>
    )
  }
}



function App() {
  return (
    <div className="App">
      <Header />
      <List data={data} />
    </div>
  );
}

export default App;
