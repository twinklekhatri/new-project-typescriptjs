import React, { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

interface EmailTemplate {
  etid: string;
  name: string;
  fromName: string;
  subject: string;
  headerImage: string;
  headerImageAltText: string;
  accentColor: string;
  messageBody: string;
}

const Work4: React.FC = () => {
  const [data, setData] = useState<EmailTemplate[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response: AxiosResponse<{ emailTemplates: EmailTemplate[] }> = await axios.get(
        "https://integration-api.tangocard.com/raas/v2/emailTemplates",
        {
          headers: {
            accept: "application/json",
            authorization:
              "Basic UUFQbGF0Zm9ybTI6YXBZUGZUNkhOT05wRFJVajNDTEdXWXQ3Z3ZJSE9OcERSVVlQZlQ2SGo=",
          },
        }
      );
      setData(response.data.emailTemplates);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div
      style={{
        overflowY: "scroll",
        width: "1500px",
        height: "500px",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <table className="table table-info" style={{ height: "500px", overflow: "scroll" }}>
        <thead>
          <tr>
            <th scope="col">etifd</th>
            <th scope="col">name</th>
            <th scope="col">Form name</th>
            <th scope="col">subject</th>
            <th scope="col">header Image </th>
            <th scope="col">header ImageAlts Text</th>
            <th scope="col">accent Color</th>
            <th scope="col">messageBody</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr key={index}>
                <td>{item.etid}</td>
                <td>{item.name}</td>
                <td>{item.fromName}</td>
                <td>{item.subject}</td>
                <td>{item.headerImage}</td>
                <td>{item.headerImageAltText}</td>
                <td>{item.accentColor}</td>
                <td>{item.messageBody}</td>
              </tr>
            ))
          ) : (
            <tr>
              <th style={{ textAlign: "center" }} colSpan={8}>
                <div className="spinner-border text-primary mt-4" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Work4;
