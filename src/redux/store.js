
import { contactsReducer } from "./contacts/reducer";

import {filterReducer } from './fiter/reducer'
import { combineReducers, configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";

import {
    persistStore,
    persistReducer,
    FLUSH,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
    REHYDRATE,
} from 'redux-persist';
import { logger } from "redux-logger";



const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
       }
    ),
    logger,
]
const persistConfig = {
    key: 'contacts',
    storage,
}




const rooteReducer = combineReducers({
    contacts: contactsReducer, 
    filter: filterReducer,

})
const persistedReducer = persistReducer(persistConfig, rooteReducer )

const store = configureStore({
    reducer: persistedReducer, 
    middleware,
})

const persistor = persistStore(store);


export default { store, persistor };
