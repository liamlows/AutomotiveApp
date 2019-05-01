'use strict';
var Maintenance = require('../model/appMaintenance.js');

// Add maintenance record by car ID
exports.add_maint = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({"code": 400,"response":"Missing ID in API request."});
  }

  var new_maint = new Maintenance(req.body);

  if (!new_maint.type || !new_maint.last_mileage || !new_maint.date_serviced || !new_maint.cost || !new_maint.description ){
    res.status(400).json({
      "code": 400,
      "response":"Please provide input for all fields.(last_mile_car/date_serviced/cost/description)"
    });
  }
  else{
    Maintenance.createMaint(req.params.id, new_maint, function(err,user){
      if(err){
        res.send(err);
      }
      else {
        res.json(user);
      }
    });
  }
};
// Get maintenance record by car ID
exports.get_maint = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({"code": 400,"response":"Missing ID in API request."});
  }
  else{
    Maintenance.getMaintCID(req.params.id, function(err,resp){
      if(err){
        res.send(err);
      }
      else {
        res.json(resp);
      }
    });
  }
};
// Delete maintenance record by maintenance ID
exports.delete_maint_MID = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({"code": 400,"response":"Missing ID in API request."});
  }
  else{
    Maintenance.deleteMaintMID(req.params.id, function(err,resp){
      if(err){
        res.send(err);
      }
      else {
        res.json(resp);
      }
    });
  }
};
// Delete maintenance record by maintenance ID
exports.delete_maint_CID = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({"code": 400,"response":"Missing ID in API request."});
  }
  else{
    Maintenance.deleteMaintCID(req.params.id, function(err,resp){
      if(err){
        res.send(err);
      }
      else {
        res.json(resp);
      }
    });
  }
};
// Update maintenance record by maintenance ID
exports.update_maint = function(req,res){
  // handle missing ID
  if(!req.params.id || !req.body.type || !req.body.last_mileage || !req.body.date_serviced || !req.body.cost || !req.body.description){
    res.status(400).json({"code": 400,"response":"Missing some of attributes!"});
  }
  else{
    Maintenance.updateMaintMID(req.params.id,req.body.type,req.body.last_mileage,req.body.date_serviced,req.body.cost, req.body.description, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update maintenance type by maintenance ID
exports.update_type = function(req,res){
  // handle missing ID
  if(!req.params.id || !req.body.type){
    res.status(400).json({"code": 400,"response":"Missing ID."});
  }
  else if(!req.body.type){
    res.status(400).json({"code": 400,"response":"Missing type."});
  }
  else{
    Maintenance.updateTypeMID(req.params.id, req.body.type, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update maintenance last mileage by maintenance ID
exports.update_last_mileage = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({"code": 400,"response":"Missing ID."});
  }
  else if(!req.body.last_mileage){
    res.status(400).json({"code": 400,"response":"Missing last mileage."});
  }
  else{
    Maintenance.updateLastMileageCarMID(req.params.id, req.body.last_mileage, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update maintenance date serviced by maintenance ID
exports.update_date_serviced = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({"code": 400,"response":"Missing ID."});
  }
  else if(!req.body.date_serviced){
    res.status(400).json({"code": 400,"response":"Missing date serviced."});
  }
  else{
    Maintenance.updateDateServicedMID(req.params.id, req.body.date_serviced, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update maintenance cost by maintenance ID
exports.update_cost = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({"code": 400,"response":"Missing ID."});
  }
  else if(!req.body.cost){
    res.status(400).json({"code": 400,"response":"Missing cost."});
  }
  else{
    Maintenance.updateCostMID(req.params.id, req.body.cost, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
// Update maintenance description by maintenance ID
exports.update_description = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({"code": 400,"response":"Missing ID."});
  }
  else{
    Maintenance.updateDescriptionMID(req.params.id, req.body.description, function(err,user){
      if (err){
        res.send(err);
      }
      else{
        res.json(user);
      }
    });
  }
};
