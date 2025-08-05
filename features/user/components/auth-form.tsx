"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { PhoneFormSchema } from "../schemas/phone.schema";
import { IranPhoneSchemaType } from "../types/phone.type";
import { Loader2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/use-auth";
import { useUserStore } from "../store";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const form = useForm<IranPhoneSchemaType>({
    resolver: zodResolver(PhoneFormSchema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const { getUser } = useAuth();
  const { user, setUser } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    console.log("user changed: ", user);
  }, [user]);

  // submit can be called on server side with server actions. but in this case
  // we don't POST the data. we GET the mock data.
  // server actions works best with POST requiests
  // so we call it on client side
  const onSubmit = async (data: IranPhoneSchemaType) => {
    console.log("mock data: ", data);
    const userData = await getUser.mutateAsync();

    console.log("acuall GET call res: ", userData);

    if (userData.data) {
      setUser(userData.data.results[0]);
    }
    router.push("/dashboard");
  };

  // mock user input form data
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid gap-4">
        <div className="flex items-center">
          <span className="mr-2 text-sm">+98</span>
          <Input
            type="tel"
            placeholder="Phone number"
            pattern="[0-9]{10}"
            title="Please enter a 10-digit Iranian phone number (without the country code)"
            {...register("phone")}
          />
        </div>
        {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        <Button
          type="submit"
          className="w-full"
          disabled={!formState.isValid || getUser.isPending}
        >
          {getUser.isPending ? (
            <Loader2Icon className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Submit"
          )}
        </Button>
      </div>
    </form>
  );
}
