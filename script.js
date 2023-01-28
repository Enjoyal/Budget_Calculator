let otherPrice=0;

function add(){
      if(expenseName.value==0){
        alert('Please describe the name.!')
    }
    else{

    var ename=expenseName.value;
    var price=parseFloat(Price.value);
    console.log(price);

    var other={
        ename,
        price
    }


    localStorage.setItem(ename,JSON.stringify(other));
//

    other=JSON.parse(localStorage.getItem(ename));
    
      
    htmlData='';

    htmlData=` <tr>
    <td class=" border border-3 border-secondary">${other.ename}</td>
    <td class=" border border-3 border-secondary">${other.price}</td>
    </tr>`
    
    result2.innerHTML+=htmlData;
    
    otherPrice=eval(otherPrice + other.price) ;
    console.log(otherPrice,"otherprice#");

    //clearing textbox
        expenseName.value='';
        Price.value='';

    
    // addOther.innerHTML=`<button id="addAnother" onclick="addAnother()" class="container-fluid btn btn-secondary mt-4 mb-3">+ Add Another</button>`;

    }

}


function budgetCalc(){
    if(mIncome.value==0){
        alert('Please enter your monthly income.!')
    }

    else if(uname.value==0){
        alert('Please enter your name..!')
    }

    else{
    
    // expense=Math.floor(rent.value+food.value+electric.value+insurance.value+other.value);
    balance=eval(mIncome.value-rent.value-food.value-electric.value-insurance.value-otherPrice);
    expense=eval(mIncome.value-balance);
    console.log(expense);
    if(balance<=0){
        balance=0;
    }
    console.log(balance);



    result.innerHTML=``;
    result.innerHTML=` <p class=" text-success fs-6 "><b class="text-primary">Hi ${uname.value},</b> <br> After your expenses you have <br> <b class=" text-danger" >${balance} Rs</b> left in your budget.<br> <br> Your Total expense: <b class=" text-danger" >${expense} Rs </b></p> <br>
    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        View More
      </button>
      
      <!-- Modal -->
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel"> </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">

            <table class="container text-black border border-3 border-secondary">
            <thead class="border border-3 border-secondary">

            <tr>
                <th class=" border border-3 border-secondary">Expense Name</th>
                <th class=" border border-3 border-secondary">Expense (Rs)</th>
            </tr>

            </thead>

            <tbody id="result2">

            <tr>
                <td class=" border border-3 border-secondary">Room rent</td>
                <td class=" border border-3 border-secondary">${rent.value}</td>
            </tr>
            <tr>
                <td class=" border border-3 border-secondary">Electricity Bill</td>
                <td class=" border border-3 border-secondary">${electric.value}</td>
            </tr>
            <tr>
                <td class=" border border-3 border-secondary">Food</td>
                <td class=" border border-3 border-secondary">${food.value}</td>
            </tr>
            <tr>
                <td class=" border border-3 border-secondary">Insurance</td>
                <td class=" border border-3 border-secondary">${insurance.value}</td>
            </tr>

            <tr>
                <td class=" border border-3 border-secondary">Others</td>
                <td class=" border border-3 border-secondary">${otherPrice}</td>
            </tr>
          
            </tbody>
        
        </table>

            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
            </div>
          </div>
        </div>
      </div>
    ` ;




    }

    
    
    
}

function Cancel(){
    window.location.reload();
}

//
