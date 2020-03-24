({
    clickCreateItem: function(component, event, helper) {
        var validItem = component.find('itemform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        // If we pass error checking, do some real work
        if(validItem){
            // Create the new Item
            var newItem = component.get("v.newItem");
            console.log("Create item: " + JSON.stringify(newItem));
            var items = component.get("v.items");

            // Copy the expense to a new object
            // THIS IS A DISGUSTING, TEMPORARY HACK
            var newItemToPush = JSON.parse(JSON.stringify(newItem));
            
            items.push(newItemToPush);
            component.set("v.items", items);
            var blankitem = '{ \'sobjectType\': \'Camping_Item__c\', \'Name\' : \'\', \'Packed__c\' : false, \'Price__c\': 0, \'Quantity__c\': 0 }';
            component.set("v.newItem",blankitem);

        }
    }
})
