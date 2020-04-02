// <template>
// <div class="search_big">
//      <div class="am-g">
//   <div class="am-u-lg-6">
//     <div class="am-input-group am-input-group-primary">
//       <span class="am-input-group-btn">
//         <button class="am-btn am-btn-primary-my" type="button"><span class="am-icon-search"></span></button>
//       </span>
//       <input type="text" class="am-form-field" placeholder="关键字...">
//     </div>
//   </div>
// </div>
// </div>
// </template>
// <script>
// import {link} from '../../../../api/templates.js'
// export default {
//   name: "search",
//  data(){
//     return{
//       data:''
//     }
//   },
//   methods:{

//   },
//   mounted() {
//     link().then(res=>{
//       console.log(res.data.data)
//       this.data = res.data.data
//     })
//   },
// };
// </script>
// <style scoped>
// .search_big{
//     width: 800px;
//     height: 100px;
//     margin: auto;
//     text-align: center;
// }
// .am-g{
//     width: 500px;
//     display: inline-block;
//     margin-top: 25px;
// }
// .am-u-lg-6{
//     width: 100%;
    
// }
// .am-btn{
//     border-color: #908d87 !important;
// }
// .am-form-field{
//     border-color: #908d87!important;
// }
// .am-btn-primary-my{
//     background-color: #908d87;
//     border-color: #908d87;
//     color: white;
// }
// .am-form-field:focus{
//     border-color: #908d87 !important;
// }
// </style>
