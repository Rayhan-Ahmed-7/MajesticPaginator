import { useState } from "react";
import "./select.css"
interface Option {
    label: string,
    value: string | number
}
const Select = ({ options, defaultValue = { label: "default", value: 'default' } }: { defaultValue?: Option, options: Option[] }) => {
    const [selectClicked, setSelectClicked] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<Option>(defaultValue)
    return (
        <div className={`select_wrapper ${selectClicked ? 'active' : ''}`}>
            <button onClick={() => setSelectClicked(!selectClicked)} className="select_btn">{selectedOption.label}</button>
            <ul className="options">
                {
                    options.map((option: Option) => (
                        <li className={`option ${selectedOption.value == option.value ? "selected" : ''}`}>{option.label}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Select;