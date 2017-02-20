var turn=1;
$( document ).ready(function() {
    
    $("img.w").draggable(
            {
              revert: "invalid", // when not dropped, the item will revert back to its initial position
              grid: [ 70, 70 ],
        //        containment:"#bord-table"
            }
            ); 
//    $(".black-block").droppable({
//      accept: "img"     
//    });
    
//    for king
    $(".king").on('mouseenter mousedown',(function(){
        var id=$(this).attr("id");
        
        var row_index = $(this).parent().parent().index();
        var col_index = $(this).parent().index();
        for(var i=-1;i<2;i++){
            for(var j=-1;j<2;j++){
                
                if((row_index+i)<0|(col_index+j)<0){
                    continue;
                }
                b_radar($('#bord-table tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+j) + ')'),id);
            }
        }
        
    }));
    
//    for pown
    $(".pown").on('mouseenter mousedown',(function(){
        var id=$(this).attr("id")

        var row_index = $(this).parent().parent().index();
        var col_index = $(this).parent().index();
        

        if(id=="b"){              
            if(row_index==1){
                p_radar($('#bord-table tr:eq(' + (row_index+2) + ') td:eq(' + (col_index) + ')'),id);
            
            }
            p_radar($('#bord-table tr:eq(' + (row_index+1) + ') td:eq(' + (col_index) + ')'),id);
            var l_cell=$('#bord-table tr:eq(' + (row_index+1) + ') td:eq(' + (col_index-1) + ')').children().attr("id");
            if(l_cell!=null & ((row_index+1)>=0&(col_index-1)>=0&(col_index-1)<8)){
                 b_radar($('#bord-table tr:eq(' + (row_index+1) + ') td:eq(' + (col_index-1) + ')'),id);           
            }
            var r_cell=$('#bord-table tr:eq(' + (row_index+1) + ') td:eq(' + (col_index+1) + ')').children().attr("id");
            if(r_cell!=null & ((row_index+1)>=0&(col_index+1)>=0&(col_index+1)<8)){
                 b_radar($('#bord-table tr:eq(' + (row_index+1) + ') td:eq(' + (col_index+1) + ')'),id);           
            }
            
        }else{
            if(row_index==6){
                p_radar($('#bord-table tr:eq(' + (row_index-2) + ') td:eq(' + (col_index) + ')'),id);
            
            }
            p_radar($('#bord-table tr:eq(' + (row_index-1) + ') td:eq(' + (col_index) + ')'),id);
            var l_cell=$('#bord-table tr:eq(' + (row_index-1) + ') td:eq(' + (col_index-1) + ')').children().attr("id");
            if(l_cell!=null & ((row_index-1)>=0&(col_index-1)>=0&(col_index-1)<8)){
                 b_radar($('#bord-table tr:eq(' + (row_index-1) + ') td:eq(' + (col_index-1) + ')'),id);           
            }
            var r_cell=$('#bord-table tr:eq(' + (row_index-1) + ') td:eq(' + (col_index+1) + ')').children().attr("id");
            if(r_cell!=null & ((row_index-1)>=0&(col_index+1)>=0&(col_index+1)<8)){
                 b_radar($('#bord-table tr:eq(' + (row_index-1) + ') td:eq(' + (col_index+1) + ')'),id);           
            }
        }
       // console.log(row_index+x);
//        for(var i=-1;i<2;i++){
//            if((row_index)<0|(col_index)<0|(col_index)>=8){
//                continue;
//            }
//            console.log(i,' ',x);
//            b_radar($('#bord-table tr:eq(' + (row_index+x) + ') td:eq(' + (col_index+i) + ')'),id);
//
//        }
        
    }));
    
    //for rook and queen
     $(".rook, .queen").on('mouseenter mousedown',(function(){
        // Piece Co-ordenates
        var row_index = $(this).parent().parent().index();
        var col_index = $(this).parent().index();
        var id=$(this).attr("id");
            //South
                for (var i = (1); i < (8-row_index); i++) {
                        var cell = b_radar($('#bord-table tr:eq(' + (row_index+i) + ') td:eq(' + (col_index) + ')'),id);
                        //Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
                            if (cell) {
                                break;
                            }
                    }
            //North
                for (var i = (1); i < (row_index+1); i++) {
                        var cell = b_radar($('#bord-table tr:eq(' + (row_index-i) + ') td:eq(' + (col_index) + ')'),id);
                    //Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
                            if (cell) {
                                break;
                            }
                    }
            //West
                for (var i = (1); i < (col_index); i++) {
                        var cell = b_radar($('#bord-table tr:eq(' + (row_index) + ') td:eq(' + (col_index-i) + ')'),id);
                        //Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
                            if (cell) {
                                break;
                            }
                    }
            //East
                for (var i = (1); i < (9-col_index); i++) {
                        var cell = b_radar($('#bord-table tr:eq(' + (row_index) + ') td:eq(' + (col_index+i) + ')'),id);
                        //Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
                            if (cell) {
                                break;
                            }
                    }
    }));
    // for bishop and queen
    $(".bishop,.queen").on('mouseenter mousedown',(function(){
        var id=$(this).attr("id");
        var row_index = $(this).parent().parent().index();
        var col_index = $(this).parent().index();
               for (var i = (1);; i++) {
                   if((row_index+i)<0|(col_index+i)<0|(row_index+i)>=8|(col_index+i)>=8){
                       break;
                   }
                var cell = b_radar($('#bord-table tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+i) + ')'),id);
                //Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
                    if (cell) {
                        break;
                        }
                    }
            //North
                for (var i = (1);; i++) {
                    if((row_index-i)<0|(col_index+i)<0|(row_index-i)>=8|(col_index+i)>=8){
                        break; 
                    }
                        var cell = b_radar($('#bord-table tr:eq(' + (row_index-i) + ') td:eq(' + (col_index+i) + ')'),id);
                    //Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
                            if (cell) {
                                break;
                            }
                    }
            //West
                for (var i = (1);; i++) {
                    if((row_index-i)<0|(col_index-i)<0|(row_index-i)>=8|(col_index-i)>=8){
                        break;
                    }
                        var cell = b_radar($('#bord-table tr:eq(' + (row_index-i) + ') td:eq(' + (col_index-i) + ')'),id);
                        //Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
                            if (cell) {
                                break;
                            }
                    }
            //East
                for (var i = (1);; i++) {
                    if((row_index+i)<0|(col_index-i)<0|(row_index+i)>=8|(col_index-i)>=8){
                        console.log("in brack",row_index+i," ",col_index-i,i," ",cell);
                        break;
                    }
                        var cell = b_radar($('#bord-table tr:eq(' + (row_index+i) + ') td:eq(' + (col_index-i) + ')'),id);
                        //Limits for the radar.radar(cell), true=friendly/enemy false=empty; 	
                    console.log(row_index+i," ",col_index-i,i," ",cell);
                            if (cell) {
                                break;
                            }
                    }
        
    }));
    
    //for knight
    
        $(".knight").on('mouseenter mousedown',(function(){
            var id=$(this).attr("id");
            var row_index = $(this).parent().parent().index();
            var col_index = $(this).parent().index();
            for(var i=-2;i<3;i+=4){
                for(var j=-1;j<2;j+=2){
                    if((row_index+i)<0|(row_index+i)>7|(col_index+j)<0|(col_index+j)>7){
                        console.log(i+" "+j);
                        continue;
                    }else{
                        b_radar($('#bord-table tr:eq(' + (row_index+i) + ') td:eq(' + (col_index+j) + ')'),id);
                    }
                }
            }
            for(var i=-2;i<3;i+=4){
                for(var j=-1;j<2;j+=2){
                    if((row_index+j)<0|(row_index+j)>7|(col_index+i)<0|(col_index+i)>7){
                        console.log(i+" "+j);
                        continue;
                    }else{
                        b_radar($('#bord-table tr:eq(' + (row_index+j) + ') td:eq(' + (col_index+i) + ')'),id);
                    }
                }
            }
            


			}));
    
    $("img").mouseout(function(){
        $("td").each (function () {
        var $cCell = $(this);
        $cCell.css("background-color","");
            $("td").droppable({
                       accept:"invalid"   
                    });
        });
    });

});

function b_radar(cell,id){
    var op_nm = $(cell).children().attr("id");
    console.log($(cell).children(),"hi log")
    
	// Identify intruder	
   		if (op_nm!=null) {
   	   //Enemy
	   		if (op_nm != id) {
	   			$( cell ).css("background-color", "#ff6666");
//                if($(cell).children("img.king")){
//                            //$("#check").html("Check mate...");
//                            return;
//                        }
                $( cell ).droppable({
                    accept: "#b,#w",
                    drop: function( e, ui ) {
                        
                        //$(cell).children().remove("img");
                        $(cell).children().detach().appendTo($(".black"));
                        $(e.target).append($(ui.draggable).detach().css({'top':'', 'left':''})).appendTo(cell);
                        //$(ui.draggable).detach.css({ top: 0, left: 0, right: 0, bottom: 0 }).appendTo(cell);
                         changeTurn(-1);
                      }
                    });
	           }
	   //Friendly
	   		else{
	   			$( cell ).css("background-color", "");
	   					}
				return true;	
	   		}	
	   //No_one
	   	else {
	   			$( cell ).css("background-color", "#3AEAE2");
                $( cell ).droppable({
                    accept: "img",
                    drop: function( e, ui ) {
                        $(e.target).append($(ui.draggable).detach().css({'top':'', 'left':''})).appendTo(cell);
                         changeTurn(-1);
                      }
                    });
	   			return false;	
	   		}	 
    }
function p_radar(cell,id){
    var op_nm = $(cell).children().attr("id");
    
	// Identify intruder	
   		if (op_nm==null) {
            
   	            $( cell ).css("background-color", "#3AEAE2");
                $( cell ).droppable({
                    accept: "img",
                    drop: function( e, ui ) {
                        $(e.target).append($(ui.draggable).detach().css({'top':'', 'left':''})).appendTo(cell);
                        changeTurn(-1);
                      }
                    });
	   			return false;	
	   		}	
	    
    }
function changeTurn(num){
    turn=turn*num;
    console.log(turn);
    //$(".bord-table").css("-webkit-transform: rotate(270deg);-moz-transform: rotate(270deg);-o-transform: rotate(270deg);");
    if(turn==1){
        $("img.b").draggable('disable');
        $("img.b").css("z-index",10);
        $("img.w").css("z-index",199999);
        $("img.w").draggable(
            {                
              revert: "invalid", // when not dropped, the item will revert back to its initial position
              grid: [ 70, 70 ],
                disabled: false
        //        containment:"#bord-table"
            }
            ); 
    }else{
        $("img.w").draggable('disable'); 
        $("img.w").css("z-index",10);
        $("img.b").css("z-index",199999);
        
        $("img.b").draggable(
            {
              revert: "invalid", // when not dropped, the item will revert back to its initial position
              grid: [ 70, 70 ],
                disabled: false
        //        containment:"#bord-table"
            }
            ); 
    }  
}


//containment: "document",
      