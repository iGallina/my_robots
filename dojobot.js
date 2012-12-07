var Robot = function(robot) { 
    this.state = 'procurando';
};

Robot.prototype.onIdle = function(ev) {
    var robot = ev.robot; 

    if(this.state=='procurando'){
        robot.rotateCannon(30);
        robot.fire(2); 
    } else if (this.state == 'quicando' ) {
        var divide = 5;  
        var p1 = (0.0+this.angulo_carro)/divide;
        var p2 = (0.0+this.angulo_arma)/divide;
        robot.turn(p1); 
        robot.rotateCannon(p2); 
        this.angulo_carro_virado += p1;
        this.angulo_arma_virado += p2;
        if (Math.abs(this.angulo_carro) <= Math.abs(this.angulo_carro_virado)) {
            this.state = 'procurando';
        }
    } else {
        robot.rotateCannon(-30);
        this.state='procurando';
    } 
    robot.ahead(20);
};



Robot.prototype.onScannedRobot = function(ev) {
    var robot = ev.robot;
    this.state = 'frau';
    robot.fire(2); 
};

Robot.prototype.onHitByBullet = function(ev) {
    var robot;
    robot = ev.robot;
};

Robot.prototype.onWallCollision = function(ev) {
    var robot = ev.robot;

    if (this.state != 'quicando') {
        var angulo;
        if (ev.bearing>0) {
            angulo = -180+2*ev.bearing;
        } else {
            angulo = +180+2*ev.bearing;
        }

        this.state = 'quicando';
        this.angulo_carro = angulo;
        this.angulo_arma = -angulo;
        this.angulo_carro_virado = 0.0; 
        this.angulo_arma_virado = 0.0;

        robot.log(this.angulo_carro); 
    }
};
