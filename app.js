
const options = document.getElementById('currency-selector')
const currencyInfo = document.getElementById('currency-info');

window.addEventListener('DOMContentLoaded', () => {
    renderData()

})

options.addEventListener('change', async (e) => {
    try {
        const data = await fetchData()
        const currentValue = e.target.value
        const dataOfValute = data.Valute[currentValue]
        
        currencyInfo.innerHTML = `
        <p><strong>ID валюты:</strong> ${dataOfValute.ID}</p>
        <p><strong>Название валюты:</strong> ${dataOfValute.Name}</p>
        <p><strong>Код валюты:</strong> ${dataOfValute.CharCode}</p>
        <p><strong>Дата - настояшие:</strong> ${data.Date}
        <p><strong>Дата - прошлое:</strong> ${data.PreviousDate}`;
    
        options.insertAdjacentElement = `
            <option value="${e.target}">${currentValue}</option>`;
        
    } catch (error) {
        console.log(error)
    }

})

const renderData = async () => {
    try {
        const data = await fetchData()
        Object.entries(data.Valute).forEach(([key, value]) => {
            options.innerHTML += `
            <option value="${key}">${value.Name}</option>`
    
        })
        
    } catch (error) {
        console.log(error)
    }



}

const fetchData = async () => {
    try {
        const responce = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
        const data = await responce.json()
        return data
    } catch (error) {
        console.log(error)
    }

}







