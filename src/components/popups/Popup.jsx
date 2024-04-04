import styles from './Popup.module.css'

const Popup = ({
  isBig = false,
  handleClose = undefined,
  children,
}) => {
  return (
    <div className={styles.popup}>
      <div className={isBig ? styles.big_popupinner : styles.popupinner}>
        {handleClose && (
          <button className={styles.close_button} onClick={handleClose}>
            ✖
          </button>
        )}
        {children}
      </div>
    </div>
  )
}

export default Popup