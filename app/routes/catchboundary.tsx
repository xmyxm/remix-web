import type { LoaderFunction } from "remix";
import { json, useCatch } from "remix";

type LoaderData = {
  name: string;
};

export const loader: LoaderFunction = () => {
  const data: LoaderData = {
    name: "loader",
  };
  return json(data, { status: 500 });
};

export default function Error() {
  // throw new Error("欧吼，出错了！");
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

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <div className="error-container">
        <h1>
          {caught.status} {caught.statusText}
        </h1>
      </div>
    </div>
  );
}
