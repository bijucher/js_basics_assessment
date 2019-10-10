/**
 * Given the HTML below, please make the following changes with javascript – don't change any HTML!:
 *
 * 1. Any time someone clicks on the title at the top "feed template,"
 *    make the color of the "feed template" text change from black to red
 *    and then from red to black when clicked again.
 *
 * 2. The links on the side of the page – "your name," "section 1," "section 2," etc. –
 *    hide every odd-numbered link in the menu.
 *
 * 3. Change every instance of the word "bacon" on the page to be "LASER VISION"
 *
 * 4. Delete the last two posts in the middle section (they have a CSS class "post")
 *
 * 5. Remove the images in the right column
 *
 * BONUS: add a special surprise inside!
 *    
 */

(function () {


    //your code here
    //1.text change from black to red

    let heading = document.querySelector("h1")
    // heading.innerHTML = "hello"
    // heading
    heading.addEventListener("click", function () {
        if (heading.style.color === "red") {
            heading.style.color = "black"
        } else {
            heading.style.color = "red"
        }


    })

    // 2
    let sections = document.querySelectorAll("h5")
    // console.log(sections.length);
    // sections[0].remove()

    for (let i = 0; i < sections.length; i++) {

        if (i % 2 == 1) {
            // console.log(i)
            sections[i].remove(i);
        }
    }


    //3 Change every instance of the word "bacon" on the page to be "LASER VISION"
   
    let paragraph = document.querySelectorAll("p")

    for (let i = 0; i < paragraph.length; i++) {
        // console.log(paragraph[i].innerHTML)
        let str = paragraph[i].innerHTML
        let res = str.replace("Bacon", "LASER VISION")
        // console.log(res)
        paragraph[i].innerHTML = res
    }


    //4. Delete the last two posts in the middle section (they have a CSS class "post")

    let postArray = document.querySelectorAll(".post")
    console.log (postArray)

    console.log (postArray[postArray.length-1])
    console.log (postArray[postArray.length-2])

    postArray[postArray.length-1].remove()
    postArray[postArray.length-2].remove()
    

    //5.Remove the images in the right column
    
    
    let imageColumnRight = document.querySelector("aside")
    console.log(imageColumnRight)
    imageColumnRight.remove()



    












})();