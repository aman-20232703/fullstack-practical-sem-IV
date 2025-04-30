$(function () {
  // we also use only "$" in place of "(document).ready" like "$(function()...)"
  //jquery code here:-

  //console.log($);
  //console.log("we are using jquery");

  //syntax- $("selector").action()
  //$("p").click();  //click on p
  /*$("p").click(function () {
        console.log("you click on p", this);  //do this when we click on p, here this print html code of selected elemnts
    })*/

  //selectors
  //element selector
  //$("p").click();

  //id selector
  //$("#one").click();

  //class selector
  //$(".two").click()

  //other selector
  //$("*").click()  //click on all the elements
  //$("p.odd").click()  //click on odd class name paragraph
  //$("p:first").click() //click on first paragraph

  //events in jquery(any type of intrection with our website):
  //mouse; click,doubleclick,mousenter,mouseleave
  //keyboard; keypress,keydown,mediakeystaus
  //form; submit,focus,blur,change
  //document/window; load, resize,scroll,unload

  /*$("p").dblclick(function () {
        console.log("you double click on p", this);
    })

    $("p").mouseenter(function () {
        console.log("you entered", this);
    }

    $("p").mousedown(function () {
        console.log("you mousedown", this);
    })

    $("p").mouseup(function () {
        console.log("you mouseup", this);
    })

    $("p").hover(function () {
        console.log("you hovered on", this);
    })*/

  //on method(we can attach multiple events events with a selectors)
  /*$('p').on(
        {
            click: function () {
                console.log("thanks for clicking", this);
            },
            mouseleave: function () {
                console.log("mouseleave")
            }
        });*/

  //hide &show
  /*$(".explain").hide(1000, function () {
        console.log("hidden")
    })
    $(".explain").show(1000, function () {
        console.log("show")
    })*/
  /*$(".btn").click(function(){
        $(".explain").toggle(1000);
    });

    //fade
    /*$(".btn").click(function(){
        $(".explain").fadeOut(1000);
    });
    $(".btn").click(function(){
        $(".explain").fadeIn(1000);
    });
    $(".btn").click(function(){
        $(".explain").fadeTo(1000,0.5);
    });
    $(".btn").click(function(){
        $(".explain").fadeToggle(1000);
    });

    //slide
    $(".btn").click(function(){
        $(".explain").slideToggle(1000);  //(1000)speed,()callback-optional
    });
    $(".btn").click(function(){
        $(".explain").slideUp(1000);
    });
    $(".btn").click(function(){
        $(".explain").slideDown(1000,function(){      //speed and callback parameters are optional
            console.log("done")
        });
    });


//animate
    $(".explain").animate({
        opacity:0.3,
        height:'150px',
        width:'350px'
    },5000) //slow , fast

    //queue animate
    $(".explain").animate({opacity:0.3},4000);   //$(".explain").stop()--it basically stop animation at a desire position
    $(".explain").animate({width:'150px'},1000);
    $(".explain").animate({opacity:1},1000);

    //DOM manipulation of html in jquery
    //*Three simple, but useful, jQuery methods for DOM manipulation are:
        text() - Sets or returns the text content of selected elements
        html() - Sets or returns the content of selected elements (including HTML markup)
        val() - Sets or returns the value of form fields*/

  //html change for particular tag
  //$(".explain").text()                           // set desire text
  //$("body").html("iam setting html elements")  // set ok in the html elements

  //form
  //$("#txt").val("ok dont worry");   //used val in form to change inner text
  //$("#txt").html("ok dnt worry");  //used html to change html elements of any tag
  //$("#in").html("worry");
  //$("#in").val("worry");
  //$(".explain").text("aman kumar")

  /*$(".explain").empty();
    $(".explain").remove()
    $(".explain").addClass("aman kumar")
    $(".explain").removeClass("aman kumar")
    $(".explain").toggleClass("aman kumar,red")

    $(".explain").css("background-color","orange")
    $("p").css({"background-color": "yellow", "font-size": "200%"});
*/

  /*
    $("p").hover(function () {
        console.log("you hovered on", this);
    })*/

  /*const a=document.querySelector("p").innerHTML
    console.log(a)*/

  //jquery Add
  /*We will look at four jQuery methods that are used to add new content:
    append() - Inserts content at the end of the selected elements
    prepend() - Inserts content at the beginning of the selected elements
    after() - Inserts content after the selected elements
    before() - Inserts content before the selected elements*/
  /*$(".btn").click(function(){
        $("p").append(" :hello guys")
    })
    $(".btn").click(function(){
        $("p").prepend("dont worry: ")
    })
    $(".btn").click(function(){
        $("p").before("dont worry: ")
    })
    $(".btn").click(function(){
        $("p").after("dont worry: ")
    })*/

  /*To remove elements and content, there are mainly two jQuery methods:
    remove() - Removes the selected element (and its child elements)
    empty() - Removes the child elements from the selected element
    $(".btn").click(function(){
        $("p").remove()   // if we mention any parameter within remove then it filter that parameter i.e $("p").remove(".test");
    })
    $(".btn").click(function(){
        $("p").empty()
    })*/

  /*jQuery has several methods for CSS manipulation. We will look at the following methods:
    addClass() - Adds one or more classes to the selected elements
    removeClass() - Removes one or more classes from the selected elements
    toggleClass() - Toggles between adding/removing classes from the selected elements
    css() - Sets or returns the style attribute*/

  /*$("btn").click(function(){
        $("p").addClass("blue")
    });
    $("button").click(function(){
        $("#div1").addClass("important blue");
    });
    $("button").click(function(){
        $("#div1").removeClass("important blue");
    });
    $("button").click(function(){
        $("#div1").toggleClass("important blue");
    });*/

  //AJAX is the art of exchanging data with a server, and updating parts of a web page - without reloading the whole page.

  /*Two commonly used methods for a request-response between a client and server are: GET and POST.
    GET - Requests data from a specified resource
    POST - Submits data to be processed to a specified resource
    GET is basically used for just getting (retrieving) some data from the server. Note: The GET method may return cached data.
    POST can also be used to get some data from the server. However, the POST method NEVER caches data, and is often used to send data along with the request.*/
  $(".btn").click(function () {
    /*$.get("https://code.jquery.com/jquery-3.7.1.js",function(data,status){
            alert(data);
        });
        $.get("https://code.jquery.com/jquery-3.7.1.js",function(data,status){
            alert(status,"hello");
        });*/
    $.post(
      "https://code.jquery.com/jquery-3.7.1.js",
      {
        name: "Donald Duck",
        city: "Duckburg",
      },
      function (data, status) {
        alert("Data: " + data);
      }
    );
  });

  //practicals jquery
  //practical 1.
  $(".bt1").click(function () {
    $("h3").slideDown(1000);
  });
  $(".bt2").click(function () {
    $("h3").slideUp(1000);
  });
  $(".bt3").click(function () {
    $("h3").slideToggle(1000);
  });

  // practical 2
  // $(".drag").draggable();
  $(".drop").on("droppable", {
    drop: function (event, ui) {
      $(this).css("background-color", "green").html("dropped!");
    },
  });
  //practical 3
  let x = 0;
  let images = $(".img");
  let length = images.length;

  function slide(n) {
    images.fadeOut(500).eq(n).fadeIn(500);
  }

  $(".forward").click(function () {
    x = (x + 1) % length;
    slide(x);
  });
  $(".backward").click(function () {
    x = (x - 1 + length) % length;
    slide(x);
  });
//practical 4
$.ajax({url: "https://jsonplaceholder.typicode.com/todos",
  type: 'GET',
  dataType:'json',
  success: function(result){
    var tbodyData=" ";
    $.each(result,function(Key,result){
        tbodyData += `<tr>
        <td>${result.user_id}</td>
        <td>${result.id}</td>
        <td>${result.title}</td>
        <td>${result.status}</td>
        </tr>`;
        
    })
    $('tbody').html(tbodyData);
    $('tr:even').css('background-color','#d999dd')

}
})





  /*setInterval(function(){
        x=(x+1)%length;
        slide(x);
    },2000);*/

  //prctical 5
  /*$(".form").submit(function (e) {
        e.preventDefault();
        $("input").removeClass("wrong")

        let Name = $(".name").val();
        let Email = $(".email").val();
        let Mobile = $(".mobile").val();
        let valid = true

        if (Name.length < 3) {
            $(".name").val().attr("placeholder", "name too short").addClass("wrong");
            valid = false;
        }
        if (!/^\S+@\S+\.\S+$/.test(Email)) {
            $(".email").val().attr("placeholder", "email not valid").addClass("wrong");
            valid = false;

        }
        if (!/^\d{10}$/.test(Mobile)) {
            $(".mobile").val().attr("placeholder", "number reenter").addClass("wrong");
            valid = false;
        }
        if (valid) {
            alert("form submitted");
        }
    })*/
   
    $(".Form").submit(function (e) {
    e.preventDefault();

    $(".error").text("");
    $("input").removeClass("wrong");

    let name = $(".name").val();
    let email = $(".email").val();
    let phone = $(".phone").val();
    let Valid = true;

    if (name.length < 3) {
      $(".nameError").text("Enter at least 3 characters");
      $(".name").addClass("wrong");
      Valid = false;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      $(".emailError").text("Enter a valid email");
      $(".email").addClass("wrong");
      Valid = false;
    }

    if (!/^\d{10}$/.test(phone)) {
      $(".phoneError").text("Phone must be 10 digits");
      $(".phone").addClass("wrong");
      Valid = false;
    }

    if (Valid) {
      alert("Form submitted successfully!");
      $(".Form")[0].reset();
    }
  })
})
