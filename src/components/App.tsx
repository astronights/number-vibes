import NavBar from './NavBar';
import Vibe from './Vibe';

const App = () => {

  const title = 'VIBE CHECK'
  return (
    <>
      <NavBar title={title} />
      <Vibe />
    </>
  );
}

export default App;
