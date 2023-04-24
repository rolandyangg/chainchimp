const STAGE_TO_NUM = new Map();

STAGE_TO_NUM.set("Supply Chain Manager", 0);
STAGE_TO_NUM.set("Raw Materials", 1);
STAGE_TO_NUM.set("Supplier", 2);
STAGE_TO_NUM.set("Manufacturer", 3);
STAGE_TO_NUM.set("Distributor", 4);
STAGE_TO_NUM.set("Consumer", 5);

const NUM_TO_STAGE = new Map([
    [0, "Supply Chain Manager"],
    [1, "Raw Materials"],
    [2, "Supplier"],
    [3, "Manufacturer"],
    [4, "Distributor"],
    [5, "Consumer"]
]);

export { STAGE_TO_NUM };
export { NUM_TO_STAGE };

<<<<<<< HEAD
export const CONTRACT_ID =  "0x9bF5F8a42B8A41155739C9cdc8aCE76eA36aEdbA";
=======
export const CONTRACT_ID =  "0xdA726230922166632e1da74F62cf5B561AbEA443";
>>>>>>> refs/remotes/origin/main
