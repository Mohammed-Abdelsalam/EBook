import React, { useEffect, useState } from "react";
import instance from "../../APIs/APIs";
import { Link, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Nav from "../../Components/Nav/Nav";
import Footer from "../../Components/Footer/Footer";

const Details = () => {
  const [DPro, setDPro] = useState([]);
  let { id } = useParams();
  useEffect(() => {
    instance.get(`/api/v2/storefront/products/${id}`).then((res) => {
      console.log(res.data.data);
      setDPro(res.data.data);
    });
  }, [id]);

  return (
    <>
      <Nav />
      <Box
        sx={{
          minHeight: "calc(100vh - 64px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Details</h1>
        <Box sx={{ maxHeight: "90%", maxWidth: "90%" }}>
          <CardMedia
            component="img"
            alt="green iguana"
            // img url not return img so i use online image
            image={
              "http://bigramyweb.inovaeg.com/static/media/banner.5d002eef3c2ca31636eb.webp" ||
              DPro?.attributes?.course?.image_url ||
              DPro?.attributes?.book?.image_url
            }
          />
          <Box>
            <Typography
              gutterBottom
              variant="h2"
              component="div"
              sx={{ color: "white" }}
            >
              {DPro?.attributes?.course?.title || DPro?.attributes?.book?.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ color: "white" }}
            >
              {DPro?.attributes?.course?.description ||
                DPro?.attributes?.book?.description}
            </Typography>
            <Box>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                {DPro?.attributes?.currency || DPro?.attributes?.currency}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ color: "white" }}
              >
                {DPro?.attributes?.price || DPro?.attributes?.price}
              </Typography>
            </Box>
          </Box>
          <Box>
            <Button
              variant="primary"
              sx={{ color: "white", border: "1px solid white" }}
            >
              Buy Now
            </Button>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default Details;
