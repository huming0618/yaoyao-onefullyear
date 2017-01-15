
var createjs = require('createjs-easeljs');
var bubble = require('./bubble.js');

//console.log('createjs', createjs)
var stage = (function(){
    var stage = new createjs.Stage("demoCanvas");
    createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
    createjs.Ticker.setFPS(60);
    return stage;
}());


var scense = {};
scense.one = (function(){
    const count = 10;
    var bubbles = [];

    Array.from({"length":count}).forEach((x, i)=>{
        var x = Math.random() * 400;
        var y = Math.random() * 30 + 400;
        var opt = {"c":"red", "x": x, "y": y};
        var b = bubble.create(opt);
        bubbles.push(b);
        stage.addChild(b);
    })

    var tick = function(e){
        bubbles.forEach(x=>{
            x.lift(e.delta);
        });
        stage.update();
    }

    return {
        "show": function(){
            stage.update();
            createjs.Ticker.addEventListener("tick", tick);
        }
    }
}())

scense.one.show();


// var txt = new createjs.Text("哈哈哈哈哈哈", "20px Arial", "#ff7700");
// txt.x = 100;
// txt.y = 80;
// txt.rotation = 20;
// stage.addChild(txt);

// var circle = new createjs.Shape();

// (function(){
//     var circle = new createjs.Shape();

// }())

// circle.graphics.beginFill("red").drawCircle(0, 0, 50);
// circle.x = 100;
// circle.y = 100;
// stage.addChild(circle);
// stage.update();

// var tick = function(e){
//     circle.x += e.delta/1000*100;
//     stage.update();
// }
// createjs.Ticker.addEventListener("tick", tick);
// createjs.Ticker.setFPS(60);

// console.log('DEMO')
