import BasketSummary from "./components/BasketSummary";
import PriceBand from "./components/PriceBand";
import { useGetPerformanceByIdQuery } from "./services/performance";

function App() {
  const { data, error, isLoading } = useGetPerformanceByIdQuery("21813");
  const priceBands = data?.data.pricing;

  return (
    <main className="w-full flex flex-col">
      <div className="w-[80%] lg:w-3/4 max-w-[1100px] mx-auto my-16">
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
      <BasketSummary />
    </main>
  );
}

export default App;
