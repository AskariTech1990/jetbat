"use client";
import React, { useState, useEffect } from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import { ethers } from "ethers";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import { bannerText } from "./Resourse";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Banner = () => {
  const JEBAT_PER_ETH = 1000000000; // Adjust this value based on your tokenomics

  const stages = [
    { tokenPrice: "0.00025", usdRaised: "$xxxx" },
    { tokenPrice: "0.00030", usdRaised: "$yyyy" },
    { tokenPrice: "0.00035", usdRaised: "$zzzz" },
    { tokenPrice: "0.00040", usdRaised: "$wwww" },
  ];

  const calculateTimeRemaining = () => {
    const targetDate = new Date();
    targetDate.setUTCHours(23, 59, 59, 0);

    const now = new Date();
    const difference = targetDate - now;

    let timeRemaining = {};
    if (difference > 0) {
      timeRemaining = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeRemaining;
  };

  const [account, setAccount] = useState(null);
  const [isConnecting, setIsConnecting] = useState(false);
  const [ethAmount, setEthAmount] = useState("");
  const [jebatAmount, setJebatAmount] = useState("");
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  const [currentStage, setCurrentStage] = useState(0);
  const [isClient, setIsClient] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [web3Modal, setWeb3Modal] = useState(null);
  const [providerType, setProviderType] = useState(null);

  useEffect(() => {
    setIsClient(true);

    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: "db936dbac5114deca844768617fe3f61",
        },
      },
      coinbasewallet: {
        package: CoinbaseWalletSDK,
        options: {
          appName: "Jebat Token Sale",
          infuraId: "db936dbac5114deca844768617fe3f61",
          rpc: "",
          chainId: 1,
          darkMode: false,
        },
      },
    };

    const web3ModalInstance = new Web3Modal({
      cacheProvider: false,
      providerOptions,
    });

    setWeb3Modal(web3ModalInstance);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const updateStageAndResetTimer = () => {
      const now = new Date();
      if (
        now.getUTCHours() === 23 &&
        now.getUTCMinutes() === 59 &&
        now.getUTCSeconds() === 59
      ) {
        setCurrentStage((prevStage) => (prevStage + 1) % stages.length);
        setTimeRemaining(calculateTimeRemaining());
      }
    };

    const interval = setInterval(updateStageAndResetTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatCountdown = () => {
    const { days, hours, minutes, seconds } = timeRemaining;
    return `D: ${days}  H: ${hours}  M: ${minutes}  S: ${seconds}`;
  };

  // const connectMetaMask = async () => {
  //   if (isConnecting) return;
  //   setIsConnecting(true);
  //   try {
  //     const provider = await detectEthereumProvider();
  //     if (provider) {
  //       const accounts = await provider.request({
  //         method: "eth_requestAccounts",
  //       });
  //       setAccount(accounts[0]);
  //       setProviderType("metamask");
  //       provider.on("accountsChanged", (accounts) => {
  //         setAccount(accounts[0]);
  //       });
  //       console.log("Connected to MetaMask successfully");
  //     } else {
  //       toast.error("Please install MetaMask!");
  //     }
  //     closeModal();
  //   } catch (error) {
  //     toast.error("Connection failed");
  //   } finally {
  //     setIsConnecting(false);
  //   }
  // };

  // const connectCoinbaseWallet = async () => {
  //   if (isConnecting) return;
  //   setIsConnecting(true);
  //   try {
  //     const provider = await web3Modal.connectTo("coinbasewallet");
  //     const web3Provider = new ethers.providers.Web3Provider(provider);
  //     const signer = web3Provider.getSigner();
  //     const address = await signer.getAddress();
  //     setAccount(address);
  //     setProviderType("coinbasewallet");
  //     closeModal();
  //     console.log("Connected to Coinbase Wallet successfully");
  //   } catch (error) {
  // if (error.message.includes("No Crypto Wallets found")) {
  //     toast.error("Coinbase Wallet extension not detected. Please install Coinbase Wallet.");
  //   } else {
  //     toast.error("Connection failed");
  //   }
  //   } finally {
  //     setIsConnecting(false);
  //   }
  // };

  // const connectWalletConnect = async () => {
  //   if (isConnecting) return;
  //   setIsConnecting(true);
  //   try {
  //     const provider = await web3Modal.connectTo("walletconnect");
  //     const web3Provider = new ethers.providers.Web3Provider(provider);
  //     const signer = web3Provider.getSigner();
  //     const address = await signer.getAddress();
  //     setAccount(address);
  //     setProviderType("walletconnect");
  //     closeModal();
  //     console.log("Connected to WalletConnect successfully");
  //   } catch (error) {
  //     toast.error("Connection failed");
  //   } finally {
  //     setIsConnecting(false);
  //   }
  // };


  const connectMetaMask = async () => {
    if (isConnecting) return;
    setIsConnecting(true);
    try {
      const provider = await detectEthereumProvider();
      if (provider) {
        const accounts = await provider.request({
          method: "eth_requestAccounts",
        });
        const selectedAccount = accounts[0];
        setAccount(selectedAccount);
        setProviderType("metamask");
        provider.on("accountsChanged", (accounts) => {
          const newAccount = accounts[0];
          setAccount(newAccount);
          toast.success(`Switched MetaMask account to: ${newAccount}`);
        });
        toast.success(`Connected to MetaMask successfully. Account: ${selectedAccount}`);
      } else {
        toast.error("Please install MetaMask!");
      }
      closeModal();
    } catch (error) {
      toast.error("Connection failed");
    } finally {
      setIsConnecting(false);
    }
  };
  
  const connectCoinbaseWallet = async () => {
    if (isConnecting) return;
    setIsConnecting(true);
    try {
      const provider = await web3Modal.connectTo("coinbasewallet");
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      setProviderType("coinbasewallet");
      closeModal();
      toast.success(`Connected to Coinbase Wallet successfully.`);
      toast.success(`Account: ${address}`)
    } catch (error) {
      if (error.message.includes("No Crypto Wallets found")) {
        toast.error("Coinbase Wallet extension not detected. Please install Coinbase Wallet.");
      } else {
        toast.error("Connection failed");
      }
    } finally {
      setIsConnecting(false);
    }
  };
  
  const connectWalletConnect = async () => {
    if (isConnecting) return;
    setIsConnecting(true);
    try {
      const provider = await web3Modal.connectTo("walletconnect");
      const web3Provider = new ethers.providers.Web3Provider(provider);
      const signer = web3Provider.getSigner();
      const address = await signer.getAddress();
      setAccount(address);
      setProviderType("walletconnect");
      closeModal();
      console.log(`Connected to WalletConnect successfully. Account: ${address}`);
    } catch (error) {
      toast.error("Connection failed");
    } finally {
      setIsConnecting(false);
    }
  };
  

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const disconnectMetaMask = () => {
    setAccount(null);
    setProviderType(null);
    toast.error("Disconnected from Wallet");
  };

  const handleEthAmountChange = (e) => {
    const ethValue = e.target.value;
    setEthAmount(ethValue);
    setJebatAmount(ethValue * JEBAT_PER_ETH);
  };

// const handlePurchase = async () => {
//   if (!account) return;

//   const provider = await detectEthereumProvider();
//   if (provider) {
//     try {
//       const transactionParameters = {
//         to: account, // Receiver address
//         from: account, // Your address
//         value: (ethAmount * Math.pow(10, 18)).toString(16), // Amount in wei (1 ETH = 10^18 wei)
//         // Additional transaction parameters...
//       };

//       const txHash = await provider.request({
//         method: 'eth_sendTransaction',
//         params: [transactionParameters],
//       });

//       // Transaction succeeded, send details to backend
//       const backendData = {
//         transactionHash: txHash,
//         sendingWalletAddress: account,
//         paymentType: 'ETH', // Assuming default payment type is ETH
//         purchaseTokenAmount: ethAmount,
//         jebatTokenAmount: jebatAmount,
//         transitionStatus:"Success"
//       };

//       await fetch('https://2lkz6gq8-3002.inc1.devtunnels.ms/transaction/record-details', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(backendData),
//       });

//       toast.success(`${jebatAmount} JEBAT has been sent to your MetaMask account.`);
//     } catch (error) {
//       // Transaction failed, handle error
//       toast.error("Transaction Cancel", error);

//       // Optionally, you can still record failed transaction details to backend
//       const failedBackendData = {
//         transactionHash: '',
//         sendingWalletAddress: account,
//         paymentType: 'ETH', // Assuming default payment type is ETH
//         purchaseTokenAmount: ethAmount,
//         jebatTokenAmount: jebatAmount,
//         transitionStatus:"Cancel"
//       };

//       await fetch('https://2lkz6gq8-3002.inc1.devtunnels.ms/transaction/record-details', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(failedBackendData),
//       });
//     }
//   } else {
//     console.error("Please install MetaMask!");
//   }
// };


// const handlePurchase = async () => {
//   if (!account) {
//     toast.error("Please connect your wallet.");
//     return;
//   }

//   const provider = await detectEthereumProvider();
//   if (provider) {
//     try {
//       const transactionParameters = {
//         to: account, // Receiver address
//         from: account, // Your address
//         value: (ethAmount * Math.pow(10, 18)).toString(16), // Amount in wei (1 ETH = 10^18 wei)
//         // Additional transaction parameters...
//       };

//       const txHash = await provider.request({
//         method: 'eth_sendTransaction',
//         params: [transactionParameters],
//       });

//       // Transaction succeeded, send details to backend
//       const backendData = {
//         transactionHash: txHash,
//         sendingWalletAddress: account,
//         paymentType: 'ETH', // Assuming default payment type is ETH
//         purchaseTokenAmount: ethAmount,
//         jebatTokenAmount: jebatAmount,
//         transitionStatus: "Success",
//       };

//       await fetch('https://2lkz6gq8-3002.inc1.devtunnels.ms/transaction/record-details', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(backendData),
//       });

//       toast.success(`${jebatAmount} JEBAT has been sent to your MetaMask account.`);
//     } catch (error) {
//       // Transaction failed, handle error
//       console.error("Transaction failed:", error);
//       toast.error("Transaction failed. Please try again.");

//       // Record failed transaction details to backend
//       const failedBackendData = {
//         transactionHash: '',
//         sendingWalletAddress: account,
//         paymentType: 'ETH', // Assuming default payment type is ETH
//         purchaseTokenAmount: ethAmount,
//         jebatTokenAmount: jebatAmount,
//         transitionStatus: "Cancel",
//       };

//       await fetch('https://2lkz6gq8-3002.inc1.devtunnels.ms/transaction/record-details', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(failedBackendData),
//       });
//     }
//   } else {
//     console.error("Please install MetaMask!");
//     toast.error("Please install MetaMask to continue.");
//   }
// };



const handlePurchase = async () => {
  if (!account) {
    toast.error("Please connect your wallet.");
    return;
  }

  const receiverAddress = '0x368bc0304e301A0cCC5EA429d5B995d6A98917A9'; // Receiver address

  const provider = await detectEthereumProvider();
  if (provider) {
    try {
      const transactionParameters = {
        to: receiverAddress, // Always send to the fixed receiver address
        from: account, // Your address
        value: (ethAmount * Math.pow(10, 18)).toString(16), // Amount in wei (1 ETH = 10^18 wei)
        // Additional transaction parameters...
      };

      const txHash = await provider.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
      });

      // Transaction succeeded, send details to backend
      const backendData = {
        transactionHash: txHash,
        sendingWalletAddress: account,
        paymentType: 'ETH', // Assuming default payment type is ETH
        purchaseTokenAmount: ethAmount,
        jebatTokenAmount: jebatAmount,
        transitionStatus: "Success",
      };

      await fetch('https://2lkz6gq8-3002.inc1.devtunnels.ms/transaction/record-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(backendData),
      });

      toast.success(`${jebatAmount} JEBAT has been sent to your MetaMask account.`);
    } catch (error) {
      // Transaction failed, handle error
      console.error("Transaction failed:", error);
      toast.error("Transaction failed. Please try again.");

      // Record failed transaction details to backend
      const failedBackendData = {
        transactionHash: '',
        sendingWalletAddress: account,
        paymentType: 'ETH', // Assuming default payment type is ETH
        purchaseTokenAmount: ethAmount,
        jebatTokenAmount: jebatAmount,
        transitionStatus: "Cancel",
      };

      await fetch('https://2lkz6gq8-3002.inc1.devtunnels.ms/transaction/record-details', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(failedBackendData),
      });
    }
  } else {
    console.error("Please install MetaMask!");
    toast.error("Please install MetaMask to continue.");
  }
};



  return (
    <>
      <ToastContainer />
      <div id="banner" className="flex flex-col justify-center items-center md:flex-row bg-black text-white lg:px-32 md:px-32 h-auto min-h-[100vh] -mt-28 lg:mt-0 md:mt-0 sm:mt-0 mb-20 lg:mb-0 md:mb-0">
        <section className="flex-1 flex flex-col justify-center px-4 py-8 md:px-8 md:py-16">
          <div className="flex items-center mb-4">
            <div className="lg:w-10 md:w-10 sm:w-10 w-5 h-1 bg-green-500"></div>
            <p className="text-[10px] ml-2">
              {bannerText.topSection.tokenName}
            </p>
          </div>
          <h1 className="lg:text-4xl md:text-4xl text-xl mb-4">
            {bannerText.topSection.headline.split("<br />")[0]}
            <br className="" />
            {bannerText.topSection.headline.split("<br />")[1]}
          </h1>
          <p className="mb-4 text-md lg:text-lg md:text-lg">
            {bannerText.topSection.subheadline}
          </p>
          <div className="flex flex-col md:flex-row">
            <button className="text-white rounded-full py-2 px-6 border-t-2 border-green-500">
              {bannerText.buttons.howItWorks}
            </button>
          </div>
        </section>

        <section className="flex justify-center items-center p-2 w-full md:w-auto">
          <div className="bg-black border-2 border-black rounded-xl p-2 max-w-md text-center shadow-lg shadow-green-500 w-full md:w-auto">
            <ul className="text-center">
              <li className="font-semibold text-end me-5 text-sm mb-5 text-white-500 leading-3">
                {bannerText.stage[`stage${currentStage + 1}`]}
              </li>
              <li className=" font-semibold text-2xl lg:text-4xl md:text-4xl mb-4 text-green-500 leading-3">
                {bannerText.middleSection.presaleStatus}
              </li>
              <li className="text-xl font-semibold mb-6 text-white leading-3">
                {bannerText.middleSection.nextPriceIncrease}
              </li>
              <div className="bg-white mb-6 flex justify-center h-auto rounded-lg ">
                <li className="text-3xl font-bold mb-4 text-green-500 pt-4 leading-3">
                  {isClient && formatCountdown()}
                </li>
              </div>
              <li className="text-xl  mb-4 text-white">
                Total USD Raised ={" "}
                {stages[(currentStage + 1) % stages.length].tokenPrice}
              </li>
              <li className="text-xl mb-5 text-white leading-3">
              Listing Price $JEBAT = 0.00045
              </li>
              <li className="text-xl mb-5 text-white leading-3">
                {bannerText.middleSection.purchasePercentage}
              </li>
              <li className="text-xl mb-5 text-white leading-3">
                Current $JEBAT = {stages[currentStage].tokenPrice}
              </li>
            </ul>

            <div className="flex flex-col lg:flex-row md:flex-row sm:flex-row gap-2">
              <div className="text-sm text-center mb-4 text-green-500 leading-3">
                <label className="lg:ms-2 md:ms-2 font-bold">
                  ETH:
                  <input
                    type="number"
                    value={ethAmount}
                    onChange={handleEthAmountChange}
                    className="ms-6 lg:ms-0 md:ms-0 sm:ms-0 mt-2 p-1 border rounded outline-none"
                  />
                </label>
              </div>
              <div className="text-sm text-center mb-4 text-green-500 leading-3">
                <label className="lg:ps-2 md:ps-2 font-bold">
                  JEBAT:
                  <input
                    type="number"
                    value={jebatAmount}
                    readOnly
                    className="ml-2 mt-2 p-1 border rounded"
                  />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-5">
              {account ? (
                <button
                  onClick={disconnectMetaMask}
                  className="bg-red-500 text-white rounded-full py-2 px-4 w-full"
                >
                  Disconnect
                </button>
              ) : (
                <button
                  onClick={openModal}
                  className="bg-green-500 text-white rounded-full py-2 px-4 w-full"
                  disabled={isConnecting}
                >
                  Connect Wallet
                </button>
              )}
              {account && (
                <button
                  onClick={handlePurchase}
                  className="bg-green-500 text-white rounded-full py-2 px-4 w-full"
                >
                  Purchase
                </button>
              )}
            </div>
          </div>
        </section>
      </div>

      {isModalOpen && (
        <div className="fixed p-2 inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-bold mb-4">Connect Wallet</h2>
            <button
              onClick={connectMetaMask}
              className="hover:bg-white hover:border-green-500 border bg-green-500 text-black rounded-lg py-2 px-4 w-full mb-2"
            >
              MetaMask
            </button>
            <button
              onClick={connectWalletConnect}
              className="hover:bg-white hover:border-green-500 border bg-green-500 text-black rounded-lg py-2 px-4 w-full mb-2"
            >
              Trust Wallet
            </button>
            <button
              onClick={connectCoinbaseWallet}
              className="hover:bg-white hover:border-green-500 border bg-green-500 text-black rounded-lg py-2 px-4 w-full mb-2"
            >
              Coinbase Wallet
            </button>
            <button
              onClick={closeModal}
              className="text-gray-500 rounded-lg py-2 px-4 w-full hover:bg-gray-200"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
