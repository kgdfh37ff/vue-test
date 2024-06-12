<template>
    <div class="common-layout">
      <el-container>
        <el-header>Header</el-header>
        <el-main>
            <div class="mb-4">
                <el-button>Default</el-button>
                <el-button type="primary">Primary</el-button>
                <el-button type="success" @click="testClick">Success</el-button>
                <el-button type="info" @click="gotoPage('page1')">Info</el-button>
                <el-button type="warning" @click="gotoPage('page2')">Warning</el-button>
                <el-button type="danger">Danger</el-button>
            </div>
            <div><p/></div>
            <div><RouterView/></div>
        </el-main>
      </el-container>
    </div>
    

</template>

<script lang="ts" setup>
import {
  Check,
  Delete,
  Edit,
  Message,
  Search,
  Star,
} from '@element-plus/icons-vue'

import {useRouter,useRoute} from 'vue-router'

const router = useRouter()
const route = useRoute()

function testClick(){
  router.push({
    path: '/test1'
  })
}
function gotoPage(page : string){
  router.push({
    path: '/'+page
  })
}

</script>

<style>
body{
  display: block;
}

#app {
  display: contents;
  margin-top: 17px;
}


.common-layout{
  left:0%;
  top: 0%;
}

.el-header {
    display: flex; 
    font-size: 22px;
    width: 100%;
    background-color: #026b62;
    color: var(--el-text-color-primary);
    box-shadow: var(--el-box-shadow);
}
</style>