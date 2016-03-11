module.exports = {
    add: function(collection, data){
        //if data.id and item exists item = item
        //else item = new item
        //update item with data
        //return data with id
    },
    update: function(collection, data){
        // if id not found add
        // find item in collection and update with data
        // return data
    },
    remove: function(collection, id){
        // if id not found return false
        // else remove item, return true
    },
    get: function(query){
        //return query results
    }
}