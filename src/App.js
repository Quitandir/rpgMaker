import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TelaInicial from './pages/TelaInicial';
import './App.css';

import Cena1 from './pages/apocalipseCity/Cena1';
import Cena2 from './pages/apocalipseCity/Cena2';
import Cena3 from './pages/apocalipseCity/Cena3';
import Cena4 from './pages/apocalipseCity/Cena4';
import Cena5 from './pages/apocalipseCity/Cena5';
import Cena6 from './pages/apocalipseCity/Cena6';
import Cena7 from './pages/apocalipseCity/Cena7';
import Cena8 from './pages/apocalipseCity/Cena8';

import LostSword1 from './pages/lostSword/Cena1';
import LostSword2 from './pages/lostSword/Cena2';
import LostSword3 from './pages/lostSword/Cena3';
import LostSword4 from './pages/lostSword/Cena4';
import LostSword5 from './pages/lostSword/Cena5';
import LostSword6 from './pages/lostSword/Cena6';
import LostSword7 from './pages/lostSword/Cena7';

import LastOfInstruments1 from './pages/lastOfInstruments/Cena1'
import LastOfInstruments2 from './pages/lastOfInstruments/Cena2'
import LastOfInstruments3 from './pages/lastOfInstruments/Cena3'
import LastOfInstruments4 from './pages/lastOfInstruments/Cena4'
import LastOfInstruments5 from './pages/lastOfInstruments/Cena5'
import LastOfInstruments6 from './pages/lastOfInstruments/Cena6'
import LastOfInstruments7 from './pages/lastOfInstruments/Cena7'
import LastOfInstruments8 from './pages/lastOfInstruments/Cena8'

import Matheus1 from './pages/matheus/Cena1'
import Matheus2 from './pages/matheus/Cena2'
import Matheus3 from './pages/matheus/Cena3'
import Matheus4 from './pages/matheus/Cena4'
import Matheus5 from './pages/matheus/Cena5'
import Matheus6 from './pages/matheus/Cena6'
import Matheus7 from './pages/matheus/Cena7'

import Undead1 from './pages/undead/Cena1'
import Undead2 from './pages/undead/Cena2'
import Undead3 from './pages/undead/Cena3'
import Undead4 from './pages/undead/Cena4'
import Undead5 from './pages/undead/Cena5'

import TheDate1 from './pages/theDate/Cena1'
import TheDate2 from './pages/theDate/Cena2'
import TheDate3 from './pages/theDate/Cena3'
import TheDate4 from './pages/theDate/Cena4'
import TheDate5 from './pages/theDate/Cena5'
import TheDate6 from './pages/theDate/Cena6'
import TheDate7 from './pages/theDate/Cena7'

import LostInTheForest1 from './pages/lostInTheForest/Cena1';
import LostInTheForest2 from './pages/lostInTheForest/Cena2';
import LostInTheForest3 from './pages/lostInTheForest/Cena3';
import LostInTheForest4 from './pages/lostInTheForest/Cena4';
import LostInTheForest5 from './pages/lostInTheForest/Cena5';
import LostInTheForest6 from './pages/lostInTheForest/Cena6';

import TheBakery1 from './pages/theBakery/Cena1';
import TheBakery2 from './pages/theBakery/Cena2';
import TheBakery3 from './pages/theBakery/Cena3';
import TheBakery4 from './pages/theBakery/Cena4';
import TheBakery5 from './pages/theBakery/Cena5';
import Title from './pages/title';

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<Title />} />

        <Route path='/lib' exact element={<TelaInicial />} />

        <Route path='/apocalipseCity/1' element={<Cena1 />} />
        <Route path='/apocalipseCity/2' element={<Cena2 />} />
        <Route path='/apocalipseCity/3' element={<Cena3 />} />
        <Route path='/apocalipseCity/4' element={<Cena4 />} />
        <Route path='/apocalipseCity/5' element={<Cena5 />} />
        <Route path='/apocalipseCity/6' element={<Cena6 />} />
        <Route path='/apocalipseCity/7' element={<Cena7 />} />
        <Route path='/apocalipseCity/8' element={<Cena8 />} />

        <Route path='/lostSword/1' element={<LostSword1 />} />
        <Route path='/lostSword/2' element={<LostSword2 />} />
        <Route path='/lostSword/3' element={<LostSword3 />} />
        <Route path='/lostSword/4' element={<LostSword4 />} />
        <Route path='/lostSword/5' element={<LostSword5 />} />
        <Route path='/lostSword/6' element={<LostSword6 />} />
        <Route path='/lostSword/7' element={<LostSword7 />} />

        <Route path='/lastOfInstruments/1' element={< LastOfInstruments1 />} />
        <Route path='/lastOfInstruments/2' element={< LastOfInstruments2 />} />
        <Route path='/lastOfInstruments/3' element={< LastOfInstruments3 />} />
        <Route path='/lastOfInstruments/4' element={< LastOfInstruments4 />} />
        <Route path='/lastOfInstruments/5' element={< LastOfInstruments5 />} />
        <Route path='/lastOfInstruments/6' element={< LastOfInstruments6 />} />
        <Route path='/lastOfInstruments/7' element={< LastOfInstruments7 />} />
        <Route path='/lastOfInstruments/8' element={< LastOfInstruments8 />} />

        <Route path='/matheus/1' element={< Matheus1 />} />
        <Route path='/matheus/2' element={< Matheus2 />} />
        <Route path='/matheus/3' element={< Matheus3 />} />
        <Route path='/matheus/4' element={< Matheus4 />} />
        <Route path='/matheus/5' element={< Matheus5 />} />
        <Route path='/matheus/6' element={< Matheus6 />} />
        <Route path='/matheus/7' element={< Matheus7 />} />

        <Route path='/undead/1' element={< Undead1 />} />
        <Route path='/undead/2' element={< Undead2 />} />
        <Route path='/undead/3' element={< Undead3 />} />
        <Route path='/undead/4' element={< Undead4 />} />
        <Route path='/undead/5' element={< Undead5 />} />

        <Route path='/theDate/1' element={< TheDate1 />} />
        <Route path='/theDate/2' element={< TheDate2 />} />
        <Route path='/theDate/3' element={< TheDate3 />} />
        <Route path='/theDate/4' element={< TheDate4 />} />
        <Route path='/theDate/5' element={< TheDate5 />} />
        <Route path='/theDate/6' element={< TheDate6 />} />
        <Route path='/theDate/7' element={< TheDate7 />} />

        <Route path='/lostInTheForest/1' element={<LostInTheForest1 />} />
        <Route path='/lostInTheForest/2' element={<LostInTheForest2 />} />
        <Route path='/lostInTheForest/3' element={<LostInTheForest3 />} />
        <Route path='/lostInTheForest/4' element={<LostInTheForest4 />} />
        <Route path='/lostInTheForest/5' element={<LostInTheForest5 />} />
        <Route path='/lostInTheForest/6' element={<LostInTheForest6 />} />
       
        <Route path='/theBakery/1' element={<TheBakery1 />} />
        <Route path='/theBakery/2' element={<TheBakery2 />} />
        <Route path='/theBakery/3' element={<TheBakery3 />} />
        <Route path='/theBakery/4' element={<TheBakery4 />} />
        <Route path='/theBakery/5' element={<TheBakery5 />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;

