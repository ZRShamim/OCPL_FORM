var form = $("#advanced-form");
 
form.steps({
    headerTag: "h3",
    bodyTag: "fieldset",
    transitionEffect: "slideLeft",
    /*onStepChanging: function (event, currentIndex, newIndex)
    {
        // Allways allow previous action even if the current form is not valid!
        if (currentIndex > newIndex)
        {
            return true;
        }
        // Forbid next action on "Warning" step if the user is to young
        if (newIndex === 3 && Number($("#age-2").val()) < 18)
        {
            return false;
        }
        // Needed in some cases if the user went back (clean up)
        if (currentIndex < newIndex)
        {
            // To remove error styles
            form.find(".body:eq(" + newIndex + ") label.error").remove();
            form.find(".body:eq(" + newIndex + ") .error").removeClass("error");
        }
        form.validate().settings.ignore = ":disabled,:hidden";
        return form.valid();
    },
    onStepChanged: function (event, currentIndex, priorIndex)
    {
        // Used to skip the "Warning" step if the user is old enough.
        if (currentIndex === 2 && Number($("#age-2").val()) >= 18)
        {
            form.steps("next");
        }
        // Used to skip the "Warning" step if the user is old enough and wants to the previous step.
        if (currentIndex === 2 && priorIndex === 3)
        {
            form.steps("previous");
        }
    },*/
    onFinishing: function (event, currentIndex)
    {
        form.validate().settings.ignore = ":disabled";
        return form.valid();
    },
    onFinished: function (event, currentIndex)
    {
        alert("Submitted!");
    }
})

form.validate({
    errorPlacement: function errorPlacement(error, element) { element.before(error); },
    rules: {
        confirm: {
            required: true,
            equalTo: "#password-2"
        },
        fname: {
            required: true
        },
        lname: {
            required: true
        },
        email1: {
            email: true
        },
        mbl: {
            required: true
        },
        password: {
            required: true
        },
        fathername: {
            required: true
        },
        fathermbl: {
            required: true
        },
        mothername:{
            required: true
        },
        dateofbirth:{
            required: true
        }
    }
});
var $select1 = $( '#CDivision' ),
        $select2 = $( '#CDistrict' ),
            $select5 = $( '#Thana' ),
    $options = $select2.find( '#Current' );
    
$select1.on( 'change', function() {
    $select2.html( $options.filter( '[value="' + this.value + '"]' ) );
} ).trigger( 'change' );

var $select3 = $( '#PDivision' ),
		$select4 = $( '#PDistrict' ),
    $option = $select4.find( '#pdis' );
    
$select3.on( 'change', function() {
	$select4.html( $option.filter( '[value="' + this.value + '"]' ) );
} ).trigger( 'change' );

/*var $input = $('<button>Save As Draft</button>');

$input.appendTo($('ul[aria-label=Pagination]'));*/

$("#preview").on('click', function (e) {
    window.open("http://127.0.0.1:5500/preview.html", "_blank","width:500, height:500");
});

/*function getData(){
    var firstname=document.getElementById("fname").value;
    localStorage.setItem("#textvalue",firstname);
    return false;
}

document.getElementById("#prfname").innerHTML=localStorage.getItem("textvalue")*/
/*function getData()
{
    var x = document.getElementById("fname").value;
    document.getElementById("mname").innerHTML = x;
}*/

