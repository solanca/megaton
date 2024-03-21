import {
  Box,
  Grid,
  Input,
  InputAdornment,
  Typography,
  styled,
} from "@mui/material";
import { useState } from "react";
import PoolSelectItem from "./PoolSelectItem";

const Root = styled(Box)(() => ({
  position: "relative",
}));
const SelectedRoot = styled(Box)(({ theme }) => ({
  width: "200px",
  padding: "6px 14px",
  borderRadius: 18,
  backgroundColor: theme.palette.grey[theme.palette.mode === "light"? 100:700],
  cursor: "pointer",
}));
const SelectRoot = styled(Box)(({ theme }) => ({
  borderRadius: 18,
  backgroundColor: theme.palette.grey[theme.palette.mode === "light"? 100:700],
  position: "absolute",
  top: 60,
  width: "200px",
  padding: "6px 14px",
}));

const PoolSelect = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Root>
      <SelectedRoot onClick={() => setOpen(!open)}>
        <Grid container justifyContent="space-between" >
          <Grid item>
            <Typography sx={{ml:2}}>Prize imit</Typography>
          </Grid>
          <Grid item>
            <Grid container columnGap={1} sx={{mr:2}}>
              <Typography>#53</Typography>
              <img src="assets/icon/down-gray.svg" alt="down" />
            </Grid>
          </Grid>
        </Grid>
      </SelectedRoot>
      {open ? (
        <SelectRoot>
          <Input
            startAdornment={
              <InputAdornment position="start">
                <img src="assets/icon/search.svg" alt="search" />
              </InputAdornment>
            }
            placeholder="Search"
            sx={{ mx: 2 }}
          />
          <Box
            sx={{
              height: "180px",
              overflowY: "scroll",
              "&::-webkit-scrollbar": {
                width: "2px",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f0f0f0",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#888",
                borderRadius: "2px",
                "&:hover": {
                  backgroundColor: "#555",
                },
              },
            }}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((_item, index) => (
              <PoolSelectItem key={index} />
            ))}
          </Box>
        </SelectRoot>
      ) : (
        ""
      )}
    </Root>
  );
};

export default PoolSelect;
