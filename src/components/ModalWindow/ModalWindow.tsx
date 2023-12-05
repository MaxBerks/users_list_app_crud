import React, {useState} from 'react'
import './ModalWindow.scss'
import classNames from 'classnames'

type closeModalFuncType = () => void
type addUserFuncType = (fisrtName:string, lastName:string, email:string, img:string) => void
type editUserFuncType = (id:number, fisrtName:string, lastName:string, email:string, img:string) => void

type modalWindowPropsType = {
  modalActive: boolean,
  modalMode: number,
  modalUserId: number,
  closeModal: closeModalFuncType,
  addUser: addUserFuncType,
  editUser: editUserFuncType
}

export default function ModalWindow({modalActive, modalMode, modalUserId, closeModal, addUser, editUser}: modalWindowPropsType) {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [file, setFile] = useState<string>('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.files !== null) setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    switch (modalMode) {
      case 0: 
        addUser(firstName, lastName, email, file);
        break;
      case 1: 
        editUser(modalUserId, firstName, lastName, email, file);
        break;
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setFile('');
    closeModal();
  }

  return (
    <div className={classNames('modal', {'modal-active': modalActive})} onClick={closeModal}>
      <div className="modal__main"  onClick={event => event.stopPropagation()}>
        <form className='modal__form' action="#" onSubmit={e => handleSubmit(e)}>
          <input className='modal__input' type="text" name="firstname" value={firstName} placeholder='First Name' onChange={(event) => setFirstName(event.target.value)}/>
          <input className='modal__input' type="text" name="lastname" value={lastName} placeholder='Last Name' onChange={(event) => setLastName(event.target.value)}/> 
          <input className='modal__input modal__input-big' type="text" name="email" value={email} placeholder='Email' onChange={(event) => setEmail(event.target.value)}/> 
          <input className='modal__input modal__input-big' type="file" onChange={event => handleChange(event)}/>
          <button className='modal__saveBtn'>Save</button>
        </form>
      </div>
    </div>
  )
}
{/* <div className="modal__preview">
          <img src={file} />
        </div> */}