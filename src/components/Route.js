import { useEffect, useState } from "react";

export default function Route({ path, children }) {
  const [cwd, setCwd] = useState(window.location.pathname);
  useEffect(() => {
    const onUrlChange = () => {
      setCwd(window.location.pathname);
    };
    window.addEventListener("popstate", onUrlChange);
    return () => {
      window.removeEventListener("popstate", onUrlChange);
    };
  }, [setCwd]);
  return cwd === path ? children : null;
}
