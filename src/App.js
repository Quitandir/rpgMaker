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

import TechWorld1 from './pages/techWorld/Cena1';
import TechWorld2 from './pages/techWorld/Cena2';
import TechWorld3 from './pages/techWorld/Cena3';
import TechWorld4 from './pages/techWorld/Cena4';
import TechWorld5 from './pages/techWorld/Cena5';

import Hospital1 from './pages/hospital/Cena1';
import Hospital2 from './pages/hospital/Cena2';
import Hospital3 from './pages/hospital/Cena3';
import Hospital4 from './pages/hospital/Cena4';
import Hospital5 from './pages/hospital/Cena5';
import Hospital6 from './pages/hospital/Cena6';
import Hospital7 from './pages/hospital/Cena7';

import Strange1 from './pages/strangeForest/Cena1';
import Strange2 from './pages/strangeForest/Cena2';
import Strange3 from './pages/strangeForest/Cena3';
import Strange4 from './pages/strangeForest/Cena4';
import Strange5 from './pages/strangeForest/Cena5';
import Strange6 from './pages/strangeForest/Cena6';
import Strange7 from './pages/strangeForest/Cena7';
import Strange8 from './pages/strangeForest/Cena8';
import Strange9 from './pages/strangeForest/Cena9';
import Strange10 from './pages/strangeForest/Cena10';
import Strange11 from './pages/strangeForest/Cena11';
import Strange12 from './pages/strangeForest/Cena12';
import Strange13 from './pages/strangeForest/Cena13';

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
        
        <Route path='/techWorld/1' element={<TechWorld1 />} />
        <Route path='/techWorld/2' element={<TechWorld2 />} />
        <Route path='/techWorld/3' element={<TechWorld3 />} />
        <Route path='/techWorld/4' element={<TechWorld4 />} />
        <Route path='/techWorld/5' element={<TechWorld5 />} />

        <Route path='/hospital/1' element={<Hospital1 />} />
        <Route path='/hospital/2' element={<Hospital2 />} />
        <Route path='/hospital/3' element={<Hospital3 />} />
        <Route path='/hospital/4' element={<Hospital4 />} />
        <Route path='/hospital/5' element={<Hospital5 />} />
        <Route path='/hospital/6' element={<Hospital6 />} />
        <Route path='/hospital/7' element={<Hospital7 />} />

        <Route path='/strange/1' element={<Strange1/>} />
        <Route path='/strange/2' element={<Strange2/>} />
        <Route path='/strange/3' element={<Strange3/>} />
        <Route path='/strange/4' element={<Strange4/>} />
        <Route path='/strange/5' element={<Strange5/>} />
        <Route path='/strange/6' element={<Strange6/>} />
        <Route path='/strange/7' element={<Strange7/>} />
        <Route path='/strange/8' element={<Strange8/>} />
        <Route path='/strange/9' element={<Strange9/>} />
        <Route path='/strange/10' element={<Strange10/>} />
        <Route path='/strange/11' element={<Strange11/>} />
        <Route path='/strange/12' element={<Strange12/>} />
        <Route path='/strange/13' element={<Strange13/>} />

      </Routes>
    </BrowserRouter>
  )
}

export default App;

