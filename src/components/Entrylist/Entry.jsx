import FavoriteButton from "../Button/favouriteButton";
import {uid} from "uid";
import Input from "./Input";
import Action from "./Action";
import CheckboxControl from "./Action";

export default function Entry({
                                  name,
                                  armor,
                                  ini,
                                  hp,
                                  isFavorite,
                                  id,
                                  onToggleFavorite,
                                  deleteEntries,
                                  setEntries,
                              }) {
    return (
        <article className="entry">
            <div className="entry__content">
                <div className="formFieldWrapper">
                    <label htmlFor="display_name">name</label>
                    <Input id="display_name" name="display_name" value={name} entryId={id} type={'text'}/>
                </div>
                <div className="formFieldWrapper">
                    <label htmlFor="display_armor">armor</label>
                    <Input id="display_armor" name="display_armor" value={armor} type={'number'}/>

                </div>
                <div className="formFieldWrapper">
                    <label htmlFor="display_hp">hitpoints</label>
                    <Input id="display_hp" name="display_hp" value={hp} type={'number'}/>
                </div>
                <div className="formFieldWrapper">
                    <label htmlFor="display_ini">initiative</label>
                    <Input id="display_ini" name="display_ini" value={ini} setEntries={setEntries} entryId={id} type={'number'}/>
                </div>
                    <CheckboxControl/>
                <div className="buttongroup">
                    <button className="delete_entry" type="button" onClick={() => deleteEntries(id)}>X</button>
                    <FavoriteButton
                        id={uid()}
                        name={'disadvantage'}
                        className="enable_negative"
                    />
                    <FavoriteButton
                        id={uid()}
                        name={'advantage'}
                        className="enable_positive"
                    />
                    <FavoriteButton
                        id={uid()}
                        name={'stealth'}
                        className="enable_positive"
                    />
                    <FavoriteButton
                        id={uid()}
                        name={'poisened'}
                        className="enable_negative"
                    />
                    <FavoriteButton
                        id={uid()}
                        name={'crippled'}
                        className="enable_negative"
                    />
                </div>
              <div className="formFieldWrapper noteLine">
                <label htmlFor="display_notes">notes</label>
                <textarea name="notes" id="display_notes" cols="20" rows="3"></textarea>
              </div>
            </div>
        </article>
    );
}
