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
  const [modulActive, setModulActive] = useState<boolean>(false);

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

  const openModal = () => {
    setModulActive(true);
  }

  const closeModal = () => {
    setModulActive(false);
  }

  const removeUser = (id:number) => {
    if(slideIndex === userList.length - 1) setSlideIndex(0);
    
    setUserList(prevUserList => prevUserList.filter(user => user.id !== id));
  }

  const addUser = () => {
    setUserList(prevUserList => [...prevUserList, {
      priority: 0,
      id: 10,
      email: "example@email.com",
      first_name: "Jan",
      last_name: "Kovac",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFPhoY-w4gP0fJJ31WtK0Rl4Xh69mb9CSwik53v04u&s"
    }]);
  }

  return (
    <div className="App">
      <ModalWindow modulActive={modulActive} closeModul={closeModal}/>
      <Header openModul={openModal} addUser={addUser}/>
      <div className='content'>
        <Carousel userList={userList} priority={priority} prevSlide={prevSlide} nextSlide={nextSlide} newSlide={newSlide} removeUser={removeUser}/>
      </div>
    </div>
  );
}

export default App;
