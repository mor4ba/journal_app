import React, { useState } from "react";

const CheckboxControl = () => {
    const [mainCheckboxCount, setMainCheckboxCount] = useState(0);
    const [bonusCheckboxCount, setBonusCheckboxCount] = useState(0);

    const renderCheckboxes = (count, type) => {
        const checkboxes = [];
        for (let i = 1; i <= count; i++) {
            checkboxes.push(
                <label key={`${type}-${i}`} className={`${type} action_box`}>
                    <input type="checkbox" />
                    <span className="icon"></span>
                </label>
            );
        }
        return checkboxes;


    };
    const resetCheckboxes = () => {
        const mainCheckboxes = document.querySelectorAll('input[type="checkbox"]');
        mainCheckboxes.forEach((checkbox) => (checkbox.checked = false));

        const bonusCheckboxes = document.querySelectorAll('input[type="checkbox"]');
        bonusCheckboxes.forEach((checkbox) => (checkbox.checked = false));
    };
    return (
        <div className={'actionWrapper'}>
                <div className="formFieldWrapper">
                <label>
                    Main actions:
                </label>
                <input
                    type="number"
                    value={mainCheckboxCount}
                    onChange={(e) => setMainCheckboxCount(parseInt(e.target.value, 10))}
                />
                </div>
                <div className="formFieldWrapper">
                <label>
                    Bonus actions:
                </label>
                <input
                    type="number"
                    value={bonusCheckboxCount}
                    onChange={(e) => setBonusCheckboxCount(parseInt(e.target.value, 10))}
                />
                </div>
            <div className="formFieldWrapper actions">
            {renderCheckboxes(mainCheckboxCount, "Main")}
            {renderCheckboxes(bonusCheckboxCount, "Bonus")}
                <button className="reset_actions" onClick={resetCheckboxes}>R</button>
            </div>
        </div>
    );
};

export default CheckboxControl;
