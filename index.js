/* i'll crate arrays containing all the images. By clikig in the button of the setting the tyle buttons will change to
the options aviable in the images files. once selected the style wanted the imageshould change to what was selected.*/
//declaration
/// the array of the different styles

/**
 * @param {Array} eyes      - contains all the info about the foto and the bitton refering eyes
 * @param {Array } ears     - contains all the info about the foto and the bitton refering ears
 * @param {Array } hair     - contains all the info about the foto and the bitton refering hair
 * @param {Array } leg      - contains all the info about the foto and the bitton refering leg
 * @param {Array } mouth    - contains all the info about the foto and the bitton refering mouth
 * @param {Array } neck     - contains all the info about the foto and the bitton refering neck
 * @param {Array } acc      - contains all the info about the foto and the bitton refering accessories
 * @param {Array } background   - contains all the info about the foto and the bitton refering backgound
 */
const ears =[
    defauil={
        btnId:`btn-default-ears`,
        btnName:`Default`,
        link:`images/ears/default.png`
    },
    
    {
        btnId:`btn-backward`,
        btnName:`Backward`,
        link:`images/ears/tilt-backward.png`
    },
    {
        btnId:`btn-forward`,
        btnName:`Forward`,
        link:`images/ears/tilt-forward.png`
    }

]

