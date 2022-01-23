import {Applyable} from "./applyable.model";

export class Activity extends Applyable {
    type: string;
    activity: string;
    participants: number;
    price: number;
    link: string;
    key: string;
    accessibility: number;

    constructor() {
        super();
    }
}
