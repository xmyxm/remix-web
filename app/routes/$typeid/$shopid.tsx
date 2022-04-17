import type { LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";

export const loader: LoaderFunction = async ({
    params,
  }) => {
    console.log(params.typeid);
    console.log(params.shopid);
    return json(params);
  };

export default function ShopId() {

    const params = useLoaderData<{typeid: string, shopid: string}>();

  return (
    <main className="main">
    <h1 className="title">
      演示 <a>多级路由参数</a>
    </h1>

    <p className="description">
    多级路由参数 <code className="code">app/routes/ssr.tsx</code>
    </p>

    <div className="grid">
      <Link to="/" className="card">
        <h2>当前参数 &rarr;</h2>
          <p>
            typeid: { params.typeid }; shopid: { params.shopid }
          </p>
        </Link>
    </div>
  </main>
  );
}
