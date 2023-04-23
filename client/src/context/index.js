// import React, { useContext, createContext } from 'react';

// import { useAddress, useContract, useMetamask, useContractWrite } from '@thirdweb-dev/react';
// import { ethers } from 'ethers';

// const StateContext = createContext();

// export const StateContextProvider = ({ children }) => {
//     const { contract } = useContract('0xCcB5346A571Fe507176D3bC35DD3781E20d18476');

//     const { mutateAsync: createParty } = useContractWrite(contract, 'createParty');

//     const address = useAddress();
//     const connect = useMetamask();

//     const publishParty = (form) => {
//         try {
//             const data = createParty([
//                 "will smith",
//                 "antartica",
//                 5,
//                 address
//             ]);

//             console.log("add party success", data);
//         } catch(error) {
//             console.log("add party failure", error);
//         }

//         return (
//             <StateContext.Provider
//                 value={{
//                     address,
//                     contract, 
//                     createParty: publishParty
//                 }}
//             >
//                 {children}
//             </StateContext.Provider>
//         )
//     }
// }

// export const useStateContext = () => useContext(StateContext);