import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddNew from './Pages/AddNew/AddNew';
import Login from './Pages/Authentication/Login/Login';
import Register from './Pages/Authentication/Register/Register';
import RequireAuth from './Pages/Authentication/RequireAuth/RequireAuth';
import Blogs from './Pages/Blogs/Blogs';
import Home from './Pages/Home/Home';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import MyItems from './Pages/MyItems/MyItems';
import MyItem from './Pages/MyItems/MyItems';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import Header from './Pages/Shared/Header/Header';
import Stock from './Pages/Stock/Stock';

function App() {
  return (
    <div>
        <Header></Header>
        <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/manageInventory' element={<ManageInventory></ManageInventory>}></Route>
        <Route path='/addNew' element={<AddNew></AddNew>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/inventory/:_id' element={
        <RequireAuth>
        <Stock></Stock>
        </RequireAuth>
        }></Route>
        <Route path='/myItem' element={
        <RequireAuth>
        <MyItems></MyItems>
        </RequireAuth>
        }></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
        
    </div>
  );
}

export default App;
