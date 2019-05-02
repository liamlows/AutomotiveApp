'use strict';
var sql = require('./dbConn.js');

//Car object constructor
var Car = function(car) {
  this.MAKE = car.MAKE;
  this.MODEL = car.MODEL;
  this.YEAR = car.YEAR;
  this.avg_mileage = car.avg_mileage;
  this.current_mileage = car.current_mileage;
  this.created_at = new Date();
};

// add full car object to DB
Car.createCarByUID = function(id, newCar, result) {
  sql.query("INSERT INTO `AutomotiveApp`.`vehicles` (`u_id`, `MAKE`, `MODEL`, `YEAR`, `avg_mileage`, `current_mileage`) VALUES ('" + id + "', '" + newCar.MAKE + "', '" + newCar.MODEL + "', '" + newCar.YEAR + "', '" + newCar.avg_mileage + "', '" + newCar.current_mileage + "');",
    function(err, res) {
      if (err) {
        result({"code":204,"response":"MYSQL entry error."}, null);
      }
      else {
        result(null,{"code":200,"response":"Car creation was sucessfull."});
      }
    }
  );
};

// retrieve full car object from DB
Car.getCarByUID = function(id, result) {
  sql.query("SELECT * FROM `AutomotiveApp`.`vehicles` WHERE u_id = ?;",[id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate UID in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}

// delete full car object by car id
Car.deleteCarByCID = function(id, result){
  sql.query("DELETE FROM `AutomotiveApp`.`vehicles` WHERE c_id = ?;",[id],
    function(err, res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,{"code":200,"response":"Deleted CAR with CID="+id});
      }
    }
  );
}

// update entire car object all at once (think prefilled forms with what exists in the DB)
Car.updateCarByID = function(id, newCar, result) {
  sql.query("UPDATE `AutomotiveApp`.`vehicles` SET MAKE = ?, MODEL = ?, YEAR = ?, avg_mileage = ?, current_mileage = ? WHERE c_id = ?;", [newCar.MAKE, newCar.MODEL, newCar.YEAR, newCar.avg_mileage, newCar.current_mileage, id], function(err, res) {
    if (err) {
      result({"code":204,"response":"Could not locate id in table. ID="+id}, null);
    } else {
      result(null, res);
    }
  });
};

// updates only car's make by car id
Car.updateCarMakeByID = function(id, make, result) {
  sql.query("UPDATE `AutomotiveApp`.`vehicles` SET MAKE = ? WHERE c_id = ?;", [make, id], function(err, res) {
    if (err) {
      result({"code":204,"response":"Could not locate id in table. ID="+id}, null);
    } else {
      result(null, {"code":200,"response":"Updated CID "+id+" with MAKE="+make});
    }
  });
};

// updates only car's model by car id
Car.updateCarModelByID = function(id, model, result) {
  sql.query("UPDATE `AutomotiveApp`.`vehicles` SET MODEL = ? WHERE c_id = ?;", [model, id], function(err, res) {
    if (err) {
      result({"code":204,"response":"Could not locate id in table. ID="+id}, null);
    } else {
      result(null, {"code":200,"response":"Updated CID "+id+" with MODEL="+model});
    }
  });
};

// updates only car's year by car id
Car.updateCarYearByID = function(id, year, result) {
  sql.query("UPDATE `AutomotiveApp`.`vehicles` SET YEAR = ? WHERE c_id = ?;", [year, id], function(err, res) {
    if (err) {
      result({"code":204,"response":"Could not locate id in table. ID="+id}, null);
    } else {
      result(null, {"code":200,"response":"Updated CID "+id+" with YEAR="+year});
    }
  });
};

// updates only car's average mileage by car id
Car.updateCarAvgMileageByID = function(id, avg_mileage, result) {
  sql.query("UPDATE `AutomotiveApp`.`vehicles` SET avg_mileage = ? WHERE c_id = ?;", [avg_mileage, id], function(err, res) {
    if (err) {
      result({"code":204,"response":"Could not locate id in table. ID="+id}, null);
    } else {
      result(null, {"code":200,"response":"Updated CID "+id+" with avg_mileage="+avg_mileage});
    }
  });
};

// updates only car's current mileage by car id
Car.updateCarCurMileageByID = function(id, current_mileage, result) {
  sql.query("UPDATE `AutomotiveApp`.`vehicles` SET current_mileage = ? WHERE c_id = ?;", [current_mileage, id], function(err, res) {
    if (err) {
      result({"code":204,"response":"Could not locate id in table. ID="+id}, null);
    } else {
      result(null, {"code":200,"response":"Updated CID "+id+" with current_mileage="+current_mileage});
    }
  });
};
// updates only car's last oil mileage by car id
Car.updateCarMileageOilByID = function(id, miles_oil, result) {
  sql.query("UPDATE `AutomotiveApp`.`vehicles` SET miles_oil = ? WHERE c_id = ?;", [miles_oil, id], function(err, res) {
    if (err) {
      result({"code":204,"response":"Could not locate id in table. ID="+id}, null);
    } else {
      result(null, {"code":200,"response":"Updated CID "+id+" with miles_oil"+miles_oil});
    }
  });
};
// updates only car's last tire mileage by car id
Car.updateCarMileageTireByID = function(id, miles_tire, result) {
  sql.query("UPDATE `AutomotiveApp`.`vehicles` SET miles_tire = ? WHERE c_id = ?;", [miles_tire, id], function(err, res) {
    if (err) {
      result({"code":204,"response":"Could not locate id in table. ID="+id}, null);
    } else {
      result(null, {"code":200,"response":"Updated CID "+id+" with miles_tire="+miles_tire});
    }
  });
};
// updates only car's last maintenance mileage by car id
Car.updateCarMileageMainteByID = function(id, miles_maint, result) {
  sql.query("UPDATE `AutomotiveApp`.`vehicles` SET miles_maint = ? WHERE c_id = ?;", [miles_maint, id], function(err, res) {
    if (err) {
      result({"code":204,"response":"Could not locate id in table. ID="+id}, null);
    } else {
      result(null, {"code":200,"response":"Updated CID "+id+" with miles_maint="+miles_maint});
    }
  });
};

module.exports = Car;
