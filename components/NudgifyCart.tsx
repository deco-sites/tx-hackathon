import Nudgify from "$store/islands/Nudgify.tsx";

export interface Props {
  siteId: string;
  amount?: number;
  currency?: string;
}

function NudgifyCart({ siteId, amount, currency }: Props) {
  return (
    <Nudgify
      siteId={siteId}
      data={{
        cart: { amount, currency },
      }}
    />
  );
}

export default NudgifyCart;
