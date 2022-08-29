import React from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../elements";

export default function AssetCreateForm({ user }) {
  const [url, setUrl] = useState("");
  const [caption, setCaption] = useState("");
  const [title, setTitle] = useState("");
  const [source, setSource] = useState("");
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  const [imageData, setImageData] = useState(null)


  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData()
    formData.append('caption', caption)
    formData.append('title', title)
    formData.append('source', source)
    formData.append('image_data', imageData)
 
    fetch("/assets", {
      method: "POST",
      body: formData,
      }).then((r) => {
      if (r.ok) {
        history.push("/libraries");
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <Wrapper>
      <WrapperChild>
        <h2>Create Asset</h2>
        <p>Submit image by either url or direct upload.</p>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="url">Image URL</Label>
            <Input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </FormField>
          <Upload>
          <h3>OR</h3>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImageData(e.target.files[0])}
            />
          </Upload>
          <FormField>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Required"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="caption">Caption</Label>
            <Textarea
              id="caption"
              rows="3"
              placeholder="Required"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="source">Source</Label>
            <Input
              type="text"
              id="source"
              placeholder="Required"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </FormField>
          <FormField>
            <div>
              <Button color="primary" type="submit">
              Submit Asset
            </Button>
            </div>
           
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </WrapperChild>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 600px;
  margin: 40px auto;
  padding: 16px;
  display: flex;
`;

const WrapperChild = styled.div`
  flex: 1;
`;

const Upload = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-bottom: 10px;
`