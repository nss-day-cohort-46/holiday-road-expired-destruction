export function geeks(msg, gfg) { 
    var confirmBox = $("#container"); 
      
    /* Trace message to display */
    confirmBox.find(".message").text(msg); 
    console.log(find(".message"))
      
    /* Calling function */
    confirmBox.find(".yes").unbind().click(function()  
    { 
       confirmBox.hide(); 
    }); 
    confirmBox.find(".yes").click(gfg); 
    confirmBox.show(); 
 } 