import {
  Box,
  Chip,
  FormControl,
  InputAdornment,
  OutlinedInput,
  Button,
} from "@mui/material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useState } from "react";
import { useNavigate } from "react-router";

export function Search() {
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Buscando", textValue);
    navigate("/productos?search=" + textValue);
  };

  return (
    <FormControl
      sx={{ width: { xs: "100%", md: "25ch" } }}
      variant="outlined"
      onSubmit={handleSubmit}
    >
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Search…"
        onChange={(e) => {
          setTextValue(e.target.value);
          navigate("/productos?search=" + e.target.value);
        }}
        value={textValue}
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
      <Button onClick={handleSubmit}>Buscar</Button>
    </FormControl>
  );
}

// const handleClickChip = (item) => {
//   const navigate = useNavigate();
//   console.info("You clicked the filter chip.", item);
//   navigate("/productos?filtro=" + item);
// };

export function FiltrosItemGrid() {
  const navigate = useNavigate();

  const handleClickChip = (item) => {
    console.info("Elegida la opción", item);
    if (item == "completo") navigate("/productos");
    else navigate("/productos?categoria=" + item);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: { xs: "start", md: "center" },
          gap: 4,
          overflow: "auto",
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            flexDirection: "row",
            gap: 3,
            overflow: "auto",
          }}
        >
          <Chip
            onClick={() => handleClickChip("completo")}
            size="medium"
            label="completo"
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
          <Chip
            onClick={() => handleClickChip("electronics")}
            size="medium"
            label="electronics"
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
          <Chip
            onClick={() => handleClickChip("jewelery")}
            size="medium"
            label="jewelery"
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
          <Chip
            onClick={() => handleClickChip("men's clothing")}
            size="medium"
            label="men's clothing"
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
          <Chip
            onClick={() => handleClickChip("women's clothing")}
            size="medium"
            label="women's clothing"
            sx={{
              backgroundColor: "transparent",
              border: "none",
            }}
          />
        </Box>
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            flexDirection: "row",
            gap: 1,
            width: { xs: "100%", md: "fit-content" },
            overflow: "auto",
          }}
        >
          <Search />
        </Box>
      </Box>
    </>
  );
}
