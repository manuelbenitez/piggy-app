import React from 'react'

const useGetUserNFTBalance = () => {
    const [balance, setBalance] = React.useState<number>(0);
    
    const fetchBalance = async () => {
        try {
        // Fetch balance
        setBalance(0);
        } catch (e) {
        console.error(e);
        }
    };
    
    React.useEffect(() => {
        fetchBalance();
    }, []);
    
    return {
        balance,
    };
    
}

export default useGetUserNFTBalance