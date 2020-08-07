import React from "react";
import {store} from "./redux/redux-store";
import {StoreType} from "./redux/store";

const StoreContext = React.createContext({} as StoreType)

export type ProviderType = {
    store: any
    children?: React.ReactNode
}

export const Provider = (props: ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}

export default StoreContext;