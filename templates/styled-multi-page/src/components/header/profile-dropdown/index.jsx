import { Calendar, Clock, HelpCircle } from "react-feather";
import { useApp } from "@motor-js/engine";

import logo from "../../static/m-logo.jpg";

import { Avatar, DropdownToggle, Dropdown } from "../..";
import {
  StyledDropMenu,
  StyledAuthorName,
  StyledAuthorRole,
  StyledDropItem,
  StyledDivider,
  StyledReload,
} from "./style";

const ProfileDropdown = () => {
  const { qTitle, qLastReloadTime } = useApp();

  return (
    <Dropdown direction="down">
      <DropdownToggle variant="texted">
        <Avatar size="sm" shape="circle">
          {logo && <img src={logo} alt={"logo"} />}
        </Avatar>
      </DropdownToggle>
      <StyledDropMenu>
        <Avatar size="lg" shape="circle">
          {logo && <img src={logo} alt={"logo"} />}
        </Avatar>
        <StyledAuthorName>{qTitle}</StyledAuthorName>
        <StyledAuthorRole>Application</StyledAuthorRole>
        <StyledReload path="/profile-view">
          <Calendar size="24" />
          {new Date(qLastReloadTime).toLocaleDateString()}
        </StyledReload>
        <StyledReload path="/profile-view" mt="10px">
          <Clock size="24" />
          {new Date(qLastReloadTime).toLocaleTimeString()}
        </StyledReload>
        <StyledDivider />
        <StyledDropItem path="https://www.motor.so//" mt="10px">
          <HelpCircle size="24" />
          Help
        </StyledDropItem>
      </StyledDropMenu>
    </Dropdown>
  );
};

export default ProfileDropdown;
