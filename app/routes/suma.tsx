// import { About } from "~/compositions/About";
import { Collab } from "datasa-design-system";
import { useFetcher } from "@remix-run/react";
import { useModal } from "~/context";
import * as React from "react";
export default function Suma() {
  const fetcher = useFetcher();
  const { openModal } = useModal();
  React.useEffect(() => {
    if (fetcher.state === "idle" && fetcher.data != null) {
      openModal({ type: "confirmation", size: "small" });
    }
  }, [fetcher]);
  return (
    <>
      <Collab component={fetcher.Form} />
    </>
  );
}
