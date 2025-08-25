document.getElementById('loginButton'). addEventListener('click',function (e) {
    e.preventDefault()
   const mobileNumber = 123456789
   const pinNumber = 1234
   const mobileNumberValue = document.getElementById('mobile-number').value
   const mobileNumberValueConverted = parseInt(mobileNumberValue)

   const pinNumberValue = document.getElementById('pin-number').value
   const pinNumberValueConverted = parseInt(pinNumberValue)

   console.log(mobileNumberValueConverted,pinNumberValueConverted)

   if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
    console.log('all matched')
   }
   else{
    console.log('invalid')
   }
    
})