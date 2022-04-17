import type { ActionFunction, LoaderFunction } from "remix";
import { json, redirect } from "remix";
import { logout } from "../../lib/session.server";

// 这里的 action 是无法被访问的
export const action: ActionFunction = async ({ request }) => {
  console.log("退出跳转");
  return json({ type: "action", serverTime: Date.now() }, { status: 200 });
};

export const loader: LoaderFunction = async () => {
  console.log("我要跳转");
  return json({ type: "loader", serverTime: Date.now() }, { status: 200 });
};
