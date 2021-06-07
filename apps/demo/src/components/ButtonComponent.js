import React from "react";
import { useButton, useBookmark } from "@motor-js/engine";
import { Button } from "semantic-ui-react";

const ButtonComponent = () => {
  const { clearSelections } = useButton();
  const { bookmarkInfo, createBookmark } = useBookmark();

  console.log("abc", bookmarkInfo);

  const saveBookmark = () => createBookmark();

  return (
    <>
      <Button onClick={clearSelections}>Clear Selections</Button>
      <Button onClick={saveBookmark}>Create Bookmark</Button>
    </>
  );
};

export default ButtonComponent;
