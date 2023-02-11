import { KEY_RETURN } from "keycode-js";
import { compose, withHandlers, withState } from "recompose";

export default compose(
  withState("value", "setValue", (props: any) => {
    console.log("got props", props);
    return props.value || "";
  }),
  withHandlers({
    handleKeyUp:
      ({ addNew, setValue }: any) =>
      (e: any) => {
        const text = e.target.value.trim();

        if (e.keyCode === KEY_RETURN && text) {
          addNew(text);
          setValue("");
        }
      },
    handleChange:
      ({ setValue }: any) =>
      (e: any) => {
        setValue(e.target.value);
      },
  })
);
