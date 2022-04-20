import React, {useState, useEffect} from "react";


const Node = props => {
  const [text, setText] = useState(null);

  useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setText(data.text))
      .catch(err => console.log(err));
  }, []);

  return <h1>{!text ? 'Loading...' : text}</h1>
};

export default Node;