var Robot = function(robot){
  robot.turnLeft(robot.angle % 90);
  
};
var ini_pos_ant = [];

Robot.prototype.onIdle = function(ev) {
  var robot = ev.robot;
  if (robot.parentId) {
    robot.ahead(1.618);
    robot.turnGunRight(1.618);
  }
  else {
    robot.ahead(-1.618);
    robot.turnGunLeft(1.618);
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
  var robot;
  robot.clone()
  robot = ev.robot;
  if(init_pos_ant[0]/2 == [scannedRobot.x+scannedRobot.y]/2){
        robot.turn(45 + ev.bulletBearing);
      robot.ahead(50);
      robot.turn(45 + ev.bulletBearing);
      robot.back(-90);      
  }
  robot.turn(45 - ev.bulletBearing);
  robot.back(50);
  robot.turn(45 - ev.bulletBearing);
  robot.ahead(-90);
};

Robot.prototype.onScannedRobot = function(ev) {
  var robot = ev.robot, scannedRobot = ev.scannedRobot;
  robot.log();
  if (robot.id == scannedRobot.parentId || robot.parentId == scannedRobot.id) {
    return;
  }
  init_pos_ant = [scannedRobot.x+scannedRobot.y]
  robot.fire();
  if(init_pos_ant[0]/2 == [scannedRobot.x+scannedRobot.y]/2){
    robot.turnGunRight(36);
  }
  robot.turnGunRight(29.0301727992);
};