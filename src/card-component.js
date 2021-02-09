import React from "react";

function CardComponent({ postition, cardText, cardLabel, listInfo,iconList,buttonList, linkDetail,topTextStyle,otherPrivateActions,showAttachmentPanel}) {

    return (
        <div className="card">
            <div className="card__wrapper">
                <div className="card__top">
                    <div className="card__left">
                        <div style={topTextStyle.topLabel}>{cardText}</div>
                        <label style={topTextStyle.bottomLabel}>{cardLabel}</label>
                    </div>
                    <div className="card__right">
                        <div className="">
                            <ul id="category_menu" className="category_menu_btn">
                            {
                                iconList.length && iconList.map((listItem)=>{
                                return(
                                    <li key={listItem.id}>
                                        <div className="d-col-flex">
                                        <span className={listItem.iconClass}></span>
                                        </div>

                                    </li>
                                )
                            })
                            }
                            </ul>
                        </div>
                        <div className="d-flex">
                        {
                            buttonList.map((btn)=>{
                                return(
                                    <div id={btn.id} className="p-5 ">
                                        <button className={`comman_btn ${btn.customClassName}`}>{btn.name}</button>
                                    </div>
                                )
                            })
                        }
                        </div>
                    </div>
                </div>
                <div className="card__buttom">
                    <div className="buttom__left">
                        <div class="category__list">
                        <ul id="category_menu">
                            {
                                listInfo.map((listItem)=>{
                                return(
                                    <li key={listItem.id}>
                                        <div className="d-col-flex">
                                        <span className="category__name">{listItem.name}</span>
                                        <span className="category__type"><span className={listItem.icon ? listItem.icon : null }></span> {listItem.label}</span>
                                        </div>
                                    </li>
                                )
                            })
                            }
                            </ul>
                        </div>
                    </div>
                    <div className="buttom__right">
                        <div class="fulldetails">
                            {
                                linkDetail ? 
                                    <a href={linkDetail.url}>{linkDetail.title} <span className="fa fa-sort-desc"></span></a>
                                    
                                : null
                            }
                        </div>
                    </div>
                </div>

{
    otherPrivateActions  ? (
        <div className="otheractions">
                            <div>
                               
                                <div className="other_details"> <span className="fa fa-file-o"></span><strong className="msg">Private Request.</strong>
                                <span > This request can be seen by you.</span></div>
                            </div> 
                </div>
    ) : null
}


     {
         

         showAttachmentPanel  ? (
            <div className="otheractions">
                                <div>
                                   
                                    <div className="other_details"> <span className="fa fa-chain-broken"></span>
                                    <a style={{color:'#252525'}} href="#"><strong className="msg">Manage attachments</strong></a>
                                    
                                    
                                    </div>
                                </div> 
                    </div>
        ) : null
     }           
            </div>
        </div>
    );
}

export default CardComponent;