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
// import { useSelector } from "react-redux";
// import { RootState } from "../../_store";

export const SideNav = () => {
  // const userData = useSelector(
  //   (state: RootState) => state.userState.currentUser
  // );
  //
  // if (!userData) {
  //   return "Loading...";
  // }

  // userData?.userType === "ADMIN"
  const val = true;
  if (val == true) {
    return (
      <nav className={"nav"}>
        <ul className={"ul"}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "li active" : "li")}
            >
              {({ isActive }) => (
                <>
                  {isActive ? <NavIconActive /> : <NavIconInActive />} Homepage
                </>
              )}
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/admin/clients"
              className={({ isActive }) => (isActive ? "li active" : "li")}
            >
              {({ isActive }) => (
                <>
                  {isActive ? <ClientIconActive /> : <ClientIconInActive />}{" "}
                  Clients
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
