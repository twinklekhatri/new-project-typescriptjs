import React, { useState } from "react";
import style from "./Form.module.css";

const Work3: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [marks, setMarks] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirm, setConfirm] = useState<string>("");
  const [age, setAge] = useState<string>("");

  const onChangeOfName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onChangeOfMarks = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMarks(event.target.value);
  };

  const onChangeOfEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangeOfPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onChangeOfConfirm = (event: React.ChangeEvent<HTMLInputElement>) => {
    setConfirm(event.target.value);
  };

  const onChangeOfAge = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAge(event.target.value);
  };

  const onSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const obj = {
      name: name,
      age: age,
      marks: marks,
      email: email,
      password: password,
      confirm: confirm,
    };
    console.log(obj);
  };

  return (
    <div className={style.maindiv}>
      <form onSubmit={onSubmitForm}>
        <h1 className={style.head}>FORM</h1>
        <div className="row">
          <div className="col">
            <label>Name</label>
            <input onChange={onChangeOfName}></input>
          </div>
          <div className="col">
            <label>Age</label>
            <br />
            <input onChange={onChangeOfAge}></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Marks</label>
            <input onChange={onChangeOfMarks}></input>
          </div>
          <div className="col">
            <label>Email</label>
            <br />
            <input onChange={onChangeOfEmail}></input>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <label>Password</label>
            <input onChange={onChangeOfPassword}></input>
          </div>
          <div className="col">
            <label>Confirm password</label>
            <br />
            <input onChange={onChangeOfConfirm}></input>
          </div>
        </div>
        <div className={style.Btn}>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Work3;
