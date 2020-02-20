import React from "react";
import { Form, Input, Button } from "antd";

import axios from "axios";

// const FormItem = Form.Item;

class CustomForm extends React.Component {
  handleFormSubmit = (event, requestType, productID) => {
    const title = event.target.elements.title.value;
    const content = event.target.elements.content.value;

    switch (requestType) {
      case "post":
        return axios.post("http://127.0.0.1:8000/api/", {
          title: title,
          content: content
        });
      case "put":
        return axios.put(`http://127.0.0.1:8000/api/${productID}/`, {
          title: title,
          content: content
        });
    }
  };
  render() {
    return (
      <div>
        <Form
          onSubmit={event =>
            this.handleFormSubmit(
              event,
              this.props.requestType,
              this.props.productID
            )
          }
        >
          <Form.Item label="Title">
            <Input name="title" placeholder="Put Title" />
          </Form.Item>
          <Form.Item label="Content">
            <Input name="content" placeholder="Enter Description" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              {this.props.btnText}
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default CustomForm;
