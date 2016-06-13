//====================backend========================
function Destination (name, landmark, time, notes) {
  this.name = name;
  this.landmark = landmark;
  this.time = time;
  this.notes = notes;
}

//====================frontend=======================
$(function() {
 $("form#places").submit(function(event){
   event.preventDefault();
   var name = $("input#name").val();
   var landmark = $("input#landmark").val();
   var time = $("input#time").val();
   var notes = $("input#notes").val();
   var destination = new Destination(name,landmark,time,notes);

  //  console.log(destination.name);
   $("ul#output").append("<li><span class='destination'>" + destination.name  + "</span></li>");

   $(".destination").last().click(function(){
    //  console.log('show');
     $(".output").show();
     $(".output h1").text(destination.name);
     $(".output .name").text(destination.name);
     $(".output .landmark").text(destination.landmark);
     $(".output .time").text(destination.time);
     $(".output .notes").text(destination.notes);
   });

   $("input#name").val('');
   $("input#landmark").val('');
   $("input#time").val('');
   $("input#notes").val('');
 });
});
