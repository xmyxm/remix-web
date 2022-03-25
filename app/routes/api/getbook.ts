import { json, LoaderFunction } from "remix";

// get 接口请求
export const loader: LoaderFunction = async ({ request }) => {
  const rssString = {
    code: 200,
    data: {
      name: "book",
    },
    message: "成功",
  };

  return json(rssString);
};
