import styles from "./FormInputField.module.css"

import MaskedInput from "../MaskedInput"

const FormInputField = ({
  label,
  name,
  value,
  setValue = () => undefined,
  type = "text",
  placeholder = null,
  isRequired = false,
  mask,
  // Inline CSS
  removeDefaultClass = false,
  inputStyle = {},
  labelStyle = {},
  ...props
}) => {
  const placeholderText = (placeholder !== null) ? placeholder : label
  const inputClass = removeDefaultClass ? "" : styles.campos

  return (
    <>
      {label && (
        <p style={{ ...labelStyle }}>
          {label}
          {isRequired && (
            <span style={{color: "red"}}>*</span>
          )}
        </p>
      )}
      {mask ? (
        <MaskedInput 
          className={inputClass} 
          style={{ ...inputStyle }}
          name={name}
          placeholder={placeholderText}
          mask={mask}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          isRequired={isRequired}
          {...props}
        />
      ) : (        
        <input 
          className={inputClass}
          style={{ ...inputStyle }}
          type={type}
          name={name}
          placeholder={placeholderText}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required={isRequired}
          {...props}
        />
      )}
    </>
  )
}

export default FormInputField
