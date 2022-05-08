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
import AddItem from './Pages/AddItems/AddItem';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Item from './Pages/Home/Item/Item';
import Items from './Pages/Home/Items/Items';
import Blogs from './Pages/Blogs/Blogs';
import ResetPassword from './Pages/Shard/ResetPassword';
import AboutMe from './Pages/AboutMe/AboutMe';
import MyItem from './Pages/MyItem/MyItem';
import Error from './Pages/Error/Error';





function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/item' element={<Items></Items>}></Route>
        <Route path='/item/:itemId' element={
          <RequireAuth>
            <UpdateItem></UpdateItem>
          </RequireAuth>
        }></Route>
        <Route path='/manage' element={<ManageItems></ManageItems>}></Route>
        <Route path='/add' element={<AddItem></AddItem>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/reset' element={<ResetPassword></ResetPassword>}></Route>
        <Route path='/about' element={<AboutMe></AboutMe>}></Route>
        <Route path='/myItem' element={<MyItem></MyItem>}></Route>
        <Route path='*' element={<Error></Error>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
