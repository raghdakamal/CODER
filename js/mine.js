/*$("#btn").click(function(){
    
    
    $(".test").slideUp(1000 , function(){
        
        
        $(".test").fadeIn(1000 , function(){
            
            
           $(".test").hide(1000 , function(){
               
              $("#btn").hide(1000 , function(){
                  
                  
                  
                  $("#btn").show(1000, function(){
                      
                      
                      $(".test").show(1000)
                  })
              }) 
               
           }) 
        })
    })
})

 <button id="btn">click</button>
        <div class="test">
        </div>           code in html


$(".test").animate({width :'100%'},2000)
 
    $(".test").animate({height :window.innerHeight},1000)
/////////////////////////////////////////////////////////////////////
 <sectiom id="services">   ----code in html---------
        
            <h2>Our Services</h2>
            <div class="service">
            
                <h4>development</h4>
                <p>weferf werqwef wefcdsfsg hyhjyujyuj dfvdfvsdf</p>
            
            </div>
            
             <div class="service">
            
                <h4>development</h4>
                <p>weferf werqwef wefcdsfsg hyhjyujyuj dfvdfvsdf</p>
            
            </div>
             <div class="service">
            
                <h4>development</h4>
                <p>weferf werqwef wefcdsfsg hyhjyujyuj dfvdfvsdf</p>
            
            </div>
            <div class="clearfix"></div>
        
        
        </sectiom>
 

$("#services").animate({width:'100%'},1000)
       
  $("#services").animate({height:window.innerHeight},1000,function(){
      
      
      
      
      $("cservices h2").fadeIn(1000,function(){
          
          
          
         $(".service:nth-child(2)").fadeIn(1000,function(){
             
              $(".service:nth-child(3)").fadeIn(1000,function(){
                  
                    $(".service:nth-child(4)").fadeIn(1000)
                  
              })
             
         })
      })
  })9
  
  
  var lis= $("#options-box ul li");
lis.eq(0).css("backgroundColor","purple");
lis.eq(1).css("backgroundColor","red");
lis.eq(2).css("backgroundColor","teal");
lis.eq(3).css("backgroundColor","green");
lis.eq(4).css("backgroundColor","orange");
*/





$(window).scroll(function(){
    
    var windowScroll  =$(window).scrollTop();
    var aboutOffest =$(".about").offset().top;
    
    if (windowScroll > aboutOffest)
        {
          $(".navbar").css("backgroundColor","gray")
        }
    else
        {
            $(".navbar").css("backgroundColor","transparent")
        }

});




$("#btnUp").click(function(){
    
//$(window).scrollTop('0');   
    
    
    $("html,body").animate({scrollTop:'0'}, 2000)
    
});



$("a").click(function(){
    
    var aHref= $(this).attr("href");

    
     var secOff = $(aHref).offset().top;
    
      $("html,body").animate({scrollTop:secOff} , 1000, 'swing')
    
});


(function(){
    

var style ;

if ( localStorage.getItem("userStyle") == null)
    {
        
        style ={color: 'black',image:'imgs/cover.jpg' , fontSize:'16px'}
    }
  else
      {
          style =JSON.parse( localStorage.getItem("userStyle"));
      }


        $(".body h2,p").css("color", style.color)
        $(".header_body").css("backgroundImage","url(./"+style.image+")")

        $(".skill_data p").css("fontSize",style.fontSize)



$("#toggleBtn").click(function(){
    
    
    $("#options-box").toggle();
    
})


var colors = ["orange" , "gray", "tomato","#09c"]


var lis= $("#options-box ul li");
 
for(var i=0; i<lis.length;i++)
    {
       
        lis.eq(i).css("backgroundColor",colors[i])
    }


lis.click(function(){
    
   var bgColor= $(this).css("backgroundColor");
    style.color=  bgColor;
    
  localStorage.setItem("userStyle" , JSON.stringify(style));
  $(".body h2,p").css("color",bgColor)
})




 $(".img-change").click(function(){
     
  var imgSrc= $(this).attr("src");
     
       style.image= imgSrc;
    
  localStorage.setItem("userStyle" , JSON.stringify(style));
     
     $(".header_body").css("backgroundImage","url(./"+imgSrc+")")
  
 
 })



$("#plus").click(function(){
    
    if($(".skill_data p").css("fontSize")>="30px")
        {
            $(".skill_data p").css("fontSize","30px")
        }
    else
        {
           
$(".skill_data p").css("fontSize","+=1")

 
        }
    
    style.fontSize= $(".skill_data p").css("fontSize");
    
  localStorage.setItem("userStyle" , JSON.stringify(style));
    
 
})



$("#minus").click(function(){
    
    if($(".skill_data p").css("fontSize")<="13px")
        {
            $(".skill_data p").css("fontSize","13px")
        }
    else
        {
           
$(".skill_data p").css("fontSize","-=1")

 
        }
    
  style.fontSize= $(".skill_data p").css("fontSize");
    
  localStorage.setItem("userStyle" , JSON.stringify(style));
})


    
    
})()


$(document).ready(function(){
    
    
    
    $("#loading").fadeOut(2000, function(){
        
        
        $("body").css("overflow","auto")
    })
});












       






