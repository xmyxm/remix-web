import type { LoaderFunction } from "remix";

function escapeCdata(s: string) {
  return s.replaceAll("]]>", "]]]]><![CDATA[>");
}

function escapeHtml(s: string) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export const loader: LoaderFunction = async ({ request }) => {
  const host =
    request.headers.get("X-Forwarded-Host") ?? request.headers.get("host");
  if (!host) {
    throw new Error("Could not determine domain URL.");
  }
  const protocol = host.includes("localhost") ? "http" : "https";
  const domain = `${protocol}://${host}`;
  const url = `${domain}/solarterms`;

  const solarTerms = [
    {
      id: 1,
      name: "立春",
      content:
        "立春，为二十四节气之首。 立，是“开始”之意；春，代表着温暖、生长",
      createdAt: new Date("14 Jun 2022 00:00:00 PDT"),
    },
    {
      id: 2,
      name: "雨水",
      content:
        "作为二十四节气的第二个节气，雨水，也是一个极富浪漫情调的节气。 古籍中用“东风解冻，散而为雨”解释雨水节气的缘起；韩愈用“天街小雨润如酥，草色遥看近却无”描画出初春雨后的朦胧景象",
      createdAt: new Date("14 Jun 2022 00:00:00 PDT"),
    },
    {
      id: 3,
      name: "春分",
      content:
        "春分，是二十四节气之一，春季第四个节气。 斗指壬，太阳黄经达0°，于每年公历3月19-22日交节",
      createdAt: new Date("14 Jun 2022 00:00:00 PDT"),
    },
    {
      id: 4,
      name: "清明",
      content:
        "清明，是二十四节气之第五个节气，清明时节，气清景明，万物皆显，因此得名",
      createdAt: new Date("14 Jun 2022 00:00:00 PDT"),
    },
  ];

  const rssString = `
    <rss xmlns:blogChannel="${url}" version="2.0">
      <channel>
        <title>24 solar terms</title>
        <link>${url}</link>
        <description>4 solar terms</description>
        <language>en-us</language>
        <generator>Kody the Koala</generator>
        <ttl>40</ttl>
        ${solarTerms
          .map((item) =>
            `
            <item>
              <title><![CDATA[${escapeCdata(item.name)}]]></title>
              <description><![CDATA[A funny joke called ${escapeHtml(
                item.name
              )}]]></description>
              <author><![CDATA[${escapeCdata(item.content)}]]></author>
              <pubDate>${item.createdAt.toUTCString()}</pubDate>
              <link>${url}/${item.id}</link>
              <guid>${url}/${item.id}</guid>
            </item>
          `.trim()
          )
          .join("\n")}
      </channel>
    </rss>
  `.trim();

  return new Response(rssString, {
    headers: {
      "Cache-Control": `public, max-age=${60 * 10}, s-maxage=${60 * 60 * 24}`,
      "Content-Type": "application/xml",
      "Content-Length": String(Buffer.byteLength(rssString)),
    },
  });
};
