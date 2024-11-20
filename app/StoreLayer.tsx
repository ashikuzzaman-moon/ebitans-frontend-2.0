'use client';

// Import Redux-related functions and actions
// import { useAppDispatch, useAppSelector } from '@/redux/hooks/rtkHooks';
// import { useGetHomeMutation } from "@/redux/home/homeApi";

// components

// import CartPopUp from "@/components/cart-popup";
// import ThemeProvider from "@/hooks/theme-provider";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ToastContainer } from "react-toastify";
// import AllMobileBottomMenu from "./mobileBottomMenu";
// const queryClient = new QueryClient();

const StoreLayer = ({ children }: any) => {
  

    return (
        <>
            {/* <Header design={design} headersetting={headersetting}/> */}
            {children}
            {/* <AllMobileBottomMenu/> */}
            {/* <Footer design={design} headersetting={headersetting}/> */}
            {/* <CartPopUp /> */}
            {/* <ToastContainer position="top-right" newestOnTop /> */}
        </>
    );
};

export default StoreLayer;
