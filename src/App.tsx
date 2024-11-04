import { AlertTriangle, Ban, Bell, CheckCheck, Info } from "lucide-react";
import Alert from "./Component/Alert";

function App() {
  return (
    <div className="alert-wrappers">
      <h1>Alerts</h1>
      <Alert
        icon={<Bell size={20} />}
        type="alert-default"
        title="Conveying meaning to assistive technologies"
        description="Using color to add meaning only provides a visual indication, which will not be conveyed to users of assistive technologies – such as screen readers. Ensure that information denoted by the color is either obvious from the content itself (e.g. the visible text), or is included through alternative means, such as additional text hidden with the .visually-hidden class."
      />
      <Alert
        icon={<CheckCheck size={20} />}
        type="alert-success"
        title="Well done!"
      >
        <p>
          Aww yeah, you successfully read this important alert message. This
          example text is going to run a bit longer so that you can see how
          spacing within an alert works with this kind of content.
        </p>
        <hr />
        <p>
          Whenever you need to, be sure to use margin utilities to keep things
          nice and tidy.
        </p>
      </Alert>
      <Alert icon={<Info size={20} />} type="alert-info" title="Note">
        <p>
          Vite aims to provide out-of-the-box support for common web development
          patterns. Before searching for a Vite or compatible Rollup plugin,
          check out{" "}
          <a
            href="https://vite.dev/guide/features.html"
            tabIndex={0}
            aria-label="vite Features Guide"
          >
            The Features Guide
          </a>{" "}
          . A lot of the cases where a plugin would be needed in a Rollup
          project are already covered in Vite.
        </p>
      </Alert>
      <Alert
        icon={<AlertTriangle size={20} />}
        type="alert-warning"
        title="Does not work with SSR"
      >
        <p>
          This pattern does not work if you are using Vite for Server-Side
          Rendering, because <code>import.meta.url</code> have different
          semantics in browsers vs. Node.js. The server bundle also cannot
          determine the client host URL ahead of time.
        </p>
      </Alert>
      <Alert
        icon={<Ban size={20} />}
        type="alert-error"
        title="Oh snap! You got an error!"
        description="Change this and that and try again. Duis soft, it is not a good thing to mourn, unless it was a small airline, Lacinia needs to hate itself and not the elit. To-morrow the land will be followed by pure fermentation."
      />
    </div>
  );
}

export default App;
