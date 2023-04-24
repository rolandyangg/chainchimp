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

export const CONTRACT_ID =  "0xc70a2739fB6BB0d2D31d61B1aEe7FEC76Dec77B3";
