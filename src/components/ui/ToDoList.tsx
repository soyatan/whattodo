import { FILTER_ACTIVE, applyFilter, search } from "../../services/filter";
import { Header } from "./Header";

export const ToDoList = (props: any) => {
  const { list, filter, mode, query } = props.data;
  const { addNew, changeFilter, changeStatus, changeMode, setSearchQuery } =
    props.actions;

  const activeItemCount = applyFilter(list, FILTER_ACTIVE).length;
  const items = search(applyFilter(list, filter), query);
  return (
    <div className="container">
      <div className="todolist">
        <Header {...{ addNew, mode, query, setSearchQuery }} />
      </div>
    </div>
  );
};
