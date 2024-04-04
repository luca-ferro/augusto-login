import styles from "./FormCheckboxField.module.css"

const FormCheckboxField = ({
  label,
  name,
  value,
  setValue = () => undefined,
  state = { true: "S", false: "N" },
  // Inline CSS
  inputStyle = {},
  labelStyle = {},
  ...props
}) => {
  return (
    <>
      <label className={styles.container}>
        <input
          style={{ ...inputStyle }}
          type="checkbox"
          name={name}
          value={value}
          checked={value === state.true}
          onChange={(e) => setValue(e.target.checked ? state.true : state.false)}
          {...props}
        />
        <span className={styles.checkmark}></span>
      </label>
      {label && (
        <p style={{ ...labelStyle }}>
          {label}
        </p>
      )}
    </>
  )
}

export default FormCheckboxField
