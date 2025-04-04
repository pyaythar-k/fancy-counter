import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

export default function CountButton({ type, onButtonClick, locked }) {
  return (
    <button
      disabled={locked}
      className="count-btn"
      onClick={() => onButtonClick(type)}
    >
      {type === "minus" && <MinusIcon className="count-btn-icon" />}
      {type === "plus" && <PlusIcon className="count-btn-icon" />}
    </button>
  );
}
