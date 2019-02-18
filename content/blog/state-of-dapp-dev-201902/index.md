---
title: State of Dapp Development, February 2019
date: "2019-02-18"
---

Dapp development is still in the early stages, but its tools and libraries are moving very fast. And by very fast I mean it is highly possible that a Dapp tutorial written 3 months ago you just found in some Medium post is already broken or not relevant anymore. Maybe this blog post itself may not be relevant anymore at the time you are reading it 🤔.

So this is a small list of technologies worth studying I recommend as of February 2019 to anyone willing to do Dapp development or become involved with blockchain-related opensource projects.

This is a personal opinion, based on things I've found myself and it is highly probable will change in future.

## Smart contract development

Don't waste time trying to understand Remix, it is very confusing for beginners. Try [Truffle](https://truffleframework.com/) with your IDE of choice.

And for local testing, use [Ganache](https://truffleframework.com/ganache). It'll provide you with a local private Ethereum blockchain.

For easy to use testnet/mainnet nodes, create an account on [Infura](https://infura.io/) and be happy. It just works. Yes, it's kind of awkward to use a decentralized technology from a centralized provider, but it is the best we have for now.

## Decentralized hosting

Try [IPFS](https://ipfs.io/). Very well documented and easy to understand and try out. This blog itself is also [hosted entirely in IPFS in a decentralized manner](../hello-world).

There is also Swarm, but personally I haven't tried it yet.

## MakerDAO

Not exactly related to Dapp development, but it is a good example of what I expected to be the future of finance.

DAI is a decentralized stablecoin, 1 DAI == 1 USD.

[MakerDAO](https://makerdao.com/en/) is a DAO that allows people to lock ETH inside it and borrow DAI. By gamifing the economics of creating and destroying DAI, it keeps its value stable. Beautiful.

## #DeFi

There is a kind of movement called [#DeFi](https://medium.com/defi-network/opening-defi-42a5afdb71e0) of related decentralized financial applications/protocols.

I haven't take a look at each one yet, but MakerDAO is part of it and it appears to have a lot of interesting ideas emerging from there.

## POA

I'm still a little skeptical about the idea of Proof of Authority, but besides that their idea of side chains seems to be interesting enough to spend some time reading about.

As an example, take a look at xDAI: lock some DAI into the POA smart contract in the Ethereum mainnet, issue the same amount of xDAI into the xDAI sidechain.

What are the advantages? Shorter block times, stable fees, no network congestion.

## React

What is a front-end library doing inside a list of Dapp technologies?

React vs Angular vs Vue wars aside, I've seem most projects adopting React as the front-end framework for their solutions, so if you intend to become involved with some of them, or at least understand their code, you need to become proficient in React.

This blog itself uses [Gatsby](https://www.gatsbyjs.org/), which is a static website generator which uses React behind the scenes.

Also, if you intend to use [Drizzle](https://truffleframework.com/drizzle), they have good support for React bindings.

## Electron

I mean [ElectronJS](https://electronjs.org/), don't confuse it with the Electrum Bitcoin wallet!

Most Dapps work out of box by just running it inside a web3-enable browser, so Chrome + Metamask is enough.

But some projects also opted to distribute their applications inside OS-native packages, and I've seem Electron is their choice for now, so it deserves a place on this list in the "bundling" category.