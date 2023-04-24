const STAGE_TO_NUM = new Map();

STAGE_TO_NUM.set("Raw Materials", 0);
STAGE_TO_NUM.set("Supplier", 1);
STAGE_TO_NUM.set("Manufacturer", 2);
STAGE_TO_NUM.set("Distributor", 3);
STAGE_TO_NUM.set("Consumer", 4);

const NUM_TO_STAGE = new Map([
    [0, "Raw Materials"],
    [1, "Supplier"],
    [2, "Manufacturer"],
    [3, "Distributor"],
    [4, "Consumer"]
]);

export { STAGE_TO_NUM };
export { NUM_TO_STAGE };

export const CONTRACT_ID =  "0xCB513bc9977A094F73D4BC15e14e3Ff94d06f828";
