const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive = 1;


// next
next.addEventListener('click', () =>{
    currentActive++;
    // console.log(currentActive);  counts in the console
    if(currentActive > circle.length){
        currentActive = circle.length
    }
    console.log(currentActive); // notice counter stops at 4 cos thats the last
 
    update()
});

// previous
prev.addEventListener('click', () =>{
    currentActive--
    if(currentActive < 1){
        currentActive = 1
    }
    console.log(currentActive);

    update();
})




function update(){
    circle.forEach((circle, idx) => {
        if(idx < currentActive) {
             circle.classList.add('active')
        } else{
            circle.classList.remove('active')
        }
    })
    
    const active = document.querySelectorAll('.active');

    progress.style.width = ((active.length -1)/(circle.length - 1)) * 100 + '%'

    if(currentActive === 1){
        prev.disabled = true
    } else if(currentActive === circle.length){
        next.disabled = true
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
};


