

class App extends React.Component {
  state = {
    grocery: groceryItems,
    item: "",
    brand: "",
    units: "",
    quantity: "",
    isPurchased: false,
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()

    const newItem = {
      item: this.state.item,
      brand: this.state.brand,
      units: this.state.units,
      quantity: this.state.quantity,
      isPurchased: this.state.isPurchased
    }

    this.setState({
      grocery:[
        newItem, ...this.state.grocery       
      ],
      item: "",
      brand: "",
      units: "",
      quantity: "",
      isPurchased: false,
    })
  }


  render() {
    return (
      <div className="main">
        <div className="list">
        <h1>Grocery List</h1>
          {
            this.state.grocery.map(item => {
              return(
                <div className="product">
                  <h3>Item: {item.item}</h3>
                  <p>Quantity: {item.quantity}</p>
                  <p>Units: {item.units}</p>
                </div>
              )
            })
          }
        </div>

        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="item">item</label>
            <input type="text" onChange={this.handleChange} value={this.state.item} id="item"/>

            <label htmlFor="units">units</label>
            <input type="text" onChange={this.handleChange} value={this.state.units} id="units"/>

            <label htmlFor="quantity">quantity</label>
            <input type="text" onChange={this.handleChange} value={this.state.quantity} id="quantity"/>

            <br />
            <input type="submit" value="add to cart"/>
          </form> 
        </div>

      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector("#container")
);
