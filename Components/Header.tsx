import React from 'react'

type Header_Params = {
  header_Text: string;
  header_Sub_Text?: string;  // This Parameter's passing is optional
}

function Header({header_Text , header_Sub_Text} : Header_Params){
  return (
    <>
        <div>{header_Text}</div>
        <div style={{color : "red" , backgroundColor : "yellow"}}>{header_Sub_Text}</div>
    </>
  );
}

export default Header
