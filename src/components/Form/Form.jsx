import "./Form.css";
import Button from "../Button/button";
import { setUpFormData } from "../functions/setUpFormData";
import Label from "./Label";

export default function Form({ setEntries, entry }) {
  function setUpEntryList(event) {
    const data = setUpFormData(event);
    setEntries([...entry, data]);
  }

  return (
    <form onSubmit={(event) => setUpEntryList(event)}>
      <Label id="input_head" name="input_head" text="Motto" />
      <input id="input_head" type="text" name="input_head" required />
      <Label id="input_text" name="input_text" text="Motto" />
      <textarea
        required
        type="text"
        id="input_text"
        name="input_text"
        cols={20}
        rows={8}
      />
      <Button type="submit" disabled={false} text="Create" />
    </form>
  );
}
