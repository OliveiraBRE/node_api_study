const Node = props => {
  return <h1>{!props.onNode ? 'Loading...' : props.onNode}</h1>
};

export default Node