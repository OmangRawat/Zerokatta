export function checkEmptyBox(box_element)
{
    let box_data = document.getElementById(box_element).innerHTML
    return !box_data.length;
}