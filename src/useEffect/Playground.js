import React, { useState, useEffect } from "react";

function Playground() {
  const [word, setWord] = useState("hello");
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Renders each time component updates!");
    /* 
      Be careful, there are only few cases when you need something like that, you can easily
      get race condition if you will update state here (infinite loop update <-> re-render)
      Most probably you need dependency array.
      */
  });

  useEffect(() => {
    console.log("I will run only once!");
  }, []);

  useEffect(() => {
    console.log("Renders only on word change!");
  }, [word]);

  useEffect(() => {
    console.log("Renders on word || language change change!");
    fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/${selectedLanguage}/${word}`
    )
      .then((response) => response.json())
      .then((json) => setData(json));
    /* 
      Dependency array is doing shallow comparison only. 
      If you will give an object -> it will not work, because object will change a reference each render, because it will be recreated!
      */
  }, [selectedLanguage, word]);

  function renderRadio(language) {
    return (
      <div>
        <input
          type="radio"
          name="language"
          checked={selectedLanguage === language}
          onChange={() => {
            setSelectedLanguage(language);
          }}
        />
        {language}
      </div>
    );
  }

  return (
    <>
      <input
        name="word"
        value={word}
        placeholder="Enter the word"
        onChange={(e) => setWord(e.target.value)}
      />
      {renderRadio("en")}
      {renderRadio("de")}

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}

export default Playground;
