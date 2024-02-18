"use Strict"
function calculate() {
    const pretaxIncome_elem = document.getElementById("pretaxIncomeBox");
    const filingtype = document.getElementById("form1_1");
    const outputDiv = document.getElementById("output");
    var pretaxIncome = pretaxIncome_elem.value;
    // console.log(pretaxIncome_elem.getAttribute("name"));
    // console.log("before calculation, input is: " + pretaxIncome_elem.value);

    // pretaxIncome.val
    // size = parseFloat(size);
    var value;
    var tax_liability_1 = 0;
    // var tax_liability_build = 0
    console.log(filingtype[0].value);
    console.log(filingtype[1].value);
    console.log(filingtype[2].value);   
    console.log(filingtype[3].value);
    console.log(filingtype[4].value);   
    // console.log(filingtype[5].checked);

    for(i= 0; i < filingtype.length; i++){
        if (filingtype[i].checked) {
            // Assign its value to the variable
            value = filingtype[i].value;
            console.log("the current selected radio button is: " + value)
            // Break the loop
            break;
        }
    }



    // Married Jointly or Widdow
   if (value == "M1_1" || value == "C1_1") {
      if (pretaxIncome > 693750 ) {
        tax_liability_1 += (pretaxIncome - 693750) * 0.02; // 37%
        console.log(tax_liability_1)
      }
      if (pretaxIncome > 462500) {
        tax_liability_1 +=  (pretaxIncome - 462500) * 0.03; // 35%
        console.log(tax_liability_1)
      }
      if (pretaxIncome > 364200) {
        tax_liability_1 +=  (pretaxIncome - 364200 ) * 0.08; // 32%
        console.log(tax_liability_1)
      }
      if (pretaxIncome > 190750) {
        tax_liability_1 +=  (pretaxIncome - 190750 ) * 0.02; // 24%
        console.log(tax_liability_1)
      }
      if (pretaxIncome > 89450) {
        tax_liability_1 +=  (pretaxIncome - 89450 ) * 0.1; // 22%
        console.log(tax_liability_1)
      }
      if (pretaxIncome > 22000) {
        tax_liability_1 +=  (pretaxIncome - 22000 ) * 0.02; // 12%
        console.log(tax_liability_1)
      }
      tax_liability_1 += pretaxIncome * 0.1; // 10%
      console.log(tax_liability_1)

    }
   
    // Married Filing Seperately
   else if (value == "M1_2") {
      if (pretaxIncome > 346875) {
        tax_liability_1 += (pretaxIncome - 346875) * 0.02; // 37%
      }
      if (pretaxIncome > 231250) {
        tax_liability_1 +=  (pretaxIncome - 231250) * 0.03; // 35%
      }
      if (pretaxIncome > 182100) {
        tax_liability_1 +=  (pretaxIncome - 182100) * 0.08; // 32%
      }
      if (pretaxIncome > 95375)  {
        tax_liability_1 +=  (pretaxIncome - 95375) * 0.02; // 24%
      }
      if (pretaxIncome > 44725) {
        tax_liability_1 +=  (pretaxIncome - 44725 ) * 0.1; // 22%
      }
      if (pretaxIncome > 11000) {
        tax_liability_1 +=  (pretaxIncome - 11000 ) * 0.02; // 12%
     }
     tax_liability_1 += pretaxIncome * 0.1; // 10%
    }
   
   // Head of Household
   else if (value == "C1_2") {
    if (pretaxIncome > 578100) {
        tax_liability_1 += (pretaxIncome - 578100) * 0.02; // 37%
    }
    if (pretaxIncome > 231250) {
        tax_liability_1 +=  (pretaxIncome - 231250) * 0.03; // 35%
    }
    if (pretaxIncome > 182100) {
        tax_liability_1 +=  (pretaxIncome - 182100) * 0.08; // 32%
    }
    if (pretaxIncome > 95350) {
        tax_liability_1 +=  (pretaxIncome - 95350) * 0.02; // 24%
    }
    if (pretaxIncome > 59850) {
      tax_liability_1 +=  (pretaxIncome - 59850) * 0.1; // 22%
    }
    if (pretaxIncome > 15700) {
      tax_liability_1 +=  (pretaxIncome - 15700) * 0.02; // 12%
    }

    tax_liability_1 += pretaxIncome * 0.1; // 10%
    
   }
   // Single
   else if (value == "C1_3" ) {
    if (pretaxIncome > 578125) {
        tax_liability_1 += (pretaxIncome - 578125) * 0.02; // 37%
    }
    if (pretaxIncome > 231250) {
        tax_liability_1 +=  (pretaxIncome - 231250) * 0.03; // 35%
    }
    if (pretaxIncome > 182100) {
        tax_liability_1 +=  (pretaxIncome - 182100) * 0.08; // 32% 
    }
    if (pretaxIncome > 95375) {
        tax_liability_1 +=  (pretaxIncome - 95375) * 0.02; // 24%
    }
    if (pretaxIncome >  44725) {
      tax_liability_1 +=  (pretaxIncome - 44725) * 0.1; // 22%
    }
    if (pretaxIncome > 11000) {
      tax_liability_1 +=  (pretaxIncome - 11000 ) * 0.02; // 12%  
    }
    tax_liability_1 += pretaxIncome * 0.1; // 10%
   }
    console.log("tax liability is: " + tax_liability_1);
    outputDiv.innerHTML = "<h3>Total Tax is: " + tax_liability_1 +
            "<br>Total Take-home Income: " + (pretaxIncome - tax_liability_1) +
            "</h3>";
    tax_liability_1 = 0


}