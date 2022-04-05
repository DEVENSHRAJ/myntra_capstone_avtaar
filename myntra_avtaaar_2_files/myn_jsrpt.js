var shirt={
"shirt_1":{
  "price":"5200",
  id:"5200",
  wished:false,
  incart:false,
  size:"M"
},
"shirt_2":{
  "price":"2599",
  id:"2599",
  wished:false,
  incart:false,
  size:"M"
},
"shirt_3":{
  "price":"7999",
  id:"7999",
  wished:false,
  incart:false,
  size:"M"
},
"shirt_4":{
  "price":"6999",
  id:"7999",
  wished:false,
  incart:false,
  size:"M"
},
"shirt_5":{
  "price":"9999",
  id:"9999",
  wished:false,
  incart:false,
  size:"M"
}
}
console.log(shirt);
/*filteration via price range*/

function prc_rng(){
  var min_price=document.getElementById("min_price").value;
  console.log(min_price);
  var max_price=document.getElementById("max_price").value;
  console.log(max_price);
for(let x in shirt){
    console.log(max_price);
    if (parseInt(shirt[x]["price"])>min_price && parseInt(shirt[x]["price"])<max_price){
      document.getElementById(x).style.display="block";
    }
    else{
      document.getElementById(x).style.display="none";
    }
  }
}

/* sorting by price min maximum is required now*/

function sorting() {
    var sel = document.getElementById('sort');
        // access text property of selected option
        console.log( sel.value );
        if (sel.value=="price low to high"){
          for(let x in shirt){
            console.log(x);
                document.getElementById(x).style.order = shirt[x]["price"];
            }
          }else{
            for(let x in shirt){
              console.log((-1*parseInt(shirt[x]["price"])).toString());
              document.getElementById(x).style.order = (-1*parseInt(shirt[x]["price"])).toString();
              }
          }
    }

    /*wishlist icon control,color change*/

function wished(id,shirt_wish_num){
  var wsh = document.getElementById(id);
  var shirt_wished=shirt_wish_num;
  if(wsh.style.color==="red"){
    wsh.style.color="#D7E5F0";
    shirt[shirt_wished]["wished"]=false;
    console.log(shirt[shirt_wished]["wished"]);
    document.getElementById('lblWishCount').innerHTML=parseInt(document.getElementById('lblWishCount').innerHTML)-1;
  }else{
      wsh.style.color="red";
      shirt[shirt_wished]["wished"]=true;
      console.log(shirt[shirt_wished]["wished"]);
      document.getElementById('lblWishCount').innerHTML=parseInt(document.getElementById('lblWishCount').innerHTML)+1;
  }
}


    //cart addition control + size value also
function cart_add(id,shirt_crt,optn_selcted){
  var crt_shrt = document.getElementById(id);
  var shrt_crted=shirt_crt;
  var size_seltd=optn_selcted;
  console.log(id,shrt_crted,size_seltd);
  if(shirt[shrt_crted]["incart"]){
    shirt[shrt_crted]["incart"]=false;
    console.log(shirt[shrt_crted]["incart"]);
    shirt[shrt_crted]["size"]="M";
    document.getElementById('lblCartCount').innerHTML=parseInt(document.getElementById('lblCartCount').innerHTML)-1;
    crt_shrt.style.color="black";
    crt_shrt.style.fontSize="20px";
  }else{
      shirt[shrt_crted]["incart"]=true;
      console.log(shirt[shrt_crted]["incart"]);
      shirt[shrt_crted]["size"]=document.getElementById(size_seltd).value;
      console.log(document.getElementById(size_seltd).value);
      document.getElementById('lblCartCount').innerHTML=parseInt(document.getElementById('lblCartCount').innerHTML)+1;
      crt_shrt.style.color="green";
      crt_shrt.style.fontSize="35px";
  }
}


// carted view

var carted = document.getElementById('to_carted');
console.log(carted);
carted.onclick = function () {
        document.getElementById("b1").style.display = "none";
        document.getElementById("b2").style.display = "block";
        // access text property of selected option
        console.log(carted);
        for(let x in shirt){
                if(shirt[x]["incart"]){
                  console.log(document.getElementById(x));
                  var fcs=GetElementInsideContainer("b2",x);
                  console.log(x+"_size");
                  GetElementInsideContainer("b2",x+"_size").innerHTML=shirt[x]["size"];
                fcs.style.display = "block";
              }
              else{
                GetElementInsideContainer("b2",x).style.display = "none";
                console.log(document.getElementById(x));
              }
          }
    }

function cart_remove(id,shrt){
  var crt_shrt = document.getElementById(id);
  var shrt_crted=shrt;
  console.log(id,shrt_crted);
  shirt[shrt_crted]["incart"]=false;
  GetElementInsideContainer("b2",shrt_crted).style.display = "none";
}

//standard function
function GetElementInsideContainer(containerID, childID) {
    var elm = {};
    var elms = document.getElementById(containerID).getElementsByTagName("*");
    for (var i = 0; i < elms.length; i++) {
        if (elms[i].id === childID) {
            elm = elms[i];
            break;
        }
    }
    return elm;
}

//zoom functionality
$(document).ready(
  function(){
    $('img').hover(function(){
      $(this).css('transform','scale(1.5)');
      $(this).css('z-index','1');
      $(this).css('position','relative');
    },function(){
      $(this).css('transform','scale(1)');
      $(this).css('z-index','-1');
      $(this).css('position','static');
    }
  );

}
);
