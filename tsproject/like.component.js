"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
    function LikeComponent(_numberOfLikes, _isSelected) {
        this._numberOfLikes = _numberOfLikes;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeComponent.prototype, "numberOfLikes", {
        get: function () {
            return this._numberOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeComponent.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    LikeComponent.prototype.changeButtonStatus = function () {
        this._numberOfLikes += (this._isSelected) ? -1 : 1;
        this._isSelected = !this._isSelected;
    };
    return LikeComponent;
}());
exports.LikeComponent = LikeComponent;
