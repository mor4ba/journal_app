import "./Form.css";
import Button from "../Button/button";
import {setUpFormData} from "../functions/setUpFormData";
import Label from "./Label";
import {uid} from "uid";

export default function Form({setEntries, entry}) {
    function setUpEntryList(event) {
        const data = setUpFormData(event);
        setEntries([...entry, {...data, id: uid()}]);
    }

    return (
        <form onSubmit={(event) => setUpEntryList(event)}>
            <div className="formFieldWrapper">
                <Label for="input_name" text="NAME"/>
                <input id="input_name" type="text" name="input_name" required/>
            </div>
            <div className="formFieldWrapper">

                <Label for="input_armor" text="ARMOR"/>
                <input type="text" id="input_armor" name="input_armor"/>
            </div>
            <div className="formFieldWrapper">

                <Label for="input_hp" text="Hitpoints"/>
                <input type="text" id="input_hp" name="input_hp"/>
            </div>
            <div className="formFieldWrapper">

                <Label for="input_ini" name="input_ini" text="initiative"/>
                <input type="text" id="input_ini" name="input_ini"/>
            </div>
            <Button type="submit" disabled={false} text="Create"/>
        </form>
    );
}
