import * as React from "react";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import messages from "./bulk_back";

function TransitionAlerts() {
  const message = messages().messages.at(0).value;
  const state = messages().messages.at(0).state;

  //console.log(message)
  return { message };
}
