import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../elements";
import AssetCard from "../components/AssetCard";

export default function Library() {
  const [assets, setAssets] = useState([]);

  useEffect(() => {
    fetch("/assets")
      .then((r) => r.json())
      .then(setAssets);
  }, []);

  function onDelete(id) {
    const updatedArray = assets.filter((asset) => asset.id !== id);
    setAssets(updatedArray);
  }

  function handleUpdate(updatedAsset) {
    const updatedAssets = assets.map((asset) =>
      asset.id === updatedAsset.id ? updatedAsset : asset
    );
    setAssets(updatedAssets);
  }

  return (
    <Wrapper>
      {assets.length > 0 ? (
        assets.map((asset) => (
          <AssetCard key={`asset-${asset.id}`} asset={asset} setAssets={setAssets} onDelete={onDelete} handleUpdate={handleUpdate}/>
        ))
      ) : (
        <div className="no-asset">
          <h2>No Assets Found</h2>
          <br />
          <Button as={Link} to="/new">
            Upload a New Asset
          </Button>
        </div>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 90%;
  margin: 40px auto;
  display: flex;
  flex-flow: row wrap;
  align-items: flex-start;

  div.no-asset {
    display:flex;
    flex-direction: column;
    align-items: center;
  }
`;