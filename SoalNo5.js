function buatId(length) 
{
  let hasil            = '';
  let characters       = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let charactersLength = characters.length;
  for (let i = 0; i < length; i++) 
  {
    hasil += characters.charAt(Math.floor(Math.random() * charactersLength));         
  }
  return hasil;
}

function cetak(banyak)
{
  for (let j = 0; j<banyak; j++)
  {
    console.log(buatId(32));
  }
}
cetak(3);