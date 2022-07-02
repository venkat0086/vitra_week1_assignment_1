import Axios from "axios";

const CoinList = ({ coinData }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "33% 33% 33%",
      }}
    >
      {coinData.coins.map((coin) => (
        <div>
          <h1>{coin.name}</h1>
          <img src={coin.icon} />
          <p>{coin.price}</p>
        </div>
      ))}
    </div>
  );
};

export const getServerSideProps = async () => {
  //   const id = params.id;
  const data = await Axios.get(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );

  return {
    props: {
      coinData: data.data,
    },
    // revalidate: 10,
  };
};

export default CoinList;
