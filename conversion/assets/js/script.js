function CalculateUnit() {
    "use strict";


    var form = $( "#myform" );
    
   
    if (form.valid()) {
        
     
        var FromValue = document.getElementById("FromValue").value;

        
        var FromUnit;
       if (document.getElementById("fcoperator").checked) {
            FromUnit =document.getElementById("fcoperator").value;
        }
        if (document.getElementById("fmoperator").checked) {
             FromUnit = document.getElementById("fmoperator").value;
        }
        if (document.getElementById("fkoperator").checked) {
             FromUnit = document.getElementById("fkoperator").value;
        }
        if (document.getElementById("fioperator").checked) {
             FromUnit = document.getElementById("fioperator").value;
        }
        
        if (document.getElementById("ffoperator").checked) {
            FromUnit = document.getElementById("ffoperator").value;
        }
        if (document.getElementById("fyoperator").checked) {
            FromUnit = document.getElementById("fyoperator").value;
        }
         
        if (document.getElementById("fm2operator").checked) {
            FromUnit = document.getElementById("fm2operator").value;
        }
         
       
       
        
        var ToUnit;
         if (document.getElementById("tcoperator").checked) {
            ToUnit = document.getElementById("tmoperator").value;
        }
         
         if (document.getElementById("tmoperator").checked) {
            ToUnit = document.getElementById("tmoperator").value;
        }
         
        if (document.getElementById("tkoperator").checked) {
            ToUnit = document.getElementById("tkoperator").value;
        }
         
        if (document.getElementById("tioperator").checked) {
            ToUnit = document.getElementById("tioperator").value;
        }
         
        if (document.getElementById("tfoperator").checked) {
            ToUnit = document.getElementById("tfoperator").value;
        }
         
        if (document.getElementById("tyoperator").checked) {
           ToUnit = document.getElementById("tyoperator").value;
        }
        
        if (document.getElementById("tm2operator").checked) {
            ToUnit = document.getElementById("tm2operator").value;
        }
 
        var myURL = "https://brucebauer.info/assets/ITEC3650/unitsconversion.php";
        var myMethod = "POST";

        
        var myData = {};
        myData.FromValue = FromValue;
        myData.FromUnit = FromUnit;
        myData.ToUnit = ToUnit;
        
      
        $(document).ready(function() {

            
            $.ajax({
              method: myMethod,
              data: myData,
              url: myURL
            })

           
            .done(function( msg ) {
                document.getElementById("ToValue").innerHTML = msg;
            });
        });
    }
}

function clearform() {
    "use strict";
    
    
    document.getElementById("FromValue").value = "";
    document.getElementById("FromValueMsg").innerHTML = "";
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("fcoperator").checked = false;
    document.getElementById("fmoperator").checked = false;
    document.getElementById("fkoperator").checked = false;
    document.getElementById("fioperator").checked = false;
    document.getElementById("ffoperator").checked = false;
    document.getElementById("fyoperator").checked = false;
    document.getElementById("fm2operator").checked = false;
    document.getElementById("FromUnitMsg").innerHTML = "";
    document.getElementById("tcoperator").checked = false;
    document.getElementById("tmoperator").checked = false;
    document.getElementById("tkoperator").checked = false;
    document.getElementById("tioperator").checked = false;
    document.getElementById("tfoperator").checked = false;
    document.getElementById("tyoperator").checked = false;
    document.getElementById("tm2operator").checked = false;
    document.getElementById("ToUnitMsg").innerHTML = "";
    document.getElementById("ToValue").innerHTML = "";
}

$("#myform") .validate({
    
});
