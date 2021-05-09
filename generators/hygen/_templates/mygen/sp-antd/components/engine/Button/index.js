import { Button } from "antd";
// import useButton from '../../hooks/useButton'
import useButton from '@motor-js/engine';

const Button = () => {
  
  const { clearSelections } = useButton();

  return (
    <Button
      type="primary"
      onClick={clearSelections}
    >
      Primary Button
    </Button>
  );
};

export default Button;
