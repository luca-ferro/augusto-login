import styles from './LoginScreen.module.css'
import { useEffect, useState } from 'react'
import { emailRegex } from "./utils/regex"
import FormCheckboxField from "./components/elements/FormCheckboxField"
import PopupManager from './components/popups/PopupManager'

// POPUPS

const POPUP_TYPE = {
  Loading: "0",
  Success: "1",
  Error: "2",
  ChangePassword: "3",
  Sending: "4"
}

import Logo from './assets/augusto.png'
import ChangePasswordPopup from './components/ChangePasswordPopup'

const LoginScreen = () => {
  useEffect(() => {
    document.body.style.backgroundColor = "#B99470";

    return () => {
      document.body.style.backgroundColor = ""
    }
  })
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [shouldShowPopup, setShouldShowPopup] = useState(false);
  const [popupType, setPopupType] = useState(POPUP_TYPE.Loading);
  const [errorMessage, setErrorMessage] = useState("");
  const [remember, setRemember] = useState("N")

  const [newEmail, setNewEmail] = useState("");

  const isNewEmailValid = emailRegex.test(newEmail)
  const isEmailValid = emailRegex.test(email);

  const handleClose = () => {
    setShouldShowPopup(false);
    setPopupType(POPUP_TYPE.Loading);
  };

  const handleCloseChangePassword = () => {
    handleClose();
    setEmail("");
    setPassword("");
  }


  const emailAttribution = async () => {
    if(!isEmailValid) return alert("Por favor, preencha campos válidos de email e senha.");

    setPopupType(POPUP_TYPE.Sending);
  };

  return (
    <div>
      <PopupManager
        popupType={popupType}
        shouldShowPopup={shouldShowPopup}
        popupsArray={[
          {
            type: POPUP_TYPE.Loading,
            content: { type: "loading", title: "Fazendo login..." }
          },
          {
            type: POPUP_TYPE.Success,
            content: {
              type: "success",
              title: "Acesse seu email e confirme a conta antes.",
              buttonLabel: "Reenviar",
              handleClose
            }
          },
          {
            type: POPUP_TYPE.Error,
            content: { type: "error", title: errorMessage, handleClose }
          },
          {
            type: POPUP_TYPE.ChangePassword,
            props: { handleClose: handleCloseChangePassword },
            content: (
              <ChangePasswordPopup
                newEmail={newEmail}
                setNewEmail={setNewEmail}
                emailAttribution={emailAttribution}
              />
            )
          },
          {
            type: POPUP_TYPE.Sending,
            content: { type: "loading", title: "Enviando dados..." }          
          }
        ]}
      />
      <form className={styles.loginbubble}>
        <div style={{display: "flex", width: "100%", height: "100%", alignItems: "center"}}>
          {/* Setor esquerdo - login */}
          <div className={styles.greeting}>
            <h1 style={{fontSize: "2.8vw"}}>
              Seja bem-vindo!
            </h1>
            <p className={styles.paragraph} style={{marginTop: "-3vh"}}>
              Quer ficar rico em até 24h? Não deixe de utilizar nossos serviços!
            </p>
            <input
              className={styles.campos}
              type="text"
              placeholder="Login"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className={styles.campos}
              type="password"
              value={password}
              placeholder="Senha"
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className={styles.remember}>
              <FormCheckboxField
                label="Lembrar meu login"
                name="remember"
                value={remember}
                setValue={setRemember}
              />
              <p
                className={styles.senha}
                style={{cursor: "pointer"}}
                onClick={() => {
                  setPopupType(POPUP_TYPE.ChangePassword);
                  setShouldShowPopup(true);
                }}
              >
                Esqueceu sua senha?
              </p>
            </div>
            <button
              type="submit"
              className={`${styles.button} btn hover`}
            >
              Continuar
            </button>
            <p className={styles.or}>
              ou
            </p>
              <button className={`${styles.button} btn hover`} style={{marginTop:"0%"}}>
                Cadastrar-se
              </button>
            <p style={{fontWeight: "400", color: "#606162", fontSize: "1vw", marginTop: "0.6vh"}}>
              Só pra galera da pecuária.
            </p>
          </div>
          {/* Setor direito - imagem */}
          <div className={styles.image}>
            <img
              style={{ width: "75%", height: "auto"}}
              src={Logo}
              alt="Augusto's & Alot's FARM"
            />
          </div>
        </div>
      </form>
    </div>
  )
}

export default LoginScreen;