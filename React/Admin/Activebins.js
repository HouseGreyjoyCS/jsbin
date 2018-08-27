import React, { Component } from 'react';

const Activebins = props => {

  let displayPassword;
  if (!props.password === '') {
    displayPassword = <button id="displayPassword" disabled="true">{props.password}</button>
  } 

  return (
    <div className="bins">
      <span>{props.name}</span>
      <br/>
      <button id={props.name} onClick={(e) => props.deleteBin(e)}>Delete</button>
      <button id={props.name} onClick={(e) => props.redirectToBinPage(e)}>Open</button>
      {displayPassword}
    </div>
  )
}

export default Activebins;
