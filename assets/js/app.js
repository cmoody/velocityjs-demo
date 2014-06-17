// Custom Easing Function
$.easing["myCustomEase"] = function(p) {
    return 1 - (Math.cos(p * -20 * Math.PI) * Math.exp(-p * 2));
};

// $.easing["spring"] = function(p) {
//     return 1 - (Math.cos(p * 4.5 * Math.PI) * Math.exp(-p * 6));
// };

// latest update might be
// velocity.Easings["spring"] = function(p) {}

$('.box').velocity(
	{
		translateY: [0, 50],
		translateX: [0, 50],
	}, 
	{
		duration: 1000, 
		delay: 2000, 
		easing: "easeInOutElastic",
		loop: 4
	}
);

$('.box2').velocity(
	{
		translateY: [0, 50],
		translateX: [0, 50],
	}, 
	{
		duration: 1000, 
		delay: 2000, 
		easing: "spring",
		loop: 4
	}
);

$('.box3').velocity(
	{
		translateY: [0, 50],
		translateX: [0, 50],
	}, 
	{
		duration: 1000, 
		delay: 2000, 
		easing: "myCustomEase",
		loop: 4
	}
);