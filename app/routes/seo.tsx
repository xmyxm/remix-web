import type { LinksFunction, MetaFunction, LoaderFunction } from "remix";
import { Link, json, useLoaderData } from "remix";
import globalStylesUrl from "../styles/global.css";
import globalMediumStylesUrl from "../styles/global-medium.css";
import globalLargeStylesUrl from "../styles/global-large.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: globalStylesUrl,
    },
    {
      rel: "stylesheet",
      href: globalMediumStylesUrl,
      media: "print, (min-width: 640px)",
    },
    {
      rel: "stylesheet",
      href: globalLargeStylesUrl,
      media: "screen and (min-width: 1024px)",
    },
  ];
};

export const meta: MetaFunction = () => {
  const description = `Learn Remix and laugh at the same time!`;
  return {
    description,
    keywords: "Remix,jokes",
    "twitter:image": "https://remix-jokes.lol/social.png",
    "twitter:card": "summary_large_image",
    "twitter:creator": "@remix_run",
    "twitter:site": "@remix_run",
    "twitter:title": "Remix Jokes",
    "twitter:description": description,
  };
};

type ResData = {
  title: string;
  content: string;
};

// 这里的loader是被后端API钩子useLoaderData调用的，所以看不到使用
export const loader: LoaderFunction = async () => {
  const data: ResData = {
    title: "SSR",
    content: "同构页面",
  };
  return json(data);
};

export default function App() {
  const { title, content } = useLoaderData<ResData>();

  return (
    <main className="main">
      <h1 className="title">
        演示 <a>SEO</a>
      </h1>

      <p className="description">
        SEO <code className="code">app/routes/seo.tsx</code>
      </p>

      <div className="grid">
        <Link to="/" className="card">
          <h2>{title} &rarr;</h2>
          <p>{content}</p>
        </Link>
      </div>
    </main>
  );
}
