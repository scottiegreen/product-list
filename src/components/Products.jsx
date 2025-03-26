import React, { useEffect, useState } from "react";
import { getProductsList } from "../utils/apis";
import Card from "@mui/material/Card";
import { dividerClasses, Grid2, Typography } from "@mui/material"; 
import "./Products.css"
import { Link } from "react-router-dom";

const Products = () => {
  const [productList, setProductList] = useState([]);
 
  const descriptionMaxLength = 25; 

useEffect(() => {
     getProductsList()
      .then((data) => {
        setProductList(data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        
      });
  }, []);

  const truncateString = (inputString, maxLength, truncationMarker = "...") => {
    if (typeof inputString !== "string") {
      return String(inputString);
    }
    if (inputString.length <= maxLength) {
      return inputString;
    } else {
      return inputString.slice(0, maxLength - truncationMarker.length) + truncationMarker;
    }
  };

  return (
    <Grid2 className="products-container"  container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} >

      {productList.map((item) => (
        <Grid2 key={item.id} s ={4}>
          {/* <Link to={item.id}></Link> */}
          <Card 
           
          className="products-card">
            <img src={item.image} alt=""   style={{width:"100%",height:"550px"}}  />

            <Typography variant="h6" component="div">
            {truncateString(item.title, descriptionMaxLength)}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              {truncateString(item.description, descriptionMaxLength)}
            </Typography>

            <Typography variant="subtitle1">Price ${item.price}</Typography>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export default Products;

