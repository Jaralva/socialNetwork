import React from "react";
import {preloaderSRC} from "../images/preloaderSRC";
import style from "./Preloader.module.css"

export const Preloader = () => {
    return (
        <div>
            <img src={preloaderSRC} />
        </div>
    )
}