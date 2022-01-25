import React, { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
const axios = require("axios");

export default function ReadMD(props) {
  // eslint-disable-next-line no-unused-vars
  const { file, ...rest } = props;
  const [markdown, setMarkdown] = useState("");
  const [errorlog, setErrorlog] = useState("");

  useEffect(() => {
    axios
      .get(file)
      .then(function (response) {
        // handle success
        setMarkdown(response.data);
        setErrorlog();
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        setErrorlog(JSON.stringify(error));
        console.log(error);
      });
  }, [file]);

  return (
    <article>
      <ReactMarkdown children={markdown} />
      {errorlog}
    </article>
  );
}
