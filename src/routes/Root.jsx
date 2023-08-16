import { Link, Outlet } from "react-router-dom";
import { AuthStatus } from "./AuthStatus";

export const Root = () => {
  return (
    <div>
      <h1>Auth Example using RouterProvider</h1>

      <p>
        This example demonstrates a simple login flow with three pages: a public
        page, a protected page, and a login page. In order to see the protected
        page, you must first login. Pretty standard stuff.
      </p>

      <p>
        First, visit the public page. Then, visit the protected page.
        You&apos;re not yet logged in, so you are redirected to the login page.
        After you login, you are redirected back to the protected page.
      </p>

      <p>
        Notice the URL change each time. If you click the back button at this
        point, would you expect to go back to the login page? No! You&apos;re
        already logged in. Try it out, and you&apos;ll see you go back to the
        page you visited just *before* logging in, the public page.
      </p>

      <AuthStatus />

      <ul>
        <li>
          <Link to="/">Public Page</Link>
        </li>
        <li>
          <Link to="/protected">Protected Page</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};
