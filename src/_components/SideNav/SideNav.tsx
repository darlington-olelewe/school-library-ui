import { NavLink } from "react-router-dom";
import "./SideNav.css";
import {
  AuditIconActive,
  AuditIconInActive,
  BillingNavSelected,
  BillingNavUnSelected,
  CampaignNavSelected,
  CampaignNavUnSelected,
  ClientIconActive,
  ClientIconInActive,
  NavIconActive,
  NavIconInActive,
  TargetNavSelected,
  TargetNavUnSelected,
} from "../../_assets";
  import { useSelector } from "react-redux";
 import { RootState } from "../../_store";
import {LoggedInState} from "../../_types";

export const SideNav = () => {
  const user : LoggedInState = useSelector(
    (state: RootState) => state.userState.loggedInUser
  );

  if (!user) {
    return "Loading...";
  }


  if (user.role === "ADMIN") {
    return (
      <nav className={"nav"}>
        <ul className={"ul"}>
          <li>
            <NavLink
              to="/admin/books"
              className={({ isActive }) => (isActive ? "li active" : "li")}
            >
              {({ isActive }) => (
                <>
                  {isActive ? <NavIconActive /> : <NavIconInActive />} Books
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/students"
              className={({ isActive }) => (isActive ? "li active" : "li")}
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ClientIconActive /> : <ClientIconInActive />}{" "}
                  Students
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/audits"
              className={({ isActive }) => (isActive ? "li active" : "li")}
            >
              {({ isActive }) => (
                <>
                  {isActive ? <AuditIconActive /> : <AuditIconInActive />} Audit
                </>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
  return (
    <nav className={"nav"}>
      <ul className={"ul"}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "li active" : "li")}
          >
            {({ isActive }) => (
              <>{isActive ? <NavIconActive /> : <NavIconInActive />} Homepage</>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/client/targets"
            className={({ isActive }) => (isActive ? "li active" : "li")}
          >
            {({ isActive }) => (
              <>
                {isActive ? <TargetNavSelected /> : <TargetNavUnSelected />}{" "}
                Targets
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/client/campaigns"
            className={({ isActive }) => (isActive ? "li active" : "li")}
          >
            {({ isActive }) => (
              <>
                {isActive ? <CampaignNavSelected /> : <CampaignNavUnSelected />}{" "}
                Campaigns
              </>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/client/billings"
            className={({ isActive }) => (isActive ? "li active" : "li")}
          >
            {({ isActive }) => (
              <>
                {isActive ? <BillingNavSelected /> : <BillingNavUnSelected />}{" "}
                Billings
              </>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
