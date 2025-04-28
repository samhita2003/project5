window.addEventListener("DOMContentLoaded", () => {
  let cal = document.querySelector(".callDiv");
  if (cal) {
    cal.addEventListener('click', () => {
      window.location.href = "calculator.html";
    });
  }
  else {
    console.log("Element .callDiv not found");
  }
});

let calParent = document.querySelector(".callParent");
let inputBox = document.querySelector(".callInput");

if (calParent) {
  calParent.addEventListener('click', (e) => {
    if (e.target && (e.target.classList.contains('inputVal') || e.target.classList.contains('inputOperator'))) {
      if (e.target.classList.contains('inputVal') || e.target.classList.contains('inputOperator')) {
        const value = e.target.textContent.trim();  
        if (inputBox.value === "0" || inputBox.value.trim() === "") {
          inputBox.value = value;
        } else {
          inputBox.value += value;
        }
      }
    }
    if (e.target && e.target.classList.contains('clearInput')) {
      inputBox.value = "0"
    }

    if (e.target && e.target.classList.contains('result')) {
      const operators = ['+', '-', '*', '/', '%'];
      const hasOperator = operators.some(op => inputBox.value.includes(op));
    
      if (hasOperator) {
        inputBox.value = math.evaluate(inputBox.value); 
      } else {
        let div = document.createElement('div');
        div.innerHTML = "Please enter any operator symbol!";
        div.style.width = "15rem";
        div.style.backgroundColor = 'red';
        div.style.color = 'white';
        div.style.padding = '1rem';
        div.style.fontWeight = 'bold';
        div.style.borderRadius = '1rem';
        div.style.fontSize = '1.5rem';
        div.style.position = 'absolute';
        div.style.top = '5rem';
        div.style.left = '10rem';
        document.body.appendChild(div);
        setTimeout(() => {
          div.remove();
        }, 3000);
      }
    }
    
    if (e.target && e.target.classList.contains('deleteInput')) {
      inputBox.value = inputBox.value.slice(0, -1);
    }
  });
}
