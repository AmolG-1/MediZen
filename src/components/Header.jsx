import React, { useContext, useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import { CartContext } from '../context/CartContext';

const Header = () => {
  const [medicineList, setMedicineList] = useState([]);
  const [searchText, setSerarchText] = useState("");
  const navigate = useNavigate();
  const {cartCount} = useContext(CartContext);

  useEffect(() => {
    //o x y
    const timeOutRef = setTimeout(() => {
      fetchDataFromServer()
    }, 500);

    return () => clearTimeout(timeOutRef);
  }, [searchText]);

  function fetchDataFromServer() {
    const URL = `http://localhost:3000/medicines?q=${searchText}`
    axios.get(URL).then((response) => {
      if (response) {
        setMedicineList(response.data);
      }
    }).catch((error) => {
      console.log("error", error.message);
    })
  }

  function redirctTo(event) {
    if (searchText != "") {
      navigate(`/order-medicine/search/${searchText}`)
    }
  }

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: '#ffffff', color: 'black' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              {/* <MenuIcon /> */}
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              MediZen
            </Typography>

            <Autocomplete
              freeSolo
              id="free-solo-2-demo"
              disableClearable
              sx={{ width: 350, borderRadius: 20, padding: 1 }}
              options={medicineList}
              getOptionLabel={(option) => option.name}
              onInputChange={(e, value) => setSerarchText(value)}
              onChange={(e) => redirctTo(e)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Search"
                  placeholder="Find Medicine , health products, &more"
                  slotProps={{
                    input: {
                      ...params.InputProps,
                      type: 'search',
                    },
                  }}
                />
              )}
            />


            <IconButton color="primary" aria-label="add to shopping cart">
              <Badge badgeContent={cartCount} color="primary">
               <NavLink to='/cart'> <AddShoppingCartIcon /> </NavLink>
              </Badge>
            </IconButton>
            <Button color="inherit">About Us</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Box>
    </>

  )
}

export default Header;