$(document).ready(function() {     //Wenn HTML Dokument geladen ist, mach folgendes....

    var userListBody = $('.userList tbody');    //Array (table) mit den Usern im body

    //@todo store and somehow update the current number of users


    $('.needs-validation').submit(function(event) {

        event.preventDefault();
        /* tells the user agent that if the event does not get explicitly handled,
        its default action should not be taken as it normally would be.
        The event continues to propagate as usual, unless one of its event listeners
        calls stopPropagation() or stopImmediatePropagation(), either of which terminates propagation at once */
        event.stopPropagation();
        /* event.stopPropagation verhindert, dass ein Event im DOM-Baum nach oben reist und dabei Aktionen auf anderen Elementen triggert */

       if (this.checkValidity() === false) {       //Returns true if an input element contains valid data

            $(this).addClass('was-validated');      //Fügt der .needs-validation die Klasse .was-validated hinzu mit dem Wert, invalid

            return false;
        }

        //@todo
        //1. get values
        //2. create a new element
        //3. somehow add them to userListBody
        //4. update number of current users
        //5. clear entries from the form
        //6. maybe do something else... :-)

        //your code follows here

        var users = document.getElementById("username");
        var newUser = users.value;
        userListBody.push(newUser);     //neuen User dem Array hinzufügen
        var length = userListBody.length;   //Länge des Arrays auslesen

        var tabelle = document.getElementById("Liste_User");

        // Zahlen geben an an welcher Position die Reihe bzw .Zelle eingefügt wird
        var reihe = tabelle.insertRow(-1);  //neue Reihe hinzufügen, value of -1: which results in that the new will be inserted at the last position
        var zelle1 = reihe.insertCell(0);   // value of 0 results in that the new cell will be inserted at the first position
        var zelle2 = reihe.insertCell(1);
        var zelle3 = reihe.insertCell(2);

        zelle1.innerHTML = length;         //Länge des Arrays wiedergeben
        zelle2.innerHTML = newUser;         //neuen User hinzufügen
        //In der dritten Zelle soll sich der Löschen-Button befinden
        zelle3.innerHTML = "<button type=\"button\" class=\"btn btn-secondary btn-danger deleteTrigger\" title=\"delete\"><i class=\"fa fa-trash\"></i></button>";

        document.getElementById("Formular").reset();
        return false;
    });


    $('.deleteTrigger').click(function() {
        //@todo
        //1. remove current user from dom
        //2. update number of current users

        //your code follows here

        var tabelle = document.getElementById("Liste_User");
        var index = document.getElementById("position").value;
        var length = userListBody.length;
        var reihe = tabelle.deleteRow(length);

    });

    //maybe some code follows here

});