unction pattern(n){
    if(!n || typeof n !== 'number') {
          document.write(`n:${n} Provide a Number`);
           document.write('</br>')
          return;
        }
    for(i=n;i>=1;i--){
     for(j=1;j<=i;j++){
      document.write('*');
     }
    document.write('<br/>');
   }
  }
  pattern(10);
  pattern();
  pattern(null);
  pattern("abcde");