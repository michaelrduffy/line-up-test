import { useSelector } from "react-redux";
import PriceBand from "./components/PriceBand";
import { useGetPerformanceByIdQuery } from "./services/performance";
import { RootState } from "./store";

function App() {
  const { data, error, isLoading } = useGetPerformanceByIdQuery("21813");
  const basket = useSelector((state: RootState) => state.basket);
  console.log("basket", basket);
  console.log(data?.data);
  const priceBands = data?.data.pricing;

  return (
    <main className="w-full flex flex-col">
      <div className="w-[80%] lg:w-3/4 max-w-[1280px] mx-auto my-16">
        {error ? (
          <>error</>
        ) : isLoading ? (
          <>loading...</>
        ) : data ? (
          priceBands?.map((priceBand) => (
            <PriceBand
              key={`priceBand_${priceBand.id}`}
              priceBand={priceBand.priceBand}
            />
          ))
        ) : null}
      </div>
    </main>
  );
}

export default App;
