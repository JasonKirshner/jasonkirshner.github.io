import $ from 'jquery'
import Typed from 'typed.js'
import Rellax from 'rellax'

/* Function called once page is loaded */
$(document).ready(() => {
    // Fade in page on page load
    $("body").fadeIn(1000)

    // Arrow animation at beginning
    $('#arrow').hide()

    // Console intro
    consoleType()

    $(window).scroll(() => {
        colorNav()
    })

    // Logo hover animation
    $('.logo').hover(() => {
        $('.name-rmdr').toggle(400)
    }, () => {
        $('.name-rmdr').toggle(400)
    })

    // Load Parallax Views
    parallaxViews()
})


var colorNav = () => {
    let pos = $(window).scrollTop()
    let pj1Pos = $('.pj1').position()
    if (pos >= (pj1Pos.top - 56)) {
        $('.navbar').css('backgroundColor', 'rgba(0,0,0,0.2')
    } else
        $('.navbar').css('backgroundColor', 'transparent')
}
/* Parallax Views */
var parallaxViews = () => {
    new Rellax('.pj1 .parallax-img', {
        speed: 4,
        center: true
    })

    new Rellax('.pj2 .parallax-img:first-child', {
        speed: 7,
        center: true
    })

    new Rellax('.pj2 .parallax-img:nth-child(2)', {
        speed: 2,
        center: true
    })
}

/* Console Intro */
var consoleType = () => {
    new Typed('.ny', {
        strings: ['<h2 id="intro-title-1">Born in New York</h2>'],
        typeSpeed: 20,
        backSpeed: 20,
        startDelay: 500,
        cursorChar: '',
        onComplete: (self) => {
            $('.typed-cursor:eq(0)').hide()
            $('.name:eq(1)').show()
            $('.typed-cursor:eq(1)').show()
        }
    })

    new Typed('.sd', {
        strings: ['<h2 id="intro-title-2">Raised in San Diego</h2>'],
        typeSpeed: 20,
        backSpeed: 20,
        startDelay: 2000,
        cursorChar: '',
        onComplete: (self) => {
            $('.typed-cursor:eq(1)').hide()
            $('.name:eq(2)').show()
            $('.typed-cursor:eq(2)').show()
        }
    })

    new Typed('.title', {
        strings: ['<h2 id="intro-title-3">Full Stack Web &amp; Mobile App Developer</h2>'],
        typeSpeed: 20,
        backSpeed: 20,
        startDelay: 3000,
        cursorChar: '',
        onComplete: (self) => {
            $('#arrow').show()
        }
    })
}

// const $this = $(this),
//     flag = $this.data("clickflag")
// if (!flag) {
//     $('.nav-links-mobile').css('display', 'inline-block')
//     $('.nav-links-mobile').animate({
//         height: '100%'
//     }, 500)
//     $('#top').animate({}, {
//         duration: 500,
//         start: function (always) {
//             $(this).css({
//                 transition: 'ease-in .3s',
//                 transform: 'rotate(45deg) translateY(.7em)'
//             })
//             $('#mid').fadeToggle(200)
//         }
//     })
//     $('#bot').animate({}, {
//         duration: 500,
//         start: function (always) {
//             $(this).css({
//                 transition: 'ease-in .3s',
//                 transform: 'rotate(-45deg) translateY(-.7em)',
//             })
//         }
//     })
// } else {
//     $('.nav-links-mobile').animate({
//         height: 0
//     }, 500, () => {
//         $('.nav-links-mobile').css('display', 'none')
//     })
//     $('#top').animate({}, {
//         duration: 500,
//         start: function (always) {
//             $(this).css({
//                 transition: 'ease-in .3s',
//                 transform: 'rotate(0) translateY(0)'
//             })
//             $('#mid').fadeToggle(500)
//         }
//     })
//     $('#bot').animate({}, {
//         duration: 500,
//         start: function (always) {
//             $(this).css({
//                 transition: 'ease-in .3s',
//                 transform: 'rotate(0) translateY(0)',
//             })
//         }
//     })
// }
// $this.data("clickflag", !flag)