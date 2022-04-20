import React, {useState, useEffect} from "react";

const Home = props => {
  const [message, setMessage] = useState(null);

  useEffect(() => {
    fetch('/home')
      .then(res => res.json())
      .then(data => setMessage(data.home))
      .catch(err => console.log(err));
  }, []);

  return <h1>{!message ? 'Loading...' : message}</h1>
};

export default Home;