import type { LinksFunction } from "remix";
import { Link, useLoaderData } from "remix";
import indexCssUrl from "../styles/index.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: indexCssUrl,
    },
  ];
};

const entryList = [
  {
    title: "SSR",
    content: "服务器渲染",
    src: "/ssr",
  },
  {
    title: "SEO",
    content: "Mate Data",
    src: "/seo",
  },
  {
    title: "Form",
    content: "表单提交",
    src: "/form",
  },
  {
    title: "Route",
    content: "参数路由",
    src: "/doc/123",
  },
  {
    title: "Route",
    content: "多级路由参数",
    src: "/3/53826",
  },
  {
    title: "Outlet",
    content: "嵌套路由",
    src: "/note",
  },
  {
    title: "文件API",
    content: "文件",
    src: "/book.rss",
  },
  {
    title: "异常处理",
    content: "嵌套路由报错",
    src: "/catch",
  },
  {
    title: "异常处理",
    content: "嵌套路由报错",
    src: "/error",
  },
  {
    title: "API请求",
    content: "API",
    src: "/fetch",
  },
];

export default function Index() {

  const data = useLoaderData<{}>();

  return (
    <main className="main">
      <h1 className="title">
        Welcome to <a>Remix!</a>
      </h1>

      <p className="description">
        首页路由 <code className="code">app/routes/index.tsx</code>
      </p>

      <div className="grid">
        {entryList.map(({ title, content, src }) => {
          return (
            <Link key={src} to={src} prefetch="intent" className="card">
              <h2>{title} &rarr;</h2>
              <p>{content}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
