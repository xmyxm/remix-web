import type { LinksFunction } from "remix";
import { Link } from "remix";
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
    content: "同构页面",
    src: "/seo",
  },
];

export default function Index() {
  return (
    <main className="main">
      <h1 className="title">
        Welcome to <a>Remix!</a>
      </h1>

      <p className="description">
        默认首页 <code className="code">app/routes/index.tsx</code>
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
