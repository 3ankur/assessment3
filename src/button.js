import React from "react"


function CustomButton({name,type,icon,newStyle,size}){

    return(
    <div className="btn-container p-5 m-5">
        <button style={newStyle} className={size ? size :  type ? type :  'button-default'}>
            {
                icon ? <span className={icon.class} style={icon.style}></span> : null
            }
            {name}</button>
    </div>
    );
}
export default CustomButton;