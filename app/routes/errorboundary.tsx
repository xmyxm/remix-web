import type { ActionFunction, LoaderFunction } from "remix";
import { json } from "remix";

type ActionData = {
  content: string;
};

export const action: ActionFunction = async ({ request }) => {
  console.log("执行： errorboundary action");
  const data: ActionData = { content: "测试" };
  return json(data, { status: 200 });
};

type LoaderData = {
  name: string;
};

// loader 即使在服务端异常，在前端也不会重试
export const loader: LoaderFunction = () => {
  console.log("执行： errorboundary loader");
  const data: LoaderData = {
    name: "loader",
  };
  return json(data, { status: 500 });
};

export default function Error() {
  //   throw new Error("欧吼，出错了！");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      异常处理测试
    </div>
  );
}

// 意外的错误，在 组件或者 loader 中的异常都会被这里所捕获
export function ErrorBoundary({ error }: { error: Error }) {
  return <div className="error-container">出错啦：{error.message}</div>;
}
