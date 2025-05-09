import "./Action.css";
import { Options } from "../../_assets";
import { useNavigate } from "react-router-dom";

export const Actions = (props: InActionsProps) => {
  return (
    <div className={"container"}>
      <List links={props.links} />
      <Options />
    </div>
  );
};

export type InAction = {
  link: string | undefined;
  text: string;
  isLink?: boolean;
  action?: (() => void) | undefined;
};
export type InActionsProps = {
  links: InAction[];
};

const List = (props: InActionsProps) => {
  const navigate = useNavigate();

  const navigateToLink = (link: string | undefined) => {
    if (link) {
      navigate(link);
    }
  };
  return (
    <div className={"fit_content"}>
      {props.links.map((li, index) => (
        <button
          key={index}
          className={"btn"}
          onClick={
            li.isLink
              ? () => navigateToLink(li.link)
              : () => (li.action ? li.action() : null)
          }
        >
          {li.text}
        </button>
      ))}
    </div>
  );
};
