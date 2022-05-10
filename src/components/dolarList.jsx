import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DolarItem from './DolarItem';
import {getAllDolars} from '../app/services/dolarServices';



export default function DolarList() {

  const [dollars, setDollars] = useState([]);

  useEffect(() => {
    getAllDolars().then((data) => setDollars(data));
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 2 }} style={{padding:'16px'}}>
        {
          dollars?.map((dollar) => (
            <DolarItem dolar={dollar}/>
          ))
        }
      </Grid>
    </Box>
  );
}
