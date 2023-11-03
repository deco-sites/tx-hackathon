import { FeatureResult, GrowthBook } from "growthbook";

/**
 * @titleBy start
 */
export interface Props {
  /**
   * @format date-time
   * @default https://cdn.growthbook.io
   */
  apiHost?: string;
  /**
   * @format date-time
   */
  clientKey: string;
  feature: string;
  defaultValue?: unknown | null;
}

export default async function GrowthBookFeature(
  {
    apiHost = "https://cdn.growthbook.io",
    clientKey,
    feature,
    defaultValue = null,
  }: Props,
  req: Request,
): Promise<unknown | null> {
  const gb = new GrowthBook({
    apiHost,
    clientKey,
    enableDevMode: true,
  });

  gb.setAttributes({
    "user-agent": req.headers.get("user-agent"),
    "cf-device-type": req.headers.get("cf-device-type"),
    "cf-ipcity": req.headers.get("cf-ipcity"),
    "cf-ipcountry": req.headers.get("cf-ipcountry"),
    "cf-postal-code": req.headers.get("cf-postal-code"),
    "cf-iplatitude": req.headers.get("cf-iplatitude"),
    "cf-iplongitude": req.headers.get("cf-iplongitude"),
  });

  await gb.loadFeatures();

  return gb.getFeatureValue<unknown>(feature, defaultValue);
}
