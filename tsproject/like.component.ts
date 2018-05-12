export class LikeComponent {
    constructor( private _numberOfLikes:number, private _isSelected:boolean ){
    }

    get numberOfLikes(){
        return this._numberOfLikes;
    }

    get isSelected(){
        return this._isSelected;
    }

    changeButtonStatus() {
        this._numberOfLikes += (this._isSelected) ? -1 : 1; 
        this._isSelected = !this._isSelected
    }
    
}