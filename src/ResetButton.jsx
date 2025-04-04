import { ResetIcon } from "@radix-ui/react-icons";

export default function ResetButton({ onButtonReset }) {
  return (
    <button className="reset-btn" onClick={onButtonReset}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
}
