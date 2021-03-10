import { Button } from "antd";
// import useButton from '../../hooks/useButton'
import useButton from "../../../dev-resources/hooks/useButton";

const ActionButton = () => {
  const { clearSelections } = useButton();

  return (
    <Button type="primary" onClick={clearSelections}>
      Clear Selections
    </Button>
  );
};

export default ActionButton;
