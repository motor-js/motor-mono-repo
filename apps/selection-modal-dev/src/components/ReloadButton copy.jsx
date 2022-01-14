import React from "react";
import { useButton } from "@motor-js/engine";
import { Button } from "semantic-ui-react";

const ButtonComponent = () => {
  const { doReload } = useButton();

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
