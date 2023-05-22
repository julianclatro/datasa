import * as React from "react";
import { useLoaderData } from "@remix-run/react";
import { type LoaderArgs, json } from "@remix-run/cloudflare";
import { Post } from "~/models";

export const loader = async ({ params, context }: LoaderArgs) => {
  const { DB } = context.env as any;
  const { id } = params;
  if (!id) return;
  const post = await Post.findById(id, DB);
  console.log("ID", id, post);
  return json({ ...post });
};

interface CanvasTextProps {
  text: string;
  imageUrl: string;
}

const CanvasText: React.FC<CanvasTextProps> = ({ text, imageUrl }) => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const padding = 20;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (!context) {
      return;
    }

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => {
      context.drawImage(img, 0, 0, 500, 500);
      const drawText = (fontSize: number, maxCharactersPerLine: number) => {
        context.fillStyle = "white"; // Set the font color to white
        context.font = `${fontSize}px monospace`;
        context.textAlign = "left";
        context.textBaseline = "top";

        let words = text.split(" ");
        let lineCount = 0;

        for (let i = 0; i < words.length; i++) {
          let word = words[i];
          let currentLine = word;
          let j = i + 1;

          while (
            j < words.length &&
            currentLine.length + words[j].length < maxCharactersPerLine
          ) {
            currentLine += " " + words[j];
            j++;
          }

          context.fillText(
            currentLine,
            padding,
            padding + lineCount * fontSize
          );
          lineCount++;
          i = j - 1;
        }
        console.log("maxCharactersPerLine", fontSize, maxCharactersPerLine);
      };

      let fontSize;
      let maxCharactersPerLine;
      if (text.length <= 90) {
        fontSize = 34;
        maxCharactersPerLine = 20;
      } else if (text.length <= 180) {
        fontSize = 28;
        maxCharactersPerLine = 25;
      } else if (text.length <= 270) {
        fontSize = 24;
        maxCharactersPerLine = 30;
      } else {
        fontSize = 20;
        maxCharactersPerLine = 35;
      }

      drawText(fontSize, maxCharactersPerLine);
    };
  }, [text, padding]);

  return <canvas ref={canvasRef} width={500} height={500} />;
};

export default function Share() {
  const data = useLoaderData();

  return (
    <div>
      <CanvasText text={data.information} imageUrl="https://imagedelivery.net/uDbEDRBQqhBXrrfuCRrATQ/66f1b041-6aa1-4e19-5d67-c3d6081ed800/public" />
    </div>
  );
}
