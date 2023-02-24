import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
return (
        <>
      <Navbar title="title" aboutText="About Us" />
      {/* <Navbar /> */}
      <TextForm formHeading="Enter Form Heading Here" />
        </>
      );
}

export default App;
