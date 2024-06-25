import Avatar from "../../../assets/default-avatar.svg";
import React from "react";

export const Person = ({ name, nickName = "defaultValue", images }) => {
    // AND OPERATOR
    // const img = images && images[0] && images[0].small && images[0].small.url;

    // OPTIONAL CHAINING (with default value!)
    const img = images?.[0]?.small?.url || Avatar;

    return (
        <div>
            <img src={img} alt={name} style={{ width: "50px" }} />
            <h4>{name}</h4>
            <p>Nickname : {nickName}</p>
        </div>
    );
};
