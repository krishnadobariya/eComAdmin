// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Tables/Dashboard';
import Login from './pages/Login';
import Product from './pages/Forms/Product/Index';
import Category from './pages/Forms/Category/Index';
import SubCategory from './pages/Forms/Subcategory/Inex';
import CategoryType from './pages/Forms/Categorytype/Index';
import ProductTable from './pages/Tables/Product/Index';
import TypeTable from './pages/Tables/Type/Index';
import CategoryTable from './pages/Tables/Category/Index'
import SubCategoryTable from './pages/Tables/SubCategory/Index'
import Department from './pages/Forms/Department/Index'
import DepartmentTable from './pages/Tables/Department/Index';
import Outwardtable from './pages/Tables/Outward/Index';
import Outward from './pages/Forms/Outward/Index';
import Prslip from './component/prslip/Index';
import Sidebar from './component/layout/Sidebar';
import Cookies from 'js-cookie';


function App() {

  const token = Cookies.get('jwt')
  console.log()

  return (

    <>
      {/* <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}> */}
      {/* <Sidebar /> */}
      <div style={{ width: "100%" }}>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/dashboard' element={token ? <Dashboard /> : <Login />} />
          <Route path='/product' element={token ? <Product /> : <Login />} />
          <Route path='/category' element={token ? <Category /> : <Login />} />
          <Route path='/subcategory' element={token ? <SubCategory /> : <Login />} />
          <Route path='/departmemt' element={token ? <Department /> : <Login />} />
          <Route path='/outward' element={token ? <Outward /> : <Login />} />
          <Route path='/categorytype' element={token ? <CategoryType /> : <Login />} />
          <Route path='/viewproduct' element={token ? <ProductTable /> : <Login />} />
          <Route path='/viewtype' element={token ? <TypeTable /> : <Login />} />
          <Route path="/viewcategory" element={token ? <CategoryTable /> : <Login />} />
          <Route path="/viewsubcategory" element={token ? <SubCategoryTable /> : <Login />} />
          <Route path='/departmenttable' element={token ? <DepartmentTable /> : <Login />} />
          <Route path='/outwardtable' element={token ? <Outwardtable /> : <Login />} />
          <Route path='/prslipe' element={token ? <Prslip /> : <Login />} />
        </Routes>
      </div>

      {/* </div> */}


    </>


  );
}

export default App;