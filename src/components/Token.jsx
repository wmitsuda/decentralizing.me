import React from "react";
import Faucet from "./Faucet.json";
import Web3 from "web3";
import styled from "styled-components";

const tokenContractAddress = "0xeE3CA8C8B5Ea3c2Aa293B0fD2E61B3638D953241";
const faucetContractAddress = "0x26C535F88295C0277Df67Ce0c6a2E99C02b0c34D";

const ShinyButton = styled.button`
  font-family: "Lucida Console", Monaco, monospace;
  font-weight: bold;
  background-image: linear-gradient(to bottom right, red, yellow);
`;

export const AddTokenButton = React.memo(() => {
  const handleClick = () => {
    window.web3.currentProvider.sendAsync({
      method: "metamask_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenContractAddress,
          symbol: "BUIDL",
          decimals: 18,
          image:
            "https://blog.decentralizing.me/llamacorn.jpg"
        }
      },
      id: 20
    });
  };
  return (
    <ShinyButton onClick={handleClick}>
      Track #BUIDLcoin{" "}
      <span role="img" aria-label="Track token">
        🎯
      </span>
    </ShinyButton>
  );
});

export const RequestTokenButton = React.memo(() => {
  const handleClick = async () => {
    window.ethereum.enable();
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const contract = new web3.eth.Contract(Faucet.abi, faucetContractAddress);
    await contract.methods.gimmeCoins.send({ from: accounts[0] });
  };
  return (
    <ShinyButton onClick={handleClick}>
      Gimme #BUIDLcoin{" "}
      <span role="img" aria-label="To the moon">
        🚀
      </span>
    </ShinyButton>
  );
});
