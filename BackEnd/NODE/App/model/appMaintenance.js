'use strict';
var sql = require('./dbConn.js');

// This is the query file for handling the API requests for the maintenance table
// The associated file which controls this file is appControllerMaintenance.js

// Maintenance object constructor
var Maintenance = function(maintenance) {
  this.type = maintenance.type;
  this.last_mileage= maintenance.last_mileage;
  this.date_serviced = maintenance.date_serviced;
  this.cost = maintenance.cost;
  this.description = maintenance.description;
};
// Create maintenance record by car id
Maintenance.createMaint = function(id, newMaint, result) {
  sql.query("INSERT INTO `AutomotiveApp`.`maintenance` (`c_id`, `type`, `last_mileage`, `date_serviced`, `cost`, `description`) VALUES ('" + id + "', '" + newMaint.type + "', '" + newMaint.last_mileage + "', '" + newMaint.date_serviced + "', '" + newMaint.cost + "', '" + newMaint.description + "');",
    function(err, res) {
      if (err) {
        if (err.errno == 1216){
          result({"code":204,"response":"Could not locate id in vehicles table."}, null);
        }
        else{
          result({"code":204,"response":"MYSQL entry error, please refer to SYS ADMIN."}, null);
        }
      }
      else {
        result(null,res);
      }
    }
  );
};
// Get maintenance record by car id
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
};
// Delete maintenance record by maintenance id
Maintenance.deleteMaintMID = function(id, result){
sql.query("DELETE FROM `AutomotiveApp`.`maintenance` WHERE m_id = ?;",[id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
};
// Delete maintenance record by car id
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
};
// Update maintenance record (entirely)
Maintenance.updateMaintMID = function(id, type, last_mileage, date_serviced, cost, description, result) {
  sql.query("UPDATE `AutomotiveApp`.`maintenance` SET type = ?, last_mileage = ?, date_serviced = ?, cost = ?, description = ? WHERE m_id = ?;",[type, last_mileage, date_serviced, cost, description, id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
};
// Update maintenance type
Maintenance.updateTypeMID = function(id, type, result) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET type = ? WHERE m_id = ?;",[type,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
};
// Update maintenance mileage
Maintenance.updateLastMileageCarMID = function(id, last_mileage, result) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET last_mileage = ? WHERE m_id = ?;",[last_mileage,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
};
// Update maintenance service date
Maintenance.updateDateServicedMID = function(id, date_serviced, result) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET date_serviced = ? WHERE m_id = ?;",[date_serviced,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
};
// Update maintenance cost
Maintenance.updateCostMID = function(id, cost, result) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET cost = ? WHERE m_id = ?;",[cost,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
};
// Update maintenance description
Maintenance.updateDescriptionMID = function(id, description, result) {
  sql.query("UPDATE FROM `AutomotiveApp`.`maintenance` SET description = ? WHERE m_id = ?;",[description,id],
    function(err,res){
      if(err){
        result({"code":204,"response":"Could not locate id in table. ID="+id},null);
      }
      else {
        result(null,res);
      }
    }
  );
};

module.exports = Maintenance;
