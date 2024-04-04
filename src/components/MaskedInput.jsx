import InputMask from 'react-input-mask';

const onlyNumbers = (str) => str.replace(/[^0-9]/g, '');

const MaskedInput = ({ value, onChange, name, mask, className, placeholder, maskChar, onBlur, isRequired }) => {
  
  function handleChange(event) {
    onChange({
      ...event,
      target: {
        ...event.target,
        name,
        value: onlyNumbers(event.target.value)
      }
    });
  }

  return (
    <InputMask
      name={name}
      mask={mask}
      value={value}
      placeholder={placeholder}
      className={className}
      onChange={handleChange}
      required={isRequired}
      maskChar={maskChar}
      onBlur={onBlur}
    />
  );
};

export default MaskedInput;