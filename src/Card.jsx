import { useEffect, useState } from "react";
import Count from "./Count";
import CountButtons from "./CountButtons";
import CountButton from "./CountButton";
import ResetButton from "./ResetButton";
import Title from "./Title";

export default function Card() {
  const [count, setCount] = useState(1);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space") {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
        } else {
          setCount(newCount);
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [count]);

  const handleReset = (e) => {
    setCount(0);

    e.currentTarget.blur();
  };

  const handleClick = (type, e) => {
    if (type === "plus") {
      if (count < 5) {
        setCount(count + 1);
      } else {
        setCount(5);
      }
    }
    if (type === "minus") {
      if (count > 0) {
        setCount(count - 1);
      } else {
        setCount(0);
      }
    }

    e.currentTarget.blur();
  };

  return (
    <div className={`card ${locked ? "card--limit" : ""}`}>
      <Title locked={locked} />
      <Count count={count} />
      <ResetButton onButtonReset={handleReset} />
      <CountButtons>
        <CountButton type="minus" onButtonClick={handleClick} locked={locked} />
        <CountButton type="plus" onButtonClick={handleClick} locked={locked} />
      </CountButtons>
    </div>
  );
}
