var apiclient = (function () {

    return {
        getBlueprintsByAuthor: function(author) {
            return $.get("/blueprints/" + author);
        },

        getBlueprintsByNameAndAuthor: function(author, name) {
            return $.get("/blueprints/" + author + "/" + name);
        },

        updateBlueprint: function(author, bpname, blueprint) {
            return $.ajax({
                url: "/blueprints/" + author + "/" + bpname,
                type: 'PUT',
                data: JSON.stringify(blueprint),
                contentType: "application/json"
            });
        },

        createBlueprint: function(blueprint) {
            return $.ajax({
                url: "/blueprints",
                type: 'POST',
                data: JSON.stringify(blueprint),
                contentType: "application/json"
            });
        },

        deleteBlueprint: function(author, bpname) {
            return $.ajax({
                url: "/blueprints/" + author + "/" + bpname,
                type: 'DELETE'
            });
        }
    };

})();
