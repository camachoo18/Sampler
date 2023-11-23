const pads = document.querySelectorAll(".pad")

console.log(pads)

const audioMap ={}
for(let i = 0; i < pads.length; i++){
    const audioPath = pads[i].getAttribute(`data-audio`)
    const audio = new Audio(audioPath)
    audioMap[pads[i].innerHTML.toLowerCase()] = audio
    pads[i].addEventListener(`click`, function(){
        if(audio){
            playAudio(audio);
        }
        console.log("pulsaste el pad: " , pads[i].innerHTML)
        const key = pads[i].innerHTML.toLowerCase();
       // document.querySelector("#key").value = key;
        pads[i].style.background = "rgb(100, 100, 100)";
        setTimeout(function(){
            pads[i].style.background = "lightgray"
            pads[i].style.background = "0px 5px 0px darkslateblue"
        },100)
    })
}
document.addEventListener("keydown", function(event){
    const key = event.key.toLowerCase();
    document.querySelector("#key").value = key;
    const audio = audioMap[key];
    if(audio){
        playAudio(audio)
        const pad = Array.from(pads).find(pad => pad.innerHTML.toLowerCase() === key);

    }
})




let sample_aux
function sendSample(){
    var key = document.querySelector("#key").value
    audioMap[key] = new Audio (sample)

}


document.querySelector("#sample_file").addEventListener("change", function(event){
    sample = URL.createObjectURL(event.target.files[0])
    sample_aux = new Audio(sample);
    sendSample()
})



function playAudio(audio){
    audio.pause()
    audio.currentTime = 0;
    audio.play()
}