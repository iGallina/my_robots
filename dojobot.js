//FightCode can only understand your robot
//if its class is called Robot
var Robot = function(robot) { 
  this.state = 'procurando';
};

Robot.prototype.onIdle = function(ev) {
    
    var robot = ev.robot; 
    
    //robot.clone();
  
    if(this.state=='procurando'){
      robot.rotateCannon(30);
      robot.fire(2); 
    } 
    else if (this.state=='quicando') {
      var divide = 5;  
      var p1 = (0.0+this.angulo_carro)/divide;
      var p2 = (0.0+this.angulo_arma)/divide;
      robot.turn(p1); 
          robot.rotateCannon(p2); 
            this.angulo_carro_virado += p1;
          this.angulo_arma_virado += p2;
      if(Math.abs(this.angulo_carro)<=Math.abs(this.angulo_carro_virado)){
        this.state = 'procurando';
      }
    }
    else{
        robot.rotateCannon(-30);
      this.state='procurando';
    } 
  
    robot.ahead(20);
      


    //robot.ahead(30);
     //robot.turn(30);
    //robot.rotateCannon(30); 
    //robot.back(100);
    //robot.rotateCannon(360);
    //robot.clone();
 
};



Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    this.state = 'frau';
    robot.fire(2); 
        //robot.rotateCannon(10); 
};

Robot.prototype.onHitByBullet = function(ev) {
    var robot;
    robot = ev.robot;
    
      //robot.ahead(30);
    //robot.turn(90 - ev.bulletBearing);
};

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;
  //robot.turn(180-ev.bearing);
  //robot.rotateCannon(ev.bearing) 
  if (this.state != 'quicando') {
      var angulo;
        if(ev.bearing>0)
        angulo = -180+2*ev.bearing;
         else 
        angulo = +180+2*ev.bearing;
  
        this.state = 'quicando';
        this.angulo_carro = angulo;
      this.angulo_arma = -angulo;
      this.angulo_carro_virado = 0.0; 
    this.angulo_arma_virado = 0.0;
    
      robot.log(this.angulo_carro);
     
  }
  
};
  