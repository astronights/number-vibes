// import '../assets/app.sass';
import NavBar from './NavBar';
import Vibe from './Vibe';
import Footer from './Footer'

const App = () => {
  // Available Colours:
  // blue, cyan, gray, green, orange, pink, purple, red, teal, yellow

  const title = 'NUMBER VIBEZZ'
  const color = "teal";
  return (
    <>
      <NavBar title={title} />
      <Vibe />
      <Footer />
    </>
  );
}

export default App;
