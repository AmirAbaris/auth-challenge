import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 flex items-center justify-center min-h-dvh">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold">Hello fellow devs</h1>
        <Link href="/auth">
          <Button>Auth me</Button>
        </Link>
      </div>
    </div>
  );
}
