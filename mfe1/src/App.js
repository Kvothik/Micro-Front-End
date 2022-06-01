import React, { useState, useEffect } from "react";
import "./App.css";

//functions
import { getTest, createTest, getMerlin } from './functions/test';

function App() {
  const [dogImg, setDogImg] = useState(null);
  const [data, setData] = useState("Before fetch test");

  const testObj = {
    'name': 'Merlin',
    'imageUrl': 'https://i.ibb.co/wykGdL5/20220329-174050.jpg'
  }
  // Will fail because it was already ran and the test object already exists in db
  // createTest(testObj);
  //test GET from db
  const seeMerlinTest = () => {
    setDogImg("");
    getMerlin().then((data) => {
      setDogImg(data[0].imageUrl)
    })
  };

  useEffect(() => {
    getTest().then((res) => {
      setData(res.message);
    }).catch(err => console.log(err))
  }, []);

  const fetchDoggo = () => {
    setDogImg("");
    fetch(`https://dog.ceo/api/breeds/image/random`)
      .then((res) => res.json())
      .then((dogInfo) => {
        setDogImg(dogInfo.message);
      });
  };

  useEffect(() => {
    if (dogImg === null) {
      fetchDoggo();
    }
  });

  return (
    <div>
      <header>
        <h3>{data}</h3>
        <div>
          <button onClick={() => fetchDoggo()}>New Doggo</button>
          <button onClick={() => seeMerlinTest()}>See a Merlin from the DB</button>
        </div>
        {dogImg !== "" ? (
          <div>
            <img src={dogImg} width="400px" alt="doggo" />
          </div>
        ) : (
          <div>Loading Image</div>
        )}
      </header>
    </div>
  );
}

export default App;