import "./button.css";

export default function Button({ disabled, text }) {
  return <button disabled={disabled}>{text}</button>;
}
