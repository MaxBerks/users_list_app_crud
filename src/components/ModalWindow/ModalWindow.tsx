import React from 'react'
import './ModalWindow.scss'
import classNames from 'classnames'

type closeModulFuncType = () => void

type modalWindowPropsType = {
  modulActive: boolean
  closeModul: closeModulFuncType
}

export default function ModalWindow({modulActive, closeModul}: modalWindowPropsType) {
  return (
    <div className={classNames('modal', {'modal-active': modulActive})} onClick={closeModul}>
      <div className="modal__main" onClick={e => e.stopPropagation}>
        
      </div>
    </div>
  )
}
