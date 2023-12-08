import React, {useEffect, useState} from 'react'
import './ModalWindow.scss'
import classNames from 'classnames'
import photoErrorURL from './../../assets/photo_error.jpeg';

type closeModalFuncType = () => void
type addUserFuncType = (firstName:string, lastName:string, email:string, img:string) => void
type editUserFuncType = (id:number, firstName:string, lastName:string, email:string, img:string) => void

type userType = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type modalWindowPropsType = {
  userList: userType[],
  modalActive: boolean,
  modalMode: number,
  modalUserId: number,
  closeModal: closeModalFuncType,
  addUser: addUserFuncType,
  editUser: editUserFuncType
}

export default function ModalWindow({userList, modalActive, modalMode, modalUserId, closeModal, addUser, editUser}: modalWindowPropsType) {
  
  
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [file, setFile] = useState<string>('');
  
  const [firstNameError, setFirstNameError] = useState<boolean>(false);
  const [lastNameError, setLastNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  // const [fileError, setFileError] = useState<boolean>(false);

  const handleInvalidInput = () => {
    if(firstName && lastName && email) return true;
    if(firstName === '') setFirstNameError(true);
    if(lastName === '') setLastNameError(true); 
    if(email === '') setEmailError(true);
    return false;
  }

  const clearErrors = () => {
    setFirstNameError(false);
    setLastNameError(false);
    setEmailError(false);
    // setFileError(false);
  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if(e.target.files !== null) setFile(URL.createObjectURL(e.target.files[0]));
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!handleInvalidInput()) return;

    const photo = (file !== '') ? file : photoErrorURL;

    switch (modalMode) {
      case 0: 
        addUser(firstName, lastName, email, photo);
        break;
      case 1: 
        editUser(modalUserId, firstName, lastName, email, photo);
        break;
    }

    setFirstName('');
    setLastName('');
    setEmail('');
    setFile('');
    clearErrors();
    closeModal();
  }

  return (
    <div className={classNames('modal', {'modal-active': modalActive})} onClick={closeModal}>
      <div className="modal__main"  onClick={event => event.stopPropagation()}>
        <form className='modal__form' action="#" onSubmit={e => handleSubmit(e)}>
          {/* <input className='modal__input' type="text" name="firstname" value={firstName} placeholder='First Name' onChange={(event) => setFirstName(event.target.value)}/>
          <input className='modal__input' type="text" name="lastname" value={lastName} placeholder='Last Name' onChange={(event) => setLastName(event.target.value)}/> 
          <input className='modal__input modal__input-big' type="text" name="email" value={email} placeholder='Email' onChange={(event) => setEmail(event.target.value)}/> 
          <input className='modal__input modal__input-big' type="file" onChange={event => handleChange(event)}/> */}
          
          <div className={classNames('modal__input', {'modal__input-error': firstNameError})}><input className='' type="text" name="firstname" value={firstName} placeholder='First Name' onChange={(event) => setFirstName(event.target.value)}/></div>
          <div className={classNames('modal__input', {'modal__input-error': lastNameError})}><input className='' type="text" name="lastname" value={lastName} placeholder='Last Name' onChange={(event) => setLastName(event.target.value)}/> </div>
          <div className={classNames('modal__input modal__input-big', {'modal__input-error': emailError})}><input className='' type="text" name="email" value={email} placeholder='Email' onChange={(event) => setEmail(event.target.value)}/></div> 
          <div className={classNames('modal__input modal__input-big')}><input className='' type="file" onChange={event => handleChange(event)}/></div>       
          <button className='modal__saveBtn'>Save</button>
        </form>
      </div>
    </div>
  )
}
{/* <div className="modal__preview">
          <img src={file} />
        </div> */}