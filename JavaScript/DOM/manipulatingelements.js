
function manipulateElements(){
   let newlistElement=document.createElement("li");
   let input=document.querySelector("input");
   newlistElement.innerText=input.value;
   let parentlist=document.querySelector("ol");
   //parentlist.append("abcd",newlistElement);
   //parentlist.appendChild(newlistElement);
   //parentlist.insertBefore(newlistElement, parentlist.children[2]);
   //parentlist.replaceChild(newlistElement, parentlist.children[2]);
   //parentlist.removeChild(parentlist.children[0]);
   //parentlist.remove();
   parentlist.prepend("TextNode",newlistElement);
   newlistElement.style.backgroundColor="green"
}
