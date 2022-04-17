import type { LoaderFunction } from "remix";
import { json, useCatch } from "remix";

type LoaderData = {
  name: string;
};

export const loader: LoaderFunction = async () => {
  // const data = await db.page.findOne({
  //   where: { slug: params.slug },
  // });
  // 一旦没有查到数据，立即抛出一个响应。

  throw new Response("Not Found", {
    status: 404,
  });
};

export default function Error() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      错误页面测试
    </div>
  );
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

// 意外的错误
export function ErrorBoundary({ error }: { error: Error }) {
  return <div className="error-container">出错啦：{error.message}</div>;
}