const eyes = [
    {
        btnId:`btn-default-eyes`,
        btnName:`Default`,
        link:`images/eyes/default.png`
    },
    {
        btnId:`btn-angry`,
        btnName:`Angry`,
        link:`images/eyes/angry.png`
    }, 
    {
        btnId:`btn-naughty`,
        btnName:`Naughty`,
        link:`images/eyes/naughty.png`
    },
    {
        btnId:`btn-panda`,
        btnName:`Panda`,
        link:`images/eyes/panda.png`
    },
    {
        btnId:`btn-smart`,
        btnName:`Smart`,
        link:`images/eyes/smart.png`
    },
    {
        btnId:`btn-star`,
        btnName:`Star`,
        link:`images/eyes/star.png`
    },
]
const hair = [
    {
        btnId:`btn-default-hair`,
        btnName:`Default`,
        link:`images/hair/default.png`
    },
    {
        btnId:`btn-bang`,
        btnName:`Bang`,
        link:`images/hair/bang.png`
    },
    {
        btnId:`btn-curls`,
        btnName:`Curls`,
        link:`images/hair/curls.png`
    },
    {
        btnId:`btn-elegant`,
        btnName:`Elengat`,
        link:`images/hair/elegant.png`
    },
    {
        btnId:`btn-fancy`,
        btnName:`Fancy`,
        link:`images/hair/fancy.png`
    },
    {
        btnId:`btn-quiff`,
        btnName:`Quiff`,
        link:`images/hair/quiff.png`
    },
    {
        btnId:`btn-short`,
        btnName:`Short`,
        link:`images/hair/short.png`
    },
]
const leg  = [
    {
        btnId:`btn-default-leg`,
        btnName:`Default`,
        link:`images/leg/default.png`
    },
    {
        btnId:`btn-bubble-tea`,
        btnName:`Bubble-tea`,
        link:`images/leg/bubble-tea.png`
    },
    {
        btnId:`btn-cookie`,
        btnName:`Cookie`,
        link:`images/leg/cookie.png`
    },
    {
        btnId:`btn-game-console`,
        btnName:`Game Console`,
        link:`images/leg/game-console.png`
    },
    {
        btnId:`btn-backward`,
        btnName:`Tilt backward`,
        link:`images/leg/tilt-backward.png`
    },
    {
        btnId:`btn-forward`,
        btnName:`Tilt forward`,
        link:`images/leg/tilt-forward.png`
    },
]
const mouth = [
    {
        btnId:`btn-default-mouth`,
        btnName:`Default`,
        link:`images/mouth/default.png`
    },
    {
        btnId:`btn-astonished`,
        btnName:`Astonished`,
        link:`images/mouth/astonished.png`
    },
    {
        btnId:`btn-eating`,
        btnName:`Eating`,
        link:`images/mouth/eating.png`
    },
    {
        btnId:`btn-laugh`,
        btnName:`Laugh`,
        link:`images/mouth/laugh.png`
    },
    {
        btnId:`btn-tongue`,
        btnName:`Tongue`,
        link:`images/mouth/ tongue.png`
    },
]
 const neck = [
    {
        btnId:`btn-default-neck`,
        btnName:`Default`,
        link:`images/neck/default.png`
    },
    {
        btnId:`btn-backwards`,
        btnName:`Bend backwards`,
        link:`images/neck/bend-backwards.png`
    },
    {
        btnId:`btn-forward`,
        btnName:`Bend forward`,
        link:`images/neck/bend-forward.png`
    },
    {
        btnId:`btn-thick`,
        btnName:`Thick`,
        link:`images/neck/thick.png`
    },
]
const acc = [
    {
        btnId:`btn-none`,
        btnName:`None`,
        link:``
    },
    {
        btnId:`btn-earings`,
        btnName:`Earings`,
        link:`images/accessories/earings.png`
    },
    {
        btnId:`btn-flower`,
        btnName:`Flower`,
        link:`images/accessories/flower.png`
    },
    {
        btnId:`btn-glasses`,
        btnName:`Galsses`,
        link:`images/accessories/glasses.png`
    },
    {
        btnId:`btn-headphone`,
        btnName:`Headphone`,
        link:`images/accessories/headphone.png`
    },
]
const background = [
    {
        btnId:`btn-blue50`,
        btnName:`Blue50`,
        link:`images/backgrounds/blue50.png`
    },
    {
        btnId:`btn-blue60`,
        btnName:`Bleu60`,
        link:`images/backgrounds/blue60.png`
    },
    {
        btnId:`btn-blue70`,
        btnName:`Blue70`,
        link:`images/backgrounds/blue70.png`
    },
    {
        btnId:`btn-dark-blue30`,
        btnName:`Dark blue30`,
        link:`images/backgrounds/darkblue30.png`
    },
    {
        btnId:`btn-dark-blue50`,
        btnName:`Dark bleu50`,
        link:`images/backgrounds/darkblue50.png`
    },
    {
        btnId:`btn-dark-blue70`,
        btnName:`Dark blue70`,
        link:`images/backgrounds/darkblue70.png`
    },
    {
        btnId:`btn-green50`,
        btnName:`Green50`,
        link:`images/backgrounds/green50.png`
    },
    {
        btnId:`btn-green60`,
        btnName:`Green60`,
        link:`images/backgrounds/green60.png`
    },
    
    {
        btnId:`btn-green70`,
        btnName:`Green70`,
        link:`images/backgrounds/green70.png`
    },
    {
        btnId:`btn-grey40`,
        btnName:`Gray40`,
        link:`images/backgrounds/gray40.png`
    },
    {
        btnId:`btn-grey70`,
        btnName:`Gray70`,
        link:`images/backgrounds/gray70.png`
    },
    {
        btnId:`btn-grey80`,
        btnName:`Gray80`,
        link:`images/backgrounds/gray80.png`
    },
    {
        btnId:`btn-red50`,
        btnName:`Red50`,
        link:`images/backgrounds/red500.png`
    },
    {
        btnId:`btn-red60`,
        btnName:`Red60`,
        link:`images/backgrounds/red60.png`
    },{
        btnId:`btn-red70`,
        btnName:`Red70`,
        link:`images/backgrounds/red70.png`
    },
    {
        btnId:`btn-yellow50`,
        btnName:`Yellow50`,
        link:`images/backgrounds/yellow500.png`
    },
    {
        btnId:`btn-yellow60`,
        btnName:`Yellow60`,
        link:`images/backgrounds/yellow60.png`
    },
    {
        btnId:`btn-yellow70`,
        btnName:`Yellow70`,
        link:`images/backgrounds/yellow70.png`
    },
]

//const to use when changin the style of the buttons
/** 
 * I can't find why in the funtion setSelected i could not change this string so i make it an object
 * @param {object} selectedAcce -is the current selected button on the Accessories 
 * @param {object} selectedOption- is the current selected button onthe style
 */
const selectedAcce = {value:""}
const selectedOption= {value:""}


/**
 * 
 * @param {Array<string>} array - the array containing all the names and the id of the buttons for the style selected
 */
