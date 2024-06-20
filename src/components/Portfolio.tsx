import React from "react";
import PortfolioCard from "./PortfolioCard";

type Props = {
  portfolios: string[];
};
const Portfolios: React.FC<Props> = ({ portfolios }) => {
  return (
    <div>
      {portfolios.length == 0 ? (
        <>
          <p className="text-primary">
            There are no assets in the portfolio yet.
          </p>
        </>
      ) : (
        <>
          <div className="h-[400px] px-2  w-[330px] md:w-[650px] lg:w-[850px] overflow-y-auto  grid  grid-cols-1">
            {portfolios.map((x) => (
              <PortfolioCard key={x} portfolioList={x} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
export default Portfolios;
