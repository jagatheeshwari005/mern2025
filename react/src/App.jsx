
// import React from 'react';
// // import Login from './component/Login';

// function App() {
//   return (
//     <div>
//       <Counter/>
//       {/* <Login /> */}
//     </div>
//   );
// }

// export default App;

// import React from 'react'
// import Child from './component/Child'
// import Home from './page/Home'
// import About from './page/About'
// import Skills from './page/Skills'
// import Contact from './page/Contact'
// const App = () => {
//   var fruits=["Apple","banana","grapes"];
//   var users={username:"jaga",password:"1234"}
//   return (

    
//     <div>
//       <Child name="jaga"phno="902335789" dept="ece"/>
//        <Child name="pavi"phno="8667526620" dept="it"/>
//         <Child name="malini"phno="3403657023063234567890" dept="it"/>
//         <Home items={fruits} users={users}/>
//       <About/>
//       <Skills/>
//       <Contact/>
//     </div>
    
//   )
// }

// export default App

import React from 'react'
import Child from './component/Child'
import Login from './component/Login'
 import Counter from './component/Counter'
import Home from './page/Home'
import About from './page/About'
import Skills from './page/Skills'
import Contact from './page/Contact'
import Hooks from './page/Hooks'
import Navbar from './component/Navbar'
import {Routes,Route} from 'react-router-dom'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Effect2  from './Hooks/Effect2'
import Ref from './Hooks/Ref'
import Reducer from './Hooks/Reducer'
import Context from './Hooks/Context'
import Todo from './component/Todo'


const App = () => {
  var fruits=["Apple","banana","grapes"];
 var users={username:"jaga",password:"1234"}
  return (
    <div>
      <Navbar />
    <Routes>
<Route path ='/' element= {<Home items={fruits} users={users}/>}/>
<Route path ='/about' element={<About/>}/>
<Route path ='/contact' element={<Contact/>}/>
<Route path ='/Skills' element={<Skills/>}/>
<Route path ='/Child' element={<Child/>}/>
<Route path ='/Login' element={<Login/>}/>
<Route path ='/Counter' element={<Counter/>}/>
<Route path ='/hooks' element={<Hooks/>}/>
<Route path ='/state' element={<State/>}/>
<Route path ='/effect' element={<Effect/>}/>
<Route path ='/effect2' element={<Effect2/>}/>
<Route path ='/ref' element={<Ref/>}/>
<Route path='/reducer' element={<Reducer/>}/>
<Route path='/context' element ={<Context/>}/>
<Route path='/todo' element={<Todo/>}/>

    </Routes>
      </div>
  )
}

export default App