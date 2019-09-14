function cetak_gambar(input)
{
    if (input % 2 === 0) 
    {
        console.log(input + " bukan bilangan ganjil");
        return;
    }

    let string = "";
    let tengah = Math.floor(input/2);

    for (let i = 0; i < input; i++) 
    {
        for (let j = 0; j < input; j++) 
        {
            if (j === 0 || i === tengah || j === input - 1) 
            {
                string += "     *   ";
            } 
            else 
            {
                string += "    =   ";
            }
        }
        string += "\n";
    }
    console.log("--- panjang ---");
    console.log(string);
};
cetak_gambar(5);