import { InputText, Wrapper } from "../components/Main/Form/Form";
import Form from "../components/Main/Form/Form";
import { BtnSubmit } from "../components/Other/Button/Button";

export default function Login() {
  return (
    <Form action="http://localhost:8080/login" heading="Login">
      <InputText
        type="username"
        placeholder="Username"
        id="username"
        required={true}
        name="username"
      />
      <InputText
        type="password"
        placeholder="Password"
        id="password"
        required={true}
        name="password"
      />
      <Wrapper>
        <BtnSubmit>Submit &rarr;</BtnSubmit>
      </Wrapper>
    </Form>
  );
}
