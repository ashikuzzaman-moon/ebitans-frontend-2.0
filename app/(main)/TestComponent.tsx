// MyTestComponent.tsx

import { RootState } from '@/redux/store';
import { useSelector } from 'react-redux';

const TestComponent = () => {
    <div >Body will come here ...</div>
    return <div>TestComponent</div>;
};

export default TestComponent;

// export function TestComponent({ children }: { children: React.ReactNode }) {
//     return <div className="border border-red-500">{children}</div>;
// }
