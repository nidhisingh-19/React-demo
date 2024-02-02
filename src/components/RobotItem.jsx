// Importing Button from material UI.
import { Button } from '@mui/material';

// Importing format from date-fns.
import { format } from 'date-fns';

// Importing Link from react-router dom.
import { Link } from 'react-router-dom';

const RobotItem = ({ robot, selectedMaterial, handleAddToCart }) => {
  const { id, name, image, price, createdAt, stock, material } = robot;

  /**
   * Formats the date in required Format.
   * @param {createdAt} date
   * @returns {formatedDate}
   **/
  const formatedDate = (createdAt) => {
    return (format(createdAt, 'dd-MM-yyyy'));
  }

  /**
   * Formates the Price in required Format.
   * @param {price}
   * @returns {formatPrice}
   **/
  const formatPrice = (price) => {
    return `฿${price.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  };

  const formattedDate = formatedDate(createdAt);
  const convertedPrice = formatPrice(price);

  /**
   * When no such robot is find whose material is matched with the selected material.
   * @returns {null}
   **/
  if (selectedMaterial && material !== selectedMaterial) {
    return null;
  }

  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', textAlign: 'center' }}>
      <img src={image} alt={name} style={{ maxWidth: '100%', height: 'auto' }} />
      <h3>Name: {name}</h3>
      <p>Stock: {stock}</p>
      <p>Price: {convertedPrice}</p>
      <p>Created Date: {formattedDate}</p>
      <p>Material: {material}</p>

      {stock === 0 ? (
        <Button variant="contained" disabled style={{ color: 'black', border: '2px solid black' }}>
          Out of Stock
        </Button>
      ) : (
        <Button variant="contained" color="success" onClick={handleAddToCart}>
          Add to Cart
        </Button>)}
      <Link to={`/view`} state={{ robot }}>
        <Button variant="contained" color="primary" style={{ marginLeft: '10px' }}>
          View
        </Button>
      </Link>

    </div>
  );
};

export default RobotItem;








