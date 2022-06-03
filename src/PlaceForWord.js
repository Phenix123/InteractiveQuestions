import { Button } from "@mui/material";
import { ItemTypes } from "./itemTypes";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";

function PlaceForWord({ id }) {
  const [{ canDrop, isOver }, drop] = useDrop(
    () => ({
      accept: ItemTypes.WORD,
      drop: () => ({ id: id }),

      collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
      }),
    }),
    [id]
  );
  const isActive = canDrop && isOver;
  return (
    <Button
      style={{
        opacity: isActive ? "1" : "0",
        minWidth: 0,
        width: isActive ? 100 : 10,
        marginLeft: -10,
        marginRight: -10,
      }}
      ref={drop}
      data-testid={id}
      variant="outlined"
    >
      {isActive ? "..." : ""}
    </Button>
  );
}

export default PlaceForWord;
