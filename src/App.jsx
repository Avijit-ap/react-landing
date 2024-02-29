      import './App.css';
      import "bootstrap/dist/css/bootstrap.min.css";
      import "bootstrap/dist/js/bootstrap";
      import Navbar from "./components/Navbar";
      import UpperRightText from './components/UpperRightText';
      import RightImage from './components/RightImage';
      import DownImg from './components/DownImg';
      import VerticalLine from './components/VerticalLine';
      import FooterText from './components/FooterText';
      import FooterMain from './components/FooterMain';


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