// src/components/ProjectAssets.js
import React from 'react';
import VidCards from './VidCards';
import '../assets/css/Cards.css';
import ThreadBuilderCard from './ThreadBuilderCard';
import ArticleCard from './ArticleCard';
import DisplayAsset from './DisplayAsset';

const ProjectAssets = ({ tasks }) => {
    return (
        <div className="assets-container">
            {tasks.map((task) =>
                task.assets.map((asset) => {
                    switch (asset.asset_content_type) {
                        case 'video':
                            return <VidCards key={asset.asset_id} asset={asset} />;
                        case 'threadbuilder':
                            return <ThreadBuilderCard key={asset.asset_id} asset={asset} />;
                        case 'article':
                            // Check for both 'article' content type and 'display_asset' type
                            if (asset.asset_type === 'display_asset') {
                                // Handle display assets with article content type
                                return <DisplayAsset key={asset.asset_id} asset={asset} />;
                            }
                            return <ArticleCard key={asset.asset_id} asset={asset} />;
                        case 'display':
                            return "";
                        default:
                            return "";
                    }
                })
            )}
        </div>
    );
};

export default ProjectAssets;
