import type { ActionFunction, LoaderFunction } from "remix";
import { json, redirect } from "remix";
import { logout } from "../lib/session.server";

export const action: ActionFunction = async ({ request }) => {
  console.log("退出跳转");
  return json({ type: "action", serverTime: Date.now() }, { status: 200 });
  // return logout(request);
};

export const loader: LoaderFunction = async () => {
  console.log("我要跳转");
  return json({ type: "loader", serverTime: Date.now() }, { status: 200 });
  // return redirect("/");
};
