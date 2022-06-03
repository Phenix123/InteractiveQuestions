import { Button, Typography } from "@mui/material";
import { grey } from '@mui/material/colors';
import { useDrag, useDrop } from "react-dnd";
import { ItemTypes } from "./itemTypes";
import { useRef } from "react";
import initialState from "./initial_state";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      neutral: {
        main: '#64748B',
        contrastText: '#fff',
      },
    },
  });

function Word({ onDropped, name, id, disabled }) {
  const [collected, drag, dragPreview] = useDrag(() => ({
    type: ItemTypes.WORD,
    item: { id },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        onDropped(item.id, dropResult.id);
      }
    },
    collect: (monitor) => (
      {
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      },
      [id]
    ),
  }));

  const sentenceStyle = initialState().initialState.at(0).sentence;

  const opacity = collected.isDragging ? 0.4 : 1;
  return (
    <ThemeProvider theme={theme}>
        <Button
        ref={disabled ? null : collected.isDragging ? dragPreview : drag}
        data-testid={id}
        variant="contained"
        color={ !disabled ? sentenceStyle : "neutral" }
        style={{ marginLeft: 10, marginRight: 10, opacity }}
        {...collected}
        >
        {name}
        </Button>
    </ThemeProvider>
  );
}

export default Word;
