import Word from "./Word";
import words_from_server from "./bulk_back";

function Words({ onDropped, words }) {
  //console.log(words);
  return (
    <div>
      {words.map((word, index) => (
        <Word
          key={word.id}
          onDropped={onDropped}
          name={word.value}
          id={word.id}
          disabled={!words[index].enabled}
        />
      ))}
    </div>
  );
}

export default Words;
