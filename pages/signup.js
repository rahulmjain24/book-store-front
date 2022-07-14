import { InputText, InputRadio, Wrapper } from "../components/Main/Form/Form";
import Form from "../components/Main/Form/Form";
import { BtnSubmit } from "../components/Other/Button/Button";
import { useEffect, useState } from "react";
import Nav from "../components/Other/Nav/Nav";
import { URL } from "../setUrl";
import axios from "axios";

export default function Signup() {
  



  async function postData(url, data) {
    axios({
      method:"post",
      url:url,
      data:data,
      config: { headers: {'Content-Type': 'application/json'}}
    }).then(res => {
      //authentication success...
      console.log(res.json())
  })
  .catch(error=>{
      var errResp = error.response;
      console.log(errResp)
  })

  //   // Default options are marked with *
  //   const response = await fetch(url, {
  //     method: "POST", // *GET, POST, PUT, DELETE, etc.
  //     mode: "no-cors", // no-cors, *cors, same-origin
  //     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  //     headers: {
  //       "Content-Type": "application/json",
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     },
  //     redirect: "follow", // manual, *follow, error
  //     referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  //     body: JSON.stringify(data), // body data type must match "Content-Type" header
  //   });
  //   return response.json(); // parses JSON response into native JavaScript objects
  }

  return (
    <>
    <Nav></Nav>
    <Form
      heading="Signup"
      submitForm={(e) => {
        e.preventDefault()
        postData(`${URL}/api/users`, {
          fullName: e.target.name.value,
          username: e.target.username.value,
          email: e.target.email.value,
          password: e.target.password.value,
          gender: e.target.gender.value,
        })
          .then((data) => {
            console.log(data.json()); // JSON data parsed by `data.json()` call
          })
          .catch((err) => console.log(err));
      }}
    >
      <InputText
        type="text"
        placeholder="Full Name"
        id="name"
        name="fullName"
        required={true}
      />
      <InputText
        type="text"
        placeholder="Userame"
        id="username"
        name="username"
        required={true}
      />
      <InputText
        type="email"
        placeholder="Email address"
        id="email"
        name="email"
        required={true}
      />
      <InputText
        type="password"
        placeholder="Password"
        id="password"
        name="password"
        required={true}
      />
      <Wrapper>
        <InputRadio id="MALE" name="gender" label="Male" value="MALE" />
        <InputRadio id="FEMALE" name="gender" label="Female" value="FEMALE" />
        <InputRadio id="OTHER" name="gender" label="Other" value="OTHER" />
      </Wrapper>

      <Wrapper>
        <div>
          <BtnSubmit>Submit &rarr;</BtnSubmit>
        </div>
      </Wrapper>
    </Form>
    </>
  );
}
