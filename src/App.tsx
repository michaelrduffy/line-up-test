import TicketOption from "./components/TicketOption";
import { useGetPerformanceByIdQuery } from "./services/performance";

function App() {
  const { data, error, isLoading } = useGetPerformanceByIdQuery("21813");
  console.log(data?.data);
  const ticketOptions = data?.data.pricing;

  return (
    <>
      <div className="card">
        {error ? (
          <>error</>
        ) : isLoading ? (
          <>loading...</>
        ) : data ? (
          ticketOptions?.map((foo) => (
            <TicketOption key={`ticketOption_${foo.id}`} />
          ))
        ) : null}
      </div>
    </>
  );
}

export default App;
