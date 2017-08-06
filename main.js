
	    

	   function addRow () {
	   	var item = document.getElementById("item").value ;
	    var price  = document.getElementById("price").value ;
        
	    var table = document.getElementsByTagName("table")[0] ;  
	    var newRow = table.insertRow(1) ; 
	    var cel1= newRow.insertCell(0) ;
	    var cel2= newRow.insertCell(1) ;

	    if ( item === ""  || price === "") {  
	    	alert (" Դատարկ չեն կարող լինել ") ;   
	      } ; 
	   
          document.getElementById("item").value = " " ;     
          document.getElementById("price").value = " " ;   

	    cel1.innerHTML = item  ;  
	    cel2.innerHTML = price ;  
 
}
    
 
  