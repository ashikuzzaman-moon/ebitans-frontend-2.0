// Import necessary dependencies and styles
'use client';

// Import Redux-related functions and actions
// import { useSelector, useDispatch } from '../redux/store';
import { useGetHomeMutation } from '@/redux/home/homeApi';
import { useEffect } from 'react';

type Store = {
    id: number;
    name: string;
    slug: string;
    url: string;
    type: string;
    status: string;
    currency: number;
    currency_rate: string;
    purchase_date: string;
    expiry_date: string;
    dropship_commission: number;
    access_key: number;
    created_at: string;
    updated_at: string;
    // Add other fields as needed, or use `Partial<Store>` for optional fields
};

type MenuItem = {
    id: number;
    name: string;
    url: string;
    sort: string;
    created_at: string;
    updated_at: string;
    // Add other fields as needed
};

type ApiResponse = {
    store_id: number;
    store: Store;
    // menu: MenuItem[];
};

// Define the Home component
const Home: React.FC = () => {
    // Initialize useDispatch to dispatch Redux actions

    const domain: string = 'shr.localhost:3000';
    // JSX for rendering the card with fetched data
    const [getHome, { data, isLoading, error, isError }] = useGetHomeMutation();
    const { store_id, cat} = data || {};
    const {name} = cat || {};
    // let storeArr: [string, any][] = Object.entries(home);

    useEffect(() => {
        if (typeof window !== 'undefined'){
            getHome({ name: domain })
                .unwrap()
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => console.error('Failed to fetch:', error));
        }
    }, [domain, getHome]);

    // useEffect(() => {
    //     // log
    //     console.log("this", home);
    // }, [home]);

    // decide what to render
    let content: JSX.Element | null = null;

    if (isLoading) {
        content = <div>Loading...</div>;
    } else if (!isLoading && !isError) {
        content = (
            <>
                <p>data:</p>
                {/* <div>
                    {Object.values(home)?.map((element: [string, any], index: number) => {
                        return <div key={index}>the store id is {element[0]} : {element[1]}</div>;
                    })}
                </div> */}
                {/* <div>{Object.values(home)?.map((item, i) => <p key={i}>{item.store_id}</p>)}</div> */}
                <p>store id : {store_id}</p>
                <p>cat name: {name}</p>
            </>
        );
    }

    // JSX for the main component
    return (
        <>
            <div>
                {/* Render the card */}
                Home
                {content}
            </div>
        </>
    );
};

export default Home;
