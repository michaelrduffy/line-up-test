import PriceBand from "./components/PriceBand";
import { useGetPerformanceByIdQuery } from "./services/performance";

function App() {
  const { data, error, isLoading } = useGetPerformanceByIdQuery("21813");
  console.log(data?.data);
  const priceBands = data?.data.pricing;

  return (
    <>
      <div className="card">
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
    </>
  );
}

export default App;
