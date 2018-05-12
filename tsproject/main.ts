import { LikeComponent } from './like.component';

let likeObj = new LikeComponent(20, true);

likeObj.changeButtonStatus();

 console.log(`likecount : ${likeObj.numberOfLikes}, is selected : ${likeObj.isSelected}`);
// myName.showName();