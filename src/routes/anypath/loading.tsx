import { createFileRoute } from "@tanstack/react-router";

async function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const Route = createFileRoute("/anypath/loading")({
  loader: async ({ params, context }) => {
    await sleep(2000);
    return {
      params,
    };
  },
  component: RouteComponent,
  pendingComponent: () => <span>Loading... </span>,
});

function RouteComponent() {
  return <div>Hello!</div>;
}
