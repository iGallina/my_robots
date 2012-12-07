var Robot = function(robot){
    robot.turnLeft(robot.angle % 90);
};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot;
    var count = 0;

    if (robot.parentId) {
        robot.ahead(20);
        robot.turnGunRight(16.18);
        robot.turnRight(1.618);
    } else {
        robot.ahead(-20);
        robot.turnGunLeft(16.18);
        robot.turnleft(1.618);
    }


};
Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
    if(!robot.parentId) {
        robot.turnRight(ev.bearing - 90);
    }
    else {
        robot.turnRight(ev.bearing + 90);
    }
};
Robot.prototype.onRobotCollision = function(ev) {
    var robot = ev.robot, collidedRobot = ev.collidedRobot;
    robot.ignore('onRobotCollision')
    if (ev.bearing > -90 && ev.bearing < 90) {
        robot.back(100);
    } 
    else {
        robot.ahead(100);
    }

    if (robot.id != collidedRobot.parentId && robot.parentId != collidedRobot.id) {
        robot.turnGunRight(ev.bearing - robot.cannonRelativeAngle);
        robot.turnGunLeft(ev.bearing - robot.cannonRelativeAngle);
    }
    robot.listen('onRobotCollision')
};
Robot.prototype.onHitByBullet = function(ev) {
    var robot = ev.robot;
    robot.clone();
    robot.turn(45 - ev.bulletBearing);
    robot.ahead(-50);
    robot.turn(45 - ev.bulletBearing);
    robot.back(90);
};
Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot, scannedRobot = ev.scannedRobot;
    if (robot.id == scannedRobot.parentId || robot.parentId == scannedRobot.id) {
        return;
    }
    robot.fire();
    robot.turnGunRight(30);
};