import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.scss';
import Header from './components/Header/Header'
import Main from './components/Main/Main' 

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

    // console.log(JSON.stringify(data.data, null, 4));
    // console.log(JSON.stringify(data.data));
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

    useEffect(() => {
      getUsers(apiUrl).then((res: string | userType[])=>{
        if(typeof res === 'object') {
          setUserList(res);
          // console.log(res);
        }
        else console.log("Api response error!");
      });
    }, []);

  return (
    <div className="App">
      <Header />
      <div className='content'>
        <Main />
      </div>
    </div>
  );
}

export default App;
