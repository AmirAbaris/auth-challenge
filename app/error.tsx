"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Error() {
  return (
    <div className="flex justify-center items-center min-h-dvh">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Error</CardTitle>
        </CardHeader>
        <CardContent>
          <h1 className="text-4xl font-bold">Something went wrong</h1>
        </CardContent>
      </Card>
    </div>
  );
}
