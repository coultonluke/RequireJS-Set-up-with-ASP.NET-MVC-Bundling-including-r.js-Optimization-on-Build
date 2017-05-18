import redux = require("redux");
import $ = require("jquery");

$("body").outerHeight(true);
alert("I've loaded");
function soemthing(state, action)
{
    switch (action.type) {
        case "DO_SOMETHING":
                return state;
        default: 
            return state;
    }
}
redux.createStore(soemthing)