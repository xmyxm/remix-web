import type { ActionFunction, LoaderFunction } from "remix";
import { redirect } from "remix";
import { logout } from "../lib/session.server";

export const action: ActionFunction = async ({ request }) => {
  console.log("退出跳转");
  logout(request);
};

export const loader: LoaderFunction = async () => {
  console.log("我要跳转");
  return redirect("/");
};
