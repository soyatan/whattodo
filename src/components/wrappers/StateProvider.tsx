import { useState } from "react";
import { FILTER_ALL } from "../../services/filter";
import { MODE_CREATE } from "../../services/mode";
import { getAll } from "../../services/todo";
import { objectWithOnly, wrapChildrenWith } from "../../util/common";

export const StateProvider = (props: any) => {
  const [wrapperState, setWrapperState] = useState({
    query: "",
    mode: MODE_CREATE,
    filter: FILTER_ALL,
    list: getAll(),
  });
  let children = wrapChildrenWith(props.children, {
    data: wrapperState,
    actions: objectWithOnly(this, [
      "addNew",
      "changeFilter",
      "changeStatus",
      "changeMode",
      "setSearchQuery",
    ]),
  });

  return <div>{children}</div>;
};
