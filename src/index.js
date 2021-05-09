// import * as $ from "jquery"
import Post from "/jsAdditions/Post"
import babel from "/jsAdditions/babel"
import router from "/jsAdditions/router"
import preventDefaults from "/jsAdditions/preventDefaults"
import theme from "/jsAdditions/theme"
// import "./styles/styles.css"
// import "./styles/less.less"
// import "./styles/scss.scss"
import "./sass/main.scss"
import xml from "./assets/data.xml"
import csv from "./assets/data.csv"
import WebpackLogo from "./assets/webpack-logo"
import React from "react"
import { render } from "react-dom"
import json from "./assets/json"

const post = new Post("Webpack Post Title", WebpackLogo)

// $("pre").addClass("code").html(post.toString())

// console.log("Post to String:", post.toString())
// console.log("JSON", json)
// console.log("XML", xml)
// console.log("CSV", csv)
