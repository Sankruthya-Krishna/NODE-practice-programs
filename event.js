const EventEmitter =require('events');
const myEmitter = new EventEmitter();
// myEmitter.on("TEST_EVENT",()=>{
//     console.log("TEST_EVENT wasdf fired");
// });
// myEmitter.on("TEST_EVENT1",()=>{
//     console.log("TEST_EVNET wasf fired");
// });
// myEmitter.on("TEST_EVENT2",()=>{
//     console.log("TEST_EVNET was dfired");
// });
//;
//******************************************************


// myEmitter.on("ORDER_DELEVERED_SUCCESSFULLY",()=>{
//     console.log("logic to send mail to customer");
// });
// myEmitter.on("ORDER_DELEVERED_SUCCESSFULLY",()=>{
//     console.log("write logic to send sms to customer");
// });
// myEmitter.on("ORDER_DELEVERED_SUCCESSFULLY",()=>{
//     console.log("remove the item from amazon inventory");
// });
//myEmitter.emit("ORDER_DELEVERED_SUCCESSFULLY");
//use emit to emit an event.......use on to subscribe the event
//******************************************************************* */
const myEventHandler =()=>{
    console.log('custom event fired');
}
myEmitter.on('customEvent',myEventHandler);
myEmitter.emit('customEvent');

myEmitter.removeListener('customEvent',myEventHandler);
myEmitter.emit('customEvent');
