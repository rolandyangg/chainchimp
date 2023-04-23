// Declare the version of Solidity to be used
pragma solidity ^0.8.0;

// Define the contract
contract SupplyChain {
    // Define a struct to represent a shipment
    struct Shipment {
        address sender;
        address receiver;
        string item;
        uint256 timestamp;
    }
    
    // Declare a mapping to store shipments
    mapping (uint256 => Shipment) public shipments;
    uint256 public shipmentCount = 0;

    // Define a function to create a new shipment
    function createShipment(address _receiver, string memory _item) public {
        shipmentCount++;
        shipments[shipmentCount] = Shipment(msg.sender, _receiver, _item, block.timestamp);
    }
    
    // Define a function to get the details of a shipment
    function getShipmentDetails(uint256 _shipmentId) public view returns (address, address, string memory, uint256) {
        Shipment storage shipment = shipments[_shipmentId];
        return (shipment.sender, shipment.receiver, shipment.item, shipment.timestamp);
    }
}