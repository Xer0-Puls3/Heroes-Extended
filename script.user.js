// ==UserScript==
// @name Heroes Extended
// @namespace https://www.heroesrpg.com/
// @version 1.0
// @author Puls3
// @include http*://heroesrpg.com/game.php
// @include http*://*.heroesrpg.com/game.php
// @downloadURL https://github.com/Xer0-Puls3/Heroes-Extended/raw/master/script.user.js
// @grant none
// @description Extends Heroes RPG and aims to improve the overall quality of the site.
// ==/UserScript==

// Made by Puls3 from Pendoria!
// Made by Puls3 from Heroes RPG!
// If cloned please give credit!

// Also follow the Clone Policy on the GitHub ReadMe!!

const styles = `
<style>

#header {
  background-repeat: no-repeat;
  background-position: center;
}

#page, #main-nav, #progress-bar-holder, #chat1, #chat_table1, #gathering-exp {
  width: 100%;
}

#content {
  padding: 0px;
  padding-top: 7px;
  width: 100%;
  text-align: center;
}

#main-nav {
  background-color: #333;
}

#main-nav > ul {
  margin: auto;
  width: 960px;
}

#left {
  width: calc(100% - 200px);
}

#center {
  width: calc(100% - 201px)
}

#content > table {
  width: calc(100% - 10px);
  margin-left: auto;
  margin-right: auto;
}

#chat_input {
  width: calc(100% - 50px);
}

#channels button {
  width: 100px;
}

#chat1 table, #chat10 table, #chat50 table, #chat100 table {
  width: 100%;
}

#chat1 table tr td, #chat10 table tr td, #chat50 table tr td {
  max-width: 100%;
}

</style>
`

applyStyles();

function applyStyles() {
  $("head").append(styles);
}