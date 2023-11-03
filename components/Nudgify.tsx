import { Head } from "$fresh/runtime.ts";
import { dataURI } from 'apps-utils/dataURI.ts';

export type Variables = {
  data?: {
    product?: {
      stock?: number | null;
      image?: string | null;
      id?: string | null;
    };
    cart?: {
        amount?: number | null;
        currency?: string | null;
    };
  };
  variables?: Record<string, unknown>;
};

declare global {
  interface Window {
    nudgify: Variables;
  }
}

export type Props = Variables & {
  siteId: string;
};

function Nudgify({ siteId, ...nudgify }: Props) {
  const snippet = `
    (function(w){
      var k="nudgify",n=w[k]||(w[k]={});
      n.uuid="${siteId}";
      var d=document,s=d.createElement("script");
      s.src="https://pixel.nudgify.com/pixel.js";
      s.async=1;
      s.charset="utf-8";
      d.getElementsByTagName("head")[0].appendChild(s)
    })(window)
  `;

  const nudgifyVar = nudgify ? `window.nudgify = ${JSON.stringify(nudgify)}` : null;

  return (
    <Head>
      {nudgifyVar && <script src={dataURI('text/javascript', true, nudgifyVar)} />}
      <script key="nudgify-snippet" src={dataURI('text/javascript', true, snippet)} />
    </Head>
  );
}

export default Nudgify;
