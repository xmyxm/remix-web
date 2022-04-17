import type { LoaderFunction } from "remix";
import { useState, useCallback } from "react"
import axios from 'axios'
import { useLoaderData, json, Link, ActionFunction } from "remix";
type ResumeData = {
  skills: Array<string>;
};

// 在 Remix 中，你的前端组件也是它自己的 API 路由
export const action: ActionFunction = async ({ request }) => {
  console.log(`执行 action：${request.url}`);
  const data = { dateTime: Date.now() };
  return json(data, { status: 200 });
};

// 这里的loader是被后端API钩子useLoaderData调用的，所以看不到使用
export const loader: LoaderFunction = () => {
  const data: ResumeData = {
    skills: ["JavaScript", "CSS/HTML", "React", "Remix", "test-ssr"],
  };
  return json(data);
};

export default function ResumeIndex() {
  // 读取 loader 函数返回数据
  const resume = useLoaderData<ResumeData>();
  const [dateInfo, setDateTime] = useState({ dateTime: '' })
  
  const btnClick = useCallback(() => { 
    const url = true ? '/api/posttime' : 'ssr'
    axios.post(url).then(res => {
      if (res?.data?.data?.dateTime) {
        setDateTime(res.data.data)
      }
    });
  }, [])

  return (
    <main className="main">
    <h1 className="title">
      演示 <a>同构</a>
    </h1>

    <p className="description">
      同构 <code className="code">app/routes/ssr.tsx</code>
    </p>

    <div className="grid">
      <div className="card">
        <h2>基本实现 &rarr;</h2>
          <p>
            {
              resume.skills.map((skill, index) => (
                <span key={ skill }>
                  {index !== 0 ? ", " : ""}
                  {skill}
                </span>
              ))
            }
          </p>
        </div>
        <div className="card">
          <h2>拉取数据 &rarr;</h2>
          <p>
            <span onClick={btnClick} className="btn">
                Submit
            </span>
            <span> { dateInfo.dateTime }</span>
          </p>
      </div>
    </div>
  </main>
  );
}
