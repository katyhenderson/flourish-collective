$(document).ready(function(){

// MOBILE NAVIGATION
// ==================================================================================

	var header = $("header");
	var menu = $("a#menu_button");
	var responsiveMenu = $("#responsive_nav");


	// Responsive Menu
	menu.toggle(function() {
		$("#menu_line02").hide();
		responsiveMenu.animate({
			marginRight: "0"
		}, 400, "easeInOutQuart");
		$(this).addClass("close");
		return false;
	}, function() {
		$("#menu_line02").show();
		responsiveMenu.animate({
			marginRight: "-=100%"
		}, 300, "easeInOutQuart");
		$(this).removeClass("close");
		return false;
	});

	$(window).resize(function(){
		var w = $(this).width();
		if(w > 767 && menu.hasClass("close")) {
			menu.click();
		}
	});
});

// var blogTitle, text;
// blogTitle = ["TitleOne", "TitleTwo", "TitleThree"];

// var blog = { 
//     blogTitle: ["TitleOne", "TitleTwo", "TitleThree"],
//     blogContent: ["contentOne", "contentTwo", "contentThree"]
// };
// var blog = [
// 					  { title: 'titleOne',
// 					    content: 'contentOne',
// 					    link: '',
// 					  },
// 					  { title: 'titleTwo',
// 					    content: 'contentTwo',
// 					    link: 'contentOne',

// 					  },
// 					  { title: 'titleThree',
// 					    content: 'contentThree',
// 					    link: 'contentOne',

// 					  },
// 					];

// var i = 0;
// var text = "";

// for (;blog[i];) {
//   // text += blog[i] + "<br>";
//   text += "<h2>" + blog[i].title + "</h2>";
//   text += "<p>" + blog[i].content + "</p>";
//   i++;
// }

// document.getElementById("title").innerHTML=text;


// text = "<div>";
// blogTitle.forEach(myFunction);
// text += "</div>";
// document.getElementById("title").innerHTML=text;

// function myFunction(value) {
//   text += "<h2>" + value + "</h2>";
// } 

// var blogContent, text;
// blogContent = ["contentOne", "contentTwo", "contentThree"];

// text = "<div>";
// blogContent.forEach(myFunctionContent);
// text += "</div>";
// document.getElementById("content").innerHTML=text;

// function myFunctionContent(value){
// 	text += "<p>" + value + "</p>";
// }



