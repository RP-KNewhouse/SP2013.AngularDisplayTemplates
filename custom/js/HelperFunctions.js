//Helper functions

var TemplateRenderCount = 0;
function OnPostRenderDisplayTemplate() {
    TemplateRenderCount++;
    if (TemplateRenderCount >= TemplateRenderTrigger) {
        angular.bootstrap(document, ['AngularApp']);
    }
}


/* Return the current site's absolute URL.*/
function getCurrentSiteUrl() {
    return _spPageContextInfo.siteAbsoluteUrl;
}

/*Check if a value is null or empty*/
function valueExists(value) {
    if (value === null || value === "") {
        return false;
    } return true;
}

/*
 * Get the result items and properties from a given ctx object
 * Properties depend on the managed property mappings in WP_Item_Angular_Blank.html
 * If a property comes back null, check the mappings and the values in the search index using SP Search Query Tool: https://sp2013searchtool.codeplex.com/
 */
function getResultRows(ctx) {
    var ResultRows = [];
    if (!valueExists(ctx)) {
        return;
    }
    angular.forEach(ctx.ListData.ResultTables[0].ResultRows, function(row) {
        if (typeof ctx['DisplayTemplateData'] === "undefined") {
            ctx['DisplayTemplateData'] = new Object();
        }
        if (typeof this.DisplayTemplateData.ManagedPropertyMapping === "undefined") {
            // Retrieve the item template
            var itemTemplate = Srch.U.resolveRenderTemplate(ctx, row, "Item");
            // Execute the item template
            CoreRender(itemTemplate, ctx);
            // Set the display template property mappings
            ctx['DisplayTemplateData']['ManagedPropertyMapping'] = this.DisplayTemplateData.ManagedPropertyMapping;
        }

        ctx['CurrentItem'] = row;

        var item = [];
        /* CUSTOM MAPPED PROPERTIES ARE GRABBED IN THE BLOCK BELOW */
        item.Created = $getItemValue(ctx, "Created").value;
        item.ListID = $getItemValue(ctx, "List ID").value;
        item.ListItemID = $getItemValue(ctx, "List Item ID").value;
        item.FileName = $getItemValue(ctx, "File Name").value;
        item.PictureURL = $getItemValue(ctx, "PictureURL").value;
        item.Path = $getItemValue(ctx, "Path").value;
        item.Description = $getItemValue(ctx, "Description").value;
        item.ContentType = $getItemValue(ctx, "Content Type").toString();
        item.Title = $getItemValue(ctx, 'Title').toString();
        item.FileExtension = $getItemValue(ctx, "FileExtension").toString();
        item.SecondaryFileExtension = $getItemValue(ctx, "SecondaryFileExtension").toString();
        item.FileSize = $getItemValue(ctx, "Size").toString();
        item.LastModifiedBy = $getItemValue(ctx, "Modified By").toString();
        ResultRows.push(item);
    });
    return ResultRows;
}
