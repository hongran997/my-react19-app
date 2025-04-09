import { Fragment } from "react/jsx-runtime";

export default function NestedJSDemo() { 
  return (
    <Fragment>
      <script async={true} src="/scripts/test.js" />
    </Fragment>
  ) 
}