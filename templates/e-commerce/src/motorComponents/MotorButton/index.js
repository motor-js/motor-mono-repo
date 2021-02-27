import { Button } from "antd";
<<<<<<< HEAD:templates/e-commerce/src/motorComponents/MotorButton/index.js
// import useButton from '../../hooks/useButton'
import useButton from "../../dev-resources/hooks/useButton";
=======
import useButton from "../../../dev-resources/hooks/useButton";
>>>>>>> 49b5f25e1d3963b9912d31a6838f2f3525dfc310:templates/e-commerce/src/components/engine/MotorButton/index.js

const MotorButton = () => {
  const { clearSelections } = useButton();

  return (
    <Button type="primary" onClick={clearSelections}>
      Primary Button
    </Button>
  );
};

export default MotorButton;
