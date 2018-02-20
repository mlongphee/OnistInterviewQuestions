function ShowHideDiv() {
    var chkYes = document.getElementById("chkYes");
    var dvModule = document.getElementById("child_module");
    dvModule.style.display = chkYes.checked ? "block" : "none";
}

function ShowHideNewQuestion() {
    var btns = document.getElementById("btns");
    var btnSave = document.getElementById("secondQuestion");
    var dvModule = document.getElementsByClassName("Question2");
    if (allLetter(document.getElementById("firstName").value) && allLetter(document.getElementById("lastName").value)) {
        btns.style.display = "none";
        document.getElementById("child_module").className = "module-background3"
        btnSave.style.display = "block";
    }

}

//checks if textbox is either empyt or does not contain letters
function allLetter(inputtxt) {
    var letters = /^[A-Za-z]+$/;
    if (letters.test(inputtxt)) {
        return true;
    } else {
        alert('Please input alphabet characters only');
        return false;
    }
}

function CancelButton() {
    var dvModule = document.getElementById("child_module");
    var ele = document.getElementById("chkYes")
    ele.checked = false;
    dvModule.style.display = "none";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
}

//Removes the question and prevous module and shows the children module
function addAdditionChild() {
    document.getElementById("secondQuestion").style.display = "none";
    document.getElementById("child_module").style.display = "none";
    document.getElementById("children_module").style.display = "block";
    document.getElementById("chkYes2").checked = false;
    document.getElementById("btns2").style.display = "block";
}


$(document).ready(function() {
    var childCount = 1; //keeps count of addition child elements
    if (childCount < 20) { //Stops the amount of child elements to be made to 20
        $('#chkYes2').click(function() {
            childCount++;
            //adds child element to module
            $('#children_module').append('<div class="section-background-highlighted" id="child' + childCount + '"><section class="additionalChild"><div class="remove_first" id="one"><p class="section-title">' + stringifyNumber(childCount) + ' Child</p><p class="remove-label" id="remove">Remove</p></div><div id="two"><form name="childform' + childCount + '""><div class="firstname_fieldBlock"><p class="text-label">First Name*</p><input type="text" id="firstName' + childCount + '" class="field"></div><div class="lastname_fieldBlock"><p class="text-label">Last Name*</p><input type="text" id="lastName' + childCount + '" class="field"></div></form></div></section></div>');
            document.getElementById("firstName1").value = document.getElementById("firstName").value;
            document.getElementById("lastName1").value = document.getElementById("lastName").value;
        });

    } else {
        throw "Cannot enter more than 20 Children";
    }

    $(document).on('click','#save2', function() {
        var j = childCount;
        //checks to see if the new elements textbox is propely filled out
        // TODO: handle case to check if the prevoiusly saved child elements textboxs have not been tampered with
        while(j > 0){
          if(allLetter(document.getElementById("firstName"+j).value) && allLetter(document.getElementById("lastName"+j).value)){
            document.getElementById('child' + childCount).className = "module-background4";
            document.getElementById("btns2").style.display = "none";
            document.getElementById("secondQuestion").style.display = "block";
          }
          j--;
          break;
        }

    });

    $('#chkNo').click(function() {
        // Loops through all the addiotional Childern elements and removes them
        for (j = childCount; j > 1; j--) {
            $('#child' + j + '').remove();
            childCount--;
        }

        var dvModule = document.getElementById("children_module");
        var ele = document.getElementById("chkYes")
        ele.checked = false;
        dvModule.style.display = "none";
        document.getElementById("btns").style.display = "block";
        document.getElementById("child_module").className = "module-background"
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
        document.getElementById("secondQuestion").style.display = "none";
        document.getElementById("chkNo2").checked = false;

    });
    //When Children moudle cancel button is click removes the new child element and shows next question
    $('#cancel2').click(function() {
        var btns = document.getElementById("btns2");
        btns.style.display = "none";
        document.getElementById("secondQuestion").style.display = "block";
        $('#child' + childCount + '').remove();
        childCount--;

    });
//When the removed button is clicked removes that child element
// TODO: handle case when user removes child element inbetween two numbers
    $('#remove').click(function() {
        var button_id = $(this).attr('id');
        $('#child' +  childCount).remove();

    });


});
