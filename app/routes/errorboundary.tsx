import type { LoaderFunction } from "remix";
import { json, useLoaderData } from "remix";

// export const loader: LoaderFunction = () => {
//   const b = ''
//   return json({a: b.x = 3 }, { status: 404 });
// };

export default function Error() {
  // const resume = useLoaderData<{}>();

  // @ts-ignore
  throw new Error("欧吼，出错了！");
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      错误页面测试
    </div>
  );
}

// 意外的错误
export function ErrorBoundary({ error }: { error: Error }) {
  return <div className="error-container">出错啦：{error.message}</div>;
}
