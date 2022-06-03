import "./App.css";
import MyAppBar from "./MyAppBar";
import { Button, Container, Grid, Paper } from "@mui/material";
import Sentence from "./Sentence";
import Words from "./Words";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { useEffect, useState } from "react";
import words_from_server from "./bulk_back";
import initialState from "./initial_state";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import AlertTitle from "@mui/material/AlertTitle";

function App() {
  let btnStyle = initialState().initialState.at(0).btn;
  let alertVal = words_from_server().messages.at(0).value;
  let alertType = words_from_server().messages.at(0).state;


  const [open, setOpen] = useState(true);

  const [filledWords, setFilledWords] = useState([]);
  const [wordsToFill, setWordsToFill] = useState([]);
  const [i, setI] = useState(0);
  useEffect(() => {
    setFilledWords(words_from_server().answerSentence);
    setWordsToFill(words_from_server().wordsToFill);
    console.log("effected");
  }, []);

  const onDropped = (id, droppedToIndex) => {
    //Находим слово, которое дропнули
    let droppedWord = wordsToFill.find((word) => word.id == id);
    let deleteFromFilled = !droppedWord;
    setFilledWords((filled) => {
      if (!droppedWord) {
        droppedWord = filled.find((word) => word.id == id);
      }
      if (deleteFromFilled) filled = filled.filter((word) => word.id != id);
      filled.splice(droppedToIndex, 0, droppedWord);
      console.table("sending filled words to server:");
      console.table(filled);
      return filled;
    });

    setWordsToFill((toFill) => {
      let newToFill = toFill.filter((word) => word.id != id);
      console.table("sending words to fill to server:");
      console.table(newToFill);
      return newToFill;
    });
    setI(Date.now().toString()); //force update
  };
  return (
    <div className="App">
      <MyAppBar />

      <Container>
        <Paper
          elevation={8}
          style={{ padding: 20, margin: "auto", marginTop: 200, maxWidth: 900 }}
        >
          <DndProvider backend={HTML5Backend}>
            <hr></hr>
            <Sentence
              onDropped={(id, droppedToIndex) => onDropped(id, droppedToIndex)}
              answeredWords={filledWords}
            />
            <hr></hr>
            <br />
            <br />
            <Words
              onDropped={(id, droppedToIndex) => onDropped(id, droppedToIndex)}
              words={wordsToFill}
            />
          </DndProvider>
          <br />
          <br />
          <Button
            color={btnStyle}
            variant="contained"
            onClick={() => {
              console.log("check pressed");
              console.table("sending filled words to server:");
              console.table(filledWords);
              console.table("sending words to fill to server:");
              console.table(wordsToFill);
              setOpen(true);
            }}
          >
            Check
          </Button>
        </Paper>

        <Collapse in={open}>
          <Alert
            severity={alertType}
            style={{margin: 20}}
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                X
              </IconButton>
            }
            sx={{ mb: 2 }}
          >
            {alertVal}
          </Alert>
        </Collapse>
      </Container>
    </div>
  );
}

export default App;
