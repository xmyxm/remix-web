import { json, LoaderFunction } from "remix";

// post 接口请求
export const action: LoaderFunction = async ({ request }) => {
  const rssString = {
    code: 200,
    data: {
      dateTime: `服务端时间：${Date.now()}`,
    },
    message: "成功",
  };

  return json(rssString);
};
