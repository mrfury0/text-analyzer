import React from "react";
import { Form } from "react-bootstrap";
import { Container } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useState, useRef } from "react";

export default function TextForm() {
  const [text, setText] = useState("");
  const copy = useRef(null);

  const handleChange = (e) => {
    setText(e.currentTarget.value);
  };

  const handleLower = (e) => {
    setText(text.toLowerCase());
  };

  const handleUpper = (e) => {
    setText(text.toUpperCase());
  };

  const handleClear = (e) => {
    setText("");
  };

  const handleCopy = () => {
    copy.current.select();
    document.execCommand("copy");
  };

  return (
    <Container className="my-4">
      <h2>Enter your text below</h2>
      <Form.Control
        as="textarea"
        ref={copy}
        value={text}
        onChange={(e) => {
          handleChange(e);
        }}
        style={{ height: "200px" }}
      />

      <br />

      <Button
        variant="primary"
        size="lg"
        className="mx-2"
        onClick={handleUpper}
      >
        UpperCase
      </Button>
      <Button
        variant="primary"
        size="lg"
        className="mx-2"
        onClick={handleLower}
      >
        LowerCase
      </Button>
      <Button
        variant="primary"
        size="lg"
        className="mx-2"
        onClick={handleClear}
      >
        Clear
      </Button>

      <Button variant="primary" size="lg" className="mx-2" onClick={handleCopy}>
        Copy
      </Button>

      <h2 className="my-4">Preview:</h2>
      <p>{text}</p>
    </Container>
  );
}
