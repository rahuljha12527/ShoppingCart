import React from "react";
import "./App.css";
import Navbar from "./Navbar";
import Cart from "./Cart";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: 99,
          title: "Watch",
          qty: 1,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQCKOHWvr5qtB2nweot9D8EZEJgIr6QbRxtenVr7VS-9KHf4t5B9bhVByFKp6HAoU2kvp6qQ-Xm&usqp=CAc",
          id: 1,
        },
        {
          price: 999,
          title: "Mobile Phone",
          qty: 10,
          img:
            "https://cdn.vox-cdn.com/thumbor/OPPXeRAbSG5MKsVYq8qe-lLndbg=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19206401/akrales_190914_3666_0259.jpg",
          id: 2,
        },
        {
          price: 999,
          title: "Laptop",
          qty: 1,
          img:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSTj6Z3UbaubPu8s0HU2Q_SPf3c68_qPbLeu6TSXv6gWiQZnyYcuqOtg-tTWYM&usqp=CAc",
          id: 3,
        },
      ],
    };
    // this.increaseQuantity=this.increaseQuantity.bind(this);
  }

  handleIncreaseQuantity = (product) => {
    console.log("Hey please increase the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;
    this.setState({
      products: products,
    });
  };

  handleDecreaseQuantity = (product) => {
    console.log("Hey please increase the qty of", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    products[index].qty -= 1;
    this.setState({
      products: products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;
    const items = products.filter((item) => item.id !== id);

    this.setState({
      products: items,
    });
  };

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };
  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {/* <CartItem /> */}
      </div>
    );
  }
}

export default App;
