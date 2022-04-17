import { Outlet, Link } from "remix";

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
