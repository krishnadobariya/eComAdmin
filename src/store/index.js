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
    ProductByIdQRReducer,
    FetchDateWiseReducer,
    FetchManagerReducer,
    FetchOutwardReportReducer,
    FetchFinishProReportReducer,
    FetchHistoryReducer,
    AllOutwardGetReducer,
    DeletePrslipReducer,
    FetchAllLocationReducer,
    DeletLoactionReducer,
    ViewByIdLoactionReducer,
    ViewByIdLoactionUpdateReducer,
    BrandWiseReducer,
    MainWiseReducer,
    LocationWiseReducer
} from "./reducer/Fetchreducer"

import {
    UpadteProductReducer,
    UpadteTypeReducer,
    UpadteSubcategoryReducer,
    UpadtecategoryReducer,
    UpadteOutwardReducer,
    UpadteDepartmentReducer,
    UpadteLocationReducer
} from './reducer/Upadatereducer'

import {
    AddProductReducer,
    AddCategoryReducer,
    AddSubCategoryReducer,
    AddCategoryTypeReducer,
    AddDepartmentTypeReducer,
    AddOutwardReducer,
    AddAllOutwardReducer,
    AddLocationTypeReducer
    
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
    AddfullOutward:AddAllOutwardReducer,
    AddLocationType:AddLocationTypeReducer,

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
    ViewDateWise:FetchDateWiseReducer,
    ViewDepatmentMager:FetchManagerReducer,
    ViewOutwardReport:FetchOutwardReportReducer,
    ViewFinishProduct:FetchFinishProReportReducer,
    ViewHistory:FetchHistoryReducer,
    FullGetOutward:AllOutwardGetReducer,
    ViewAllLocation:FetchAllLocationReducer,
    LocationViewById:ViewByIdLoactionReducer,
    LocationViewByIdUpdate:ViewByIdLoactionUpdateReducer,
    BrandWise:BrandWiseReducer,
    MainWise:MainWiseReducer,
    locationWise:LocationWiseReducer,
   
    // delete
    DeleteProduct: DeleteProductReducer,
    Deletetype: DeleteTypeReducer,
    DeleteCategory: DeleteCategoryReducer,
    DeleteSubCategory: DeleteSubCategoryReducer,
    DeleteDepartment: DeleteDepartmentReducer,
    DeleteOutward: DeleteOutwardReducer,
    DeletePrslip:DeletePrslipReducer,
    DeleteLocation:DeletLoactionReducer,
    // update
    UpdateProduct: UpadteProductReducer,
    UpdateType: UpadteTypeReducer,
    UpdateSubCategory: UpadteSubcategoryReducer,
    UpdateCategory: UpadtecategoryReducer,
    UpdateOutward: UpadteOutwardReducer,
    UpdateDepartment: UpadteDepartmentReducer,
    UpdateLoaction:UpadteLocationReducer,
    // admin
    AdminLogin: Admin_LoginReducer
})

export default rootReducer;