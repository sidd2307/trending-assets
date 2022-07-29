import React from "react";
import Card from "../components/Card";
import MenuImage from "../static/menu.png";

export default function Home() {
  const arr = [
    {
      name: "Bitcoin (BTC)",
      value: "$31,812.80",
      ratechange: +10,
      price: "$60,000",
      image: "BitCoin",
    },
    {
      name: "Solana (SOL)",
      value: "$31,812.80",
      ratechange: -12.32,
      price: "$60,000",
      image: "Solana",
    },
    {
      name: "Ethereum (ETH)",
      value: "$31,812.80",
      ratechange: -11.39,
      price: "$60,000",
      image: "Ethereum",
    },
    {
      name: "Binance USD (BUSD)",
      value: "$31,812.80",
      ratechange: +0.26,
      price: "$60,000",
      image: "Binance",
    },
    {
      name: "Shiba Inu (SHIB)",
      value: "$31,812.80",
      ratechange: +6.9,
      price: "$60,000",
      image: "Shiba",
    },
  ];
  return (
    <div className="bg-[#14172B] h-full min-h-[100vh]">
      <div className="pt-[100px] ml-[40px] w-[200px] flex flex-row">
        <div className="h-[25px] w-[25px] rounded-[3px] border-[2px] border-solid border-[#DC1FFF] pt-[7px] pl-[7px]">
          <img src={MenuImage} />
        </div>
        <div className="text-[white] font-bold text-base pl-[10px] pt-[0px]">
          Trending Assets
        </div>
      </div>
      <div className="flex flex-row justify-evenly w-[100%] pt-[20px] flex-wrap">
        {arr.map((item, key) => {
          return <Card key={key} info={item} />;
        })}
      </div>
    </div>
  );
}
