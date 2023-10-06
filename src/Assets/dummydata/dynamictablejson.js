export const tablesdata= {
    "Chemicals and Gases":{
        column:["S.No","Date of Invoice","Name of the Chemical/Gas","Quantity"],
        row:["index","invoice_date","chemical_name","quantity"],
        apikey:"Chemicals and Gases",
    },
    "Goods and Services":{
        column:["S.No","Date of Invoice","Name of the Goods/Services","Quantity"],
        row:["index","invoice_date","good_name","quantity"],
        apikey:"Goods and Services"
    },
    "Inbound Transport":{
        column:["S.No","Date of Waybill","Place of Origin","Place of Delivery","Mode of Transport","Type of Fuel","Distance Covered"],
        row:["index","waybill_date","origin_place","delivery_place","transport_mode","fuel_type","covered_distance","unit"]
    },
    "SuppilerElectricityConsumption":{
        column:["S.No","Type of Fuel","Qunatity of fuel consumed"],
        row:["index","fuel_type","quantity"],
        // apikey:"Supplier Fuel Consumption"

    },
    "Buyer Fuel Consumption":{
        column:["S.No","Type of Fuel","Qunatity of fuel consumed"],
        row:["index","fuel_type","quantity"]
    },
    "BuyerElectricity Consumption":{
        column:["S.No","Name of Electricity Board","Electricity Consumed"],
        row:["index","electricity_board","electricity_consumed"]
    },
    "Outbound Transport":{
        column:["S.No","Date of Waybill ","Place of Origin","Place of Delivery","Mode of Transport","Type of Fuel","Distance Covered"],
        row:["index","waybill_date","origin_place","delivery_place","transport_mode","fuel_type","covered_distance"]
    },
    "Business Travel":{
        column:["S.No","Date of Travel ","Departure Place","Arrival Place","Mode of Transport","Type of Fuel","Distance Covered"],
        row:["index","travel_date","departure_place","arrival_place","transport_mode","fuel_type","covered_distance","unit"]
    },
    "Employee Commuting":{
        column:["S.No","Name of the Employee","Mode of Transport","Type of Fuel","Distance Travelled per day","No. of Working Days"],
        row:["index","employee_name","transport_mode","fuel_type","distance_travelled_day","working_days","unit"]
    },
    "Warehouse Fuel Consumption":{
        column:["S.No","Name of Warehouse","Location","Fuel Type","Qty of Fuel Consumed"],
        row:["index","warehouse_name","location","fuel_type","fuel_consumed_qty","unit"],
        // apikey:"wfc-table"

    },
    "WarehouseElectricityConsumption":{
        column:["S.No","Name of Warehouse","Location","Fuel Type","Qty of Fuel Consumed"],
        row:["index","warehouse_name","location","fuel_type","fuel_consumed_qty","unit"],
        // apikey:"wec-table"

    },
    "SupplierLeased or Rented Assets":{
        column:["S.No","Name of the Leased/Rented Asset","Source of Energy","Quantity of Consumed Energy"],
        row:["index","leased_name","energy_source_required","quantity_sold"],
        apikey:"lease_rent"
    },
    "Buyer Leased or Rented Assets":{
        column:["S.No","Name of the Leased/Rented Asset","Source of Energy","Quantity of Consumed Energy"],
        row:["index","leased_name","energy_source_required","quantity_sold"],
        apikey:"buy_lease_rent"
    },
    "Waste Materials":{
        column:["S.No","Name of the Raw Material","Type of Raw Material","Waste Management Technique","Qty of Fuel Consumed"],
        row:["index","subsidiaries_name","location","fuel_type","fuel_consumed_qty"],
        apikey:"waste-material"
    },
    "Subsidiary Fuel Consumption":{
        column:["S.No","Name of Subsidiary","Location","Type of Fuel","Qunatity of fuel consumed"],
        row:["index","subsidiary_name","location","fuel_type","quantity"],
        apikey:"subsidiary-fuel-consumption"
    },
    "SubsidiaryElectricityConsumption":{
        column:["S.No","Name of Subsidiary","Location","Type of Fuel","Qunatity of fuel consumed"],
        row:["index","subsidiary_name","location","fuel_type","quantity"],
        apikey:'subsidiary-Electric-consumption'
    },
    "Use of Sold Product":{
        column:["S.No","Name of Sold Product","Quantity Sold","Source of Energy Required","Amount of Energy Required","Average Runtime per Day","Lifespan of the Product"],
        row:["index","sold_product_name","quantity_sold","energy_source_required","amount_energy_required","average_runtime","product_lifespan"],
        apikey:"sold-product"
    },
    "FranchiseElectricityConsumption":{
        column:["S.No","Name of Subsidiary","Location","Type of Fuel","Quantity of fuel consumed"],
        row:["index","subsidiary_name","location","fuel_type","quantity"],
        apikey:"fec"
    },
    "Raw Materials":{
        column:["S.No","Date of Invoice","Name of the Raw Material","Type of Raw Material","Quantity"],
        row:["index","invoice_date","material_name","material_type","quantity"]
  },
    "FranchiseFuelConsumption":{
          column:["S.No","Name of Subsidiary","Location","Type of Fuel","Quantity of fuel consumed"],
        row:["index","subsidiary_name","location","fuel_type","quantity"],
        apikey:"ffc"
    },
    "Supplier Fuel Consumption":{
        column:["S.No","Type of Fuel","Qunatity of fuel consumed"],
      row:["index","fuel_type","quantity"],
      apikey:"Sfc"
  }

}