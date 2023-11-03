import { Head } from '$fresh/runtime.ts';
import { createElement } from 'preact';

declare global {
  interface Window {
    fcWidget: {
      isInitialized(): boolean;
      setExternalId(id: string): void;
      user: {
        setFirstName(name: string): void;
        setEmail(email: string): void;
        setProperties(props: Record<string, string>): void;
      };
    };
  }
}

export interface Props {
  snippet: string;
}

function Freshchat({ snippet }: Props) {

  const matchSrc = snippet.match(/src=(?:"([^"]+)"|'([^']+)')/);
  const src = matchSrc ? matchSrc[1] || matchSrc[2] : null;
  
  const script = src ? createElement("script", { src, chat: 'true' }) : null;

  return <Head>{script}</Head>;
}

export default Freshchat;
