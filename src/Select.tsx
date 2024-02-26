import { useEffect, useState } from "react";
import "./select.css"
interface Option {
    label: string,
    value: string | number
}
const Select = ({ onChange, options, defaultValue = { label: "default", value: 'default' } }: { onChange?: Function, defaultValue?: Option, options: Option[] }) => {
    const [selectClicked, setSelectClicked] = useState<boolean>(false)
    const [selectedOption, setSelectedOption] = useState<Option>(defaultValue)
    useEffect(() => {
        onChange && onChange(selectedOption)
    }, [selectedOption])
    return (
        <div className={`select_wrapper ${selectClicked ? 'active' : ''}`}>
            <button onClick={() => setSelectClicked(!selectClicked)} className="select_btn">{selectedOption.label}</button>
            <ul className="options">
                {
                    options.map((option: Option,index) => (
                        <li key={index} onClick={() => setSelectedOption(option)} className={`option ${selectedOption.value == option.value ? "selected" : ''}`}>{option.label}</li>
                    ))
                }
            </ul>
        </div>
    );
};

export default Select;