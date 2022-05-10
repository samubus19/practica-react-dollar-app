import React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { motion } from "framer-motion";

export default function DolarItem({ dolar }) {
  return (
    <Grid item xs={12} md={4} sm={6}>
      <Card
        style={{
          background: "rgba(255,255,255,0.7)",
          backdropFilter: "blur(5px)",
          padding: "16px",
          borderRadius: "16px",
        }}
      >
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 20 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <CardActionArea>
            <motion.a whileHover={{scale: 0.8}} href="https://www.youtube.com" target={'_blank'}>
                <CardMedia
                    component="img"
                    height="160"
                    image="https://cdn.pixabay.com/photo/2018/06/20/18/06/cash-3487046_960_720.png"
                    alt="Dollar"
                />
            </motion.a>
            <CardContent
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Typography gutterBottom variant="h5" component="div">
                {dolar.casa.nombre}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Precio compra:
                <span style={{ color: "green" }}>${dolar.casa.compra} ARS</span>
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Precio venta: 
                <span style={{ color: "green" }}>${dolar.casa.venta} ARS </span>
              </Typography>
            </CardContent>
          </CardActionArea>
        </motion.div>
      </Card>
    </Grid>
  );
}
