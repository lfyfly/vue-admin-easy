<template>
  <div class="table-page">
    <!-- 操作栏 -->
    <div class="options">
      <el-form ref="searchFormRef" :model="searchForm" :inline="true" size="small">
        <el-form-item label="姓名">
          <el-input v-model="searchForm.name" />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="search">搜索</el-button>
          <el-button type="primary" @click="reset" plain>重置</el-button>
          <el-button type="primary" @click="create">新增</el-button>
          <!-- <el-button type="primary" @click="batchHandle">批量操作</el-button> -->
          <el-button type="primary" @click="exportExcel">导出excel</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%" @selection-change="selectionChange">
      <el-table-column type="selection" width="55">
      </el-table-column>
      <el-table-column prop="id" label="ID" width="100" />
      <el-table-column prop="name" label="姓名" width="120" />
      <el-table-column prop="phone" label="手机" />
      <el-table-column prop="email" label="邮箱" />
      <el-table-column prop="address" label="地址" />
      <el-table-column prop="status" label="状态" width="120">
        <template slot-scope="scope">
          <el-tag size="small" :type="scope.row.status===0? 'danger':'success'">{{scope.row._statusText}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="160">
        <template slot-scope="scope">
          <el-button type="text" size="small" @click="edit(scope.row)">
            编辑
          </el-button>
          <el-button type="text" size="small" @click="switchStatus(scope.row)">
            {{scope.row._statusBtnText}}
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
        <el-button v-if="dialogForm.option==='create'" type="primary" @click="createData">{{dialogForm.confirmBtnText}}</el-button>
        <el-button v-if="dialogForm.option==='edit'" type="primary" @click="editData">{{dialogForm.confirmBtnText}}</el-button>
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
      initialQuery: { page: 1, pageSize: 20 }, //  初始readData query
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
    this.readData()
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
    readData () {
      // 1.获取query参数与默认参数进行合并
      this.searchForm = { ...this.initialQuery, ...this.searchForm }
      // 2.发送请求
      API.table.read(this.searchForm).then(res => {
        console.log(res)
        this.tableData = res.data.data
        this.tableDataTotal = res.data.total
      })
    },
    search () {
      this.readData()
    },
    reset () {
      this.searchForm = {}
      this.readData()
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
      this.dialogForm.form = this.filterEditableField(['id', 'name', 'email', 'phone', 'address', 'status'], row)
    },
    createData () {
      console.log('createData ', this.dialogForm.form)
      this.$refs.dialogFormRef.validate((valid) => {
        if (valid) {
          alert('表单验证成功：createData!')
          // API.table.create(this.dialogForm.form).then(res => {
          //   this.readData()
          //   this.$message.success(res.data.message)
          // })
        } else {
          console.log('表单验证失败：createData!', this.dialogForm.form)
        }
      })
    },
    editData () {
      console.log('editData ', this.dialogForm.form)
      this.$refs.dialogFormRef.validate((valid) => {
        if (valid) {
          alert('表单验证成功：editData!')
          // API.table.update({ id: row.id, ...this.dialogForm.form }).then(res => {
          //   this.readData()
          //   this.$message.success(res.data.message)
          // })
        } else {
          console.log('表单验证失败：editData!', this.dialogForm.form)
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
      this.$refs.dialogFormRef.clearValidate()
    },
    selectTableDataSize (pageSize) {
      this.searchForm.pageSize = pageSize
      this.searchForm.page = 1
      this.readData()
    },
    selectTablePage (page) {
      this.searchForm.page = page
      this.readData()
    },
    selectionChange (val) {
      this.multipleSelection = val
    },
    exportExcel () {
      if (this.multipleSelection.length === 0) {
        this.$message.warning('你没有选中任何表格数据！')
        return
      }
      let sheetData = this.tableData
      let option = {
        fileName: '导出的excel文件名',
        datas: [
          {
            sheetData,
            sheetName: 'sheet',
            sheetHeader: ['ID', '姓名', '手机', '邮箱', '地址', '状态'],
            sheetFilter: ['id', 'name', 'phone', 'email', 'address', '_statusText'],
            // number 屏幕宽度为100 20即为 1/5屏幕大小
            columnWidths: [4, 6, 8, 12, 16, 6]
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
