'use client';

// import store form rtk
// import { useRef } from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import StoreLayer from './StoreLayer';
// import { PersistGate } from 'redux-persist/integration/react';

const AppWrapper = ({ children }: any) => {
    // const storeRef = useRef<AppStore>();
    // if (!storeRef.current) {
    //     // Create the store instance the first time this renders
    //     storeRef.current = store();
    // }
    // console.log("ok",storeRef.current);

    return (
        <Provider store={store}>
            <StoreLayer>{children}</StoreLayer>
            {/* <PersistGate
                loading={<p>Loading from gate...</p>}
                persistor={persistor}
            >
                
            </PersistGate> */}
        </Provider>
    );
};
export default AppWrapper;
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/integration/react';
// import { store, persistor } from './store';

// export function Providers({ children }: { children: React.ReactNode }) {
//     return (
//         <Provider store={store}>
//             <PersistGate loading={<p>Loading from gate...</p>} persistor={persistor}>
//                 {children}
//             </PersistGate>
//         </Provider>
//     );
// }
