import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main' 
import ModalWindow from './components/ModalWindow/ModalWindow'

type userType = {
  priority: number,
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

type apiUserType = {
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
	data: apiUserType[]
}

async function getUsers(apiUrl: string) : Promise<string | apiUserType[]> {
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
  const [slideIndex, setSlideIndex] = useState<number>(1);
  const [modulActive, setModulActive] = useState<boolean>(false);

  useEffect(() => {
    getUsers(apiUrl).then((res: string | apiUserType[])=>{
      if(typeof res === 'object') {
        setUserList(res.map((el, i) => {
          let prior = 0;
          if(i === 5) prior = 1;
          if(i === 0) prior = 2;
          if(i === 1) prior = 3;
          return {...el, priority: prior}
        }));
      }
      else console.log(res);
    });
  }, []);

  useEffect(() => {
    updateSlides();
  }, [slideIndex]);

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
    setUserList(userList.map((el, i) => {
      let prev = (slideIndex === 0) ? userList.length - 1 : slideIndex - 1;
      let current = slideIndex;
      let next = (slideIndex === userList.length - 1) ? 0 : slideIndex + 1;;

      if(i === prev) el.priority = 1;
      else if(i === current) el.priority = 2;
      else if(i === next) el.priority = 3;
      else el.priority = 0;
      return el;
    }));
  }

  const openModul = () => {
    setModulActive(true);
  }

  const closeModul = () => {
    setModulActive(false);
  }

  return (
    <div className="App">
      <ModalWindow modulActive={modulActive} closeModul={closeModul}/>
      <Header openModul={openModul}/>
      <div className='content'>
        <Main prevSlide={prevSlide} nextSlide={nextSlide} newSlide={newSlide} userList={userList}/>
      </div>
    </div>
  );
}

export default App;
