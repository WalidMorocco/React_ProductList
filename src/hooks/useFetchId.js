import React, { useState, useEffect } from 'react';
import axios from 'axios';
const baseUrl = 'http://localhost:3000/';


const useFetchId = (url, id) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  useEffect(() => {
    const getDataById = async () => {
      try {
        const response = await axios.get(`${baseUrl}`, {
          id: id
       });
        setData(response.data);
      } catch (error) {
        setError(`An error ocurred ${error}`);
      } finally {
        setLoading(false);
      }
    };
    getDataById();
  }, [url, id]);
  return { data, loading, error };
};
export default useFetchId;