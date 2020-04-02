import Vue from 'vue'
import VueRouter from 'vue-router'
import {isLogin} from '@/api/templates'
const routerPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {

  return routerPush.call(this, location).catch(error=> error)

}

Vue.use(VueRouter)

const routes = [
    
    {path:'/',redirect:'/index'},
    {
      path:'/index',
      component:()=>import('@/components/component/index_compoent/index/Index.vue'),
    },
    {
      path:'/blog_diary',
      component:()=>import('@/components/component/blog_content/index/blog_diary.vue'),
      children:[
        {path:'',component:()=>import('@/components/component/blog_content/default_line.vue')},
        {path:'fl',component:()=>import('@/components/component/blog_content/fl_line.vue')}
      ]
    
    },
    {path:'/slow_life',component:()=>import('@/components/component/slow_life/index.vue')},
    {path:'/about_me',component:()=>import('@/components/component/aboutme/index.vue')},
    {path:'/friendship_links',component:()=>import('@/components/component/friendsUrl/index.vue')},
    {path:'/message_board',component:()=>import('@/components/component/messageboard/index.vue')},
    {path:'/content_xl',component:()=>import('@/components/component/content/index.vue')},
    {
      path:'/edit_blog',
      component:()=>import('@/components/component/EditorBlog/index.vue'),
      children:[
        {path:'',component:()=>import('@/components/component/EditorBlog/component/bloglist.vue')},
        {path:'blogs',component:()=>import('@/components/component/EditorBlog/component/bloglist.vue')},
        {path:'editor',component:()=>import('@/components/component/EditorBlog/component/markdown.vue')},
      ]
    },
    {path:'/login',component:()=>import('@/components/component/login/login.vue')},
    {path:'/register',component:()=>import('@/components/component/login/register.vue')},
]

const router = new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{

  if (to.path === '/login') {
    next();
  } else if(to.path === '/edit_blog'){
    isLogin().then(res=>{
      if (res.data.no === -1 | res.data.no === -2) {
        alert(res.data.data)
        res.data.no === -2 ? next('/login'):next('/index');
      } else {
        next();
      }
    })
  }
  next()
})
export default router
