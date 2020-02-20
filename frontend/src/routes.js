import React from "react";
import { Route } from "react-router-dom";

import ProductList from "./containers/ProductListView";
import ProductDetail from "./containers/ProductDetailView";
import Login from "./containers/Login";
import Register from "./containers/Register";

const BaseRouter = () => (
  <div>
    <Route exact path="/" component={ProductList}></Route>
    <Route exact path="/products/:productID/" component={ProductDetail}></Route>
    <Route exact path="/login/" component={Login}></Route>
    <Route exact path="/register/" component={Register}></Route>
  </div>
);

export default BaseRouter;
