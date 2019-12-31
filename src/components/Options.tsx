import React, { useEffect, useState } from "react";

type Props = {
  options: {
    [key: string]: string;
  };
  answer: string;
  onOptionClick: (option: string) => void;
};

const Options: React.FC<Props> = ({ options, answer, onOptionClick }) => {
  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);

  useEffect(() => {
    setChosenAnswer(null);
  }, [options]);

  const onOptionChosen = (key: string) => {
    console.log(key);
    setChosenAnswer(key);
    onOptionClick(key);
  };

  const getButtonClassName = (key: string) => {
    if (chosenAnswer === null) {
      return "options-button";
    } else if (key === answer) {
      return "options-button button-correct";
    } else if (key === chosenAnswer) {
      return "options-button button-incorrect";
    } else {
      return "options-button button-not-chosen";
    }
  };

  return (
    <>
      <div className="options-container">
        {Object.entries(options).map(([key, value]) => (
          <div key={key} className="option">
            <button
              className={getButtonClassName(key)}
              onClick={() => onOptionChosen(key)}
              disabled={chosenAnswer !== null}
            >
              <h3>{key.toUpperCase() + ")"}</h3>
              <p>{value}</p>
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Options;
