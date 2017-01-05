var bubble = function(option){
    this.init(option || {"c": "red", "x": 0, "y": 0});
}

bubble.prototype = new createjs.Shape();

bubble.prototype.init = function(option){
    this.graphics.beginFill(option.c).drawCircle(0, 0, 18);
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