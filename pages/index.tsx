import { use, useEffect } from "react";
import { server } from "../config/server";

export default function Home({ data }: { data: object }) {
  console.log(data);
  return (
    <div className="style-scroll h-[9000px]">
      <div>hello</div>
    </div>
  );
}
export async function getStaticProps() {
  const res = await fetch(`${server}/api/home`);
  const { data } = await res.json();
  return {
    props: {
      data,
    },
  };
}
