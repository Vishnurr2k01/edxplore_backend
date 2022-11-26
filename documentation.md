# user

# /user : 
        post : register (email, password, username)
        /login : 
                post : login (email,password)

## resources 

# /res : 
        get : get all resources
        post : add resources (uid, title, description, link, type, category )

        /:id 
            post : update resource (vote) id=rid
            delete : delete resource by id
        /user/:id
            get : get resources added by a user (id = uid)

## bookmarks

# /bookmark
        /:id
            post : add bookmark (uid)  id:rid
            get : get bookmarks by user id:uid
            delete : delete a bookmark      id: bid(bookmark id)
