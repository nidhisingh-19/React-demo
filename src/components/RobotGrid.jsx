// Importing React and useState from react.
import React, { useState } from 'react';

// Importing Grid, ButtonGroup, Select, and MenuItem from material UI.
import { Grid, ButtonGroup, Select, MenuItem } from '@mui/material';

// Importing other components.
import RobotItem from './RobotItem';
import robotsData from '../data/robots.json';
import Cart from './Cart';

// Importing style.
import './RobotGrid.css';

const RobotGrid = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null);
  const [selectedRobots, setSelectedRobots] = useState([]);

  /**
   * Fetches the current value of material.
   * @param {event}
   * @returns {void}
   **/
  const handleMaterialChange = (event) => {
    setSelectedMaterial(event.target.value);
  };

  /**
   * Filters the robots whose material is matched with the selected material.
   **/
  const filteredRobots = robotsData.data.filter(
    (robot) => !selectedMaterial || robot.material === selectedMaterial
  );

  /**
   * Handles add to cart action.
   * @param {robot} object
   * @returns {void}
   **/
  const handleAddToCart = (robot) => {
    const existingRobotIndex = selectedRobots.findIndex((r) => r.name === robot.name);
    if (existingRobotIndex !== -1) {
      const updatedRobots = [...selectedRobots];
      updatedRobots[existingRobotIndex].quantity += 1;
      updatedRobots[existingRobotIndex].totalPrice =
        updatedRobots[existingRobotIndex].quantity * robot.price;
      setSelectedRobots(updatedRobots);
      robot.stock -= 1;
    } else {
      setSelectedRobots((prevSelected) =>
        prevSelected.concat({ ...robot, quantity: 1, totalPrice: robot.price })
      );
      robot.stock -= 1;
    }

    /**
     * Prompts an alert when 5 or more than 5 different
     * robots have been added to the cart.
     **/
    if (selectedRobots.length >= 5) {
      alert(`Can't add more than 5 robots.`);
    }
  };

  /**
   * Handles remove from cart action.
   * @param {robotId} - Id of the robot which has to be removed from the Cart.
   **/
  const removeFromCart = (robotId) => {
    const existingRobotIndex = selectedRobots.findIndex((robot) => robot.id === robotId);

    if (existingRobotIndex !== -1) {
      const updatedRobots = [...selectedRobots];
      if (updatedRobots[existingRobotIndex].quantity > 1) {
        updatedRobots[existingRobotIndex].quantity -= 1;
        updatedRobots[existingRobotIndex].totalPrice =
          updatedRobots[existingRobotIndex].quantity * updatedRobots[existingRobotIndex].price;
      } else {
        updatedRobots.splice(existingRobotIndex, 1);
      }

      setSelectedRobots(updatedRobots);
    }
  };



  const incrementQuantity = (robotId) => {
    const updatedRobots = [...selectedRobots];
    const robotToUpdate = updatedRobots[robotId];
  
    robotToUpdate.quantity += 1;
    robotToUpdate.totalPrice = robotToUpdate.quantity * robotToUpdate.price;
  
    if (robotToUpdate.quantity === robotToUpdate.stock) {
      alert("Cannot add more, quantity equals stock.");
    }
  
    setSelectedRobots(updatedRobots);
  };
  

  const decrementQuantity = (robotId) => {
    const updatedRobots = [...selectedRobots];
    const robotToUpdate = updatedRobots[robotId];

    robotToUpdate.quantity -= 1;
    robotToUpdate.totalPrice = robotToUpdate.quantity * robotToUpdate.price;

    setSelectedRobots(updatedRobots);
  };



  return (
    <div className='grid'>
      <ButtonGroup>
        <Select
          value={selectedMaterial}
          onChange={handleMaterialChange}
          style={{
            position: 'fixed',
            top: '10px',
            left: '25%',
            border: '2px solid black',
          }}
        >
          <MenuItem value={null}>All Materials</MenuItem>
          <MenuItem value='Metal'>Metal</MenuItem>
          <MenuItem value='Plastic'>Plastic</MenuItem>
          <MenuItem value='Granite'>Granite</MenuItem>
          <MenuItem value='Wooden'>Wooden</MenuItem>
          <MenuItem value='Fresh'>Fresh</MenuItem>
          <MenuItem value='Frozen'>Frozen</MenuItem>
          <MenuItem value='Rubber'>Rubber</MenuItem>
          <MenuItem value='Cotton'>Cotton</MenuItem>
          <MenuItem value='Concrete'>Concrete</MenuItem>
          <MenuItem value='Soft'>Soft</MenuItem>
          <MenuItem value='Steel'>Steel</MenuItem>
        </Select>
      </ButtonGroup>
      <Grid container spacing={3} className='grid-outer'>
        {filteredRobots.map((robot, index) => (
          <Grid item key={index} xs={6} sm={3} className='grid-inner' margin='50px'>
            <RobotItem robot={robot} handleAddToCart={() => handleAddToCart(robot)} />
          </Grid>
        ))}
      </Grid>
      <Cart
        selectedRobots={selectedRobots}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
      />
    </div>
  );
};

export default RobotGrid;
