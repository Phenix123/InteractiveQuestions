import App from "./App";
import AppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography } from "@mui/material";
import initialState from "./initial_state";

let url = initialState().initialState.at(0).url;

function MyAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src={`${url}`} alt="Logo" width={200}></img>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default MyAppBar;
