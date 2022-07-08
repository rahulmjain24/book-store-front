import { InputText, InputRadio, Wrapper } from "../components/Main/Form/Form";
import Form from "../components/Main/Form/Form";
import { BtnSubmit } from "../components/Other/Button/Button";

export default function Signup() {
  return (
    <Form heading="Signup">
      <InputText
        type="text"
        placeholder="Full Name"
        id="name"
        required={true}
      />
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
        <InputRadio id="male" name="gender" label="Male" />
        <InputRadio id="female" name="gender" label="Female" />
        <InputRadio id="other" name="gender" label="Other" />
      </Wrapper>

      <Wrapper>
        <BtnSubmit>Submit &rarr;</BtnSubmit>
      </Wrapper>
    </Form>
  );
}
