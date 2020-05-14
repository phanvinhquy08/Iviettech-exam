import React from 'react';
import './App.css';
import { Grid, Paper } from '@material-ui/core';

import News from '../src/Components/News';
import SiderBar from '../src/Components/Sidebar';
import Login from '../src/Components/Login';

function App() {
  return (
    <div className="App">
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <News/>
        </Grid>
        <Grid item xs={3}>
          <Login/>
          <SiderBar/>
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
