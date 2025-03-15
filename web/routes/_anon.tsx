import { Outlet, redirect, useOutletContext } from "react-router";
import type { Route } from "./+types/_anon";


export const loader = async ({ context }: Route.LoaderArgs) => {
  const { session } = context;

  // redirect already logged in users to the app experience
  if (!!session?.get("user")) {
    return redirect("/signed-in");
  }

  return {};
};

export default function () {
  const context = useOutletContext();

  return (
    <div className="w-screen h-screen grid place-items-center">
      <Outlet context={context} />
    </div>
  );
}
