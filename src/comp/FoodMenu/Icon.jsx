import React from "react";
import styled from "styled-components";

function IconAll() {
  return (
    <button
      key={1}
      onClick={() => {
        console.log("Clicked index " + 1);
      }}
    >
      <img src="/images/all.png" />
      <p>all</p>
    </button>
  );
}

function IconBreak() {
  return (
    <button
      key={2}
      onClick={() => {
        console.log("Clicked index " + 2);
      }}
    >
      <img src="/images/break.png" />
      <p>breakfast</p>
    </button>
  );
}

function IconLunch() {
  return (
    <button
      key={3}
      onClick={() => {
        console.log("Clicked index " + 3);
      }}
    >
      <img src="/images/lunch.png" />
      <p>lunch</p>
    </button>
  );
}

function IconSnack() {
  return (
    <button
      key={4}
      onClick={() => {
        console.log("Clicked index " + 4);
      }}
    >
      <img src="/images/snaks.png" />
      <p>snack</p>
    </button>
  );
}

function IconPizza() {
  return (
    <button
      key={5}
      onClick={() => {
        console.log("Clicked index " + 5);
      }}
    >
      <img src="/images/Pizza.png" />
      <p>pizza</p>
    </button>
  );
}

function IconSoups() {
  return (
    <button
      key={6}
      onClick={() => {
        console.log("Clicked index " + 6);
      }}
    >
      <img src="/images/soups.png" />
      <p>soups</p>
    </button>
  );
}

function IconDinner() {
  return (
    <button
      key={7}
      onClick={() => {
        console.log("Clicked index " + 7);
      }}
    >
      <img src="/images/dinner.png" />
      <p>dinner</p>
    </button>
  );
}

export {
  IconAll,
  IconBreak,
  IconLunch,
  IconSnack,
  IconPizza,
  IconSoups,
  IconDinner
};
