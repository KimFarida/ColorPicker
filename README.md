# ColorPicker
A color picker using HTML CSS and JSS

An event listener is added to trigger a callback function named 'Set' when the Set button is clicked. 
document.getElementById("set").addEventListener('click', set);

The 'element' variable houses all elements belonging to the name 'CSS Property'
(Defaulty is an array, as all elements targeted using DOM 'document.getElements' come in an array).

'div' gets the div element by the id 'modify'
let div = document.getElementById('modify');

A for loop runs through all elements belonging to the 'element[]' array,
It gets attributes via the 'id' and stores in 'cssProperty' for each per iteration.

CssProperty is the assigned as the property provided as our option id in our HTML.
<select name="cssProperty" id="background">

let elements = document.getElementsByName('cssProperty');
function set()
{
    for(let i = 0; i < elements.length; i++)
    {   
        let cssProperty = elements[i].getAttribute('id');

        let cssValue = elements[i].value;
        
        div.style[ cssProperty] = cssValue;

    }

}


cssValue is assigned as the value of the element chosen
<option value="100px">100px</option>



div.style then targets our CSS and changes the styling as per options gotten from the variable cssValue.


