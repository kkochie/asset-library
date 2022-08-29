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
          {asset.url ? <img src={asset.url} alt={asset.title}/> : <img src={asset.image_data} alt={asset.title}/>}
          <p>
            <span>{asset.title}</span><br />
            <cite>Source: {asset.source}</cite>
          </p> 
          <p>{asset.caption}</p>
      
          <div className="update-button">
            <Button variant="outline" onClick={() => handleDelete(asset.id)}>Delete</Button>
            <Button variant="outline" onClick={() => handleClick(asset.id)}>Update</Button>
          </div>
          {showForm ? <AssetUpdateForm asset={asset} setAsset={setAssets} handleUpdate={handleUpdate} handleClick={handleClick}/> : null}  
      </Box>
    </Asset>
  );
}

const Asset = styled.div`
min-width: 200px;
margin: 20px auto;
display: flex;
flex-flow: row wrap;
gap: 40px
overflow-x: auto;
`;