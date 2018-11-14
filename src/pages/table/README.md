# 通用表格页使用说明

## 增删改查api 对应 table 组件的方法
### create -> createData
### delete -> deleteData
### update -> editData switchStatus
### read -> readData
> 字段转换将会以新的字段添加到响应数据中，字段名以 _ 开头命名以便区分
- 字段映射数组，映射方法
- 字段格式化方法

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