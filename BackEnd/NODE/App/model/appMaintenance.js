'use strict';
var sql = require('./dbConn.js');

//Maintenance object constructor
var Maintenance = function(maintenance) {
  this.type = maintenance.type;
  this.last_mileage= maintenance.last_mileage;
  this.date_serviced = maintenance.date_serviced;
  this.cost = maintenance.cost;
  this.description = maintenance.description;
};

Maintenance.createMaint = function(id, newMaint, result) {
  //call query
  sql.query("INSERT INTO `AutomotiveApp`.`maintenance` (`c_id`, `type`, `last_mileage`, `date_serviced`, `cost`, `description`) VALUES ('" + id + "', '" + newMaint.type + "', '" + newMaint.last_mileage + "', '" + newMaint.date_serviced + "', '" + newMaint.cost + "', '" + newMaint.description + "');",
    function(err, res) {
      //if invalid query, send error to user
      if (err) {
        if (err.errno == 1216){
          result({"code":204,"response":"Could not locate id in vehicles table."}, null);
        }
        else{
          result({"code":204,"response":"MYSQL entry error, please refer to SYS ADMIN."}, null);
        }
      }
      // if valid response, send response to user
      else {
        result(null,{"code":200,"response":"Car creation was sucessfull."});
      }
    }
  );
};

Maintenance.updateMaintCID = function(id, type, last_mileage, date_serviced, cost, description) {
  sql.query("UPDATE `AutomotiveApp`.`maintenance` SET type = ?, last_mileage = ?, date_serviced = ?, cost = ?, description = ? WHERE c_id = ?;",[type, last_mileage, date_serviced, cost, description, id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}


//GET Maintenance by maint id. User has option to store multiple m_id for each car
Maintenance.getMaintCID = function(id, result) {
  sql.query("SELECT * FROM `AutomotiveApp`.`maintenance` WHERE c_id = ?;",[id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}

Maintenance.updateTypeCID = function(id, type) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET type = ? WHERE c_id = ?;",[type,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}

Maintenance.updateLastMileageCarCID = function(id, last_mile_car) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET last_mileage = ? WHERE c_id = ?;",[last_mileage,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}


Maintenance.updateDateServicedCID = function(id, date_serviced) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET date_serviced = ? WHERE c_id = ?;",[date_serviced,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}


Maintenance.updateCostCID = function(id, cost) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET cost = ? WHERE c_id = ?;",[cost,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}


Maintenance.updateDescriptionCID = function(id, description) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET description = ? WHERE c_id = ?;",[description,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}

Maintenance.deleteMaintCID = function(id, result){
sql.query("DELETE FROM `AutomotiveApp`.`maintenance` WHERE c_id = ?;",[id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
}

module.exports = Maintenance;
