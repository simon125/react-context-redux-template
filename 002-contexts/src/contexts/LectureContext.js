import { createContext, useState } from "react";

export const LectureContext = createContext();

export const LectureContextProvider = (props) => {
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };

  const obiektKtóryBędzieWidocznyWObrębieContextu = {
    name: "Heniek",
    age: 123,
    sayHello: () => console.log("cześć"),
    counter: counter,
    increaseCounter: increaseCounter,
  };

  return (
    <LectureContext.Provider value={obiektKtóryBędzieWidocznyWObrębieContextu}>
      {props.children}
    </LectureContext.Provider>
  );
};
