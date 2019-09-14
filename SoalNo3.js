function hitungKata(string, kata)
{
  if (string.length >= kata.length)
  {
    let kalimatBaru = string+kata;
    console.log(kalimatBaru);
    console.log("ditemukan "+(kalimatBaru.match(new RegExp("na", "g")) || []).length+" kali");
  }
  else 
  {
    console.log(kata+" tidak bisa lebih panjang dari "+string)
  }
}
hitungKata("banananana","nana");