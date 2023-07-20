

document.getElementById('currency-selector').addEventListener('change', function () {
    
    const selectedCurrency = this.value;
    fetchData(selectedCurrency)
});
    
const fetchData = async (selectedCurrency) => {
    const responce = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await responce.json()
    printData(data, selectedCurrency)
}
const printData = (data, selectedCurrency) => {
    const dataAboutValute = data.Valute[selectedCurrency];
 
    const currentData = {
        id: dataAboutValute.ID,
        name: dataAboutValute.Name,
        code: dataAboutValute.CharCode,
        prevValue: dataAboutValute.Previous,
        numCode: dataAboutValute.NumCode
    };

    const currentTime = {
        date: data.Date,
        prevDate: data.PreviousDate
    }



    const currencyOptions = document.getElementById('currency-selector')
    currencyOptions.innerHTML = Object.entries(data.Valute).map(item => 
        `<option value="${item[selectedCurrency]}">${item[0]} - ${item[1].Name}</option>`
     
    )
    
    
    
    const currencyInfo = document.getElementById('currency-info');
    currencyInfo.innerHTML = `
    <p><strong>ID валюты:</strong> ${currentData.id}</p>
    <p><strong>Название валюты:</strong> ${currentData.name}</p>
    <p><strong>Код валюты:</strong> ${currentData.code}</p>
    <p><strong>Дата - значение:</strong> ${currentTime.date}</p>
    <p><strong>Предшествующая дата - предшествующее значение:</strong> ${currentTime.prevDate}</p>`
    
}



// Обработчик события при выборе валюты

         // let array = [currentData].map(item => {
         //     return {
         //         ...item,     
         //     }
         // });
 
         // if(localStorage.getItem('dataValute') == null){
         //     var myArray =[];
         // }else{
         //     myArray =  JSON.parse(localStorage.getItem('dataValute'));
 
         // }
     
         // function addItemToArray(){
         //     myArray.push(currentData);
         //     localStorage.setItem('dataValute', JSON.stringify(myArray));
          
         // }
         // addItemToArray()