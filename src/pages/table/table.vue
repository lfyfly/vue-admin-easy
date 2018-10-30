<template>
  <div class="table-page">
    <!-- 操作栏 -->
    <div class="options">
      <el-form ref="form" :model="searchForm" :inline="true" size="small">
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="reset" plain>重置</el-button>
          <el-button type="primary" @click="create">新增</el-button>
          <!-- <el-button type="primary" @click="batchHandle">批量操作</el-button> -->
          <el-button type="primary" v-if="staticConfig.exportExcel" @click="exportExcel">导出excel</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" @selection-change="selectionChange">
      <el-table-column v-if="staticConfig.selectionShow&&staticConfig.selectionShow" type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="phone" label="手机" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="status" label="状态" width="120">
        <template slot-scope="scope">
          <el-tag size="small" :type="scope.row.status===0? 'danger':'success'">{{scope.row.statusText}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">
            编辑
          </el-button>
          <el-button type="text" size="small" @click="switchStatus(scope.row)">
            {{scope.row.statusBtnText}}
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
    <div v-if="tableDataTotal" class="pagination-container" style="text-align:right;">
      <el-pagination layout="total, sizes, prev, pager, next" :page-sizes="[20, 50, 100]" @size-change="selectTableDataSize" :current-page="parseInt(searchForm.page)" :total="tableDataTotal" :page-size="parseInt(searchForm.pageSize)" @current-change="selectTablePage" />
    </div>
    <!-- 弹窗表单（编辑，新增共用） -->
    <el-dialog :title="dialogForm.title" :visible.sync="dialogForm.show" width="500px">
      <el-form ref="dialogForm" :model="dialogForm.form" size="small" label-width="100px" :rules="dialogFormRules">
        <el-form-item label="姓名" prop="name">
          <el-input v-model="dialogForm.form.name" />
        </el-form-item>
        <el-form-item label="手机" prop="phone">
          <el-input v-model="dialogForm.form.phone" />
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="dialogForm.form.email" />
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input v-model="dialogForm.form.address" />
        </el-form-item>
        <el-form-item label="状态" prop="status">
          <el-select v-model="dialogForm.form.status" placeholder="请选择">
            <el-option v-for="item in statusSelectOptions" :key="item.value" :label="item.text" :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="closeDialogForm">取 消</el-button>
        <el-button v-if="dialogForm.option==='create'" type="primary" @click="createSubmit">{{dialogForm.confirmBtnText}}</el-button>
        <el-button v-if="dialogForm.option==='edit'" type="primary" @click="editSubmit">{{dialogForm.confirmBtnText}}</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import API from '@/API'

export default {
  name: 'table-page',
  data () {
    return {
      staticConfig: {
        editSubmitFields: ['id', 'name', 'email', 'phone', 'address', 'status'], //  [*必须] 编辑时要上传的字段
        initialQuery: { page: 1, pageSize: 20 }, //  初始getData query
        selectionShow: true, // 表格数据多选
        // 当exportExcelFields对象存在说明启用导出excel功能
        // 当selectionShow为true导出选择数据，selectionShow为false时导出当前表格数据
        exportExcel: {
          fileName: '导出excel',
          sheetHeader: ['ID', '姓名', '手机', '邮箱', '地址', '状态'], // 表头
          sheetFilter: ['id', 'name', 'phone', 'email', 'address', 'statusText'] // 字段
        }
      }, // 静态配置
      searchForm: {},
      tableData: null,
      tableDataTotal: NaN,
      dialogForm: {
        title: '创建',
        option: 'create', // dialog表单编辑状态 create edit
        show: false,
        confirmBtnText: '确 定',
        form: {}
      },
      statusSelectOptions: API.table.STATUS_MAP,
      dialogFormRules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' }
        ]
      },
      multipleSelection: []
    }
  },
  computed: {
    multipleSelectionIds () {
      return this.multipleSelection.map(v => v.id)
    }
  },
  created () {
    this.getData()
  },
  methods: {
    filterEditableField (fields, obj) {
      const _obj = JSON.parse(JSON.stringify(obj))
      let newObj = {}
      fields.forEach(field => {
        newObj[field] = _obj[field]
      })
      return newObj
    },
    getData () {
      // 1.获取query参数与默认参数进行合并
      this.searchForm = { ...(this.staticConfig.initialQuery || {}), ...this.$route.query }
      // 2.发送请求
      API.table.read(this.searchForm).then(res => {
        console.log(res)
        this.tableData = res.data.data
        this.tableDataTotal = res.data.total
      })
    },
    reload () {
      this.$router.push({ name: this.$router.name, query: this.searchForm })
    },
    search () {
      this.reload()
    },
    reset () {
      this.searchForm = this.staticConfig.initialQuery || {}
      this.reload()
    },
    create () {
      this.dialogForm.title = '创建'
      this.dialogForm.option = 'create'
      this.dialogForm.show = true
      this.dialogForm.confirmBtnText = '创 建'
      this.dialogForm.form = {}
    },
    edit (row) {
      this.dialogForm.title = '编辑'
      this.dialogForm.option = 'edit'
      this.dialogForm.show = true
      this.dialogForm.confirmBtnText = '保 存'
      // 对可编辑字段进行筛选
      this.dialogForm.form = this.filterEditableField(this.staticConfig.editSubmitFields, row)
    },
    createSubmit () {
      console.log('createSubmit ', this.dialogForm.form)
      this.$refs.dialogForm.validate((valid) => {
        if (valid) {
          alert('表单验证成功：createSubmit!')
          // API.table.create(this.dialogForm.form).then(res => {
          //   this.getData()
          //   this.$message.success(res.data.message)
          // })
        } else {
          console.log('表单验证失败：createSubmit!', this.dialogForm.form)
        }
      })
    },
    editSubmit () {
      console.log('editSubmit ', this.dialogForm.form)
      this.$refs.dialogForm.validate((valid) => {
        if (valid) {
          alert('表单验证成功：editSubmit!')
          // API.table.update({ id: row.id, ...this.dialogForm.form }).then(res => {
          //   this.getData()
          //   this.$message.success(res.data.message)
          // })
        } else {
          console.log('表单验证失败：editSubmit!', this.dialogForm.form)
        }
      })
    },
    switchStatus (row) {
      const status = row.status === 0 ? 1 : 0
      console.log('switchStatus：', 'newStatus：' + status, '，oldStatus：' + row.status)
      // API.table.update({ id: row.id ,status}).then(res => {
      //   this.$message.success(res.data.message)
      // })
    },
    closeDialogForm () {
      this.dialogForm.show = false
      this.$refs.dialogForm.clearValidate()
    },
    selectTableDataSize (pageSize) {
      this.searchForm.pageSize = pageSize
      this.searchForm.page = 1
      this.reload()
    },
    selectTablePage (page) {
      this.searchForm.page = page
      this.reload()
    },
    selectionChange (val) {
      this.multipleSelection = val
    },
    exportExcel () {
      if (this.staticConfig.selectionShow && this.multipleSelection.length === 0) {
        this.$message.warning('你没有选中任何表格数据！')
        return
      }
      let sheetData = this.staticConfig.selectionShow ? this.multipleSelection : this.tableData
      let { fileName, sheetHeader, sheetFilter } = this.staticConfig.exportExcel
      let option = {
        fileName,
        datas: [
          {
            sheetData,
            sheetName: 'sheet',
            sheetHeader,
            sheetFilter
          }
        ]
      }
      import('js-export-excel').then(({ default: ExportJsonExcel }) => {
        var toExcel = new ExportJsonExcel(option) // new
        toExcel.saveExcel() // 保存
      })
    },
    batchHandle () {
      if (this.multipleSelection.length === 0) {
        this.$message.warning('你没有选中任何表格数据！')
        return
      }
      alert(this.multipleSelectionIds)
    }
  }
}
</script>

<style lang='scss' scoped>
.table-page {
}
</style>
