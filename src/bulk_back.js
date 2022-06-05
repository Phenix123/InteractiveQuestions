const words_from_server = () => {
  return JSON.parse(
    "{\n" +
      '  "answerSentence": [\n' +
      "      {\n" +
      '        "id": 1,\n' +
      '        "index": 0,\n' +
      '        "value": "I",\n' +
      '        "enabled": false\n' +
      "      },\n" +
      "      {\n" +
      '        "id": 2,\n' +
      '        "index": 1,\n' +
      '        "value": "to",\n' +
      '        "enabled": false\n' +
      "      },\n" +
      "      {\n" +
      '        "id": 3,\n' +
      '        "index": 2,\n' +
      '        "value": "school",\n' +
      '        "enabled": false\n' +
      "      }\n" +
      "    ],\n" +
      "    \n" +
      '  "wordsToFill": [\n' +
      "    {\n" +
      '        "id": 4,\n' +
      '        "value": "go",\n' +
      '        "enabled": true\n' +
      "      },\n" +
      "      {\n" +
      '        "id": 5,\n' +
      '        "value": "will",\n' +
      '        "enabled": true\n' +
      "      },\n" +
      "      {\n" +
      '        "id": 6,\n' +
      '        "value": "tomorrow",\n' +
      '        "enabled": false\n' +
      "      }\n" +
      "    ],\n" +
      "    \n" +
      '  "messages": [\n' +
      '    {"value": "Warning message", "state": "error"}\n' +
      "    ]\n" +
      "}"
  );
};
export default words_from_server;
