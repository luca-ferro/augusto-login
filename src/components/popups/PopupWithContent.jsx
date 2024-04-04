import styles from './PopupWithContent.module.css'

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import Popup from './Popup'

import { Checkmark } from 'react-checkmark'
import Lottie from 'lottie-react'
import animationData from '../../assets/Cross.json'

const PopupWithContent = ({
  type, // Ícone
  title,
  description,
  url,
  onButtonClick = undefined,
  buttonLabel,
  isBig = false,
  handleClose,
}) => {
  const navigate = useNavigate()

  const handleButtonClick = onButtonClick || (() => navigate(url))

  const [icon, setIcon] = useState(null)

  const getIcon = () => {
    switch(type) {
      case "loading":
        return (
          <div style={{ marginTop: "4vh" }} className={styles.spinner}>
            <div className={styles.circle} />
          </div>
        );

      case "error":
        return <Lottie animationData={animationData} style={{ width: "18vw" }} />


      case "success":
        return <Checkmark size='70%' color='#71A3AC' />

      default:
        return undefined;
    }
  }

  useEffect(() => {
    const newIcon = getIcon()

    setIcon(newIcon)
  }, [type])

  return (
    <Popup
      handleClose={handleClose} 
      hasCenteredContainer
      isBig={isBig}
    >
      <div className={styles.container}>
        {icon}
        {title && <h1>{title}</h1>}
        {description && <p>{description}</p>}
        {buttonLabel && (
          <button className={styles.confirm} onClick={handleButtonClick}>
            {buttonLabel}
          </button>
        )}
      </div>
    </Popup>
  )
}

export default PopupWithContent
