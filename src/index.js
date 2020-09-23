import React from 'react';
import ReactDOM from 'react-dom';
import HTable from './containers/HTable';

const columns = [{
  label : "Dessert (100g serving)"
  ,id : "name"
  ,numeric : false
  ,disablePadding : true
  ,align : "center"
},{
  label : "Calories"
  ,id : "calories"
  ,numeric : true
  ,disablePadding : false
  ,align : "right"
},{
  label : "Fat(g)"
  ,id : "fat"
  ,numeric : true
  ,disablePadding : false
  ,align : "right"
},{
  label : "Carbs(g)"
  ,id : "carbs"
  ,numeric : true
  ,disablePadding : false
  ,align : "right"
},{
  label : "Protein(g)"
  ,id : "protein"
  ,numeric : true
  ,disablePadding : false
  ,align : "right"
}];

ReactDOM.render(
  <React.StrictMode>
    <HTable columns={columns} url="/table.json"/>
  </React.StrictMode>,
  document.getElementById('root')
);

