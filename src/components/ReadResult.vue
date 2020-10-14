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
          :default-selected-keys="['check_result']"
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
          <a-breadcrumb-item>接口解析</a-breadcrumb-item>
          <a-breadcrumb-item>查看接口解析结果</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '515px' }"
        >
          <!--Content-->
          <a-table
            :columns="columns"
            :data-source="data"
            :loading="loading"
            @change="handleTableChange"
          >
            <template slot="operation" slot-scope="text">
              <a @click="() => check(text)">查看解析生成枚举值</a>
            </template>
          </a-table>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import reqwest from 'reqwest'
const columns = [
  {
    title: '接口名称',
    dataIndex: 'api_name',
    sorter: true,
    width: '15%',
    scopedSlots: { customRender: 'api_name' }
  },
  {
    title: '接口中文名',
    dataIndex: 'api_name_cn',
    width: '15%',
    scopedSlots: { customRender: 'api_name_cn' }
  },
  {
    title: '所属系统',
    dataIndex: 'api_sys',
    width: '10%'
  },
  {
    title: '包含字段',
    dataIndex: 'fields',
    ellipsis: true
  },
  {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' }
  }
]
export default {
  name: 'ReadResult',
  data () {
    return {
      collapsed: false,
      data: [],
      pagination: {},
      loading: false,
      columns
    }
  },
  mounted () {
    this.fetch()
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      console.log(pagination)
      const pager = { ...this.pagination }
      pager.current = pagination.current
      this.pagination = pager
      this.fetch({
        results: pagination.pageSize,
        page: pagination.current,
        sortField: sorter.field,
        sortOrder: sorter.order,
        ...filters
      })
    },
    fetch (params = {}) {
      this.loading = true
      reqwest({
        url: 'http://127.0.0.1:5000/get_api_result_all',
        method: 'get',
        data: {},
        type: 'json'
      }).then(data => {
        const pagination = { ...this.pagination }
        pagination.total = 200
        this.loading = false
        this.data = data.results
        this.pagination = pagination
        console.log(data)
      })
    },
    check (text) {
      console.log(1111111)
      console.log(text)
      this.$router.push({
        name: 'ReadResultDetail',
        params: { api: '3266' }
      })
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
