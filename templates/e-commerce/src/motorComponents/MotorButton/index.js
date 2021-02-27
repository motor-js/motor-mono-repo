import { Button } from "antd";
// import useButton from '../../hooks/useButton'
import useButton from "../../dev-resources/hooks/useButton";

const MotorButton = () => {
  const { clearSelections } = useButton();

  return (
    <Button type="primary" onClick={clearSelections}>
      Primary Button
    </Button>
  );
};

export default MotorButton;
