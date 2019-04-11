//storing doctor firebase data//

function prescription(){

    var db = firebase.firestore();
    
    
        var inputPatnum = document.getElementById("patnum_field").value;
        var inputDocnum = document.getElementById("docnum_field").value;
        var inputPatnum2 = document.getElementById("patnum2_field").value;
        var inputPatadd = document.getElementById("patadd_field").value;
        var inputPatsick = document.getElementById("patsick_field").value;
        var inputSum4 = document.getElementById("Sum4_field").value;
    
        db.collection("Patient").doc(inputPatnum).set({
      PatientNumber: inputPatnum,
      doctorNumber: inputDocnum,
      PatientNumber2: inputPatnum2,
      PatientAddress: inputPatadd,
      PatientSick: inputPatsick,
      description: inputSum4
    
    
    
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    }
    
    // navigation button//
        function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
    }
    
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("main").style.marginLeft= "0";
    }
