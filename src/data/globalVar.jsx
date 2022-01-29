import { useState } from 'react';

const GlobalVar = () => {
    const [number, setNumber] = useState('123');
    return({
        number:number,
        setNumber:setNumber
    })
}
export default GlobalVar