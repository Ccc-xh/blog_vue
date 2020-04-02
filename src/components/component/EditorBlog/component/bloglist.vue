<template>
    <el-table
    :data="tableData"
    >
    <el-table-column
      label="标题"
      prop="articleTitle">
    </el-table-column>
    <el-table-column
      label="时间"
      prop="publishDate">
    </el-table-column>

    <el-table-column
      align="right">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="edit(scope.$index, scope.row)"
          >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="del(scope.$index, scope.row)"
          >删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
import {simpArticleInfo,editorBlog} from '@/api/templates.js'
export default {
    name:'blogList',
     data() {
      return {
        tableData:[],
      }
    },
    methods: {
        edit(index, row){ //index 当前索引 row信息
            this.$router.push({path:'/edit_blog/editor',query:{articleId:row.articleId}})
        },
        del(index, row){
            var bean  = JSON.stringify(row);
             editorBlog(bean,{type:2})
             .then(res=>{
                // alert(res.data.data)
                 this.$router.go(0)
             })
        }
    },
    mounted() {
       setTimeout(() => {
          simpArticleInfo().then(res=>{
            this.tableData = res.data.data;
        })
       }, 100);
    },
}
</script>
<style scoped>
   .el-table{
     /* width:1200px !important; */
   } 
</style>