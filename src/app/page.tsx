import Link from "next/link";
import { ticketsPath } from "@/path";

const HomePage = () => {
  return (
    <div className="flex-1 flex flex-col gap-y-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Home page</h1>
        <p className="text-sm text-muted-foreground">Welcome to Next.js!</p>
      </div>
      <div className="flex-1 flex flex-col items-center">
        <Link href={ticketsPath()}>
          <h1 className="underline">Go to tickets</h1>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
