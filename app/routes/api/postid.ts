import { json, LoaderFunction } from "remix";

// post 接口请求
export const action: LoaderFunction = async ({ request }) => {
  const rssString = {
    code: 200,
    data: {
      name: "note",
    },
    message: "成功",
  };

  return json(rssString);
};
