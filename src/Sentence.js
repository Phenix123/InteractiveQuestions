import { Typography } from "@mui/material";
import Word from "./Word";
import PlaceForWord from "./PlaceForWord";

function Sentence({ answeredWords, onDropped }) {
  let lastIndex = answeredWords.length + 1;
  return (
    <Typography>
      <PlaceForWord id={0} />
      {answeredWords.map((word, i) => (
        <i key={word.id}>
          <Word
            onDropped={onDropped}
            name={word.value}
            id={word.id}
            disabled={!word.enabled}
          />
          <PlaceForWord id={i + 1} />
        </i>
      ))}
      {lastIndex != 1 ? <PlaceForWord id={lastIndex} /> : ""}
    </Typography>
  );
}

export default Sentence;
