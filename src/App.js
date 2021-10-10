import logo from './logo.svg';
import './App.css';
import HeaderComponent from './Components/BaiTapThucHanhLayOut/HeaderComponent';
import BodyComponent from './Components/BaiTapThucHanhLayOut/BodyComponent';
import BannerComponent from './Components/BaiTapThucHanhLayOut/BannerComponent';
import FooterComponent from './Components/FooterComponent';

function App() {
  return (
    <div className="App">
     <HeaderComponent/>
     <BodyComponent/>
     <BannerComponent/>
     <FooterComponent/>
    </div>
  );
}

export default App;
