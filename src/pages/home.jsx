import * as React from "react";
import BannerArea  from "../components/BannerArea";
import Cards from "../components/Cards";
import InputArea from "../components/InputArea";
import BasicSelect from "../components/Select";

export const Home = () => {
    return (
        <div>
            <BannerArea/>
            <InputArea/>
            <BasicSelect/>
            <Cards/>
        </div>
    )
}

