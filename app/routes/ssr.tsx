import type { LoaderFunction } from "remix";
import { useLoaderData, json } from "remix";
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
    <div>
      <h1>SSR 测试</h1>
      <p>A full-stack developer, Senior consultant, Freelancer.</p>
      <p>
        {resume.skills.map((skill, index) => (
          <span>
            {index !== 0 ? ", " : ""}
            {skill}
          </span>
        ))}
      </p>
    </div>
  );
}
