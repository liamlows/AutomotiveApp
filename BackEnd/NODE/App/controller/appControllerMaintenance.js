'use strict';
var Maintenance = require('../model/appMaintenance.js');

// #####  Maintenance Section  #####
exports.add_maint = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }

  var new_maint = new Maintenance(req.body);
  // handles empty input
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

exports.update_maint = function(req,res){

    if(!req.params.id|| !req.body.type || !req.body.last_mileage || !req.body.date_serviced || !req.body.cost || !req.body.description){
        res.status(400).json({
            "code": 400,
            "response":"Missing some of attributes!"
        });
    }
    else{
        Maintenance.updateMaintCID(req.params.id,req.body.type,req.body.last_mileage,req.body.date_serviced,req.body.cost, req.body.description, function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};

exports.get_maint = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
  }
  else{
    Maintenance.getMaintByCID(req.params.id, function(err,resp){
      if(err){
        res.send(err);
      }
      else {
        res.json(resp);
      }
    });
  }
};

exports.update_type = function(req,res){

    if(!req.params.id|| !req.body.type){
        res.status(400).json({
            "code": 400,
            "response":"Missing type or id"
        });
    }
    else{
        Maintenance.updateTypeCID( req.params.id, req.body.type, function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};


exports.update_last_mileage = function(req,res){

    if(!req.params.id|| !req.body.last_mileage){
        res.status(400).json({
            "code": 400,
            "response":"Missing type or id"
        });
    }
    else{
    // if input is provided, create shop
        Maintenance.updateLastMileageCarCID( req.params.id, req.body.last_mileage, function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};

exports.update_date_serviced = function(req,res){

    if(!req.params.id || !req.body.date_serviced){
        res.status(400).json({
            "code": 400,
            "response":"Missing type or id"
        });
    }
    else{
    // if input is provided, create shop
        Maintenance.updateDateServicedCID( req.params.id,req.body.date_serviced,function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};

exports.update_cost = function(req,res){

    if(!req.params.id|| !req.body.cost){
        res.status(400).json({
            "code": 400,
            "response":"Missing type or id"
        });
    }
    else{
    // if input is provided, create shop
        Maintenance.updateCostCID(req.params.id,req.body.cost,function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};


exports.update_description = function(req,res){

    if(!req.params.id|| !req.body.description){
        res.status(400).json({
            "code": 400,
            "response":"Missing type or id"
        });
    }
    else{
    // if input is provided, create shop
        Maintenance.updateDescriptionCID(req.params.id,req.body.description,function(err,user){
            if (err){
                res.send(err);
            }
            else{
                res.json(user);
            }
        });
    }
};


exports.delete_maint = function(req,res){
  // handle missing ID
  if(!req.params.id){
    res.status(400).json({
      "code": 400,
      "response":"Missing ID in API request."
    });
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
// ##########################