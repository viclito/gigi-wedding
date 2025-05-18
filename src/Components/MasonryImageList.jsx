import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Modal from "@mui/material/Modal";
import { useState } from "react";
import LazyMasonryImage from "./LazyImageCard";

export default function MasonryImageList({ itemData }) {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (img) => {
    setSelectedImage(img);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{ maxWidth: 1300, height: "auto", margin: "auto" }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <LazyMasonryImage
              src={item.img}
              alt={item.title}
              onClick={() => handleOpen(item.img)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", md: "70%" },
            height:{xs: "70vh", md:'100vh'},
            margin:'auto',
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            display:'flex',
            alignItems:'center'
          }}
        >
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Enlarged"
              style={{ maxWidth: "100%", maxHeight: "100%", borderRadius: "8px" , margin:'auto' }}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
}
