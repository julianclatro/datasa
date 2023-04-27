import * as React from "react";
import { useLoaderData } from "@remix-run/react";
import { type LoaderArgs, json } from "@remix-run/cloudflare";
import { Post } from "~/models";

export const loader = async ({ params, context }: LoaderArgs) => {
  const { DB } = context.env as any;
  const { id } = params;
  if (!id) return;
  const post = await Post.findById(id, DB);
  console.log("ID", id);
  return json({ ...post });
};

export default function Share() {
  // convertir a imagen y mandar a instagram.
  const dimentions = { height: 500, width: 500 };
  const data = useLoaderData();

  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  React.useEffect(() => {
    if (!canvasRef) return;
    const canvas = canvasRef.current as HTMLCanvasElement;
    // const text = canvasRef.current as HTMLCanvasElement;

    // const text = canvas.getContext("2d");
    const background = canvas.getContext("2d");

    if (!background) return;
    background.fillStyle = "black";
    background.fillRect(0, 0, dimentions.height, dimentions.width);

    // if (!text) return;
    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    // text.fillStyle = "white";
    // text.font = "25px serif";
    // text.beginPath();
    // text.fillText(data.information, 0, 50, 500);

    const text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac quam vitae risus aliquet pulvinar. Donec vitae ex metus. Fusce bibendum urna non lectus ultrices, a rhoncus lectus dapibus. In hendrerit odio vitae velit posuere, vel aliquam ante volutpat. Pellentesque et lacinia lectus. Vestibulum in nisl lacinia, dictum orci nec, rutrum magna. Nullam id libero mauris. Maecenas ut malesuada augue. In mollis bibendum libero, nec sagittis eros facilisis et. Vestibulum sit amet tellus non nibh pharetra commodo. Nulla eu orci et lorem vestibulum varius. Nulla facilisi. Nunc consequat, erat in interdum pharetra, ante dolor auctor ante, eget posuere ipsum massa vel magna. Aliquam eget risus laoreet, efficitur nibh non, eleifend tortor.";
    const maxWidth = 300; // Set the maximum width of each line
    let lines = [];
    let currentLine = "";
    const words = text.split(" ");

    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + " " + word).width;
      if (width > maxWidth) {
        lines.push(currentLine.trim());
        currentLine = word + " ";
      } else {
        currentLine += word + " ";
      }
    }

    if (currentLine.trim().length > 0) {
      lines.push(currentLine.trim());
    }

    console.log(lines);
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        width={dimentions.width}
        height={dimentions.height}
      ></canvas>
    </div>
  );
}