function styleChoises(array){
    let choises=" "
    array.forEach(element => {
        choises+=`<button class="btn" id="${element.btnId}">${element.btnName}</button>`
    });
    document.getElementById("alpaca-style").innerHTML ="<h4>Style</h4>" + choises
}

/**
 * 
 * @param {selectedAcce} oldS -   is the id of the element that is gonna be removed from the class "selected"
 * @param {stringt} newS -   is the id of the new element in the class"selected"
 */
function setSelected(oldS,newS){
    document.getElementById(newS).classList.add("selected")
        if( oldS.value) 
            document.getElementById(oldS.value).classList.remove("selected")
    oldS.value = newS
}



// create the funtions that gonna change the style selection

document.getElementById("btn-hair").addEventListener("click",function(){
    styleChoises(hair)
    selectedOption.value=""
    setSelected(selectedAcce,"btn-hair")
    setSelected(selectedOption,"btn-default-hair")
    document.getElementById("btn-default-hair").addEventListener("click",function(){
        document.getElementById("img-hair").src = "images/hair/default.png"
        setSelected(selectedOption,"btn-default-hair")
    })
    document.getElementById("btn-bang").addEventListener("click",function(){
        document.getElementById("img-hair").src = "images/hair/bang.png"
        setSelected(selectedOption,"btn-bang")
    })
    document.getElementById("btn-curls").addEventListener("click",function(){
        document.getElementById("img-hair").src = "images/hair/curls.png"
        setSelected(selectedOption,"btn-curls")
    })
    document.getElementById("btn-elegant").addEventListener("click",function(){
        document.getElementById("img-hair").src = "images/hair/elegant.png"
        setSelected(selectedOption,"btn-elegant")
    })
    document.getElementById("btn-fancy").addEventListener("click",function(){
        document.getElementById("img-hair").src = "images/hair/fancy.png"
        setSelected(selectedOption,"btn-fancy")
    })
    document.getElementById("btn-quiff").addEventListener("click",function(){
        document.getElementById("img-hair").src = "images/hair/quiff.png"
        setSelected(selectedOption,"btn-quiff")
    })
    document.getElementById("btn-short").addEventListener("click",function(){
        document.getElementById("img-hair").src = "images/hair/short.png"
        setSelected(selectedOption,"btn-short")
    })  
})


document.getElementById("btn-ears").addEventListener("click",function(){
    styleChoises(ears)
    selectedOption.value=""
    setSelected(selectedAcce,"btn-ears")
    setSelected(selectedOption,"btn-default-ears")
    document.getElementById("btn-default-ears").addEventListener("click",function(){
        document.getElementById("img-ears").src = "images/ears/default.png"
        setSelected(selectedOption,"btn-default-ears")
    })
    document.getElementById("btn-forward").addEventListener("click",function(){
        document.getElementById("img-ears").src = "images/ears/tilt-forward.png"
        setSelected(selectedOption,"btn-forward")
    })
    document.getElementById("btn-backward").addEventListener("click",function(){
        document.getElementById("img-ears").src = "images/ears/tilt-backward.png"
        setSelected(selectedOption,"btn-backward")
    })
    
    
})

document.getElementById("btn-eyes").addEventListener("click",function(){
    styleChoises(eyes)
    selectedOption.value=""
    setSelected(selectedOption,"btn-default-eyes")
    setSelected(selectedAcce,"btn-eyes")
    document.getElementById("btn-default-eyes").addEventListener("click",function(){
        document.getElementById("img-eyes").src = "images/eyes/default.png"
        setSelected(selectedOption,"btn-default-eyes")
    })
    document.getElementById("btn-angry").addEventListener("click",function(){
        document.getElementById("img-eyes").src = "images/eyes/angry.png"
        setSelected(selectedOption,"btn-angry")
    })
    document.getElementById("btn-naughty").addEventListener("click",function(){
        document.getElementById("img-eyes").src = "images/eyes/naughty.png"
        setSelected(selectedOption,"btn-naughty")
    })
    document.getElementById("btn-panda").addEventListener("click",function(){
        document.getElementById("img-eyes").src = "images/eyes/panda.png"
        setSelected(selectedOption,"btn-panda")
    })
    document.getElementById("btn-smart").addEventListener("click",function(){
        document.getElementById("img-eyes").src = "images/eyes/smart.png"
        setSelected(selectedOption,"btn-smart")
    })
    document.getElementById("btn-star").addEventListener("click",function(){
        document.getElementById("img-eyes").src = "images/eyes/star.png"
        setSelected(selectedOption,"btn-star")
    })
})

