const bubble = function(option){
    option = Object.assign({"c": "red", "x": 0, "y": 0, "r": 18}, option || {})
    this.init(option);
}

bubble.prototype = new createjs.Shape();

bubble.prototype.init = function(option){
    this.graphics.beginFill(option.c).drawCircle(0, 0, option.r);
    this.x = option.x;
    this.y = option.y;
}

bubble.prototype.lift = function(delta){
    this.y -= delta/1000*100;
}

bubble.create = function(option){
    return new bubble(option);
}

module.exports = bubble;