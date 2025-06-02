import { useState } from "react";
import { Button } from "./ui/button";

export default function SizeClick() {
  const [toggle, setToggle] = useState(0);

  const handleToggle = (index: number) => {
    setToggle(index);
  };
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2">
       
        <Button
          onClick={() => handleToggle(1)}
          className={
            toggle === 1
              ? "bg-primary rounded-full"
              : "bg-muted-foreground rounded-full"
          }
        >
          XS
        </Button>
        <Button
          onClick={() => handleToggle(2)}
          className={
            toggle === 2
              ? "bg-primary rounded-full"
              : "bg-muted-foreground rounded-full"
          }
        >
          S
        </Button>
        <Button
          onClick={() => handleToggle(3)}
          className={
            toggle === 3
              ? "bg-primary rounded-full"
              : "bg-muted-foreground rounded-full"
          }
        >
          M
        </Button>
        <Button
          onClick={() => handleToggle(4)}
          className={
            toggle === 4
              ? "bg-primary rounded-full"
              : "bg-muted-foreground rounded-full"
          }
        >
          L
        </Button>
      </div>
      <div className="flex gap-2">
        <Button
          onClick={() => handleToggle(5)}
          className={
            toggle === 5
              ? "bg-primary rounded-full"
              : "bg-muted-foreground rounded-full"
          }
        >
          XL
        </Button>
        <Button
          onClick={() => handleToggle(6)}
          className={
            toggle === 6
              ? "bg-primary rounded-full"
              : "bg-muted-foreground rounded-full"
          }
        >
          XXL
        </Button>
        <Button
          onClick={() => handleToggle(7)}
          className={
            toggle === 7
              ? "bg-primary rounded-full"
              : "bg-muted-foreground rounded-full"
          }
        >
          XXXL
        </Button>
      </div>
    </div>
  );
}
