import { Heading } from "@/components/heading";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">HomePage</h2>
        <p className="text-sm text-muted-foreground">
          Your home place to start
        </p>
      </div>

      <Heading title="Tickets" description="All your tickets at one place" />

      <div className="flex-1 flex flex-col items-center">
        <Link href="/tickets" className="underline">
          Go to Tickets
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
