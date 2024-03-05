import React from "react";

interface FieldProps {
  type: string;
  name: string;
  label: string;
  placeholder: string;
}

const Work2: React.FC<{ data: FieldProps[] }> = (props) => {
  return (
    <>
      {props.data.map((item, index) => {
        return field(item, index);
      })}
    </>
  );
};

const field = (obj: FieldProps, index: number) => {
  switch (obj.type) {
    case "text":
    case "number":
    case "email":
    case "password":
      return (
        <div key={index}>
          <label htmlFor="exampleInputEmail1" className="form-label">
            {obj.name}
            {obj.label}
          </label>
          <input
            type={obj.type}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder={obj.placeholder}
          ></input>
        </div>
      );
    default:
      return null;
  }
};

export default Work2;
