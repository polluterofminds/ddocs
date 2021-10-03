import { useState } from "react";
import { Popover } from "@headlessui/react";
import ddocsLogo from "../../assets/img/logo.svg";
import gift from "../../assets/img/gift.svg";
import wallet from "../../assets/img/wallet.svg";
import Footer from "./Footer";
import useInterval from "../hooks/useInterval";

export default function Home() {
  const [ethAccount, setAccount] = useState(null);
  const [options] = useState(["DAO", "Community", "Work", "Life"]);
  const [optionsIndex, setOptionsIndex] = useState(0);
  useInterval(() => {
    if (optionsIndex < 3) {
      const newNumber = optionsIndex + 1;
      setOptionsIndex(newNumber);
    } else {
      setOptionsIndex(0);
    }
  }, 2000);

  const handleAuth = async () => {
    if (ethAccount) {
      setAccount(null);
    } else {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      setAccount(account);
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-white overflow-hidden">
      <div className="relative pt-6">
        <Popover>
          <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <nav
              className="relative flex items-center justify-between sm:h-10 md:justify-center"
              aria-label="Global"
            >
              <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0"></div>
              <div className="hidden md:flex md:space-x-10"></div>
              <div className="h-14 md:absolute md:flex md:items-center md:justify-end md:inset-y-0 md:right-0 login_button font-mono">
                <span className="inline-flex">
                  <button
                    onClick={handleAuth}
                    className="login-button inline-flex items-center px-4 py-2 text-base text-white font-bold"
                  >
                    {ethAccount ? "Disconnect Metamask" : "Login with Metamask"}
                  </button>
                </span>
              </div>
            </nav>
          </div>
        </Popover>

        <main className="flex justify-center mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <img className="w-24 m-auto" src={ddocsLogo} alt="DDocs Logo" />
            <p className="text-3xl font-bold mb-28 mt-2">
              dDocs
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-primaryPink to-secondaryPink">
                .
              </span>
              app
            </p>
            <div className="max-w-5xl m-auto">
              <h1 className="text-4xl tracking-tight font-bold text-gray-900 sm:text-5xl md:text-7xl">
                Web3-Native, Decentralized, Encrypted Docs for your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primaryPink to-secondaryPink">
                  {options[optionsIndex]}
                </span>
              </h1>
            </div>

            <div className="mt-5 max-w-5xl mx-auto sm:flex sm:justify-between md:mt-8 justify-between align-center text-center">
              <div className="text-center p-10">
                <img className="h-20 m-auto" src={gift} alt="gift-logo" />
                <h2 className="text-6xl mt-8">Beautiful Docs</h2>
                <div className="text-left max-w-sm m-auto">
                  <p className="mt-6 text-xl">
                    Elegant, simplified browser-based text editor that supports
                    editing <strong>in rich-text and markdown.</strong>
                  </p>

                  <p className="mt-6 text-xl">
                    <strong>Live collaboration</strong> with up to{" "}
                    <strong>50 active writers and commenters</strong>.
                  </p>

                  <p className="mt-6 text-xl">
                    Share <strong>publicly</strong> or within your{" "}
                    <strong>organization</strong>, with easily managed read,
                    write, and comment access.
                  </p>
                </div>
              </div>
              <div className="text-center p-10">
                <img className="h-20 m-auto" src={wallet} alt="gift-logo" />
                <h2 className="text-6xl mt-8">Web3-Native</h2>
                <div className="text-left max-w-sm m-auto">
                  <p className="mt-6 text-xl">
                    Stored on IPFS on the Matic network. Encrypted to protect
                    your organization’s most important documents.
                  </p>

                  <p className="mt-6 text-xl">
                    Gate access to documents, folders, and entire organizations
                    by:
                    <ul className="list-disc mt-2 pl-4">
                      <li>Wallet Address</li>
                      <li>ENS Name</li>
                      <li>Token Holder</li>
                      <li>NFT-Minter contract address</li>
                    </ul>
                  </p>

                  <p className="mt-6 text-xl">
                    Take meeting notes and propose Snap Votes directly in
                    meeting notes.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-20">
              <p className="text-xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primaryPink to-secondaryPink">
                  <u>
                    <a
                      href="https://discord.gg/cwfnm4PZDJ"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      JOIN OUR DISCORD
                    </a>
                  </u>
                </span>{" "}
                for early access or{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-br from-primaryPink to-secondaryPink">
                  <u>
                    <a
                      href="https://twitter.com/search?q=ddocs&src=typed_query"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      FOLLOW US ON TWITTER
                    </a>
                  </u>
                </span>{" "}
                for updates.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 md:max-w-6xl m-auto max-w-xl">
                <div className="p-2">
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      Opportunity: an open-source and IPFS-friendly version of
                      Google Docs.
                      <br />
                      <br />
                      Core assumptions:
                      <br />- all users have an Ethereum address / privkey
                      <br />- collaborative editing but data is encrypted when
                      stored in cloud (i.e. smart client / dumb server)
                    </p>
                    &mdash; Dan Romero (@dwr){" "}
                    <a href="https://twitter.com/dwr/status/1422677624095088640?ref_src=twsrc%5Etfw">
                      August 3, 2021
                    </a>
                  </blockquote>
                </div>
                <div className="p-2">
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      I have literally been kicking around the idea of building
                      this. Not reviving my old app Graphite, per se, but taking
                      the learnings and doubling down on IPFS and Eth.
                    </p>
                    &mdash; Justin Hunter (@polluterofminds){" "}
                    <a href="https://twitter.com/polluterofminds/status/1422746878458966018?ref_src=twsrc%5Etfw">
                      August 4, 2021
                    </a>
                  </blockquote>
                </div>
                <div className="p-2">
                  <blockquote className="twitter-tweet">
                    <p lang="en" dir="ltr">
                      Screw it, alpha leak lol marketing page shipping this
                      weekend
                      <a href="https://t.co/JINerndcWP">
                        https://t.co/JINerndcWP
                      </a>
                    </p>
                    &mdash; Zach 🦇🔊 (@zherring){" "}
                    <a href="https://twitter.com/zherring/status/1443721675401412609?ref_src=twsrc%5Etfw">
                      September 30, 2021
                    </a>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
