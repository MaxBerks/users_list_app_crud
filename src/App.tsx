import React, { useState, useEffect, useRef} from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header'
import Carousel from './components/Carousel/Carousel' 
import ModalWindow from './components/ModalWindow/ModalWindow'

type userType = {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type apiGetUsersResponseType = {
  page: number,
	per_page: number,
	total: number,
	total_pages: number,
	data: userType[]
}

async function getUsers(apiUrl: string) : Promise<string | userType[]> {
  try {
    const { data } = await axios.get<apiGetUsersResponseType>(
      apiUrl,
      {
        headers: {
          Accept: 'application/json',
        },
      },
    );
    return data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log('error message: ', error.message);
      return error.message;
    } else {
      console.log('unexpected error: ', error);
      return 'An unexpected error occurred';
    }
  }
}

function App() {
  const apiUrl = "https://reqres.in/api/users?page=1"; 
  const [userList, setUserList] = useState<userType[]>([]);
  const [priority, setPriority] = useState<number[]>([]);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [modalActive, setModalActive] = useState<boolean>(false);
  const [modalMode, setModalMode] = useState<number>(0);
  const [modalUserId, setModalUserId] = useState<number>(0);

  const prioritySetRef = useRef(false);

  useEffect(() => {
    getUsers(apiUrl).then((res: string | userType[])=>{
      if(typeof res === 'object') {
        setUserList(res);
      }
      else console.log(res);
    });
  }, []);

  useEffect(() => {
    updateSlides();
  }, [slideIndex, userList]);

  useEffect(() => {
    if (userList.length > 0 && !prioritySetRef.current) {
      setPriority([userList.length - 1, 0, 1]);
      prioritySetRef.current = true; // Mark priority as set
    }
  }, [userList.length]);

  const nextSlide = () => {
    if(slideIndex === userList.length - 1) setSlideIndex(0);
    else setSlideIndex(slideIndex + 1);
  }

  const prevSlide = () => {
    if(slideIndex === 0) setSlideIndex(userList.length - 1);
    else setSlideIndex(slideIndex - 1);
  } 

  const newSlide = (num: number) => {
    setSlideIndex(num);
  }

  const updateSlides = () => {
    let prev = (slideIndex === 0) ? userList.length - 1 : slideIndex - 1;
    let current = slideIndex;
    let next = (slideIndex === userList.length - 1) ? 0 : slideIndex + 1;

    if(userList.length === 1) {
      prev = -1;
      next = -1;
      current = 0;
    }

    setPriority([prev, current, next]);
  }

  // mode: 0 - add user, 1 - edit user
  const openModal = (mode: number, id: number) => {
    setModalActive(true);
    setModalMode(mode);
    setModalUserId(id);
  }

  const closeModal = () => {
    setModalActive(false);
  }

  const removeUser = (id:number) => {
    if(slideIndex === userList.length - 1) setSlideIndex(0);
    
    setUserList(prevUserList => prevUserList.filter(user => user.id !== id));
  }

  const addUser = (firstName:string, lastName:string, email:string, img:string) => {
    setUserList(prevUserList => [...prevUserList, {
      priority: 0,
      id: userList[userList.length - 1].id + 1,
      email: email,
      first_name: firstName,
      last_name: lastName,
      avatar: img
    }]);
    setSlideIndex(userList.length);
  }

  const editUser = (id:number, firstName:string, lastName:string, email:string, img:string) => {
    setUserList(prevUserList => {
      let user = prevUserList.filter(item => item.id === id)[0];
      user.first_name = firstName;
      user.last_name = lastName;
      user.email = email;
      user.avatar = img;
      return prevUserList.map(item => {
        if(item.id === id) {
          item.first_name = user.first_name;
          item.last_name = user.last_name;
          item.email = user.email;
          item.avatar = user.avatar;
          
        }
        return item;
      });
    })
  }

  return (
    <div className="App">
      <ModalWindow modalActive={modalActive} modalMode={modalMode} modalUserId={modalUserId} closeModal={closeModal} addUser={addUser} editUser={editUser}/>
      <Header openModal={openModal}/>
      <div className='content'>
        <Carousel userList={userList} priority={priority} prevSlide={prevSlide} nextSlide={nextSlide} newSlide={newSlide} removeUser={removeUser} openModal={openModal}/>
      </div>
    </div>
  );
}

export default App;
