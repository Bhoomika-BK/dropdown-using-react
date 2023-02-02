import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import {  Clothing, Men, Women, Kids } from './pages/Clothing';
import Sports from './pages/Sports';
import { Accessories, Art, Notebooks, Stationary } from './pages/Stationary';
//import { Bedroom, Home decor, Kitchen dining, Living_room } from './pages/Home decor';
import { Electronics, Laptops, Mobiles, Refrigerator, Tablets, Washing_machine } from './pages/Electronics';
import { Beauty, Hair_care, Make_up, Mens_grooming, Perfumes, Skin_care, Womens_grooming } from './pages/Beauty';
import Makeup from './pages/Makeup';
import Men1 from './pages/Men1';
import Women1 from './pages/Women1';
import { Home_Decor,Living_room,Kitchen_dining,Bedroom} from './pages/Home decor';
import Kids1 from './pages/Kids1';
import Notebooks1 from './pages/Notebooks1';
import Art1 from './pages/Art1';
import Accesories1 from './pages/Accesories1';
import Livingroom1 from './pages/Livingroom1';
import Kitchenrooom1 from './pages/Kitchenrooom1';
import Bedroom1 from './pages/Bedroom1';
import Laptops1 from './pages/Laptops1';
import Mobiles1 from './pages/Mobiles1';
import Tablets1 from './pages/Tablets1';
import Refrigerator1 from './pages/Refrigerator1';
import Washingmachine1 from './pages/Washingmachine1';
import Haircare1 from './pages/Haircare1';
import Skincare1 from './pages/Skincare1';
import Perfumes1 from './pages/Perfumes1';
import Mensgrooming1 from './pages/Mensgrooming1';
import Womensgrooming1 from './pages/Womensgrooming1';
function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route exact path='/overview' element={<Overview/>} /> 
        <Route exact path='/clothing' element={<Clothing/>} />
       <Route exact path='/clothing/men' element={<Men/>} />
        <Route exact path='/clothing/women' element={<Women/>} />
        <Route exact path='/clothing/kids' element={<Kids/>} /> 
        <Route exact path='/stationary' element={<Stationary/>} />
        <Route exact path='/stationary/notebooks' element={<Notebooks/>} />
        <Route exact path='/stationary/art' element={<Art/>} />
        <Route exact path='/stationary/accessories' element={<Accessories/>} />
        <Route exact path='/home decor' element={<Home_Decor/>} />
        <Route exact path='/home decor/living room' element={<Living_room/>} />
        <Route exact path='/home decor/kitchen dining' element={<Kitchen_dining/>} />
        <Route exact path='/home decor/bedroom' element={<Bedroom/>} /> 
        <Route exact path='/electronics' element={<Electronics/>} />
         <Route exact path='/electronics/laptops' element={<Laptops/>} />
        <Route exact path='/electronics/mobiles' element={<Mobiles/>} />
        <Route exact path='/electronics/tablets' element={<Tablets/>} /> 
        <Route exact path='/electronics/refrigerator' element={<Refrigerator/>} />
        <Route exact path='/electronics/washing_machine' element={<Washing_machine/>} />
        <Route exact path='/beauty' element={<Beauty/>} />
        <Route exact path='/beauty/make_up' element={<Make_up/>} />
        <Route exact path='/beauty/hair_care' element={<Hair_care/>} />
        <Route exact path='/beauty/skin_care' element={<Skin_care/>} /> 
         <Route exact path='/beauty/perfumes' element={<Perfumes/>} />
        <Route exact path='/beauty/mens_grooming' element={<Mens_grooming/>} />
        <Route exact path='/beauty/womens_grooming' element={<Womens_grooming/>} /> 
        <Route exact path='/makeup'element={<Makeup/>}/>
        <Route exact path='/men'element={<Men1/>}/>
        <Route exact path='/women'element={<Women1/>}/>
        <Route exact path='/kids'element={<Kids1/>}/>
        <Route exact path='/sports'element={<Sports/>}/>
        <Route exact path='/notebooks'element={<Notebooks1/>}/>
        <Route exact path='/arts'element={<Art1/>}/>
        <Route exact path='/accessories'element={<Accesories1/>}/>
        <Route exact path='/living room'element={<Livingroom1/>}/>
        <Route exact path='/kitchen room'element={<Kitchenrooom1/>}/>
        <Route exact path='/bedroom'element={<Bedroom1/>}/>
        <Route exact path='/laptops'element={<Mobiles1/>}/>
        <Route exact path='/mobiles'element={<Bedroom1/>}/>
        <Route exact path='/tablets'element={<Tablets1/>}/>
        <Route exact path='/refrigerator'element={<Refrigerator1/>}/>
        <Route exact path='/washing machine'element={<Washingmachine1/>}/>
        <Route exact path='/hair care'element={<Haircare1/>}/>
        <Route exact path='/skin care'element={<Skincare1/>}/>
        <Route exact path='/perfumes'element={<Perfumes1/>}/>
        <Route exact path='/mens grooming'element={<Mensgrooming1/>}/>
        <Route exact path='/womens grooming'element={<Womensgrooming1/>}/>
        {/* <Route exact path='/team' element={<Team/>} /> */}
      </Routes>
    </Router>
  );
}

export default App;
