import { Box, Container, Tab, Tabs } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";

const ShopByCategory = () => {

    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        getCategorySections();
    }, []);


    function getCategorySections() {
        const URL = "http://localhost:3000/category";
        axios.get(URL).then((resp) => {
            if (resp) {
                setCategoryList(resp.data);
            }
        }).catch((error) => {

        })
    }

    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        console.log(newValue);
        setValue(newValue);
    };

    return (
        <>
            <Container sx={{ border: 2, marginTop: 5 }}>
                <Box sx={{ width: '100%', maxWidth: '1200px', bgcolor: 'background.paper' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        {
                            categoryList.map((category) => (

                                <Tab key={category.id} label={category.categoryName}></Tab>
                            ))
                        }
                    </Tabs>
                </Box>
            </Container>
        </>
    )
}

export default ShopByCategory;