
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
        jQuery('<span>', {
            class: 'bullet-img'
        }).appendTo(header);

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
    
