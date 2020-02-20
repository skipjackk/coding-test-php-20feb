import React from "react";
import axios from "axios";

import { Button, Card } from "antd";

import CustomForm from "../components/Form";

class ProductDetail extends React.Component {
  state = {
    product: {}
  };

  componentDidMount() {
    const productID = this.props.match.params.productID;
    axios.get(`http://127.0.0.1:8000/api/${productID}`).then(res => {
      this.setState({
        product: res.data
      });
    });
  }

  handleDelete = event => {
    const productID = this.props.match.params.productID;
    axios.delete(`http://127.0.0.1:8000/api/${productID}/`);
    this.props.history.push("/");
    this.forceUpdate();
  };

  render() {
    return (
      <div>
        <Card title={this.state.product.title}>
          <p>{this.state.product.content}</p>
        </Card>
        <CustomForm
          requestType="put"
          productID={this.props.match.params.productID}
          btnText="Update"
        />
        <form onSubmit={this.handleDelete}>
          <Button type="danger" htmlType="submit">
            Delete
          </Button>
        </form>
      </div>
    );
  }
}

export default ProductDetail;
