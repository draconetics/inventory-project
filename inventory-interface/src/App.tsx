import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import BrandListComponent from './components/BrandListComponent';
import ProductCreateComponent from './components/ProductCreateComponent';
import ProductListComponent from './components/ProductListComponent';
import SaleListComponent from './components/SaleListComponent';
import Home from './components/Home';
import ProductViewComponent from './components/ProductViewComponent';
import MenuComponent from './components/MenuComponent';
import NotFoundComponent from './components/NotFoundComponent'

function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <MenuComponent />
        </div>
        <Switch>
            <Route exact path={["/","/home"]} component={Home}></Route>
            <Route exact path={'/brands'} component={BrandListComponent}></Route>
            <Route exact path={'/products'} component={ProductListComponent}></Route>
            <Route exact path={'/sales'} component={SaleListComponent}></Route>
            <Route exact path={'/products/create'} component={ProductCreateComponent}></Route>
            <Route exact path={'/products/:id'} component={ProductViewComponent} />
            <Route path='/404' component={NotFoundComponent} />
            <Redirect from='*' to='/404' />
        </Switch>
    </BrowserRouter>
  );
}

export default App;
