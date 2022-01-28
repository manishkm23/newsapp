import React from 'react';
import '../loader.css';

export default function Loader() {
    window.onload = () => {
        var span = document.querySelectorAll("span");

        for (var i = 0; i < span.length; i++) {
          var deg = (i * 360) / 20;
          span[i].style.transform = "rotate(" + deg + "deg)";
        }
        for ( i = 0; i < span.length; i++) {
          var color = (i * 360) / 20;
          span[i].style.color = "hsl(" + color + ", 50%, 50%)";
        }
      };
  return (
    <div className="loader">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <div className="loading">Loading...</div>
    </div>
  )
}
