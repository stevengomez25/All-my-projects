import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
// import Dashboard from './pages/Dashboard';
import Products from './pages/Products';
import MainLayout from './layout/MainLayout';
import ForgotPassword from './pages/ForgotPassword';
import Register from './pages/Register';
import CreateProduct from './pages/CreateProduct';
import EditProfile from './pages/EditProfile';
import Profile from './pages/Profile';
import Orders from './pages/Order';


function App() {
  return (
    <>
      <Routes>
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<MainLayout />}>
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          <Route path="users/profile" element={<Profile />} />
          <Route path="users/edit-profile" element={<EditProfile />} />
          <Route path="products" element={<Products />} />
          <Route path="create-product" element={<CreateProduct />} />
          <Route path='orders' element={<Orders/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
