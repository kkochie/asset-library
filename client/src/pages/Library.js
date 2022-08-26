import React from "react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Box, Button } from "../elements";

export default function Library() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch("/assets")
      .then((r) => r.json())
      .then(setAssets);
  }, []);

  function handleDelete(id) {
    fetch(`/assets/${id}`, {
      method: "DELETE",
    }).then((r) => {
      if (r.ok) {
        setAssets((assets) =>
        assets.filter((asset) => asset.id !== id)
       );
      }
    });
  }

  return (
    <Wrapper>
      {assets.length > 0 ? (
        assets.map((asset) => (
          <Asset key={asset.id}>
            <Box>
              <img src={asset.url} alt={asset.title}/>
              <p>
                {asset.title} <br />
                <cite>Source: {asset.source}</cite>
              </p>
              <ReactMarkdown>{asset.caption}</ReactMarkdown>
              <Button variant="outline" onClick={() => handleDelete(asset.id)}>Delete</Button>
            </Box>
          </Asset>
        ))
      ) : (
        <>
          <h2>No Assets Found</h2>
          <Button as={Link} to="/new">
            Upload a New Asset
          </Button>
        </>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 90%;
  margin: 40px auto;
  display: flex;
  flex-flow: row wrap;
`;

const Asset = styled.div`
width: 30%;
min-width: 200px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
`;