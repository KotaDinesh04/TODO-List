import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home({ email }) {
  const [data, setData] = useState(null);

  const getArr = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/getuserdata', {
        emailId: email
      });
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArr();
  }, []);

  console.log(data);

  return (
    <div>
      {data && <h1>Welcome {data.name}</h1>}
    </div>
  );
}
