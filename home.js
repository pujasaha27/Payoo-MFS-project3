const validPin = 1234
const transactionData = []
// add money

document.getElementById('add-money-btn').addEventListener('click',function(e){
    e.preventDefault()
    
    const bank = document.getElementById('bank').value

    const accountNumber = document.getElementById('account-number').value

    const amount = parseInt(document.getElementById('add-amount').value)

    if(amount<=0){
        alert('Invalid')
        return;
    }
        

    const pin = parseInt(document.getElementById('add-pin').value)
    
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    if(accountNumber.length <11){
        alert('please provide valid number')
        return;
    }

    if(pin !== validPin){
        alert('please provide valid pin')
        return;
    }
    const totalNewAvailableBalance = amount + availableBalance

    document.getElementById('available-balance').innerText = totalNewAvailableBalance

    const data ={
        name:'Add Money',
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})

// cashout 

document.getElementById('withdraw-btn').addEventListener('click',function(e){
    e.preventDefault()

    const amount = parseInt(document.getElementById('withdraw-amount').value)


    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

     if(amount<=0 || amount>availableBalance){
        alert('Invalid')
        return;
    }

    const totalNewAvailableBalance = amount - availableBalance

    document.getElementById('available-balance').innerText = totalNewAvailableBalance

    const data ={
        name:'Cash Out',
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})

// transfer

document.getElementById('send-btn').addEventListener('click',function(e){
    e.preventDefault()

    const amount = parseInt(document.getElementById('transfer-amount').value)

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    const totalNewAvailableBalance = amount - availableBalance

    document.getElementById('available-balance').innerText = totalNewAvailableBalance

    const data ={
        name:'Transfer Money',
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})


// transaction 

document.getElementById('transaction-button').addEventListener('click',function(){
    const transactionContainer = document.getElementById('transaction-container')

    transactionContainer.innerText=''
    for(const data of transactionData){
        const div =  document.createElement('div')
        div.innerHTML= `
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                    <div class="flex items-center">
                        <div class=" p-3 rounded-full bg-[#f4f5f7]">
                            <img src="assets/wallet1.png" class="mx-auto" alt="">
                        </div>
                        <div class="ml-3">
                            <h1>${data.name}</h1>
                            <p>${data.date}</p>
                        </div>
                    </div>
                    <i class="fa-solid fa-ellipsis-vertical"></i>
                </div>
        `
        transactionContainer.appendChild(div)
        
    }
})

// toggling

document.getElementById('add-button').addEventListener('click',function(){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }

    document.getElementById('add-money-parent').style.display = 'block'

    const formbtns = document.getElementsByClassName('form-btn')

    for (const btn of formbtns){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById('add-button').classList.remove('border-gray-300')

    document.getElementById('add-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')

    
})

document.getElementById('cashout-button').addEventListener('click',function(){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }

    document.getElementById('cashout-parent').style.display = 'block'


    const formbtns = document.getElementsByClassName('form-btn')

    for (const btn of formbtns){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById('cashout-button').classList.remove('border-gray-300')

    document.getElementById('cashout-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')

})

document.getElementById('transfer-button').addEventListener('click',function(){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }

    document.getElementById('transfer-money-parent').style.display = 'block'

    const formbtns = document.getElementsByClassName('form-btn')

    for (const btn of formbtns){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById('transfer-button').classList.remove('border-gray-300')

    document.getElementById('transfer-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')

})

document.getElementById('bonus-button').addEventListener('click',function(){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }

    document.getElementById('bonus-parent').style.display = 'block'

    const formbtns = document.getElementsByClassName('form-btn')

    for (const btn of formbtns){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById('bonus-button').classList.remove('border-gray-300')

    document.getElementById('bonus-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')

})

document.getElementById('pay-button').addEventListener('click',function(){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }

    document.getElementById('paybill-parent').style.display = 'block'

    const formbtns = document.getElementsByClassName('form-btn')

    for (const btn of formbtns){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById('pay-button').classList.remove('border-gray-300')

    document.getElementById('pay-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')

})

document.getElementById('transaction-button').addEventListener('click',function(){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }

    document.getElementById('transaction-parent').style.display = 'block'

    const formbtns = document.getElementsByClassName('form-btn')

    for (const btn of formbtns){
        btn.classList.remove('border-[#0874f2]','bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById('transaction-button').classList.remove('border-gray-300')

    document.getElementById('transaction-button').classList.add('border-[#0874f2]','bg-[#0874f20d]')

})

