import FormInputField from "./elements/FormInputField"

import { emailRegex } from "../utils/regex"

import styles from './ChangePasswordPopup.module.css'

const ChangePasswordPopup = ({
  newEmail,
  setNewEmail,
  emailAttribution,
}) => {
  const isNewEmailValid = emailRegex.test(newEmail)

  return (
    <>
      <div className="field" style={{marginTop: "-20px", marginBottom: "50px"}}>
        <FormInputField
          labelStyle={{fontSize: "1.35vw"}}
          label="Informe o seu email para que seja feita a alteração de senha:"
          name="newEmail"
          placeholder="Email"
          value={newEmail}
          setValue={setNewEmail}
        />
      </div>
      <div className="field" style={{marginTop: "-40px"}}>
        {(newEmail && !isNewEmailValid)  && (
          <p style={{ color: 'red', fontSize: "18px" }}>
            Insira um email válido.
          </p>
        )}
      </div>
      {isNewEmailValid && (
        <button 
          className={styles.botao} 
          style={{marginTop: "105px"}} 
          onClick={emailAttribution}
        >
          Solicitar alteração
        </button>
      )}
    </>
  )
}

export default ChangePasswordPopup;
