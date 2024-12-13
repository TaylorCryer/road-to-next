import Link from "next/link"

const HomePage = () => {
  return (
    <div>
      <h2>HomePage</h2>

      <link href="/tickets" className="underline">
        Go to Tickets
      </link>
    </div>
  );
}

export default HomePage