import { Outlet, Link } from "remix";

export default function Note() {

  return (
    <main className="main">
    <h1 className="title">
      演示 <a>嵌套路由</a>
    </h1>

    <p className="description">
        嵌套路由 <code className="code">app/routes/note.tsx</code>
    </p>

    <div className="grid">
        <Link to='/note/author' className="card">
            <h2>跳转 &rarr;</h2>
            <p>
                作者信息
            </p>
        </Link>
        <Outlet></Outlet>
    </div>
  </main>
  );
}
