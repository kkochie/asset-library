import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { Button, Error, FormField, Input, Label, Textarea } from "../elements";

export default function AssetUpdateForm({ asset, setAsset })  {
  const[caption, setCaption] = useState("");
  const[source, setSource] = useState("");
  const[title, setTitle] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Update profile
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`/assets/${asset.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        caption: caption,
        source: source,
        title: title
      }),
    })
    .then((resp) => resp.json())
    .then((data) => setAsset(data));
}

  return (
    <div>
        
        <form onSubmit={handleSubmit}>
        <FormField>
            <Label htmlFor="title">Update Title</Label>
            <Input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="name">Update Source</Label>
            <Input
              type="text"
              id="source"
              value={source}
              onChange={(e) => setSource(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="caption">Update Caption</Label>
            <Textarea
              id="caption"
              rows="3"
              placeholder="Update caption"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Change"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
    </div>
  );
}

