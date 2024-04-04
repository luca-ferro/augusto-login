import { isValidElement } from "react";

import Popup from "./Popup";
import PopupWithContent from "./PopupWithContent";

const PopupManager = ({
  shouldShowPopup,
  popupType,
  popupsArray,
  props = {},
}) => {
  const currentPopup = popupsArray.find(popup => popup.type === popupType)
  
  if(!shouldShowPopup || !currentPopup)
    return undefined

  const additionalPopupProps = currentPopup.props || {}

  // Custom Popup
  if(isValidElement(currentPopup.content)) // Object is 
    return (
      <Popup {...additionalPopupProps} {...props}>
        {currentPopup.content}
      </Popup>
    )

  // Default: PopupWithContent Template
  return <PopupWithContent {...currentPopup.content} {...additionalPopupProps} {...props} />
}

export default PopupManager
