import type { LoaderFunction } from "remix";
import { useLoaderData, json, Link } from "remix";
type ResumeData = {
  skills: Array<string>;
};

// 这里的loader是被后端API钩子useLoaderData调用的，所以看不到使用
export const loader: LoaderFunction = () => {
  const data: ResumeData = {
    skills: ["JavaScript", "CSS/HTML", "React", "Remix"],
  };
  return json(data);
};

export default function ResumeIndex() {
  const resume = useLoaderData<ResumeData>();
  return (
    <main className="main">
    <h1 className="title">
      Welcome to <a>Remix!</a>
    </h1>

    <p className="description">
      同构 <code className="code">app/routes/ssr.tsx</code>
    </p>

    <div className="grid">
      <Link to="/" className="card">
        <h2>前端 &rarr;</h2>
          <p>
            {
              resume.skills.map((skill, index) => (
                <span>
                  {index !== 0 ? ", " : ""}
                  {skill}
                </span>
              ))
            }
        </p>
      </Link>
    </div>
  </main>
  );
}
