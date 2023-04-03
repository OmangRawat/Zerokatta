export function checkForWin(grid, clickedbox, symbol)
{
    let dimension = localStorage.getItem("Dimension")
    let box = clickedbox.split("_")
    let x = box[1]
    let y = box[2]
    grid["box_" + x + "_" + y] = symbol
    if (Object.keys(grid).length === (dimension * dimension))
    {
        return "draw"
    }
    function checkhorizontally()
    {
        for (let i = 0; i < dimension; i++)
        {
            // console.log('box_' + i + '_' + y, grid, grid['box_' + i + '_' + y], symbol)  
            if (grid['box_' + x + '_' + i] !== symbol)
            {
                return false
            }
        }
        return true
    }
    function checkvertically()
    {
        for (let i = 0; i < dimension; i++)
        {
            if (grid['box_' + i + '_' + y] !== symbol)
            {
                return false
            }
        }
        return true
    }
    function checkleftdiagonal()
    {
        for (let i = 0; i < dimension; i++)
        {
            if (grid['box_' + i + '_' + i] !== symbol)
            {
                return false
            }
        }
        return true
    }
    function checkrightdiagonal()
    {
        for (let i = dimension; i >= 0; i--)
        {
            if (grid['box_' + i + '_' + i] !== symbol)
            {
                return false
            }
        }
        return true
    }
    // console.log("Checking", checkhorizontally() || checkvertically() || checkleftdiagonal() || checkrightdiagonal() ? "win" : "lose")
    return (checkhorizontally() || checkvertically() || checkleftdiagonal() || checkrightdiagonal() ? "win" : "lose")
    
}