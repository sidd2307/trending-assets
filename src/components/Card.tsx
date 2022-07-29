import React from "react";
import Coin from "../CoinInterface";
import BitCoin from "../static/bitcoin.png";
import Solana from "../static/solana.png";
import Ethereum from "../static/ethereum.png";
import Binance from "../static/binance.png";
import Shiba from "../static/shiba.png";

interface Props {
  info: Coin;
}

export default function Card({ info }: Props) {
  return (
    <div>
      <div className="relative top-[40px] left-[73px] bg-[#14172B] h-[70px] w-[70px] rounded-[35px] pl-[5px] pt-1">
        <div className="h-[60px] w-[60px] rounded-[30px] bg-[#1B1F34] border-0.5 border-solid border-[#21243A] pl-[9px] pt-2">
          <img
            src={
              info.image === "Binance"
                ? Binance
                : info.image === "Shiba"
                ? Shiba
                : info.image === "Solana"
                ? Solana
                : info.image === "BitCoin"
                ? BitCoin
                : Ethereum
            }
            className="h-[40px] w-[40px] rounded-[20px] border-1 border-solid border-[#21243A]"
          ></img>
        </div>
      </div>
      <div className="h-[340px] w-[220px] bg-[#1B1F34] rounded-[30px] flex border-1 border-solid border-[#21243A] flex-col justify-evenly pt-[40px]">
        <span className="text-[#737BAE] text-sm font-bold">{info.name}</span>
        <span className="w-[150px] rounded-[20px] bg-[#14172B] mx-auto my-0 text-[#ECF0FF] font-bold text-[13px]">
          {info.value}{" "}
          <span
            className="text-[9px] pl-[8px]"
            style={{
              color: info.ratechange > 0 ? "#02E797" : "#E74749",
            }}
          >
            {info.ratechange > 1 ? `+${info.ratechange}` : info.ratechange}%
          </span>
        </span>
        <span className="text-[#5A5F7D] text-[10px] font-bold">Price</span>
        <span className="w-[150px] rounded-[20px] bg-[#14172B] my-0 mx-auto text-[#ECF0FF] font-bold text-[13px]">
          {info.price}
        </span>
        <span className="text-[#5A5F7D] text-[10px] font-bold">TVL</span>
        <span className="w-[150px] rounded-[20px] bg-[#14172B] p-[6px] my-0 mx-auto text-[#ECF0FF] font-bold text-[13px] flex flex-row justify-evenly">
          <img src={BitCoin} className="w-[15px] h-[15px] rounded-[7.5px]" />
          <img src={Ethereum} className="w-[15px] h-[15px] rounded-[7.5px]" />
          <img src={Shiba} className="w-[15px] h-[15px] rounded-[7.5px]" />
        </span>
        <span className="text-[#5A5F7D] text-[10px] font-bold">
          Popular Pairs
        </span>
      </div>
    </div>
  );
}
