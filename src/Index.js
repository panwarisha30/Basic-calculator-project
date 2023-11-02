var result=document.getElementById("result");
function display(num)
{
    result.value +=num;/* '+' here means that the data previously stored should also be there and new data should also be there.*/
}
function calculate_values()
{
   var final_num=result.value;
   var final_result=eval(final_num);/* Here we have used eval function of js to evaluate reult*/ 
   result.value=final_result;
}
function allclear()
{
    result.value=""; /*It clears the entire value entered by user*/
}
function del()
{
    result.value=result.value.slice(0,-1); /*The value which we will pass is deleted one by one with the help of slice function provided by js*/ 
}
