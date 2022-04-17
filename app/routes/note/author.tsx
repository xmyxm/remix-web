import { Outlet, Link } from "remix";
// @ts-ignore
import parseCacheControl from "parse-cache-control";

// @ts-ignore
export function headers({ loaderHeaders, parentHeaders }) {
  const loaderCache = parseCacheControl(
    loaderHeaders.get("Cache-Control")
  );
  const parentCache = parseCacheControl(
    parentHeaders.get("Cache-Control")
  );

  if (loaderCache && parentCache) {
    
    console.log(JSON.stringify(arguments))

    const maxAge = Math.min(
      loaderCache["max-age"],
      parentCache["max-age"]
    );

    return {
      "Cache-Control": `max-age=${maxAge}`,
    };
  }
}

export default function Author() {
    return (
        <Link to="/note/more" className="card">
            <h2>跳转 &rarr;</h2>
            <p>
                更多信息
            </p>
        </Link>
    )
}
