//declaration
const btn = document.getElementById('btn')
const input = document.getElementById('mood')
//Adding Event handler
// btn.addEventListener('click',getData)


//function to getData
// function getData(){
//     //Checking Navigator is available
//     if('geolocation' in navigator){
//         console.log('geolocation available')
//         //getting position
        
//         navigator.geolocation.getCurrentPosition(async (position) => {
//             const lat = position.coords.latitude
//             const long = position.coords.longitude
//             const mood = inputs.value
//             //display to dom
//             document.getElementById('lat').textContent = lat
//             document.getElementById('log').textContent = long             
//             const data = {lat,long,mood}
//             //Post with fetch
//             const res= await fetch('/api',{
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                       },
//                     body: JSON.stringify(data)
//             })
//             const json = await res.json()
//             console.log(json)
//         },
//             (error) => {
//             console.error("Error Code = " + error.code + " - " + error.message);
//           })
//     }else{
//         alert('geolocation is Not available')
//     }
// }   
function setup(){
    noCanvas()
    const video = createCapture(VIDEO)
    video.size(320,240)
     let lat ,long
     btn.addEventListener('click', async event =>{
         const mood = input.value
         video.loadPixels()
         const capimages = video.canvas.toDataURL('image/png')
          const data = {lat, long, mood, capimages}
            // Post with fetch
          const res= await fetch('/api',{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })

          const json = await res.json()
          console.log(json)
        })
      //Checking Navigator is available
       if('geolocation' in navigator){         
           console.log('available')
            //getting position 
            navigator.geolocation.getCurrentPosition((position) => {
              lat = position.coords.latitude
              long = position.coords.longitude
              console.log(lat,long)
            //display to dom
             document.getElementById('lat').textContent = lat
             document.getElementById('log').textContent = long  
            })
        }else{
            alert('Not Supported')
        }
}
