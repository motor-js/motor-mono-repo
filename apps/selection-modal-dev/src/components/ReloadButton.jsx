import React from "react";
import { useApp } from "@motor-js/engine";
import { Button } from "semantic-ui-react";

const ButtonComponent = () => {
  const { doReload } = useApp();

  const handleClick = async () => {
    console.log(await doReload());
  };

  return (
    <Button onClick={handleClick} style={{ marginTop: "30px" }}>
      Reload
    </Button>
  );
};

export default ButtonComponent;
