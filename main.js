Vue.component('message',{
    "props":['array'],
    'template':`
      <div>
       <div v-for="(list,index) in array" class="panel panel-default">
       <div class="panel-heading">message {{index+1}} {{list.username}}</div>
         <div class="panel-body">
          {{list.message}}
            </div>
          </div>
          
          </div>
          </div>`,

         'data'(){
        return {
            "text":""
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