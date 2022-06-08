import React from "react";

class AddItem extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    this.state = {
      productName: "",
      productPrice: 0,
    };
  }

  render() {
    return (
      <form
        className="mb-5"
        onSubmit={(event) => {
          event.preventDefault();
          this.props.addItem(
            this.state.productName,
            Number(this.state.productPrice)
          );
        }}
      >
        <div className="mb-3">
          <label htmlFor="inputName" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputName"
            aria-describedby="name"
            name="productName"
            onChange={(event) => {
              this.setState({ productName: event.currentTarget.value });
            }}
            value={this.state.productName}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="inputPrice"
            name="productPrice"
            onChange={(event) => {
              this.setState({
                productPrice: Number(event.currentTarget.value),
              });
            }}
            value={this.state.productPrice}
          />
        </div>

        <button type="submit" className="btn btn-primary" onClick={() => {}}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddItem;
