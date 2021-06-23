import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import BrandListComponent from './components/BrandListComponent';
import ProductCreateComponent from './components/ProductCreateComponent';
import ProductListComponent from './components/ProductListComponent';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        <Switch>
            <Route exact path={["/","/home"]} component={Home}></Route>
            <Route exact path={'/brands'} component={BrandListComponent}></Route>
            <Route exact path={'/products'} component={ProductListComponent}></Route>
            <Route exact path={'/products/create'} component={ProductCreateComponent}></Route>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
