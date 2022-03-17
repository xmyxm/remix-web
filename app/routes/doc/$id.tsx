import type { LoaderFunction } from "remix";
import { json, useLoaderData, Link } from "remix";

type LoaderData = { id: string };

export const loader: LoaderFunction = async ({ params }) => {
  const { id = "100" } = params;
  const data: LoaderData = { id };
  return json(data);
};

export default function JokeRoute() {
  const data = useLoaderData<LoaderData>();
  return (
    <main className="main">
      <h1 className="title">
        Welcome to <a>Remix!</a>
      </h1>

      <p className="description">
        <code className="code">app/routes/index.tsx</code>
      </p>

      <div className="grid">
        <Link to="/" className="card">
          <h2>动态路由 &rarr;</h2>
          <p>动态参数：{data.id}</p>
        </Link>
      </div>
    </main>
  );
}
