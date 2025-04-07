"use client";
import useSWR from "swr";

const fetcher = async (url: string) => fetch(url).then((res) => res.json());

const Footer = () => {
  const { data, mutate } = useSWR<{ id: string }[]>("/api/id", fetcher);

  return (
    <div
      onClick={async () => {
        await fetch("/api/id", {
          method: "POST",
        });
        await mutate();
      }}
    >
      CLICK HERE
    </div>
  );
  <div>{data ? data?.map(({ id }) => <p key={id}>{id}</p>) : null} </div>;
};

export default Footer;
