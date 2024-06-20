import React from "react";
import Image from "next/image";
// import { parseCookies } from "nookies";
type Props = {
  portfolioList: string;
};

const PortfolioCard: React.FC<Props> = ({ portfolioList }) => {
  //   const artist = artistList.filter((x: any) => x._id==artworkList.artistId);
  //   const userData = userList.filter(
  //     (x: any) => x._id == artist[0].userId
  //   );
  const portfolio = Object(portfolioList);

  return (
    <div className="flex justify-between items-center p-[32px] bg-white w-[310px] md:w-full md:min-w-[600px]  h-[80px] rounded-[50px] drop-shadow-md my-1">
      <div className=" hidden md:flex w-[50px] h-[50px] rounded-[50px] overflow-hidden drop-shadow-lg ">
        <Image src={portfolio.logo} alt="coin_logo" width={50} height={50} />
      </div>
      <div className="flex justify-center w-[100px] md:w-[170px] ">
        <p className="text-[16px] text-primary font-semibold truncate">
          {portfolio.name}
        </p>
      </div>
      <div className="flex justify-end w-[150px] md:w-[170px]">
        <p className="truncate text-gray-400 font-light">
          {portfolio.price_BTC}
        </p>
      </div>
      <div className="flex justify-start ml-1  w-[80px]">
        {portfolio.P_L_24h >= 0 ? (
          <>
            <p className="text-green-600">+{portfolio.P_L_24h}</p>
          </>
        ) : (
          <>
            <p className="text-red-600">{portfolio.P_L_24h}</p>
          </>
        )}
      </div>
    </div>
  );
};
export default PortfolioCard;
