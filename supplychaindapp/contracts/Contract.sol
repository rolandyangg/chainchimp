// SPDX-License-Identifier: MIT
// Declare the version of Solidity to be used
pragma solidity ^0.8.0;

// Define the contract
contract SupplyChain {
    enum STAGE {
        init,
        Raw_Material,
        Manufacturer,
        Distributor,
        Retailer,
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
        uint quantity;
        // Put in a tracking number, we can see everything about the product 
        uint[] history; // Transaction ID history
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

    address[] partyAddresses;

    // Input: product name, quantity | Returns item ID
    function createProduct(string memory _item, uint _quantity) public returns (uint) {
        uint _id = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender)));
        Product storage product = products[_id];
        // require(some condition)
        product.id = _id;
        product.quantity = _quantity;
        product.stage = STAGE.Raw_Material;
        product.item = _item;
        
        return _id;        
    }
    
    // Input: party name, location, stage # (starts at 0), wallet address
    function createParty(string memory _name, string memory _location, STAGE _role, address _wallet) public {
        Party storage party = parties[_wallet];
        partyAddresses.push(_wallet);

        party.name = _name;
        party.wallet = _wallet;
        party.role = _role;
        party.location = _location;
    }

    function createTransaction(address _sender, address payable _receiver, uint _productID, uint _price, string memory _memo) public payable returns (uint) {
        uint _id = uint(keccak256(abi.encodePacked(block.timestamp,msg.sender)));

        Transaction storage transaction = transactions[_id];

        transaction.id = _id;
        transaction.sender = _sender;
        transaction.receiver = _receiver;
        transaction.productID = _productID;
        transaction.price = _price;
        transaction.memo = _memo;
        transaction.timestamp = block.timestamp; // convert unix timestamp to actual time https://www.unixtimestamp.com/

        _receiver.transfer(_price); // send ETH

        products[_productID].history.push(_id); // add transaction ID to transaction history

        return _id;
    }
    
    
    function getParty(address _partyAddress) public view returns (Party memory) {
        return parties[_partyAddress];
    }

    // No parameters | Returns list of parties (but why???)
    function getAllParties() public view returns (Party[] memory, uint) {
        uint length = partyAddresses.length;
        Party[] memory allParties = new Party[](length);

        for (uint i = 0; i < length; i++) {
            allParties[i] = parties[partyAddresses[i]];
        }
        return (allParties, length);
    }

    // Input: Product ID | Returns product
    function getProduct(uint _productId) public view returns (Product memory) {
        return products[_productId];
    }

    // Input: party wallet ID | Returns all products under an address, # of products
    function getAllProducts(address _wallet) public view returns (Product[] memory, uint) {
        Party memory party = parties[_wallet];
        uint length = party.productIDs.length;
        Product[] memory allProducts = new Product[](length);

        for (uint i = 0; i < length; i++) {
            Product memory product = products[party.productIDs[i]];

            allProducts[i] = product;
        }
        return (allProducts, length);
    }
    
    function getTransactionHistory(uint _id) public view returns (Transaction[] memory, uint) {
        Product memory product = products[_id];
        uint length = product.history.length;
        Transaction[] memory transactionHistory = new Transaction[](length);

        for (uint i = 0; i < length; i++) {
            Transaction memory transaction = transactions[product.history[i]];

            transactionHistory[i] = transaction;
        }
        return (transactionHistory, length);
    }
}