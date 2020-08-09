import React from "react"
import AlbumTemplate from "../templates/AlbumTemplate";

type { 
    children: Element; 
};

const HomePage: React.FC = () => {
    return (
        <AlbumTemplate>
            <>トップページ</>
        </AlbumTemplate>
    );
};

export default HomePage