export default class Events {
    constructor() {
        this.Event = {}
    }
    $on(eventsName, callback) {
        this.Event[eventsName] = this.Event[eventsName] || []
        this.Event[eventsName].push(callback)
    }
    $emit(eventsName, ...arguments) {
        this.Event[eventsName] && this.Event[eventsName].forEach(item => item(...arguments));
    }

}


//  先$on
//  再$emit
//  eventsName  事件名称   callback 回调函数 ...arguments 参数(可传可不传)