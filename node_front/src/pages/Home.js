const Home = props => {
  return <h1>{!props.onHome ? 'Loading...' : props.onHome}</h1>
};

export default Home