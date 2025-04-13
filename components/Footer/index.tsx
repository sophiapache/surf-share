"use client";
import useSWR from "swr";

const fetcher = async (url: string) => fetch(url).then((res) => res.json());

const Footer = () => {
  const { data, mutate } = useSWR<{ rentalId: string }[]>("/api/id", fetcher);

  return (
    <>
      <button
        type="button"
        onClick={async () => {
          await fetch("/api/id", {
            method: "POST",
          });
          await mutate();
        }}
      >
        CLICK HERE
      </button>
      <div>
        {data
          ? data.map((item) => <p key={item.rentalId}>{item.rentalId}</p>)
          : null}
      </div>{" "}
    </>
  );
};

export default Footer;
