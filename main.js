var menu_list_array = ["Veg Margherita Pizza","Paneer Tikka Pizza","garlic pizza","supreme pizza","semizza","pasta pizza"];

function getmenu(){
var htmldata= document.getElementById("display_menu").innerHTML= menu_list_array; 

}

function add_item(){
var htmldata= [];
var item=document.getElementById("add_item").value;
// add element
 menu_list_array.push(item);
 console.log (menu_list_array);
 document.getElementById("arrayselement").innerHTML= menu_list_array;
 
    


}

function add_top(){

}