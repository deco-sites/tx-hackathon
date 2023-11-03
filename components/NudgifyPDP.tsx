import Nudgify from "$store/islands/Nudgify.tsx";

export interface Props {
  siteId: string;
  stock?: number;
  image?: string;
  id?: string;
}

function NudgifyPDP({ siteId, stock, image, id }: Props) {
  return (
    <Nudgify
      siteId={siteId}
      data={{
        product: { stock, image, id },
      }}
    />
  );
}

export default NudgifyPDP;
