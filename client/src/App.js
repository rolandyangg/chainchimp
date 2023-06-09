import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

// Additional imports
import { RouterProvider } from "react-router-dom";
import { router } from "./lib/routes";
// import Home from "./pages/index.js"
import Navbar from "./components/navbar.js"
import Footer from "./components/footer.js"

export default function App() {
  return (
    <>
    <Navbar/>
      <RouterProvider router={router}/>
    <Footer/>
    </>
    // <Home/>
    // <div className="container">
    //   <main className="main">
    //     <h1 className="title">
    //       Welcome to <a href="https://thirdweb.com/">thirdweb</a>!
    //     </h1>

    //     <p className="description">
    //       Get started by configuring your desired network in{" "}
    //       <code className="code">src/index.js</code>, then modify the{" "}
    //       <code className="code">src/App.js</code> file!
    //     </p>

    //     <div className="connect">
    //       <ConnectWallet dropdownPosition={{ side: 'bottom', align: 'center'}} />
    //     </div>

    //     <div className="grid">
    //       <a href="https://portal.thirdweb.com/" className="card">
    //         <h2>Portal &rarr;</h2>
    //         <p>
    //           Guides, references and resources that will help you build with
    //           thirdweb.
    //         </p>
    //       </a>

    //       <a href="https://thirdweb.com/dashboard" className="card">
    //         <h2>Dashboard &rarr;</h2>
    //         <p>
    //           Deploy, configure and manage your smart contracts from the
    //           dashboard.
    //         </p>
    //       </a>

    //       <a href="https://portal.thirdweb.com/templates" className="card">
    //         <h2>Templates &rarr;</h2>
    //         <p>
    //           Discover and clone template projects showcasing thirdweb features.
    //         </p>
    //       </a>
    //     </div>
    //   </main>
    // </div>
  );
}