document.getElementById("btn-mouth").addEventListener("click",function(){
    styleChoises(mouth)
    selectedOption.value=""
    setSelected(selectedOption,"btn-default-mouth")
    document.getElementById("btn-default-mouth").addEventListener("click",function(){
        document.getElementById("img-mouth").src = "images/mouth/default.png"
        setSelected(selectedOption,"btn-default-mouth")
    })
    document.getElementById("btn-astonished").addEventListener("click",function(){
        document.getElementById("img-mouth").src = "images/mouth/astonished.png"
        setSelected(selectedOption,"btn-astonished")
    })
    document.getElementById("btn-eating").addEventListener("click",function(){
        document.getElementById("img-mouth").src = "images/mouth/eating.png"
        setSelected(selectedOption,"btn-eating")
    })
    document.getElementById("btn-laugh").addEventListener("click",function(){
        document.getElementById("img-mouth").src = "images/mouth/laugh.png"
        setSelected(selectedOption,"btn-laugh")
    })
    document.getElementById("btn-tongue").addEventListener("click",function(){
        document.getElementById("img-mouth").src = "images/mouth/tongue.png"
        setSelected(selectedOption,"btn-tongue")
    })
})
document.getElementById("btn-neck").addEventListener("click",function(){
    styleChoises(neck)
    selectedOption.value=""
    setSelected(selectedOption,"btn-default-neck")
    document.getElementById("btn-default-neck").addEventListener("click",function(){
        document.getElementById("img-neck").src = "images/neck/default.png"
    setSelected(selectedOption,"btn-default-neck")

    })
    document.getElementById("btn-backwards").addEventListener("click",function(){
        document.getElementById("img-neck").src = "images/neck/bend-backward.png"
        setSelected(selectedOption,"btn-backwards")

    })
    document.getElementById("btn-forward").addEventListener("click",function(){
        document.getElementById("img-neck").src = "images/neck/bend-forward.png"
        setSelected(selectedOption,"btn-forward")

    })
    document.getElementById("btn-thick").addEventListener("click",function(){
        document.getElementById("img-neck").src = "images/neck/thick.png"
        setSelected(selectedOption,"btn-thick")
    })
})
document.getElementById("btn-leg").addEventListener("click",function(){
    styleChoises(leg)
    selectedOption.value=""
    setSelected(selectedOption,"btn-default-leg")
    document.getElementById("btn-default-leg").addEventListener("click",function(){
        document.getElementById("img-leg").src = "images/leg/default.png"
        setSelected(selectedOption,"btn-default-leg")
    })
    document.getElementById("btn-bubble-tea").addEventListener("click",function(){
        document.getElementById("img-leg").src = "images/leg/bubble-tea.png"
        setSelected(selectedOption,"btn-bubble-tea")
    })
    document.getElementById("btn-cookie").addEventListener("click",function(){
        document.getElementById("img-leg").src = "images/leg/cookie.png"
        setSelected(selectedOption,"btn-cookie")
    })
    document.getElementById("btn-game-console").addEventListener("click",function(){
        document.getElementById("img-leg").src = "images/leg/game-console.png"
        setSelected(selectedOption,"btn-game-console")
    })
    document.getElementById("btn-backward").addEventListener("click",function(){
        document.getElementById("img-leg").src = "images/leg/tilt-backward.png"
        setSelected(selectedOption,"btn-backwar")
    })
    document.getElementById("btn-forward").addEventListener("click",function(){
        document.getElementById("img-leg").src = "images/leg/tilt-forward.png"
        setSelected(selectedOption,"btn-forward")
    })
})

