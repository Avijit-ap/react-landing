      import './App.css';
      import "bootstrap/dist/css/bootstrap.min.css";
      import "bootstrap/dist/js/bootstrap";
      import Navbar from "./components/Navbar/Navbar.jsx";
      import UpperRightText from './components/UpperRightText/UpperRightText.jsx';
      import RightImage from './components/RightImage/RightImage.jsx';
      import DownImg from './components/DownImg/DownImg.jsx';
      import VerticalLine from './components/VerticalLine/VerticalLine.jsx';
      import FooterText from './components/FooterText/FooterText.jsx';
    


      export default function App() {
        return (
          <>
          <Navbar/>
          <UpperRightText/>
          <RightImage/>
          <DownImg/>
          <VerticalLine/>
          <FooterText/>
        
          </>
        );
      }