// combine  reducer


import { combineReducers } from 'redux';


import {
    CountReducer,
    AllProductReducer,
    DeleteProductReducer,
    ProductByIdReducer,
    FetchCategoryReducer,
    FetchSubCategoryReducer,
    FetchTypeReducer,
    FetchAllTypeReducer,
    DeleteTypeReducer,
    FetchTypeByIdReducer,
    FetchAllCategoryReducer,
    DeleteCategoryReducer,
    FetchCategoryByIdReducer,
    FetchAllSubCategoryReducer,
    DeleteSubCategoryReducer,
    FetchSubCategoryByIdReducer,
    FetchAllDepartmentReducer,
    DeleteDepartmentReducer,
    FetchDepartmentByIdReducer,
    FetchAllOutwardReducer,
    DeleteOutwardReducer,
    FetchOutwardByIdReducer,
    FetchCategoryByIdUpdateReducer,
    FetchSubCategoryByIdUpdateReducer,
    FetchTypeByIdUpdateReducer,
    ProductByIdUpdateReducer,
    FetchDepartmentByIdUpdateReducer,
    FetchOutwardByIdUpdateReducer,
    ProductByIdQRReducer
} from "./reducer/Fetchreducer"

import {
    UpadteProductReducer,
    UpadteTypeReducer,
    UpadteSubcategoryReducer,
    UpadtecategoryReducer,
    UpadteOutwardReducer,
    UpadteDepartmentReducer
} from './reducer/Upadatereducer'

import {
    AddProductReducer,
    AddCategoryReducer,
    AddSubCategoryReducer,
    AddCategoryTypeReducer,
    AddDepartmentTypeReducer,
    AddOutwardReducer,
} from './reducer/Addreducer'

import { Admin_LoginReducer } from './reducer/Adminreducer'



const rootReducer = combineReducers({
    // count
    CountReport: CountReducer,
    // add product

    AddProduct: AddProductReducer,
    AddCategory: AddCategoryReducer,
    AddSubCategory: AddSubCategoryReducer,
    AddCategoryType: AddCategoryTypeReducer,
    AddDepartmentType: AddDepartmentTypeReducer,
    AddOutward: AddOutwardReducer,

    // view
    AllProductView: AllProductReducer,
    ProductViewById: ProductByIdReducer,
    AllCategoryView: FetchCategoryReducer,
    AllSubCategoryView: FetchSubCategoryReducer,
    TypeView: FetchTypeReducer,
    AllTypeView: FetchAllTypeReducer,
    TypeViewById: FetchTypeByIdReducer,
    ViewAllCategory: FetchAllCategoryReducer,
    CategoryViewById: FetchCategoryByIdReducer,
    ViewAllSubCategory: FetchAllSubCategoryReducer,
    SubCategoryViewById: FetchSubCategoryByIdReducer,
    ViewAllDepartment: FetchAllDepartmentReducer,
    DepartmentViewById: FetchDepartmentByIdReducer,
    ViewAllOutward: FetchAllOutwardReducer,
    OutwardViewById: FetchOutwardByIdReducer,
    CategoryViewByIdForUpadte: FetchCategoryByIdUpdateReducer,
    SubCategoryViewByIdForupadte: FetchSubCategoryByIdUpdateReducer,
    TypeViewByIdUpdate: FetchTypeByIdUpdateReducer,
    ProductViewByIdUpadte: ProductByIdUpdateReducer,
    DepartmentViewByIdUpdate: FetchDepartmentByIdUpdateReducer,
    OutwardViewByIdUpdate: FetchOutwardByIdUpdateReducer,
    ProductViewByIdForQr: ProductByIdQRReducer,
    // delete
    DeleteProduct: DeleteProductReducer,
    Deletetype: DeleteTypeReducer,
    DeleteCategory: DeleteCategoryReducer,
    DeleteSubCategory: DeleteSubCategoryReducer,
    DeleteDepartment: DeleteDepartmentReducer,
    DeleteOutward: DeleteOutwardReducer,
    // update
    UpdateProduct: UpadteProductReducer,
    UpdateType: UpadteTypeReducer,
    UpdateSubCategory: UpadteSubcategoryReducer,
    UpdateCategory: UpadtecategoryReducer,
    UpdateOutward: UpadteOutwardReducer,
    UpdateDepartment: UpadteDepartmentReducer,
    // admin
    AdminLogin: Admin_LoginReducer
})

export default rootReducer;