import { Button } from "antd";
// import useButton from '../../hooks/useButton'
import useButton from "../../../dev-resources/hooks/useButton";
import { config } from "../../../config/config";

const MotorExport = () => {
  const cols = [
    { qField: "[name]", qLabel: "name" },
    {
      qField: "=Sum({$<coin={'bitcoin'}>} price)",
      qLabel: "price",
    },
  ];

  const { qLayout, exportData } = useButton({
    cols,
    config,
    filename: "Data",
  });

  return (
    <Button type="primary" onClick={exportData}>
      Export Data
    </Button>
  );
};

export default MotorExport;
