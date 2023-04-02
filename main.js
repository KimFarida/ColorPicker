function set()
{
    let elements = document.getElementsByName('cssProperty');

    console.log( elements);

    for(let i = 0; i < elements.length; i++)
    {
        console.log(elements[i].value);
    }

}


document.getElementById("set").addEventListener('click', set)