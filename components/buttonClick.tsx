import { useState } from "react";
import { Button } from "./ui/button";

export default function ButtonClick() {
  const [toggle, setToggle] = useState(0);

  return (
    <div className="flex gap-2">
      <Button
        onClick={() => setToggle(1)}
        className={
          toggle === 1
            ? "bg-primary rounded-full"
            : "bg-muted-foreground rounded-full"
        }
      >
        Эрэгтэй
      </Button>
      <Button
        onClick={() => setToggle(2)}
        className={
          toggle === 2
            ? "bg-primary rounded-full"
            : "bg-muted-foreground rounded-full"
        }
      >
        Эмэгтэй
      </Button>
      <Button
        onClick={() => setToggle(3)}
        className={
          toggle === 3
            ? "bg-primary rounded-full"
            : "bg-muted-foreground rounded-full"
        }
      >
        Хүүхэд
      </Button>
    </div>
  );
}
