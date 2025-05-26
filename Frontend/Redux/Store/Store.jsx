import { configureStore } from "@reduxjs/toolkit";
import adminReducer from '../Slices/AdminSlice'
import { persistReducer, persistStore } from "redux-persist"; 
import storage from "redux-persist/lib/storage";


const persistConfigAdmin = {
    storage,
    key:"admin"
}

const persistedAdminreducer=persistReducer(persistConfigAdmin,adminReducer)
export const store= configureStore({
    reducer:{
             admin:persistedAdminreducer,
    }
})

export const persistor=persistStore(store)
