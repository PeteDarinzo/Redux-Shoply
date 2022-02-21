import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "reactstrap";
import { useSelector, shallowEqual } from "react-redux";
import "./NavBar.css";

const NavBar = () => {
  const { products, cart } = useSelector(
    st => ({ products: st.products, cart: st.cart }),
    shallowEqual // does a shallow equality check on the values
  );

  let totalProducts = 0;
  let subtotal = 0;

  for (let product of cart) {
    totalProducts += product.qty;
    const price = (products[product.id]).price;
    subtotal += (product.qty * price);
    subtotal.toFixed(2);
  }

  return (
    <div>
      <Navbar expand="md" className="py-3">
        <NavLink exact to="/" className="navbar-brand">
          Shoply
        </NavLink>
        <Nav className="ml-auto" navbar>
            <span>Items: {totalProducts}</span>
            <span className="subtotal">Subtotal: $ {subtotal}</span>
          <NavItem>
            <NavLink to="/cart">Cart</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavBar;