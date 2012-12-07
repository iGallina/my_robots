var robots  = new Array();



//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) {
};

Robot.prototype.start           = function( ev ){
    var robot   = ev.robot;

    robots[robot.id]    = {
        asyncFns    :   new Array(),
        pauses      :   new Array(),
        
        aimPoint        : {
            x   : robot.arenaWidth / 2,
            y   : robot.arenaHeight / 2
        },
        toCannonAngle   : robot.cannonAbsoluteAngle,
        toAngle         : robot.angle,
        speed           : 5,
        startCannonSpeed: 4,
        turnSpeed       : 3,
        cannonSpeed     : 10,
        
        margin          : 160,
        scanCount       : 0,
        scanV           : 15,
        startScanCount  : 10,
        
        shots           : 0,
        round           : 0
    }
  

    if( robot.parentId ){
        robots[robot.id].speed  = -3;
        robots[robot.id].startCannonSpeed   = 5;
        robots[robot.id].turnSpeed      = 1;
        robots[robot.id].margin         = 250;
        robot.rotateCannon( 360 );
    }else{
        robot.clone();
        robot.ahead( 100 );
    }
    this.addAsyncFn( "go", this.go, robot.id );
    this.addAsyncFn( "aim", this.aim, robot.id );
    this.addAsyncFn( "scan", this.scan, robot.id );
    this.addAsyncFn( "asyncTurn", this.asyncTurn, robot.id );
    this.addAsyncFn( "asyncCannon", this.asyncCannon, robot.id );
    this.addAsyncFn( "goAround", this.goAround, robot.id );
    this.addAsyncFn( "autoShot", this.autoShot, robot.id );
}

Robot.prototype.autoShot        = function( ev ){
    var obj     = robots[ev.robot.id];
    if( obj.shots > 0 && ev.robot.gunCoolDownTime == 0 ){
        ev.robot.fire();
        obj.shots --;
    }
}

Robot.prototype.go          = function( ev ){
    if( robots[ev.robot.id].speed < 0 )
        ev.robot.back( robots[ev.robot.id].speed );
        
    if( robots[ev.robot.id].speed > 0 )
        ev.robot.ahead( robots[ev.robot.id].speed );
        
}

Robot.prototype.scan        = function( ev, cla ){
    var obj     = robots[ev.robot.id];
    
    obj.scanCount++;
    if( Math.floor( obj.scanCount / obj.startScanCount ) > 5 ){
        cla.pauseAsyncFn("aim", 1, ev.robot.id);
//    obj.aimPoint      = {
//          x   : ev.robot.arenaWidth / 2,
//          y   : ev.robot.arenaHeight / 2
//      };
        obj.toCannonAngle += obj.cannonSpeed;
    }else{
        var scanV   = obj.scanV;
        
        var addon   = obj.round % (scanV * 4 + 2);
        if( addon > scanV * 2 ){
            addon   = scanV * 3 - addon + 1;
        }else{
            addon   = addon - scanV;
        }
        
        obj.toCannonAngle   += addon;
    }
}

Robot.prototype.aim     = function( ev ){
    var robot   = ev.robot;
    var obj     = robots[robot.id];
    
    
    var angle   = Math.atan( ( ( robot.position.y - obj.aimPoint.y ) / ( Math.abs( robot.position.x - obj.aimPoint.x ) ) ) ) * 180 / Math.PI;
    if( robot.position.x < obj.aimPoint.x ){
        angle   = 180 - angle;
    }
    
    obj.toCannonAngle   = angle;
}


Robot.prototype.goAround        = function( ev, c ){
    var robot   = ev.robot;
    var obj     = robots[robot.id];
    pause   = true;
    var x   = robot.position.x;
    var y   = robot.position.y;
    var margin  = obj.margin;
    
    if( obj.speed > 0 ){
        if( x < margin && y < margin ){
            if( robot.angle == 0 ) obj.toAngle = 90;
            else if( robot.angle == 270 ) obj.toAngle = 180;
        }
        if( x > robot.arenaWidth - margin && y < margin ){
            if ( robot.angle == 90 ) obj.toAngle = 180;
            else if ( robot.angle == 0 ) obj.toAngle = 270;
        }
        if( x > robot.arenaWidth - margin && y > robot.arenaHeight - margin ){
            if ( robot.angle == 180 ) obj.toAngle = 270;
            else if ( robot.angle == 90 ) obj.toAngle = 0;
        }
        if( x < margin && y > robot.arenaHeight - margin ){
            if ( robot.angle == 270 ) obj.toAngle = 0;
            else if ( robot.angle == 180 ) obj.toAngle = 90;
        }
    }
    if( obj.speed < 0 ){
        if( x < margin && y < margin ){
            if( robot.angle == 180 ) obj.toAngle = 270;
            else if( robot.angle == 90 ) obj.toAngle = 0;
        }
        if( x > robot.arenaWidth - margin && y < margin ){
            if ( robot.angle == 270 ) obj.toAngle = 0;
            else if ( robot.angle == 180 ) obj.toAngle = 90;
        }
        if( x > robot.arenaWidth - margin && y > robot.arenaHeight - margin ){
            if ( robot.angle == 0 ) obj.toAngle = 90;
            else if ( robot.angle == 270 ) obj.toAngle = 180;
        }
        if( x < margin && y > robot.arenaHeight - margin ){
            if ( robot.angle == 90 ) obj.toAngle = 180;
            else if ( robot.angle == 0 ) obj.toAngle = 270;
        }
    }
}


Robot.prototype.asyncCannon = function( ev ){
    var robot   = ev.robot;
    var obj     = robots[robot.id];
    
    var diff    = robot.cannonAbsoluteAngle - ( obj.toCannonAngle % 360 );
    if( diff < -180 ) diff += 360;
    if( diff > 180 ) diff -= 360;
    
    if( Math.abs( diff ) < obj.cannonSpeed ){
        robot.rotateCannon( -diff );
    }else{
        if( diff < 0 ) robot.rotateCannon( obj.cannonSpeed );
        if( diff > 0 ) robot.rotateCannon( -obj.cannonSpeed );
    }
}

Robot.prototype.asyncTurn   = function( ev ){
    var robot   = ev.robot;
    var obj     = robots[robot.id];
    
    var diff    = robot.angle - ( obj.toAngle % 360 );
    if( diff < -180 ) diff += 360;
    if( diff > 180 ) diff -= 360;
    
    if( Math.abs( diff ) < obj.turnSpeed ){
        robot.turn( -diff );
        //robot.rotateCannon( diff );
    }else{
        if( diff < 0 ) {
            robot.turn( obj.turnSpeed );
            //robot.rotateCannon( -obj.turnSpeed );
        }
        if( diff > 0 ) {
            robot.turn( -obj.turnSpeed );
            //robot.rotateCannon( obj.turnSpeed );
        }
    }
}

Robot.prototype.pauseAsyncFn    = function( name, rounds, id ){
    if( typeof id == "undefined" ){
        for( i in robots ){
            this.pauseAsyncFn( name, rounds, i );
        }
    }else{
        robots[id].pauses[name] += rounds;
    }
}

Robot.prototype.addAsyncFn      = function( name, fn, id ){
    if( typeof id == "undefined" ){
        for( i in robots ){
            this.addAsyncFn( name, fn, i );
        }
    }else{
        robots[id].asyncFns[name]   = fn;
        robots[id].pauses[name]     = 0;
    }
}

Robot.prototype.removeAsyncFn   = function( name ){

}

Robot.prototype.onIdle = function(ev) {
    var robot   = ev.robot;
    if( typeof robots[robot.id] == "undefined" ){
        this.start( ev );
    }
    for( i in robots[robot.id].asyncFns ){
        ev.robot.log("Funkcja " + i + ": " + robots[robot.id].pauses[i] );
        if( robots[robot.id].pauses[i] <= 0 ){
            robots[robot.id].asyncFns[i](ev, this);
        }else{
            robots[robot.id].pauses[i]--;
        }
    }
    robots[robot.id].round++;
};


Robot.prototype.onScannedRobot = function(ev) {
    var robot   = ev.robot;
    var enemy   = ev.scannedRobot;
    if( enemy.id in robots ){
        robots[robot.id].shots = 0;
    }else{
        robot.stop();
        
        for( i in robots ){
            robots[i].scanCount = 0;
            robots[i].aimPoint  = enemy.position;
        }
        
        robots[robot.id].cannonSpeed    = robots[robot.id].startCannonSpeed;
        robots[robot.id].shots = 3;
        robot.fire();
    }
};

Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
    //this.pauseAsyncFn("asyncCannon", 2, robot.id);
};

Robot.prototype.onWallCollision = function(ev) {
    ev.robot.stop();
    var angle = ev.bearing + 90;
    if( robots[ev.robot.id].speed < 0 )
        ev.robot.ahead(15);
    else
        ev.robot.back(15);
    if( angle > 90 ) angle -= 180;
 
  robots[ev.robot.id].toAngle   = ev.robot.angle + angle;
  ev.robot.turn(angle);
  
  //ev.robot.rotateCannon(angle);
};

Robot.prototype.onRobotCollision = function(ev){
    robots[ev.robot.id].speed *= -1;
}