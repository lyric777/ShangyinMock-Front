<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout-header class="header">
      <div class="logo">Shangyin Mock</div>
      <a-menu
        theme="dark"
        mode="horizontal"
        :default-selected-keys="['2']"
        :style="{ lineHeight: '64px' }"
      >
        <a-menu-item key="1">
          接口管理
        </a-menu-item>
        <a-menu-item key="2">
          数据生成
        </a-menu-item>
        <a-menu-item key="3"></a-menu-item>
        <a-menu-item key="4"></a-menu-item>
        <a-menu-item key="5"></a-menu-item>
        <a-menu-item key="6"></a-menu-item>
        <a-menu-item key="7"></a-menu-item>
        <a-menu-item key="8"></a-menu-item>
        <a-menu-item key="9"></a-menu-item>
        <a-menu-item key="10"></a-menu-item>
        <a-menu-item key="11"></a-menu-item>
        <a-menu-item key="12"></a-menu-item>
        <a-menu-item key="13"></a-menu-item>
        <a-menu-item key="14">
        </a-menu-item>
        <a-menu-item key="15">
        </a-menu-item>
        <a-menu-item key="16">
        </a-menu-item>
        <a-menu-item key="17">
        </a-menu-item>
        <a-menu-item key="18">
        </a-menu-item>
        <a-menu-item key="19">
        </a-menu-item>
        <a-menu-item key="20">
        </a-menu-item>
        <a-menu-item key="21">
        </a-menu-item>
        <a-menu-item key="22">
        </a-menu-item>
        <a-menu-item key="23">
          304088已登录
        </a-menu-item>
      </a-menu>
    </a-layout-header>
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <a-menu
          mode="inline"
          :default-selected-keys="['upload_file']"
          :default-open-keys="['analyse_API']"
          :style="{ height: '100%', borderRight: 0 }"
        >
          <a-menu-item key="upload_file">
            <a href="/Index"><a-icon type="upload" />上传接口文档</a>
          </a-menu-item>
          <a-sub-menu key="analyse_API">
            <span slot="title"><a-icon type="filter" />接口解析</span>
            <a-menu-item key="check_raw_data" >
              <a href="/ReadApi">查看接口</a>
            </a-menu-item>
            <a-menu-item key="check_result">
              <a href="/ReadResult">查看接口解析结果</a>
            </a-menu-item>
            <a-menu-item key="add_business_logic">
              添加业务数据
            </a-menu-item>
            <a-menu-item key="use_API">
              <a href="/UseApi">调用接口</a>
            </a-menu-item>
          </a-sub-menu>
        </a-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
          <a-breadcrumb-item>上传接口文档</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '515px' }"
        >
          <!--Content-->
          <a-upload-dragger
            name="file"
            :multiple="true"
            action="http://127.0.0.1:5000/upload"
            @change="handleChange"
          >
            <p class="ant-upload-drag-icon">
              <a-icon type="inbox" />
            </p>
            <p class="ant-upload-text">
              单击选择文件，或拖拽文件到此处
            </p>
            <p class="ant-upload-hint">
              支持单个或多个文件上传。严格禁止上传非法数据。
            </p>
          </a-upload-dragger>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      collapsed: false
    }
  },
  methods: {
    handleChange (info) {
      const status = info.file.status
      if (status !== 'uploading') {
        console.log(info.file, info.fileList)
        console.log(111111)
      }
      if (status === 'done') {
        this.$message.success(`${info.file.name} 上传成功`)
      } else if (status === 'error') {
        console.log(this.$message)
        this.$message.error(`${info.file.name} 上传失败`)
      }
    }
  }
}
</script>

<style scoped>
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
    color: white;
    line-height: 30px;
    font-size: 17px;
  }
</style>
