---
to: <%= name %>/src/components/engine/Export/index.js
---

import { Button } from "antd";
import useButton from "@motor-js/engine";

const Export = () => {
  const cols = [
    { qField: "[name]", qLabel: "name" },
    {
      qField: "=Sum({$<coin={'bitcoin'}>} price)",
      qLabel: "price",
    },
  ];

  const { qLayout, exportData } = useButton({
    cols,
    filename: "Data",
  });

  return (
    <Button type="primary" onClick={exportData}>
      Export Data
    </Button>
  );
};

export default Export;
