import * as React from 'react';
import { useLoaderData } from "@remix-run/react";
import { type LoaderArgs } from "@remix-run/cloudflare";

export async function loader({
	context,
	request,
}: LoaderArgs) {

	return null;
}

export default function Share() {
  // convertir a imagen y mandar a instagram.
  const dimentions = { height: 500, width: 500}
  const data = useLoaderData()

  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  React.useEffect(() => {
    if (!canvasRef) return;
    const canvas = canvasRef.current as HTMLCanvasElement
    const text = canvas.getContext('2d');
    const background = canvas.getContext('2d');

    if (!background) return;
    background.fillStyle = "green";
    background.fillRect(0, 0, dimentions.height, dimentions.width);

    if (!text) return;
    text.fillStyle = "red";
    text.font = '25px serif';
    text.beginPath();
    text.fillText(`Abcdefghijklmnop`, 0, 50);
  }, [])

  return (
    <div>
        <canvas ref={canvasRef} width={dimentions.width} height={dimentions.height}></canvas>
    </div>
  );
}