document.getElementById("btn-accessories").addEventListener("click",function(){

    styleChoises(acc)
    selectedOption.value =""
    setSelected(selectedOption,"btn-none")
   
    document.getElementById("btn-none").addEventListener("click",function(){
        document.getElementById("img-acc").src = ""
        setSelected(selectedOption,"btn-none")
    })

    document.getElementById("btn-earings").addEventListener("click",function(){
        document.getElementById("img-acc").src = "images/accessories/earings.png"
        setSelected(selectedOption,"btn-earings")
    })
    document.getElementById("btn-flower").addEventListener("click",function(){
        document.getElementById("img-acc").src = "images/accessories/flower.png"
        setSelected(selectedOption,"btn-flower")
    })
    document.getElementById("btn-glasses").addEventListener("click",function(){
        document.getElementById("img-acc").src = "images/accessories/glasses.png"
        setSelected(selectedOption,"btn-glasses")
    })
    document.getElementById("btn-headphone").addEventListener("click",function(){
        document.getElementById("img-acc").src = "images/accessories/headphone.png"
        setSelected(selectedOption,"btn-headphone")
    })
    
    
})

document.getElementById("btn-background").addEventListener("click",function(){
    styleChoises(background)
    selectedOption.value = ""
    setSelected(selectedOption,"btn-blue50")

    document.getElementById("btn-blue50").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/blue50.png)"
        setSelected(selectedOption,"btn-blue50")
    })

    document.getElementById("btn-blue60").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/blue60.png)"
        setSelected(selectedOption,"btn-blue60")
    })

    document.getElementById("btn-blue70").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/blue70.png)"
        setSelected(selectedOption,"btn-blue70")
    })

    document.getElementById("btn-dark-blue30").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/darkblue30.png)"
        setSelected(selectedOption,"btn-dark-blue30")
    })

    document.getElementById("btn-dark-blue50").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/darkblue50.png)"
        setSelected(selectedOption,"btn-dark-blue50")
    })

    document.getElementById("btn-dark-blue70").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/darkblue70.png)"
        setSelected(selectedOption,"btn-dark-blue70")
    })

    document.getElementById("btn-green50").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/green50.png)"
        setSelected(selectedOption,"btn-green50")
    })

    document.getElementById("btn-green60").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/green60.png)"
        setSelected(selectedOption,"btn-green60")  
    })

    document.getElementById("btn-green70").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/green70.png)"
        setSelected(selectedOption,"btn-green70") 
    })

    document.getElementById("btn-grey40").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/grey40.png)"
        setSelected(selectedOption,"btn-grey40") 
    })

    document.getElementById("btn-grey70").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/grey70.png)"
        setSelected(selectedOption,"btn-grey70")
    })

    document.getElementById("btn-grey80").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/grey80.png)"
        setSelected(selectedOption,"btn-grey80")
    })
    document.getElementById("btn-red50").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/red50.png)"
        setSelected(selectedOption,"btn-red50")
    })
    document.getElementById("btn-red60").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/red60.png)"
        setSelected(selectedOption,"btn-red60")
    })
    document.getElementById("btn-red70").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/red70.png)"
        setSelected(selectedOption,"btn-red70")
    })
    document.getElementById("btn-yellow60").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/yellow60.png)"
        setSelected(selectedOption,"btn-yellow60")
    })
    document.getElementById("btn-yellow70").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/yellow70.png)"
        setSelected(selectedOption,"btn-yellow70")
    })
    document.getElementById("btn-yellow50").addEventListener("click",function(){
        document.getElementById("imgContainer").style.backgroundImage="url(images/backgrounds/yellow50.png)"
        setSelected(selectedOption,"btn-yellow50")
    })
})


//the last two buttons 
document.getElementById("random").addEventListener("click", function(){
    document.getElementById("img-neck").src = neck[Math.floor(neck.length * Math.random())].link
    document.getElementById("img-ears").src = ears[Math.floor(ears.length * Math.random())].link
    document.getElementById("img-hair").src = hair[Math.floor(hair.length * Math.random())].link
    document.getElementById("img-eyes").src = eyes[Math.floor(neck.length * Math.random())].link
    document.getElementById("img-mouth").src = mouth[Math.floor(mouth.length * Math.random())].link
    document.getElementById("img-leg").src = leg[Math.floor(leg.length * Math.random())].link
    document.getElementById("img-acc").src = acc[Math.floor(acc.length * Math.random())].link
    document.getElementById("imgContainer").style.backgroundImage = background[Math.floor(background.length * Math.random())].link

})





