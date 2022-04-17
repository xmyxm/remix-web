import { Outlet, Link } from "remix";

export default function A() {
    return (
        <Link to="/" className="card">
            <h2>跳转 &rarr;</h2>
            <p>
                首页
            </p>
        </Link>
    )
}
