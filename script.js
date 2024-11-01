const form = document.querySelector('.form');
heading1= document.querySelector('#heading1')
p1=document.querySelector('#p1')
guide= document.querySelector('.guide')


form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = `Please give a valid height ${height}`;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = `Please give a valid weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    heading1.style.display= "none"
    p1.style.display= "none"
    form.style.display = "none"
    results.style.display = "block"
    guide.style.display= "block"
    results.innerHTML = `<div style="text-align: center;font-family: 'Roboto', sans-serif; padding: 20px; width: 250px; margin: 0 auto;">
        <h1 style="color: #12B1D1; font-weight: bold; font-size:36px ;">Your BMI is:</h1>
        <hr style="width: 50%; margin: 10px auto;">
        <h2 style="margin: 0; color: brown ;font-weight: bold">${bmi}.</h2>
        <hr style="width: 50%; margin: 10px auto;">
        <button onclick="location.reload();" style="padding:10px; border:2px solid #12B1D1; border-radius:6px">New Calculation<button/>
    </div>`;
    
   
  }
});
