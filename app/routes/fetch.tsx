import type { LoaderFunction } from "remix";
import { useState, useCallback } from "react"
import axios from 'axios'
import { useLoaderData, json, Link, ActionFunction } from "remix";

type UrlInfoType = {
  url: string;
  type: string;
}

export const loader: LoaderFunction = () => {
  const data: UrlInfoType[] = [
    { url: 'getbook', type: "get" },
    { url: 'getbook', type: "post" },
    { url: 'getbook', type: "put" },
    { url: 'getbook', type: "delete" },
    { url: 'posttime', type: "get" },
    { url: 'posttime', type: "post" },
    { url: 'posttime', type: "put" },
    { url: 'posttime', type: "delete" },
  ]
  return json(data);
};

export default function FetchIndex() {
  // 读取 loader 函数返回数据
  const list = useLoaderData<UrlInfoType[]>();

  const [urlInfoList, updateList] = useState(list.map(({ url, type }) => ({ url, type, text: "" })))
  
  const btnClick = useCallback((url: string, type: string) => {

    const setData = (status: boolean) => { 
      const newList = urlInfoList.map((obj) => ({
        url: obj.url,
        type: obj.type,
        text: (url === obj.url && type === obj.type) ? (status ? '成功': '失败'): obj.text
      }))
      updateList(newList)
    }

    // @ts-ignore
    axios[type]('api/' + url).then(res => {
      // debugger;
      let status = false;
      if (res?.data?.data) {
        status = true
      }
      setData(status)
    }).catch((err: any) => { 
      setData(false)
      console.log(`${type}:${url} 请求失败：${JSON.stringify(err)}`)
    });
  }, [])

  return (
    <main className="main">
    <h1 className="title">
      演示 <a>API请求</a>
    </h1>

    <p className="description">
      API请求 <code className="code">app/routes/ssr.tsx</code>
    </p>

      <div className="grid">
        {
          urlInfoList.map(({ url, type, text }) => {
            return <div key={ type + url } className="card">
                        <h2>{type }:{ url} &rarr;</h2>
                        <p>
                          <span onClick={() => btnClick(url, type)} className="btn">
                              Submit
                          </span>
                          <span> { text }</span>
                        </p>
                    </div>
          })
        }
    </div>
  </main>
  );
}
