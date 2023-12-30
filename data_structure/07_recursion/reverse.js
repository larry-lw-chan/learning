function reverse(str){
    if (str === "") return "";
    return str.slice(-1) + reverse(str.slice(0, -1));
}
  
  // reverse('awesome') // 'emosewa'
  // reverse('rithmschool') // 'loohcsmhtir'

  console.log(reverse('awesome'));    // 'emosewa'