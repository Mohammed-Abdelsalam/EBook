import React, { useEffect, useState } from "react";
import instance from "../../APIs/APIs";
import { Link } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

const Ebook = () => {
  const [Pro, setPro] = useState([]);

  useEffect(() => {
    instance.get("/api/v2/storefront/products").then((res) => {
      console.log(res.data.data);
      setPro(res.data.data);
    });
  }, []);

  return (
    <>
      <Nav />
      <Box sx={{ flexGrow: 1, p: 3, height: "74vh" }}>
        <Grid container spacing={2}>
          {Pro.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Link to={item.id} style={{ textDecoration: "none" }}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardMedia
                    component="img"
                    alt="Product Image"
                    height="250"
                    image={
                      "http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp" ||
                      item?.attributes?.course?.image_url ||
                      item?.attributes?.book?.image_url
                    }
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.attributes?.course?.title ||
                        item?.attributes?.book?.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item?.attributes?.course?.description ||
                        item?.attributes?.book?.description}
                    </Typography>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        mt: 2,
                      }}
                    >
                      <Typography variant="body2" color="text.secondary">
                        {item?.attributes?.currency ||
                          item?.attributes?.currency}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {item?.attributes?.price || item?.attributes?.price}
                      </Typography>
                    </Box>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      variant="outlined"
                      sx={{ color: "black", border: "1px solid white" }}
                    >
                      Buy Now
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ color: "black", border: "1px solid white" }}
                    >
                      Details
                    </Button>
                  </CardActions>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
      <Footer />
    </>
  );
};

export default Ebook;
