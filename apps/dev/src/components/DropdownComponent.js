import React, { useEffect, useState } from "react";
import { useBookmark } from "@motor-js/engine";
import { Dropdown, Button } from "semantic-ui-react";

const ButtonComponent = () => {
  const {
    bookmarks,
    applyBookmark,
    destroyBookmark,
    bookmarkList,
    appliedBookmark,
    bookmarkInfo,
  } = useBookmark();
  const [bookmarkOptions, setBookmarkOptions] = useState();

  // console.log(appliedBookmark, bookmarkInfo);

  const apply = (e, data) => applyBookmark(data.value);
  // const apply = (e, data) => destroyBookmark(data.value);
  console.log("fff", bookmarkList && bookmarkList.length);

  // useEffect(() => {
  //   if (!bookmarks) return;
  //   // console.log(bookmarks);
  //   const options = bookmarks.map((d, i) => {
  //     return { key: d.qInfo.qId, value: d.qInfo.qId, text: d.qMeta.title };
  //   });
  //   setBookmarkOptions(options);
  //   // console.log(options);
  // }, [bookmarks]);

  return (
    <>
      <Button.Group color="teal">
        <Button>Bookmarks</Button>
        <Dropdown
          className="button icon"
          floating
          scrolling
          options={bookmarkList || null}
          onChange={apply}
          trigger={<></>}
        />
      </Button.Group>
    </>
  );
};

export default ButtonComponent;
