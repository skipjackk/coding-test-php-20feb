import React from "react";
import axios from "axios";

import Products from "../components/Product";
import CustomForm from "../components/Form";

class ProductList extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    axios.get("http://127.0.0.1:8000/api/").then(res => {
      this.setState({
        products: res.data
      });
    });
  }

  render() {
    return (
      <div>
        <Products data={this.state.products} />
        <br />
        <h2>Create New Data Product</h2>
        <CustomForm requestType="post" productID={null} btnText="Create" />
      </div>
    );
  }
}

export default ProductList;
