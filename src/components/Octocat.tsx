import React from "react";
import { SVGProps } from "react";

const Octocat = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={80}
    height={80}
    aria-hidden="true"
    viewBox="0 0 250 250"
    className="group"
    {...props}
  >
    <defs>
      <mask id="octomask">
        <path fill="#cfcfcf" d="m0 0 115 115h15l12 27 108 108V0Z" />
        <path
          d="M128.3 109c-14.5-9.3-9.3-19.4-9.3-19.4 3-6.9 1.5-11 1.5-11-1.3-6.6 2.9-2.3 2.9-2.3 3.9 4.6 2.1 11 2.1 11-2.6 10.3 5.1 14.6 8.9 15.9"
          className="group-hover:animate-octocat-wave"
          style={{
            transformOrigin: "130px 106px",
          }}
        />
        <path
          d="M115 115c-.1.1 3.7 1.5 4.8.4l13.9-13.8c3.2-2.4 6.2-3.2 8.5-3-8.4-10.6-14.7-24.2 1.6-40.6 4.7-4.6 10.2-6.8 15.9-7 .6-1.6 3.5-7.4 11.7-10.9 0 0 4.7 2.4 7.4 16.1 4.3 2.4 8.4 5.6 12.1 9.2 3.6 3.6 6.8 7.8 9.2 12.2 13.7 2.6 16.2 7.3 16.2 7.3-3.6 8.2-9.4 11.1-10.9 11.7-.3 5.8-2.4 11.2-7.1 15.9-16.4 16.4-30 10-40.6 1.6.2 2.8-1 6.8-5 10.8L141 136.5c-1.2 1.2.6 5.4.8 5.3Z"
          className="octo-body"
        />
      </mask>
    </defs>
    <rect width="100%" height="100%" fill="#15151390" mask="url(#octomask)" />
  </svg>
);

export default Octocat;
