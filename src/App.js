import './App.css';
import Header from './Pages/Shard/Header/Header';
import Footer from './Pages/Shard/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import UpdateItem from './Pages/UpdateItem/UpdateItem';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import ManageItems from './Pages/ManageItems/ManageItems';
import RequireAuth from './Pages/RequireAuth/RequireAuth';





function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>

      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
