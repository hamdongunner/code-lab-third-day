Vue.component('message',{
    "props":['message'],
    'template':`
      <div>
       <div  class="panel panel-default">
       <div class="panel-heading">message {{message.username}}</div>
         <div class="panel-body">
          {{message.message}}
               </div>
          </div>
          
          </div>
          </div>`,

         'data'(){
        return {

        }
    },

});






// Vue.component('task-list',{
//     'template':`<div><task><slot> </slot>codelab</task>
//                 <task><slot> </slot>codelab2</task></div>`,
//     'data'(){
//         // noinspection JSAnnotator
//         return {
//             "lists":["home","about","video","contact"]
//         }
//     }
// });
//
//
// Vue.component('task',{
//     'template':`<div><slot></slot></li></div>`,
//     'data'(){
//         // noinspection JSAnnotator
//     return {
//             "lists":["home","about","video","contact"]
//         }
//     }
//
// });