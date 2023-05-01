
$(document).ready(function(){

    


    $.getJSON('reviews.json', function(data) {
     arr = JSON.parse(data)
     arr.forEach(function(item){
       
        let id = generateGuid()
        jQuery('<div>', {
            id: id,
            class: 'card',
            
        }).appendTo('#rcontainer');

        let card = $("#"+id);
        jQuery('<p>', {
            class: "card-text",
            text: item.text
            
        }).appendTo(card);

        jQuery('<header>', {
        }).appendTo(card);

        let header = $("#"+id+" header")
        let bulletId = generateGuid()
        jQuery('<span>', {
            class: 'bullet-img',
            id: bulletId,
        }).appendTo(header);

        let img = $("#"+bulletId);
        jQuery('<i>', {
            class: 'fa-solid fa-user',
            style: 'color: #ffffff;'
        }).appendTo(img);

        jQuery('<div>', {
            class: 'bullet-user'
        }).appendTo(header);

        let bullet_user = $("#"+id+" .bullet-user")

        jQuery('<b>', {
            text: item.username
        }).appendTo(bullet_user);

        jQuery('<p>', {
            text: item.date
        }).appendTo(bullet_user);
        
        
        
     })
    });
});

function generateGuid() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
    }
    
