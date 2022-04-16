import type { ActionFunction, LoaderFunction, LinksFunction } from "remix";
import {
  useActionData,
  json,
  Link,
  useLoaderData,
  useSearchParams,
} from "remix";
import formCssUrl from "../styles/form.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: formCssUrl,
    },
  ];
};

type ActionData = {
  content: string;
};

export const action: ActionFunction = async ({ request }) => {
  console.log("form 表单条会走页面的action处理文件");
  const form = await request.formData();
  const name = form.get("name");
  const data = { name };
  return json(data, { status: 200 });
};

type LoaderData = {
  name: string;
};
// 这里的loader是被后端API钩子useLoaderData调用的，所以看不到使用
export const loader: LoaderFunction = () => {
  const data: LoaderData = {
    name: "loader",
  };
  return json(data, { status: 200 });
};

export default function Login() {
  const actionData = useActionData<ActionData>();
  const [searchParams] = useSearchParams();
  const { name } = useLoaderData<LoaderData>();
  return (
    <main className="main">
      <h1 className="title">
        演示 <a>表单提交</a>
      </h1>

      <p className="description">
        form <code className="code">app/routes/form.tsx</code>
      </p>

      <div className="grid">
        <Link to="/" className="card">
          <h2>表单 &rarr;</h2>
          <p>发送请求</p>
        </Link>
        <div className="card">
          <form method="post">
            <label className="name-text" htmlFor="username-input">
              Username:
            </label>
            <input
              type="text"
              className="name-val"
              id="username-input"
              name="username"
              defaultValue={name}
            />
            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
