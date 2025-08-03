import { Loader2Icon } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <Loader2Icon className="animate-spin" />
    </div>
  );
}
