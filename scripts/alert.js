export function geeks(msg, gfg) { 
    var confirmBox = document.querySelector("#container"); 
      
    /* Trace message to display */
    const confirm1 = confirmBox.find(".message").text(msg); 
      console.log(confirm1)
    /* Calling function */
    confirmBox.find(".yes").unbind().click(function()  
    { 
    confirmBox.hide(); 
    }); 
    confirmBox.find(".yes").click(gfg); 
    confirmBox.show(); 
      
    confirmBox.find(".no").unbind().click(function()  
    { 
    confirmBox.hide(); 
    }); 
    confirmBox.find(".no").click(gfg); 
    confirmBox.show(); 
} 