var moveForce = 7;
var rotateForce = 1;
$(document).on('mousemove', function(e) {
        var docX = $(document).width(),
            docY = $(document).height(),
            moveX = (e.pageX - docX/2) / (docX/2) * moveForce,
            moveY = (e.pageY - docY/2) / (docY/2) * moveForce,
            rotateY = (e.pageX / docX * rotateForce*2) - rotateForce,
            rotateX = -((e.pageY / docY * rotateForce*2) - rotateForce);


        $('#element')
            .css('left', moveX+'px')
            .css('top', moveY+'px')
            .css('transform', 'rotateX('+rotateX+'deg) rotateY('+rotateY+'deg) ');
});
