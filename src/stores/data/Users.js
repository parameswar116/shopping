import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "../store/AuthSlice";

const Users = () => {
  const [userData, setUserData] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://65227fe0f43b17938414903d.mockapi.io/user"
      );
      const data = await response.json();
      setUserData(data);
    };
    fetchData();
  }, []);
  console.log(userData);
  function sendData(userData) {
    console.log(userData);
    dispatch(authActions.getData(userData));
  }
  sendData(userData);

  return;
};

export default Users;
