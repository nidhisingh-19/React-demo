import React from 'react';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const Cart = ({ selectedRobots, removeFromCart, incrementQuantity, decrementQuantity }) => {
  let totalQuantity = 0;
  for (let count of selectedRobots) {
    totalQuantity += count.quantity;
  }

  let totalAmount = 0;

  for (let amount of selectedRobots) {
    let priceQuantity = amount.quantity;
    totalAmount += Number(amount.price);
    totalAmount *= priceQuantity;

  }
  let formattedTotal = (`฿${totalAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`);

  return (
    <div style={{ position: 'fixed', top: '10px', right: '10px', textAlign: 'center' }}>
      <h2>
        <ShoppingCartCheckoutIcon />
        Cart
      </h2>

      <TableContainer>
        <Table>
          <TableHead style={{ backgroundColor: '#77c3ec' }}>
            <TableRow>
              <TableCell>
                <strong>Robo's Name</strong>
              </TableCell>
              <TableCell>
                <strong>Quantity</strong>
              </TableCell>
              <TableCell>
                <strong>Total Price</strong>
              </TableCell>
              <TableCell>
                <strong>Action</strong>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ border: '1px solid black', backgroundColor: '#FFD580' }}>
            {selectedRobots.map((robot, index) => (
              <TableRow key={index}>
                <TableCell>{robot.name}</TableCell>
                <TableCell>
                  <button variant="contained" onClick={() => incrementQuantity(index)}>
                    +
                  </button>
                  {robot.quantity}
                  <button variant="contained" onClick={() => decrementQuantity(index)}>
                    -
                  </button>
                 
                </TableCell>
                <TableCell>{robot.totalPrice}</TableCell>
                <TableCell>
                  <button onClick={() => removeFromCart(robot.id)}>Remove</button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell colSpan={4} style={{ textAlign: 'right' }}>
                <strong>Total Selected Robots: {totalQuantity}</strong>
              </TableCell>
            </TableRow>
            <TableRow>
            <TableCell colSpan={4} style={{ textAlign: 'right' }}>
                <strong>Total Price {formattedTotal}</strong>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Cart;
