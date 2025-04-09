import { Suspense } from "react"
export default function StyleLinkDemo() { 
  return (
    <Suspense fallback="loading...">
      <link rel="stylesheet" href="/styles/foo.css" precedence="default" />
      <link rel="stylesheet" href="/styles/bar.css" precedence="high" />
      <div className="foo bar">foo</div>
    </Suspense>
    )
}