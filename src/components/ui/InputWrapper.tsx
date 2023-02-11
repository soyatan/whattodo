import { MODE_CREATE, MODE_SEARCH } from "../../services/mode";
import InputBox from "./InputBox";
import SearchBox from "./SearchBox";

export default function InputWrapper(props: any) {
  const { mode, addNew, query, setSearchQuery } = props;

  switch (mode) {
    case MODE_CREATE:
      return <InputBox {...{ addNew }} />;

    case MODE_SEARCH:
      return <SearchBox {...{ query, setSearchQuery }} />;

    default:
      return null;
  }
}
