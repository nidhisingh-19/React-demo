// Importing React.
import React from 'react';

// Importing useLocation from react-router-dom.
import { useLocation } from 'react-router-dom';

// Importing Box from Material UI.
import Box from '@mui/material/Box';

function RobotView(props) {
  // const { robot } = props;
  const navigate = useLocation();
  const { robot } = navigate.state;

  if (!robot) {
    return 'This is the view page, and no robot data found.';
  }

  return (
    <Box
      sx={{
        width: 150,
        height: 200,
        backgroundColor: 'grey',
      }}>
      <p>{robot.name}</p>
      <p>{robot.stock}</p>
      <p>{robot.price}</p>
      <p>{robot.material}</p>

    </Box>
  );
}

export default RobotView;
