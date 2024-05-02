import { useState } from "react"

const useInputState = (defaultValue = '') => {
    const [value, setValue] = useState(defaultValue);

    const onChange = e => {
        setValue(e.target.value)
    }
    // return [value, handleChange];
    return {
        value, 
        onChange
    } // so That we can directly use in jsx using spread operator
}
export default useInputState;