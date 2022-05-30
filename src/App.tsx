import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { CircleCanvas } from "./components/CircleCanvas/CircleCanvas";
import Input from "@material-ui/core/Input";
import { Button, TextField } from "@material-ui/core";

function App() {
  const canvasWidth: number = 1000;
  const canvasHeight: number = 500;

  const [pointCount, setPointCount]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(1000);
  const [animationSpeed, setAnimationSpeed]: [
    number,
    Dispatch<SetStateAction<number>>
  ] = useState(4000);

  const updateAnimationSpeed = (event: ChangeEvent<any>) => {
    setAnimationSpeed(+event.target.value);
  };

  const updatePointsCount = (event: ChangeEvent<any>) => {
    setPointCount(+event.target.value);
  };

  return (
    <div className="App">
      <div className="modifiers">
        <TextField
          onChange={updatePointsCount}
          label="Number of points"
          defaultValue={pointCount}
          variant="outlined"
          required={true}
        />

        <TextField
          onChange={updateAnimationSpeed}
          label="Animation Speed"
          defaultValue={animationSpeed}
          variant="outlined"
          required={true}
        />

        <Button />
      </div>

      <CircleCanvas
        pointCount={pointCount}
        width={canvasWidth}
        height={canvasHeight}
        animationSpeed={animationSpeed}
      />
    </div>
  );
}

export default App;
