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


function App() {

  
  // };

  // const jwt = Cookies.get('jwt');
  // console.log(".....",jwt)
  return (

    <>
      <Routes>
        <Route path='/' element={<Login/>} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/product' element={<Product />} />
          <Route path='/category' element={<Category />} />
          <Route path='/subcategory' element={<SubCategory />} />
          <Route path='/departmemt' element={<Department/>}/>
          <Route path='/outward' element={<Outward/>}/>
          <Route path='/categorytype' element={<CategoryType/>}/>
          <Route path='/viewproduct' element={<ProductTable/>}/>
          <Route path='/viewtype' element={<TypeTable/>}/>
          <Route path="/viewcategory" element={<CategoryTable/>}/>
          <Route path="/viewsubcategory" element={<SubCategoryTable/>}/>
          <Route path='/departmenttable' element={<DepartmentTable/>}/>
          <Route path='/outwardtable' element={<Outwardtable/>}/>
          <Route path='/prslipe' element={<Prslip/>}/>
        </Routes>

      <div>
        

        {/* <Scanner/> */}


      </div>

    </>


  );
}

export default App;