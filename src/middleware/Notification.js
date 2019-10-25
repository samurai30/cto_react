import * as Push from "push.js";
import {api} from "../super_agent";
import {THRESHOLD_FAIL} from "../actions/defaults";


export const notificationMiddleware = store => next => action =>{
    switch (action.type) {
        case THRESHOLD_FAIL:
            Push.create('Hello',{
                body: 'test not',
                timeout: 2000,
                onClick: ()=>{
                    window.focus();
                    this.close;
                }
            });

            break;
        default:
    }
    next(action)
};