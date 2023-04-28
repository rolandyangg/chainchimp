# ChainChimp

LAHacks 2023 Project (Gode Chain Challenge Entry/Winner)

<img width="1070" alt="image" src="https://user-images.githubusercontent.com/42717361/234216001-750186d4-50d9-4ef9-b2f9-9fc5e2023db1.png">

# Inspiration

Currently there are many problems in the supply chain management ecosystem:

- Traceability - Beyond the direct contact of two parties, it is often difficult to trace back the origins of a product. If your table is defective, is it the manufacturer's fault for the design or the supplier's fault for supplying poor materials?
- Trust - How do you know what you are receiving is actually what you asked for (especially when it comes to brand name products)? Although document tampering is unethical, it is never impossible. There could be errors between transactions, and some shipments may try to cut corners...
- Labor - Performing transactions themselves take a lot of work. Often there is middlemen, a lot of paperwork, and other busy work that goes into a singular transaction.

To remedy these many issues we propose the usage of a blockchain to create a decentralized (traceability) application that mimics the supply chain management system!
Using blockchain will allow us to have an immutable public ledger record of all transactions for a product, and thus create transparency, trace, and traceability across supply chains.

# What It Does

Our web application acts as a platform for managers and the unique parties in the supply chain flow to perform easy transactions and deals with each other through cryptocurrency.

On the dashboard tab, parties have access to a multitude of different actions:

- Managers can add different parties to and setup their supply chain.

<img width="830" alt="image" src="https://user-images.githubusercontent.com/42717361/234216449-b102628a-f021-4c34-9b7b-1f7ddecea080.png">

- They can also dispatch requests for products and dispatch them into the supply chain system. The active products page displays all products with abbreivated progress of where they are along in their supply chain flow.

<img width="831" alt="image" src="https://user-images.githubusercontent.com/42717361/234217118-cfb33d4d-f1d8-46b0-9b96-fe76abb01740.png">

- Parties can also perform transactions between each other through the use of currency. For testing purposes our application uses Etherium on the Sepolia test network.

<img width="618" alt="image" src="https://user-images.githubusercontent.com/42717361/234223948-afbc4809-ea13-4154-be81-8978b76f2c63.png">

- Any user can view information on a product, along with its complete transaction history, allowing you to trace its journey along the entire supply chain.

<img width="638" alt="image" src="https://user-images.githubusercontent.com/42717361/234217234-0b92da6a-a6d3-4359-9f47-7e0399304337.png">

# How It Was Made

<img width="614" alt="image" src="https://user-images.githubusercontent.com/42717361/234222588-e23b6c92-1943-4a67-b59b-5de9db4d40d9.png">

We used Solidity to program and create a smart contract mimicing that of the supply chain system. Our smart contract primarily consists of utilizing data structures to store, read, and manipulate three structs representing a party, product, and transaction. We then deployed this smart contract using thirdweb onto the Etherium Sepolia Test Network.

For our front end we used React and ChakraUI to rapidly design a prototype of what our application may look like.

We then used a variety of APIs to connect and allow our our front end to interact with the smart contract and our Metamask wallets.

# How to Run It

Clone the repository onto your computer

```bash
git clone https://github.com/rolandyangg/chainchimp.git
```

## Frontend

Currently we do not have our website deployed.

cd into the client

```bash
cd client
```

Install all necessary packages

```bash
npm install
```

Run a local server

```bash
npm run start
```

## Backend

If you want to deploy your own version of our smart contract

cd into the dApp folder

```bash
cd supplychaindapp
```

Install all necessary packages

```bash
npm install
```

Deploy the smart contract, connect your wallet with thirdweb and follow the instructions they give

```bash
npm run deploy
```

# Challenges We Ran Into

- None of us knew of or have touched blockchain at all prior to this hackathon
- We started late (about halfway) through the hackathon because we didn't know we were actually going to do it (lol)
- Understanding of the implementation was a bit miscommunicated, leading for multiple redesigns of the smart contract
- We had trouble connecting the front end to the contract and our Metamask wallet (the middleware) but once that was figured out, parsing and displaying the data was cake

# Accomplishments We're Proud Of

- We learned about blockchain!!! (Smart Contracts, Solidity, Etherium, and a bunch of other fun theory stuff)
- We built a functional dApp with an interatctive UI that acts as a solution to issues in the supply chain management system
- Won the challenge by default because we were the only team that satisfied the challenge requirements, but Gode Chain didn't actually have any money and was a scam so they pulled out of the hackathon after submissions LOL
# Additional Images
<img width="790" alt="image" src="https://user-images.githubusercontent.com/42717361/234216252-0448f49b-10dc-4b1e-ac31-324be4be45d7.png">
