import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './componets/Home';
import Header from './componets/Header';
import Info from './componets/Info';
import Hollbooking from './componets/Hollbooking';
import Payment from './componets/Payment';

function App() {

  const movicelist = [
    { id: '1', img: require('./img/lagaan.jpg'), tital: 'Lagaan', language: ' Hindi', Release: '15 June 2001', time: '233 min' },
    { id: '2', img: require('./img/joker.jpeg'), tital: 'Joker', language: ' English', Release: '4 October  2019', time: '122 min' },
    { id: '3', img: require('./img/animal.jpeg'), tital: 'Animal', language: ' Hindi', Release: '1 December  2023', time: '201 min' },
    { id: '4', img: require('./img/pk.jpeg'), tital: 'P.K', language: ' Hindi', Release: '19 December  2014', time: '152 min' },
    { id: '5', img: require('./img/titanic.jpg'), tital: 'Titanic', language: ' English', Release: '19 December  1997', time: '195 min' },
    { id: '6', img: require('./img/tkashmirfile.jpeg'), tital: 'The Kasgmir File', language: ' Hindi', Release: '11 March 2022', time: '170 min' },
    { id: '7', img: require('./img/oppenheimer.jpeg'), tital: 'Oppenheimer', language: ' English', Release: '21 July  2023', time: '180 min' },
    { id: '8', img: require('./img/tdarkk.jpeg'), tital: 'THe Dark Knight', language: ' English', Release: '18 July  2008', time: '152 min' },
    { id: '9', img: require('./img/brahmastra.jpeg'), tital: 'Brahmastra', language: ' Hindi', Release: '9 September  2022', time: '167 min' },
    { id: '10', img: require('./img/shodowbone.jpeg'), tital: 'Shodw Bone', language: ' English', Release: '16 March  2023', },
    { id: '11', img: require('./img/moonlight.jpeg'), tital: 'Moonlight', language: ' English', Release: '21 October  2016', time: '111 min' },
    { id: '12', img: require('./img/outsider.jpeg'), tital: 'Outsider', language: ' English', Release: '30 March  2012', },
  ]

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home list={movicelist} />} />
        <Route path=":id" element={<Info list={movicelist} />} />
        <Route path="/hollbooking" element={<Hollbooking/>} />
        <Route path="/payment" element={<Payment/>} />
      </Routes>

    </>
  );

}

export default App;
