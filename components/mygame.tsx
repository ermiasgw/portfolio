"use client";
import { useRef, useEffect, useState } from "react";
import {
  IoMdArrowDropup,
  IoMdArrowDropleft,
  IoMdArrowDropright,
  IoMdArrowDropdown,
} from "react-icons/io";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function MyGame() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [snake, setSnake] = useState<number[][]>([
    [7, 6],
    [7, 7],
    [7, 8],
    [7, 9],
    [7, 10],
    [7, 11],
    [7, 12],
    [7, 12],
    [7, 12],
    [8, 12],
    [9, 12],
    [10, 12],
    [11, 12],
    [11, 13],
    [11, 14],
    [11, 15],
    [11, 16],
    [11, 17],
  ]);
  const [direction, setDirection] = useState<string>("UP");
  const [food, setFood] = useState<number[]>(generateRandomPosition());
  const [round, setRound] = useState<number>(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [gameRunning, setGameRunning] = useState<boolean>(false);

  function generateRandomPosition() {
    return [Math.floor(Math.random() * 19), Math.floor(Math.random() * 19)];
  }

  const calculateGradientColor = (index: number, length: number) => {
    const startColor = [67, 217, 173];
    const endColor = [1, 22, 39];

    const color = startColor.map((channel, i) => {
      const delta = (endColor[i] - channel) * (index / length - 0.8);
      return Math.round(channel + delta);
    });

    return `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
  };

  const handleStart = () => {
    setGameRunning(true);
  };

  const handleReStart = () => {
    setSnake([
      [7, 6],
      [7, 7],
      [7, 8],
      [7, 9],
      [7, 10],
      [7, 11],
      [7, 12],
      [7, 12],
      [7, 12],
      [8, 12],
      [9, 12],
      [10, 12],
      [11, 12],
      [11, 13],
      [11, 14],
      [11, 15],
      [11, 16],
      [11, 17],
    ]);
    setDirection("UP");
    setRound(0);
    setGameOver(false);
    setGameRunning(true);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext("2d");

    if (!canvas || !context) return;

    const drawSnake = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      if (round < 10) {
        context.beginPath();
        context.arc(food[0] * 10 + 5, food[1] * 10 + 5, 6, 0, 2 * Math.PI);
        context.beginPath();
        context.fill();
        context.arc(food[0] * 10 + 5, food[1] * 10 + 5, 1, 0, 2 * Math.PI);
        context.strokeStyle = calculateGradientColor(5, 10);
        context.lineWidth = 2;
        context.stroke();
        context.beginPath();
        context.arc(food[0] * 10 + 5, food[1] * 10 + 5, 2, 0, 2 * Math.PI);
        context.strokeStyle = calculateGradientColor(5, 10);
        context.lineWidth = 2;
        context.stroke();
        context.beginPath();
        context.arc(food[0] * 10 + 5, food[1] * 10 + 5, 4.5, 0, 2 * Math.PI);
        context.strokeStyle = calculateGradientColor(5, 10);
        context.lineWidth = 1;
        context.stroke();
        context.beginPath();
        context.arc(food[0] * 10 + 5, food[1] * 10 + 5, 6, 0, 2 * Math.PI);
        context.strokeStyle = calculateGradientColor(5, 10);
        context.lineWidth = 1;
        context.stroke();
      }

      snake.forEach(([x, y], index) => {
        const isHead = index === 0;
        context.fillStyle = calculateGradientColor(index, snake.length);
        if (isHead) {
          context.fillRect(x * 10, y * 10, 10, 10);
          context.beginPath();
          context.arc(x * 10 + 5, y * 10 + 5, 5.5, 2 * Math.PI, 0);
          context.fill();
          context.stroke();

          context.closePath();
        } else {
          context.fillRect(x * 10, y * 10, 10, 10);
        }
      });
    };

    const moveSnake = () => {
      if (gameOver) return;
      if (round === 10) return;
      const newSnake = snake.map((segment) => [...segment]);

      let head = newSnake[0];
      let x = head[0];
      let y = head[1];

      switch (direction) {
        case "UP":
          y = (head[1] - 1 + 20) % 20;
          break;
        case "DOWN":
          y = (head[1] + 1) % 25;
          break;
        case "LEFT":
          x = (head[0] - 1 + 20) % 20;
          break;
        case "RIGHT":
          x = (head[0] + 1) % 20;
          break;
        default:
          break;
      }

      for (let i = 1; i < newSnake.length; i++) {
        if (head[0] === newSnake[i][0] && head[1] === newSnake[i][1]) {
          setGameOver(true);
          return;
        }
      }

      if (x === food[0] && y === food[1]) {
        setRound((prevRound) => prevRound + 1);
        setFood(generateRandomPosition());

        newSnake.push([]);
      }

      setSnake([[x, y], ...newSnake.slice(0, -1)]);
    };

    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        default:
          break;
      }
    };

    drawSnake();
    const gameLoop = () => {
      moveSnake();
      drawSnake();
    };

    if (gameRunning) {
      document.addEventListener("keydown", handleKeyPress);
      const gameInterval = setInterval(gameLoop, 200);
      return () => {
        clearInterval(gameInterval);
        document.removeEventListener("keydown", handleKeyPress);
      };
    }
  }, [snake, direction, food, gameRunning, gameOver, round]);

  return (
    <div className="h-full relative grid grid-cols-2 p-8  border bg-card border-black  rounded-lg before:absolute before:h-[400px] before:w-[100%]  before:content-[''] before:-translate-x-10 before:-translate-y-1/3 before:rounded-full before:bg-gradient-to-tr before:from-secondary-foreground before:to-transparent before:blur-2xl after:absolute after:bottom-0 after:right-0 after:h-[180px] after:w-[370px] after:translate-x-2 after:translate-y-1/3 after:bg-gradient-to-t after:from-secondary after:blur-2xl after:content-['']  ">
      <div className="z-10 pl-4">
        <div className="rounded-xl w-fit h-full bg-[#05202E] relative">
          <canvas
            ref={canvasRef}
            width={200}
            height={250}
            className="rounded-xl bg-[#05202E]"
          />
          <div className="flex flex-col">
            <div
              className={cn(
                "h-12 bg-[#011627]/40 rounded-lg flex justify-center items-center text-secondary-foreground text-2xl",
                round === 10 || gameOver ? "visible" : "invisible",
              )}
            >
              <h1>{gameOver ? "GAME OVER! " : "WELL DONE!"}</h1>
            </div>
            {!gameRunning ? (
              <Button
                variant={"destructive"}
                className="w-24 bg-[#FEA55F] hover:bg-[#FFB073] text-[#011627] mx-auto mt-5 text-sm"
                onClick={handleStart}
              >
                start-game
              </Button>
            ) : (
              <Button
                variant={"ghost"}
                className="w-24 bg-transparent hover:bg-transparent mx-auto mt-5 text-sm"
                onClick={handleReStart}
              >
                start-again
              </Button>
            )}
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col pl-5">
        <div className="bg-[#011423] rounded-xl p-3 flex flex-col">
          <h1>{"// use keyboard"}</h1>
          <h1>{"// arrows to play"}</h1>
          <Button
            onClick={() => {
              if (direction !== "DOWN") setDirection("UP");
            }}
            className="text-4xl text-white w-12 z-10 place-self-center mt-2 "
          >
            <IoMdArrowDropup />
          </Button>
          <div className="flex justify-center gap-1 mt-1">
            <Button
              onClick={() => {
                if (direction !== "RIGHT") setDirection("LEFT");
              }}
              className="text-4xl text-white w-12 z-10  "
            >
              <IoMdArrowDropleft />
            </Button>
            <Button
              onClick={() => {
                if (direction !== "UP") setDirection("DOWN");
              }}
              className="text-4xl text-white w-12 z-10 "
            >
              <IoMdArrowDropdown />
            </Button>
            <Button
              onClick={() => {
                if (direction !== "LEFT") setDirection("RIGHT");
              }}
              className="text-4xl text-white w-12 z-10 "
            >
              <IoMdArrowDropright />
            </Button>
          </div>
        </div>
        <div className="rounded-xl p-3 flex flex-col">
          <h1>{"// food left"}</h1>
          <div className="grid grid-cols-5 pr-16">
            {Array.from({ length: 10 }, (_, index) => (
              <div
                key={index}
                className={cn(
                  "rounded-xl w-2 h-2 outline-double outline-offset-1 mt-3",
                  index <= round - 1
                    ? " bg-[#43D9AD] outline-secondary-foreground/70"
                    : "bg-[#1C8581] outline-[#1C8581]/50",
                )}
              ></div>
            ))}
          </div>
        </div>

        <div></div>
      </div>
      <div className="absolute top-3 left-3 w-4 h-4 rounded-full  text-xs flex items-center justify-center text-muted bg-gradient-to-br from-[#114B4A] via-[#196C6A] to-[#196C6A]">
        x
      </div>
      <div className="absolute bottom-3 left-3 w-4 h-4 rounded-full  text-xs flex items-center justify-center text-muted bg-gradient-to-br from-[#114B4A] via-[#196C6A] to-[#196C6A]">
        x
      </div>
      <div className="absolute top-3 right-3 w-4 h-4 rounded-full  text-xs flex items-center justify-center text-muted bg-gradient-to-br from-[#114B4A] via-[#196C6A] to-[#196C6A]">
        x
      </div>
      <div className="absolute bottom-3 right-3 w-4 h-4 rounded-full  text-xs flex items-center justify-center text-muted bg-gradient-to-br from-[#114B4A] via-[#196C6A] to-[#196C6A]">
        x
      </div>
    </div>
  );
}
