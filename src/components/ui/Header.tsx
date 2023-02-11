import InputWrapper from "./InputWrapper";

export const Header = (props: any) => {
  return (
    <header>
      <h1>Things To Do</h1>
      <InputWrapper {...props} />
    </header>
  );
};
