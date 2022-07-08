import { InputText, Wrapper } from "../components/Main/Form/Form";
import Form from "../components/Main/Form/Form";
import { BtnSubmit } from "../components/Other/Button/Button";

export default function Login() {
  return (
    <Form heading="Login">
      <InputText
        type="email"
        placeholder="Email address"
        id="email"
        required={true}
      />
      <InputText
        type="password"
        placeholder="Password"
        id="password"
        required={true}
      />
      <Wrapper>
        <BtnSubmit>Submit &rarr;</BtnSubmit>
      </Wrapper>
    </Form>
  );
}
