# 通用表格页使用说明

## 增删改查api 对应 table页 的方法
### create -> createData
### delete -> deleteData
### update -> editData switchStatus
### read -> readData
> 字段转换将会以新的字段添加到响应数据中，字段名以 _ 开头命名以便区分
- 字段映射数组，映射方法
- 字段格式化方法

**注意：除了添加新的字段格式化值，不对响应数据做任何操作**

## read参数问题
### 初始参数
- initQuery

### searchForm
- 包含搜索区的表单
- 包含分页相关参数： page pageSize limt
- 其他区域搜索区域

### 合并参数
```
{...this.initQuery, ...this.searchForm}
```

### 重置
- 刷新路由的方式 或 重置 searchForm = {}

## table页 操作对应的方法
- 搜索 -> search
- 重置 -> reset
- 导出excel -> exportExcel

- 创建 -> create
- 创建确定 -> createData
- 编辑 -> edit
- 编辑确定 -> editData
- 启用|禁用 switchStatus

- 切换表格分页 selectTablePage
- 切换表格每页显示数据条数 selectTableDataSize

- 批量操作 -> batchHandle(例: 批量重置密码 -> batchResetPassword)


# 步骤
## read
0. 分页校对字段：page pageSize

1. read api -> readData（初始化：tableDataTotal）

2. 搜索表单（:model="searchForm"）
3. 分页

## create


##