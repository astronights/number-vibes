import '../assets/app.css';
import NavBar from './NavBar';
import Vibe from './Vibe';

const App = () => {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  const title = 'NUMBER VIBEZZ'
  const color = "teal";
  return (
    <>
      <NavBar title={title} />
      <Vibe />
    </>
  );
}

export default App;
