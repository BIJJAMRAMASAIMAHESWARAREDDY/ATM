const accountData = 
[
{accountNo: '12345', name:'john',email:'john@gmail.com',balance:20000.00,password:'3456'},
{accountNo: '23456', name:'doe', email:'doe@gmail.com',balance:10000.00,password:'4567'},
{accountNo: '34563', name:'green', email:'greenrcb@gmail.com',balance:10750.00,password:'5678'},
{accountNo: '98563', name:'starc', email:'starckkr@gmail.com',balance:24000.00,password:'6789'},
{accountNo: '34663', name:'pat', email:'patsrh@gmail.com',balance:20000.00,password:'7890'},
{accountNo: '34473', name:'sam', email:'sampunjab@gmail.com',balance:18950.00,password:'1234'},
{accountNo: '39363', name:'stokes', email:'strokescsk@gmail.com',balance:14450.00,password:'2345'},
];
    const loginButton = document.getElementById('loginButton');
    const withdrawButton = document.getElementById('withdrawButton');
    const depositButton = document.getElementById('depositButton');
    const accountDetailsButton = document.getElementById('accountDetailsButton');
    const balanceButton = document.getElementById('balanceButton');
    const logoutButton = document.getElementById('logoutButton');
    const resultContainer = document.getElementById('resultContainer');
    const loginContainer = document.getElementById('loginContainer');
    const operationsContainer = document.getElementById('operationsContainer');
    const confirmButton = document.getElementById('confirmButton');
    const cancelButton = document.getElementById('cancelButton');
    const withdrawConfirmButton = document.getElementById('withdrawConfirmButton');
    const withdrawCancelButton = document.getElementById('withdrawCancelButton');
    const depositConfirmButton = document.getElementById('depositConfirmButton');
    const depositCancelButton = document.getElementById('depositCancelButton');
    const withdrawContainer = document.getElementById('withdrawContainer');
    const passwordContainer = document.getElementById('passwordContainer');
    const depositContainer = document.getElementById('depositContainer');
    const withdrawAmountInput = document.getElementById('withdrawAmountInput');
    const depositAmountInput = document.getElementById('depositAmountInput');
    const accountNumberInput = document.getElementById('accountNumberInput');
    
    // Disable all operation buttons initially
    withdrawButton.disabled = true;
    depositButton.disabled = true;
    accountDetailsButton.disabled = true;
    balanceButton.disabled = true;
    logoutButton.disabled = true;

    //display x in the input field
    // Handle login button click
    loginButton.addEventListener('click', () => {
      const accountNumber = accountNumberInput.value;
      const matchingAccount = accountData.find(account=>account.accountNo === accountNumber);
      // Simulate account number validation
  if (matchingAccount)
  {
        console.log('Login successful!');
        displayResult(`Welcome....  ${matchingAccount.name}!. Thanks for visting the ATM`);

        // Handle operation button clicks
      withdrawButton.addEventListener('click', () => {
      console.log('Withdraw button clicked');
      displayResult('Witdraw button clicked...');
      showPasswordContainer();
      depositContainer.style.display = 'none';
      withdrawConfirmButton.addEventListener('click',()=>
        { 
        hidePasswordContainer();
        const withdrawAmount = parseFloat((withdrawAmountInput.value));
        if(withdrawAmount<=matchingAccount.balance){
          matchingAccount.balance = matchingAccount.balance - withdrawAmount;
        console.log("Withdraw amount : ",withdrawAmount);
        displayResult(`Withdraw is SUCCESSFUL! NEW BALANCE : ${matchingAccount.balance}`);
        hideOperationContainer();
        }
        else{
          displayResult('Insufficient funds !...');
          console.log("Insufficient Balance");
        }
        });
      // Add your withdrawal logic here
    });

    depositButton.addEventListener('click', () => {
      console.log('Deposit button clicked');
      displayResult("Deposit Button Clicked...");
      hidePasswordContainer();
      withdrawContainer.style.display = 'none';
      depositContainer.style.display = 'block';
      depositConfirmButton.addEventListener('click',()=>
        {
        const depositAmount = parseFloat((depositAmountInput.value));
        if(!isNaN(depositAmount)&&depositAmount>0){
        matchingAccount.balance =  depositAmount+matchingAccount.balance;
        console.log("Deposited Successfully");
        displayResult(`Deposit successful ! New Balance : ${matchingAccount.balance}`);
        hideOperationContainer();}
        else{
          displayResult('Please enter a valid deposit amount');
        }
        });
        
      // Add your deposit logic here
    });

    accountDetailsButton.addEventListener('click', () => {
      
      console.log('Account Details button clicked');
      console.log("Account Details:");
      displayResult(
        ` Account Holder Name : ${matchingAccount.name} `
        +` Account EmailId : ${matchingAccount.email} `
        +` Balance :  ${matchingAccount.balance} `
      );
      //displayResult(`Accouknt EmailId : ${matchingAccount.email}`);
      console.log(matchingAccount.name);
      // Add your account details logic here
    });

    balanceButton.addEventListener('click', () => {
      console.log('Balance button clicked');
      displayResult(`your balance is : ${matchingAccount.balance}`);
      // Add your balance logic here
    });


        // Show operations container and hide login container
        loginContainer.style.display = 'none';
        operationsContainer.style.display = 'block';

        // Enable all operation buttons
        withdrawButton.disabled = false;
        depositButton.disabled = false;
        accountDetailsButton.disabled = false;
        balanceButton.disabled = false;
        logoutButton.disabled = false;

        confirmButton.addEventListener('click',()=>
          {
            const password = document.getElementById('passwordInput').value;
          if(matchingAccount.password===password)
          {
            console.log("password confirmed");
            hidePasswordContainer();
            withdrawContainer.style.display = 'block';
          }
          else{
            console.log("Invalid password!...");
            displayResult('Invalid password');
          }
          });

 } 
 else {
    console.log('Invalid account number!');
        displayResult('Invalid account number!');
      }
    });

    
    // Handle logout button click
    logoutButton.addEventListener('click', () => {
      // Disable all operation buttons
      withdrawButton.disabled = true;
      depositButton.disabled = true;
      accountDetailsButton.disabled = true;
      balanceButton.disabled = true;

      // Show login container and hide operations container
      loginContainer.style.display = 'block';
      operationsContainer.style.display = 'block';
      accountNumberInput.value="";
      withdrawAmountInput.value = "";
      depositAmountInput.value = "";
      withdrawContainer.style.display = 'none';
  depositContainer.style.display = 'none';
      hidePasswordContainer();
      
      // Clear the result container
      displayResult('');
    });

    // Function to display the result
    function displayResult(message) {
      resultContainer.textContent = message;
      resultContainer.style.color = 'green';
    }




function showOperationContainer()
{
  if(withdrawButton.classList.contains('active')){
    withdrawContainer.style.display = 'block';
  }
  else if(depositButton.classList.contains('active'))
    {
      depositContainer.style.display = 'block';
    }
}

cancelButton.addEventListener('click',()=>
{
hidePasswordContainer();
});



withdrawCancelButton.addEventListener('click',()=>
{
hideOperationContainer();
});

depositCancelButton.addEventListener('click',()=>
{
hideOperationContainer();
});

depositConfirmButton.addEventListener('click',()=>
{
const depositAmount = parseFloat(document.getElementById('depositAmountInput').value);
accountData.balance += depositAmount;
console.log("Deposited Successfully");
displayResult(`Deposit successful ! New Balance : ${accountData.balance}`);
hideOperationContainer();
});

function showPasswordContainer()
{
  passwordContainer.style.display = 'block';
}
function hidePasswordContainer()
{
  passwordContainer.style.display = 'none';
}


function hideOperationContainer()
{
  withdrawContainer.style.display = 'none';
  depositContainer.style.display = 'none';
}

