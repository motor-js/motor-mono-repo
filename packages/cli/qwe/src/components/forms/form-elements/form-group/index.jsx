
import classnames from "classnames";
import { StyledGroup } from "./style";



export const FormGroup= ({ children, className, ...rest }) => {
    return (
        <StyledGroup className={classnames(className, "form-group")} {...rest}>
            {children}
        </StyledGroup>
    );
};
