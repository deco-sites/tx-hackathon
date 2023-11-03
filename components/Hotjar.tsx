import HotjarSdk from 'hotjar';
import { useEffect } from 'preact/hooks';

export interface Props {
  siteId: string;
  version?: number;
}

function Hotjar({
  siteId,
  version = 6,
}: Props) {
  useEffect(() => {
    // hotjar.initialize(parseInt(hotjarId, 10), 6);
    HotjarSdk.init(Number(siteId), version, {
      debug: true
    });
  }, [siteId, version]);

  return <></>;
}

export default Hotjar;