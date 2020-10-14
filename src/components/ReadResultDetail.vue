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
          :default-selected-keys="['check_raw_data']"
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
          <a-breadcrumb-item>{{this.$route.params.api}}</a-breadcrumb-item>
        </a-breadcrumb>
        <a-layout-content
          :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '515px' }"
        >
          <!--Content-->
          交易中文名：{{trade_name_cn}}<br>交易ID：{{trade_id}}<br>业务类型：{{business_category}}
          <a-table
            :columns="columns"
            :data-source="data"
            :loading="loading"
            @change="handleTableChange"
          >
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
    title: '字段码',
    dataIndex: 'field',
    width: '10%',
    scopedSlots: { customRender: 'field' }
  },
  {
    title: '字段中文名',
    dataIndex: 'field_cn',
    width: '10%'
  },
  {
    title: '类型',
    dataIndex: 'type',
    width: '8%'
  },
  {
    title: '长度',
    dataIndex: 'length',
    width: '7%'
  },
  {
    title: '列表值',
    dataIndex: 'options',
    width: '10%'
  },
  {
    title: '是否必输',
    dataIndex: 'required',
    width: '7%'
  },
  {
    title: '默认值',
    dataIndex: 'default',
    width: '8%'
  },
  {
    title: '固定值',
    dataIndex: 'fixed_value',
    width: '8%'
  },
  {
    title: '生成的枚举值',
    dataIndex: 'enumeration'
    // ellipsis: true
  }
]
export default {
  name: 'ReadResultDetail',
  data () {
    return {
      collapsed: false,
      trade_name_cn: '',
      business_category: '',
      trade_id: '',
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
      console.log('params:', params)
      this.loading = true
      reqwest({
        url: 'http://127.0.0.1:5000/get_api_result',
        method: 'get',
        data: {},
        type: 'json'
      }).then(data => {
        console.log(data)
        const pagination = { ...this.pagination }
        pagination.total = 200
        this.loading = false
        this.trade_name_cn = data.trade_name_cn
        this.trade_id = data.trade_id
        this.business_category = data.business_category
        this.data = data.results
        this.pagination = pagination
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
