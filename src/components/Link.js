import React from "react";

export default function Link({ className, href, children }) {
  return (
    <div>
      <a
        className={className}
        href={href}
        onClick={(event) => {
          // check for cmd+click or ctrl+click to open link in a new tab
          // to do that - just not prevent default behaviour by early return
          if (event.metaKey || event.ctrlKey) return;
          // prevent refreshing the page
          event.preventDefault();
          // update a current URL in browser address
          window.history.pushState({}, "", href);
          // announce URL changing via window.dispatchEvent
          const navEvent = new PopStateEvent("popstate");
          window.dispatchEvent(navEvent);
        }}
      >
        {children}
      </a>
    </div>
  );
}
