import { InputText, Wrapper } from "../components/Main/Form/Form";
import Form from "../components/Main/Form/Form";
import { BtnSubmit } from "../components/Other/Button/Button";
import Nav from "../components/Other/Nav/Nav";
import { URL } from "../setUrl";
import axios from "axios";

export default function Login() {
  async function postData(url, data) {
    }

  return (
    <>
    <Nav></Nav>
    <Form action={`http://localhost:8080/loginhere`} heading="Login" submitForm={e => {
      e.preventDefault()
      console.log(e.target.username.value)
      axios({
        method:'post',
        url:'http://localhost:8080/loginhere',
        params:{
               username: e.target.username.value,
               password: e.target.password.value
           },
        config: { headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
       })
       .then(res => {
           //authentication success...
           console.log(res.json())
           console.log(res.status)
       })
       .catch(error=>{
           var errResp = error.response;
           console.log(errResp.status)
           if(error.status == 500) {
            alert("user already exists")
           }
         console.log(errResp)

       })
     
    }

    }>
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
    </>
  );
}
