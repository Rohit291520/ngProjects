"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var likeObj = new like_component_1.LikeComponent(20, true);
likeObj.changeButtonStatus();
console.log("likecount : " + likeObj.numberOfLikes + ", is selected : " + likeObj.isSelected);
// myName.showName();
