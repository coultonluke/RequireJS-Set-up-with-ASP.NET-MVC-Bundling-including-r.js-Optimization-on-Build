define(["require", "exports", "redux", "jquery"], function (require, exports, redux, $) {
    "use strict";
    $("body").outerHeight(true);
    alert("I've loaded");
    function soemthing(state, action) {
        switch (action.type) {
            case "DO_SOMETHING":
                return state;
            default:
                return state;
        }
    }
    redux.createStore(soemthing);
});
//# sourceMappingURL=mymodule.js.map