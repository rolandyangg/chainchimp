// SPDX-License-Identifier: MIT
// Declare the version of Solidity to be used
pragma solidity ^0.8.0;

// Define the contract
contract SupplyChain {
    enum STAGE {
        Raw_Material,
        Supplier,
        Manufacturer,
        Distributor,
        Consumer
    }
    
    struct Transaction {
        uint id;
        address sender;
        address receiver;
        uint productID;
        uint price;
        string memo;
        uint timestamp;
    }

    // Define a struct to represent a shipment
    struct Product {
        uint id; // hashed ID
        STAGE stage; // always start as raw materials
        string item;

        // Put in a tracking number, we can see everything about the product 
        uint[] history; // Transaction ID history
        address[] ownerHistory;
    }

    struct Party {
        address wallet;
        string name;
        string location;
        STAGE role;
        uint[] productIDs; // list of product IDs associated with owner
    }

    mapping (address => Party) public parties;
    mapping (uint => Product) public products;
    mapping (uint => Transaction) public transactions;

    // function getProduct(uint _id) public view returns (Product) {
    //     return products[_id];
    // }

    // function getParty(address _id) public view returns (Party) {
    //     return parties[_id];
    // }

    function getParty(address _partyAddress) public view returns (Party memory) {
        return parties[_partyAddress];
    }

    function getProduct(uint _productId) public view returns (Product memory) {
        return products[_productId];
    }

    // createProduct
    function createProduct(string memory _item) public returns (uint) {
        uint _id = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender)));
        Product storage product = products[_id];
        // require(some condition)
        product.id = _id;
        product.stage = STAGE.Raw_Material;
        product.item = _item;
        
        return _id;        
    }
    
    // createParty
    function createParty(string memory _name, string memory _location, STAGE _role, address _wallet) public {
        Party storage party = parties[_wallet];

        party.name = _name;
        party.wallet = _wallet;
        party.role = _role;
        party.location = _location;
    }

    // createTransaction
    function createTransaction(address _sender, address _receiver, uint _productID, uint _price, string memory _memo) public returns (uint) {
        uint _id = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender)));

        Transaction storage transaction = transactions[_id];

        transaction.id = _id;
        transaction.sender = _sender;
        transaction.receiver = _receiver;
        transaction.productID = _productID;
        transaction.price = _price;
        transaction.memo = _memo;
        transaction.timestamp = block.timestamp;
        // convert unix timestamp to actual time https://www.unixtimestamp.com/

        
        return _id;
    }

    // getParties

    // getProducts
    


    // Define a function to create a new shipment
    // function createShipment(address _receiver, string memory _item) public {
    //     shipmentCount++;
    //     shipments[shipmentCount] = Shipment(msg.sender, _receiver, _item, block.timestamp);
    // }
    
    // // Define a function to get the details of a shipment
    // function getShipmentDetails(uint256 _shipmentId) public view returns (address, address, string memory, uint256) {
    //     Shipment storage shipment = shipments[_shipmentId];
    //     return (shipment.sender, shipment.receiver, shipment.item, shipment.timestamp);
    // }
}
