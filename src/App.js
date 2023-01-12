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
import Prslip from './pages/Prslip/Index';
import Cookies from 'js-cookie';
import DateWise from './pages/Report/Datewise/Index';
import Manager from './pages/Report/Manger/Index';
import OutwardReport from './pages/Report/Outward/Index';
import FinishPro from './pages/Report/FinishPro/Index';
import DepartmentPrint from './pages/Departmentprint/Index';
import Location from './pages/Forms/Department/Loaction/Index'
import LocationTable from './pages/Tables/Location/Index';
import Brandaitem from './pages/Report/Brandaitem/Index';
import Locationwise from './pages/Report/Locatinwise/Index';
import LocationPrint from './pages/Locationprint/Index';
import BrandPrint from './pages/BrandPrint/Index';
import InoutPrint from './pages/InoutPrint/Index';
import FinishproPrint from './pages/FinishproPrint/Index';
import DatewisePrint from './pages/DateisePrint/Index';
import ProductList from './pages/Tables/Productlist/Index';
import OutwardDatewise from './pages/Report/OutwardDatewise/Index';


function App() {

  const token = Cookies.get('jwt')
  

  return (

    <>
     
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
          <Route path='/prslipe/:id' element={token ? <Prslip /> : <Login />} />
          <Route path='/datewise' element={token ? <DateWise /> : <Login />} />
          <Route path='/departmentwise' element={token ? <Manager /> : <Login />} />
          <Route path='/outward-report' element={token ? <OutwardReport /> : <Login />} />
          <Route path='/finish-product' element={token ? <FinishPro /> : <Login />} />
          <Route path='/print/:name' element={token ? <DepartmentPrint /> : <Login />} />
          <Route path='/locationform' element={token ? <Location /> : <Login />} />
          <Route path='/Locationtable' element={token ? <LocationTable/>:<Login/>}/>
          <Route path='/bradmain-item' element={token ? <Brandaitem/>:<Login/>}/>
          <Route path='/locationwise' element={token ? <Locationwise/>:<Login/>}/>
          <Route path='/location/:name' element={token ? <LocationPrint /> : <Login />} />
          <Route path='/brandprint' element={token ? <BrandPrint /> : <Login />} />
          <Route path='/Inoutprint' element={token ? <InoutPrint /> : <Login />} />
          <Route path='/finishproprint' element={token ? <FinishproPrint /> : <Login />} />
          <Route path='/print/:first_date/:last_date' element={token ? <DatewisePrint /> : <Login />} />
          <Route path='/productlist' element={token ? <ProductList /> : <Login />} />
          <Route path='/outwarddatewise' element={token ? <OutwardDatewise /> : <Login />} />
        </Routes>
      </div>

     


    </>


  );
}

export default App;