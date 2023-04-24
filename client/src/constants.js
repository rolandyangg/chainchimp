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

export const CONTRACT_ID =  "0x8E4E6eBe611E36B0F09296244b678e8a8F4C6d2E";
