import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Home.css';

export default function Home({ email }) {
  const [data, setData] = useState(null);

  const getArr = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/getuserdata', {
        emailId: email
      });
      setData(response.data);
    } catch (error) {
      console.log('Error fetching data:', error);
    }
  }

  useEffect(() => {
    getArr();
  }, []); // Fetch data on component mount

  const handleGetClick = async ()=>{
    await getArr();
    console.log(data._id);
    const emailId = data.emailId;
    try {
      const todos = await axios.get('http://localhost:5000/api/todolist',{
        params: {
          emailId: email
        }
      });
      console.log(todos.data)
    } catch (error) {
      
    }
    console.log(data);
  }

  return (
    <div>
      <div className="container">
        <button className='homeButton' onClick={handleGetClick}>Get Todo's</button>
      </div>

      {data && (
        <div className="dataContainer">
      
        </div>
      )}
    </div>
  );
}

