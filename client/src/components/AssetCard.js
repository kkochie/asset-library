import React from "react";
import { useState } from "react";
import AssetUpdateForm from "../components/AssetUpdateForm";
import { Box, Button } from "../elements";
import styled from "styled-components";

export default function AssetCard({ asset, setAssets, onDelete, handleUpdate }) {
  const [showForm, setShowForm] = useState(false);

  function handleDelete(id) {
    fetch(`/assets/${id}`, {
      method: "DELETE",
    });
    onDelete(id);
  }

  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <Asset key={asset.id}>
      <Box>
        <img src={asset.url} alt={asset.title}/>
        <p>
          {asset.title} <br />
          <cite>Source: {asset.source}</cite>
        </p>
        <p>{asset.caption}</p>
        <Button variant="outline" onClick={() => handleDelete(asset.id)}>Delete</Button>
        <Button variant="outline" onClick={() => handleClick(asset.id)}>Update</Button>
        <div>
          {showForm ? <AssetUpdateForm asset={asset} setAsset={setAssets} handleUpdate={handleUpdate} handleClick={handleClick}/> : null}
        </div>
      </Box>
            
    </Asset>
  );
}

const Asset = styled.div`
width: 30%;
min-width: 200px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
`;