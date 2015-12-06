$('#tags').tagsInput({
   'height':'100px',
   'width':'300px',
   // 'interactive':true,
   'defaultText':'add a tag',
   // 'onAddTag':callback_function,
   // 'onRemoveTag':callback_function,
   // 'onChange' : callback_function,
   'delimiter': [',',';'],   // Or a string with a single delimiter. Ex: ';'
   'removeWithBackspace' : true,
   // 'minChars' : 0,
   // 'maxChars' : 0, // if not provided there is no limit
   'placeholderColor' : '#666666'
});

function yesnoCheck() {
    if (document.getElementById('countryCheck').checked) {
        document.getElementById('isCountry').style.display = 'block';
         document.getElementById('isCoord').style.display = 'none';
    }
    else {
      document.getElementById('isCountry').style.display = 'none';
      document.getElementById('isCoord').style.display = 'block';
   }
}