import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Container, Grid } from "@mui/material";


const CategoryCard = (props) => {
    const { categories } = props;
    console.log(props);
    return (
        <>
            <Container>
                <Grid container spacing={2} mt={2}>
                    {categories.map((item) => (
                        <Card key={item.id} sx={{ maxWidth: 160 }} elevation={4}>
                            <CardContent>
                                <Typography gutterBottom variant="h6" component="div" sx={{ fontSize: '16px', fontWeight: 'bolder', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' }}>
                                    {item.categoryName}
                                </Typography>
                                <CardMedia
                                    sx={{ height: 120, width: 160 }}
                                    image={item.categoryImageSlug[0]}
                                    title="green iguana"
                                />
                            </CardContent>
                        </Card>
                    ))}
                </Grid>

            </Container>
        </>
    )
}

export default CategoryCard;