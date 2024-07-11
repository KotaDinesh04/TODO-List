import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Home.css";
import LoadingBar from "react-top-loading-bar";

export default function Home({ email }) {
  const [data, setData] = useState([]);
  const [progress, setProgress] = useState(0);
  const [todos, setTodos] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getArr = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/getuserdata", {
        emailId: email,
      });
      setData(response.data);
    } catch (error) {
      console.log("Error fetching data:", error);
      setError("Error fetching user data");
    }
  };

  useEffect(() => {
    getArr();
  }, []);

  const handleGetClick = async () => {
    setProgress(20);
    setLoading(true);
    setError("");
    await getArr();

    try {
      const response = await axios.get("http://localhost:5000/api/todolist", {
        params: { emailId: email },
      });
      console.log(response.data);
      setTodos(response.data);
    } catch (error) {
      console.log("Error fetching todos:", error);
      setError("Error fetching todos");
    }
    
    setProgress(100);
    setLoading(false);
  };

  return (
    <div>
      <LoadingBar color="#f11946" progress={progress} onLoaderFinished={() => setProgress(0)} />
      <div className="container">
        <button className="homeButton" onClick={handleGetClick}>
          Get Todo's
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {todos && (
        <div className="todosContainer">
          {todos.map((todo) => (
            <div key={todo._id} className="todoItem">
              <p>{todo.title}</p>
              <p>{todo.description}</p>
              <p>{todo.createdAt}</p>
            </div >
          ))}
        </div>
      )}
      
    </div>
  );
}
